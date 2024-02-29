import { createContext, useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { onValue,ref } from "firebase/database";
import { useContext } from "react";

const DataContext = createContext({
    loading:false,
    getDataByName:()=>{},
});

const DataProvider = ({ children }) => {
    const [dbData,setDbData] = useState(null)
    const [loading,setLoading] = useState(false)

    const getData = async () => {
        setLoading(true)
      onValue(ref(db), (snapshot) => {
        const data = snapshot.val();
        if (data != null) {
          setDbData(data);
          setLoading(false)
        } else {
          console.log("No data ");
          setLoading(false)
        }
      });
    }
    const getDataByName = (keyname)=>{
        if(!dbData || !dbData?.[keyname]) return null;
        return dbData?.[keyname]
    }
    useEffect(()=>{getData()},[])
    return (
        <DataContext.Provider value={{getDataByName,loading}}>
        {children}
        </DataContext.Provider>
    );
}

export const useDbDtata  = ()=> useContext(DataContext)
export default DataProvider