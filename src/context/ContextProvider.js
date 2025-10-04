import { postData } from "../services/FetchNodeAdminServices";
import MainContext from "./maincontext";

const ContextProvider = ({ children }) => {

    //  here we write the function where accessible from anywhere
    const login = async (data) => {
        const result = await postData('login', data);
        console.log(result.status)
        if (result.status !== 400) {
            localStorage.setItem("token", result.token)
        }
        return result.message;
    }

    const getJournalDetail = async (id) => {
        try {
            const data = await postData(id);
            return data;
        }
        catch (err) {
            console.log(err)

        }
    }
    return (
        <MainContext.Provider value={{ login, getJournalDetail }}>
            {children}
        </MainContext.Provider>
    )
}

export default ContextProvider
