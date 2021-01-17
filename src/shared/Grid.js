import React from 'react';
import { AgGridReact } from 'ag-grid-react';
export default function Grid({ options, ...gridProperties }) {
    const gridOptions = {
        // onFirstDataRendered: () => {
        //     const allColumnIds = [];
        //     gridOptions.columnApi.getAllColumns().forEach(function(column) {
        //         allColumnIds.push(column.colId);
        //     });
        //     gridOptions.columnApi.autoSizeColumns(allColumnIds);
        //     gridOptions.api.sizeColumnsToFit();
        // },
        getRowHeight: function(params) {
            return 50;
        },
    };
    options.columnDefs.forEach((item) => {
        item.resizable = true;
        item.cellStyle = { 'line-height': '50px' };
    });
    return (
        <AgGridReact
            gridOptions={gridOptions}
            columnDefs={options.columnDefs}
            rowData={options.data}
            onGridReady={options.onGridReady}
            {...gridProperties}
        />
    );
}