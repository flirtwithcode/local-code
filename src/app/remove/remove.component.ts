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

  constructor() { }
  refresh(params: any): boolean {
    return false;
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
  }

  remove(){
    console.log(this.rowData , "Remove clicked");
  }

  ngOnInit() {
  }

}
