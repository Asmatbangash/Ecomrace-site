import { createContext } from "react";


export const ContextProductApi = createContext({
    apiData: []
})


function ProductDataApi({children}){
    const [apiData, setApiData] = useState([])
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(data=>setApiData(data)
                )
            },[])
            console.log(apiData)
    return(
         <ContextProductApi.Provider value={{apiData}}>
            {children}
         </ContextProductApi.Provider>
    )
}

export default ProductDataApi;