import React from "react";
import { HeaderSection } from "./header-section";
import { Services } from "./services";
import ToolsUsed from "./tools-used";

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
