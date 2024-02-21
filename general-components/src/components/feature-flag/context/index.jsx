import { createContext, useState, useEffect } from "react";
import featureFlagsDataServiceCall from "../data";
export const FeatureFlagsContext = createContext(null);
export default function FeatureFlagsGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState([]);

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      //original service call
      const response = await featureFlagsDataServiceCall();
      console.log(response);
      setEnabledFlags(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  if (loading) {
    return <div>Please Wait! Loading...</div>;
  }

  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
