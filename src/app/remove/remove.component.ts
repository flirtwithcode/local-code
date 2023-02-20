import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { IAfterGuiAttachedParams, ICellRendererComp, ICellRendererParams, Promise } from 'ag-grid-community';

@Component({
  selector: 'app-remove',
  template: `<p class="removeButton" (click)="remove()">remove</p>`,
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements ICellRendererAngularComp  {
  rowData: any;
  params: ICellRendererParams;
  console: any;

  constructor() { }
  refresh(params: any): boolean {
    return true;
  }
  // getGui(): HTMLElement {
  //  return `<button>`
  // }
  destroy?(): void {
    //throw new Error('Method not implemented.');
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error('Method not implemented.');
  }
  agInit(params: ICellRendererParams): void | Promise<void> {    
    this.rowData = params.data;
    this.params = params;
  }

  remove(){
    this.params
    this.params.context.removeRow(this.rowData);
    console.log(this.rowData , "Remove clicked" , this.params);
  }

  ngOnInit() {
  }

}
