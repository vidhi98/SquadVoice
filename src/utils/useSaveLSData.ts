const useSaveLSData = () => {
  const setLSData = (value: number) => {
    const ls = window?.localStorage;

    if (!ls) return;

    ls.setItem("saved_plan", JSON.stringify(value));
  };

  const getLSData = (): string | null => {
    const ls = window?.localStorage;

    if (!ls) return null;

    const data = ls.getItem("saved_plan") || null;

    return data;
  };
  return { setLSData, getLSData };
};

export default useSaveLSData;
