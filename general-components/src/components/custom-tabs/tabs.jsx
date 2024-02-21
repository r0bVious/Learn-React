import { useState } from "react";

export default function CustomTabs({ tabsContent, onChange }) {
  const [currentTabInd, setCurrentTabInd] = useState(0);

  function handleOnClick(inIndex) {
    setCurrentTabInd(inIndex);
    onChange(inIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currentTabInd === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red" }}>
        {tabsContent[currentTabInd] && tabsContent[currentTabInd].content}
      </div>
    </div>
  );
}
