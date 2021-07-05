import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AddProcessModel } from '../model/Process/addProcessModel';
import { UpdataProcessModel } from '../model/Process/UpdataProcessModel';
import { UpdataInventoryProcess } from '../model/Process/UpdataInventoryProcess';
import { AddInventoryProcessModel } from '../model/Process/AddInventoryProcess';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  constructor(public http:HttpClient) { }


  getInventoryData():Observable<any>{
    return this.http.get(`http://localhost:44147/api/InventoryProc/alldata`)
  }

  getGoodsData():Observable<any>{
    return this.http.get(`http://localhost:44147/api/Goods/alldata`)
  }



  getInventoryById(id :number):Observable<any>{
    return this.http.get(`http://localhost:44147/api/InventoryProc/GetById?id=${id}`)
  }

  addNewProcess(obj :AddProcessModel):Observable<any>{
    return this.http.post<any>(`http://localhost:44147/api/Process/addprocess`, obj)
  }

  AddInventoryProcess(obj :AddInventoryProcessModel):Observable<any>{
    return this.http.post<any>(`http://localhost:44147/api/InventoryProc/AddInvProcess`, obj)
  }

  getProcessId():Observable<any>{
    return this.http.get(`http://localhost:44147/api/Process/getProcessId`)
  }

  DeleteProcess(id :number):Observable<any>{
    return this.http.delete(`http://localhost:44147/api/Process/DeleteProcess?processId=${id}`)
  }

  DeleteInventoryProcess(id :number):Observable<any>{
    return this.http.delete(`http://localhost:44147/api/InventoryProc/DeleteInvProcess?InventoryProcessId=${id}`)
  }

  
  updataProcess(obj :UpdataProcessModel):Observable<any>{
    return this.http.patch(`http://localhost:44147/api/Process/UpdataProcess`, obj)
  }

  updataInventoryProcess(obj :UpdataInventoryProcess):Observable<any>{
    return this.http.patch(`http://localhost:44147/api/InventoryProc/UpdataInvProcess`, obj)
  }






  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
