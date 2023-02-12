import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs/internal/Observable';
import { AgGridService } from '../ag-grid.service';
import { EditComponent } from '../edit/edit.component';
import { ErrorModalComponent } from '../error-modal/error-modal.component';
import { RemoveComponent } from '../remove/remove.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  public rowData$: any;

  colDefs: ColDef[] = [
    { field: 'make',headerCheckboxSelection: true,checkboxSelection:true},
    { field: 'model'},
    { field: 'price', minWidth: 150}
  ];

  public defaultColDef: ColDef = {
    
  };
  gridApi: any;

  constructor(private service: AgGridService,private modalService: NgbModal) {}

  ngOnInit() {
    //this.rowData$ = this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
    this.service.getRowData("hi").subscribe((res : any) => {
      this.rowData$ = res;
    })

    this.service.getAction().subscribe(res =>{
      if(res == 'edit'){
        this.editModal();
      } else if(res = "refresh"){
        this.gridRefresh();
      }
    })
  }

  onCellClicked(event: CellClickedEvent){
    console.log(event);
  }

  gridRefresh(){
    this.rowData$ = [];
    this.service.getRowData("hi").subscribe((res : any) => {
      this.rowData$ = res;
    })
  }

  //@ViewChild(AgGridAngular) agGrid!: AgGridAngular

  clearSelection(){
    //this.agGrid.api.deselectAll();
  }
  onGridReady(params:any){
    this.gridApi = params.api;
  }

  editModal(){

   if(this.gridApi.getSelectedRows().length > 0){ 
    const modalRef = this.modalService.open(EditComponent);
       modalRef.componentInstance.editData = this.gridApi.getSelectedRows();
       
      }else {
        
          const modalRef = this.modalService.open(ErrorModalComponent);
          modalRef.componentInstance.errorMessage = "Please Select atlease one Row";
        
      }
  }

}
