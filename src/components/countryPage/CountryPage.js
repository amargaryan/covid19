import { useParams } from "react-router"

const CountryPage = ()=>{
    const {country} = useParams()
    return (<div>{country}</div>)
}
export default CountryPage