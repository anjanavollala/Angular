import { Component } from '@angular/core';
import { ColDef, GridApi, GridOptions, GridReadyEvent, ICellRendererParams, IRowNode } from 'ag-grid-community';
import { Assessment } from 'src/app/model/assessment';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent {
  private gridApi!: GridApi<Assessment>;
  columnDefs: ColDef[] = [
    { field: 'fromLocation', headerName: 'From Location' },
    { field: 'destination', headerName: 'Destination' },
    { field: 'travelDate', headerName: 'Travel Date' },
    { field: 'amount', headerName: 'Amount' },
  ];
  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  gridOptions: GridOptions = {
    suppressCellFocus: true,
  }
  rowData: Assessment[] = [];

  constructor() { }

  onGridReady = (params: GridReadyEvent<Assessment>) => {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }
}
