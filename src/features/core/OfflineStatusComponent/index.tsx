import useEvent from "@react-hook/event";
import React, { useState } from "react";
import OfflinePage from "./OfflinePage";

const getWindow = (): Window | null =>
  typeof window === "undefined" ? null : window;

const OfflineStatusComponent: React.FC = ({ children }) => {
  const [offlineStatus, setOfflineStatus] = useState<boolean>(false);

  useEvent(getWindow(), "offline", () => {
    setOfflineStatus(true);
  });
  useEvent(getWindow(), "online", () => {
    setOfflineStatus(false);
  });

  return (
    <>
      {offlineStatus && <OfflinePage />}
      {!offlineStatus && children}
    </>
  );
};

export default OfflineStatusComponent;
