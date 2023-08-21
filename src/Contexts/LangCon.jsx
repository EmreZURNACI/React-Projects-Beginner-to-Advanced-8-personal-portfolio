import { createContext, useContext, useState } from "react";
const LangContext = createContext();
const LangContextProvider = ({ children }) => {
    const [lang, setLang] = useState("tr-TR");
    const data = {
        lang, setLang
    }
    return (
        <LangContext.Provider value={data}>
            {
                children
            }
        </LangContext.Provider>
    )
}
export default LangContextProvider;
export const useLangContext = () => useContext(LangContext);