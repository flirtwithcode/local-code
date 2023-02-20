import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ColDef, GridApi, ICellEditorComp } from 'ag-grid-community';
import { RemoveComponent } from '../remove/remove.component';
declare var NumericCellEditor: ICellEditorComp;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {



  colDefs: ColDef[] | any = [
    {
      field: 'action',
      headerName: "Action 3",
      cellRendererFramework: RemoveComponent,
      cellRendererParams: { context: this },
    },
    {
      field: 'make', editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ['Porsche', 'Toyota', 'Ford', 'AAA', 'BBB', 'CCC'],
      },
    },
    { field: 'model' },
    {
      field: 'price',
      editable: true
    }
  ];

  public defaultColDef: ColDef = {

  };
  gridApi: GridApi;
  @Input() editData: any;
  rowData: any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.rowData = this.editData;
  }
  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  close() {
    this.activeModal.close();
  }
  removeRow(row: any) {

    console.log("row --in edit", row);
    var selectedData = [];
    selectedData.push(row);
    this.gridApi.updateRowData({ remove: selectedData });
  }
  submit() {
    console.log("Submit works", this.rowData);
    //this.activeModal.dismiss();
  }
  remove() {
    var selectedData = this.gridApi.getSelectedRows();
    console.log(selectedData);
    this.gridApi.updateRowData({ remove: selectedData });

  }
}
