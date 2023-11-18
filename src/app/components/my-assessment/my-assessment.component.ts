import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridOptions, GridReadyEvent, ICellRendererParams, IRowNode } from 'ag-grid-community';
import { Observable, of } from 'rxjs';
import { StatusRendererComponent } from '../helpers/status-renderer/status-renderer.component';
import { Color, Status } from 'src/app/app.constants';
import { Assessment } from 'src/app/model/assessment';

@Component({
  selector: 'app-my-assessment',
  templateUrl: './my-assessment.component.html',
  styleUrls: ['./my-assessment.component.scss']
})
export class MyAssessmentComponent {
  statusFilter = [
    { value: Status.open, selected: false, color: Color.accent },
    { value: Status.inProgress, selected: false, color: Color.warn },
    { value: Status.completed, selected: false, color: Color.primary },
  ];

  private gridApi!: GridApi<Assessment>;
  columnDefs: ColDef[] = [
    { field: 'college', headerName: 'College' },
    { field: 'app', headerName: 'App' },
    { field: 'date', headerName: 'Date' },
    { field: 'status', headerName: 'Status', cellRenderer: StatusRendererComponent },
    { field: 'saf', headerName: 'SAF', cellRenderer: (params: ICellRendererParams) => `<a href=${params.value}>SAF</a>` },
    { field: 'confidential', headerName: 'Confidential', cellRenderer: (params: ICellRendererParams) => `<a href=${params.value}>Confidential</a>` },
    { field: 'claims', headerName: 'Claims', cellRenderer: (params: ICellRendererParams) => `<a href=${params.value}>Travel Details</a>` },
  ];
  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  gridOptions: GridOptions = {
    suppressCellFocus: true,
  }
  rowData$!: Observable<Assessment[]>;

  constructor(private http: HttpClient) { }

  onGridReady = (params: GridReadyEvent<Assessment>) => {
    this.gridApi = params.api;
    this.http.get<Assessment[]>('./assets/test/my-assessments.json').subscribe(data => {
      this.rowData$ = of(data);
    });
    this.gridApi.sizeColumnsToFit();
  }

  onFilterChanged = () => {
    this.gridApi?.onFilterChanged();
  }

  isExternalFilterPresent = (): boolean => {
    return this.statusFilter.some(filter => filter.selected);
  }

  doesExternalFilterPass = (node: IRowNode<Assessment>): boolean => {
    return this.statusFilter.some(filter => filter.selected && node.data?.status === filter.value);
  }

  exportData = () => {
    this.gridApi?.exportDataAsCsv();
  }
}
