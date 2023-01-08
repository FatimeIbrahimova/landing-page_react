import { createContext, useState } from "react";

export const MainContext = createContext(null)

function ContextProvider({ children }) {
    const [data, setData] = useState({ name: "", surname: "", message: "" })
    const values = {
        data,
        setData
    }

    return (
        <MainContext.Provider value={values}>
            {children}
        </MainContext.Provider >
    )
}
export default ContextProvider;