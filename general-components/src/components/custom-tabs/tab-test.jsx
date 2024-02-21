import Tabs from "./tabs.jsx";
import "./tabs.css";

function RandomComp() {
  return <h1>Some Random Content</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComp />,
    },
  ];

  function handleChange(currentTabInd) {
    console.log(currentTabInd);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
