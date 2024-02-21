import { useState, useEffect } from "react";

export default function useFetch(inUrl, inOptions = {}) {
  //3 states are seemingly standard for this kind of thing
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setPending(true);

    try {
      const response = await fetch(inUrl, { ...inOptions });
      if (!response.ok) throw new Error(response.statusText);

      const receivedData = await response.json();
      setData(receivedData);
      setError(null);
      setPending(false);
    } catch (error) {
      setError(`Error! ${error}`);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [inUrl]);

  return { data, error, pending };
}
