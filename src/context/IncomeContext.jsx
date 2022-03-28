import React, { useState, useContext } from "react";

export const MyIncomeContext = React.createContext();
export const IncomeUpdateContext = React.createContext();

export const useIncome = () => {
  return useContext(MyIncomeContext);
};

export const useUpdateIncome = () => {
  return useContext(IncomeUpdateContext);
};

export default function IncomeContext({ children }) {
  const [dataForm, setDataForm] = useState({
    coinId: "",
    currency: "",
    from: "",
    amount: "",
    isFilled: false
  });

  return (
    <MyIncomeContext.Provider value={dataForm}>
      <IncomeUpdateContext.Provider value={setDataForm}>
        {children}
      </IncomeUpdateContext.Provider>
    </MyIncomeContext.Provider>
  );
}
