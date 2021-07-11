import React from "react";
import OfflineStatusComponent from "./core/OfflineStatusComponent";
import WithTheme from "./core/theme/WithTheme";
import HomePage from "./HomePage";

const AppContent: React.FC =()=> {
  return (
    <WithTheme>
      <OfflineStatusComponent>
        <HomePage />
      </OfflineStatusComponent>
    </WithTheme>
  );
}

export default AppContent;
