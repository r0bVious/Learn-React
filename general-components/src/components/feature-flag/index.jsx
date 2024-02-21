import Accordion from "../accordion";
import LightDarkMode from "../light-dark-mode";
import NestedNavigation from "../nested-navigation";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";
import { FeatureFlagsContext } from "./context";
import { useContext } from "react";
import menus from "../nested-navigation/data";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);
  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordion",
      component: <Accordion />,
    },
    {
      key: "showTreeView",
      component: <NestedNavigation menus={menus} />,
    },
  ];

  function checkEnabledFlags(inKeys) {
    return enabledFlags[inKeys];
  }

  if (loading) return <h1>Loading! Please wait...</h1>;
  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
