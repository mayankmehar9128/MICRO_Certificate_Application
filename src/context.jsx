import { createContext } from "react";

export const MicroContext = createContext();


export const MicroProvider = ({ children }) => {
    const CompanyId = localStorage.getItem('LogedInFrenchiseCenterCode');

    return<MicroContext.Provider values={CompanyId}>{children}</MicroContext.Provider>
}