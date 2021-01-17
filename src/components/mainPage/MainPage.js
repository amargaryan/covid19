import { useEffect, useState } from "react"
import Charts from "./Charts"
import Table from "./Table"

const MainPage = ()=>{
const [backData, setBackData] = useState([])
    useEffect(() => {
        fetch('https://api.covid19api.com/summary').then(response=>response.json()).then(result=>{
            setBackData(result.Countries)
        })
    }, [])

    return(
        <div>
            <Table data={backData}></Table>
            <Charts data={backData}></Charts>
        </div>
    )
}
export default MainPage