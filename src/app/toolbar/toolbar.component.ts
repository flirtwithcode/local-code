import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgGridService } from '../ag-grid.service';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private modalService: NgbModal, private service : AgGridService) { }

  ngOnInit() {
  }

  

  action(input: any){

    this.service.setAction(input);
  }

}
