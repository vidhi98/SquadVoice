interface PlansData {
  planName: string;
  leadsPM: string;
  pricePerLead: string;
  platformPricePM: string;
  finalPricePM: string;
  popular: boolean;
}

interface PlanVoiceData {
  pricePoint: string;
  plans: PlansData[];
}

const usePriceData = (): {
  PricePoints: string[];
  PlanVoices: PlanVoiceData[];
} => {
  const PricePoints = [
    "$100K - $200K",
    "$200K - $300K",
    "$300K - $400K",
    "$400K - $500K",
    "$500K+",
  ];
  const PlanVoices = [
    {
      pricePoint: "$100K - $200K",
      plans: [
        {
          planName: "Qualified 20",
          leadsPM: "20",
          pricePerLead: "$69",
          platformPricePM: "$299",
          finalPricePM: "$1,679",
          popular: false,
        },
        {
          planName: "Qualified 40",
          leadsPM: "40",
          pricePerLead: "$67",
          platformPricePM: "$599",
          finalPricePM: "$3,279",
          popular: true,
        },
        {
          planName: "Qualified 80",
          leadsPM: "80",
          pricePerLead: "$63",
          platformPricePM: "$799",
          finalPricePM: "$5,839",
          popular: false,
        },
      ],
    },
    {
      pricePoint: "$200K - $300K",
      plans: [
        {
          planName: "Qualified 20",
          leadsPM: "20",
          pricePerLead: "$79",
          platformPricePM: "$299",
          finalPricePM: "$1,879",
          popular: true,
        },
        {
          planName: "Qualified 40",
          leadsPM: "40",
          pricePerLead: "$77",
          platformPricePM: "$599",
          finalPricePM: "$3,679",
          popular: false,
        },
        {
          planName: "Qualified 80",
          leadsPM: "80",
          pricePerLead: "$72",
          platformPricePM: "$799",
          finalPricePM: "$6,559",
          popular: false,
        },
      ],
    },
    {
      pricePoint: "$300K - $400K",
      plans: [
        {
          planName: "Qualified 20",
          leadsPM: "20",
          pricePerLead: "$99",
          platformPricePM: "$299",
          finalPricePM: "$2,279",
          popular: false,
        },
        {
          planName: "Qualified 40",
          leadsPM: "40",
          pricePerLead: "$96",
          platformPricePM: "$599",
          finalPricePM: "$4,439",
          popular: true,
        },
        {
          planName: "Qualified 80",
          leadsPM: "80",
          pricePerLead: "$90",
          platformPricePM: "$799",
          finalPricePM: "$7,999",
          popular: false,
        },
      ],
    },
    {
      pricePoint: "$400K - $500K",
      plans: [
        {
          planName: "Qualified 20",
          leadsPM: "20",
          pricePerLead: "$109",
          platformPricePM: "$299",
          finalPricePM: "$2,479",
          popular: false,
        },
        {
          planName: "Qualified 40",
          leadsPM: "40",
          pricePerLead: "$106",
          platformPricePM: "$599",
          finalPricePM: "$4,839",
          popular: false,
        },
        {
          planName: "Qualified 80",
          leadsPM: "80",
          pricePerLead: "$99",
          platformPricePM: "$799",
          finalPricePM: "$8,719",
          popular: true,
        },
      ],
    },
    {
      pricePoint: "$500K+",
      plans: [
        {
          planName: "Qualified 20",
          leadsPM: "20",
          pricePerLead: "$129",
          platformPricePM: "$299",
          finalPricePM: "$2,879",
          popular: false,
        },
        {
          planName: "Qualified 40",
          leadsPM: "40",
          pricePerLead: "$125",
          platformPricePM: "$599",
          finalPricePM: "$5,599",
          popular: false,
        },
        {
          planName: "Qualified 80",
          leadsPM: "80",
          pricePerLead: "$117",
          platformPricePM: "$799",
          finalPricePM: "$10,159",
          popular: true,
        },
      ],
    },
  ];

  return { PricePoints, PlanVoices };
};

export { usePriceData };

export type { PlansData, PlanVoiceData };
