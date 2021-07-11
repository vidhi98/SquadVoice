import React from "react";
import TabsComp from "../../Components/TabsComp";
import { usePriceData } from "../../data/usePriceData";

const ScrollableTabsButtonForce: React.FC = () => {
  const { PricePoints, PlanVoices } = usePriceData();
  return <TabsComp tabList={PricePoints} tabContent={PlanVoices} />;
};

export default ScrollableTabsButtonForce;
