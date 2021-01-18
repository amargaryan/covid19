import ActivePieChart from "../../shared/ActivePieChart"

const Charts = ({ data }) => {
    
     return (<div style={{height:400,width:600}}>
          <ActivePieChart
               data={data}
          />
        
          </div>)
}
export default Charts