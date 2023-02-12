import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  @Input() errorMessage : any = "Error";
  ngOnInit() {
  }

  close(){
    this.activeModal.close()
  }

}
