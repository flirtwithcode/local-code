import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgGridService {

  public actionType = new Subject<any>();
  constructor(private http:HttpClient) {
    
   }

   getRowData(req : any): Observable<any>{
    return this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
   }

   setAction(action:any){
    this.actionType.next(action);
   }

   getAction(){
    return this.actionType;
   }

   clearAction(){
    this.actionType.next(null);
   }
}
