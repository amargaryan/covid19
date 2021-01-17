import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useEffect, useState } from "react";
import Grid from "../../shared/Grid";
import { Link } from "react-router-dom";

const Table = ({ data }) => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const onGridReady = (params)=>{
    setGridApi(params.api)
  }   
    const columnDefs = [
      // uses the default column properties
      { headerName: "Country", field: "Country", cellRenderer:(params)=>{
        const a = document.createElement('a');
        const href = `/${params.value}`
        a.setAttribute('href',href)
        a.textContent = params.value
        return a
    }    
          
      } ,
      { headerName: "New Confirmed", field: "NewConfirmed" },
      { headerName: "Total Confirmed", field: "TotalConfirmed" },
    ]
  
    useEffect(()=>{
        if(gridApi){
            gridApi.setRowData(data)
        }
        
    }, [gridApi, data])

  const options = {
      onGridReady,
      columnDefs
  }

 

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <Grid options={options}>
      </Grid>
    </div>
  );
};
export default Table;
