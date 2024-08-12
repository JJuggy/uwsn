import React from "react";
import ToolsUsed from "./tools-used";
import Services from "./services";
import HeaderSection from "./header-section";

function HomePage() {
  return (
    <div>
      <HeaderSection />
      <Services />
      <ToolsUsed />
    </div>
  );
}

export default HomePage;
