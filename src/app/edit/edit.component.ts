import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ColDef } from 'ag-grid-community';
import { RemoveComponent } from '../remove/remove.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  

  colDefs: ColDef[] = [
    { field: 'action',
    headerName: "Action 3",
    cellRendererFramework : RemoveComponent,
    cellRendererParams: { context: this },},
    { field: 'make',},
    { field: 'model'},
    { field: 'price' }
  ];

  public defaultColDef: ColDef = {
    
  };
  gridApi: any;
  @Input() editData: any;
  rowData: any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.rowData = this.editData;
  }
  close(){
    this.activeModal.close();
  }
  submit(){
    console.log("Submit works");
    this.activeModal.dismiss();
  }
}
