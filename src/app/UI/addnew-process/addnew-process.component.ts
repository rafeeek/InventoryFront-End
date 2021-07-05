import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { AddProcessModel } from '../../model/Process/addProcessModel';
import { AddInventoryProcessModel } from '../../model/Process/AddInventoryProcess';
import { InventoryService } from 'src/app/Services/inventory.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-addnew-process',
  templateUrl: './addnew-process.component.html',
  styleUrls: ['./addnew-process.component.scss']
})
export class AddnewProcessComponent implements OnInit {

  cstProcess:FormGroup;
  inventoryProcess:FormGroup;
  goodsDetails:any;
  processId:any;


  EmptyCstName:any;
  EmptyCost:any;
  EmptyCount:any;


  constructor(public _InventoryService:InventoryService , public _Router:Router , private toastr: ToastrService) {

    this.cstProcess = new FormGroup({
      "cstName" : new FormControl(null , [Validators.required]),
      "processType" : new FormControl("Process Type" , [Validators.required])
    })

    this.inventoryProcess = new FormGroup({
      "cost" : new FormControl(null , [Validators.required]),
      "ProcessId" : new FormControl(null , [Validators.required]),
      "GoodsId" : new FormControl("Goods Name" , [Validators.required]),
      "count" : new FormControl(null , [Validators.required])
    })

    this._InventoryService.getGoodsData().subscribe(data=>{
      this.goodsDetails = data
    })

   }


   addCstProcess(data:FormGroup){
    const value = data.value
    const date = new Date();
    const ProcessModel = new AddProcessModel(value.cstName , value.processType , date)
    this._InventoryService.addNewProcess(ProcessModel).subscribe(data=>{
      this.EmptyProcessForm()
      this.getLastId()
      const message = "Done! Add Cst Process"
      this.showSuccess(message)
    })

     
   }


   addInventoryProcess(data:FormGroup){
    const value = data.value
    const date = new Date();
    const InventoryProcessModel = new AddInventoryProcessModel(value.count , value.cost , value.ProcessId , value.GoodsId , date)
    this._InventoryService.AddInventoryProcess(InventoryProcessModel).subscribe(data=>{
      this.EmptyInventoryProcessForm()
      const message = "Done! Add Inventory Process"
      this.showSuccess(message)
      this.processId = null
    })
    
   }


   EmptyProcessForm(){
    this.EmptyCstName = ""
   }
   EmptyInventoryProcessForm(){
    this.EmptyCost = ""
    this.EmptyCount = ""
   }


   getLastId(){
    this._InventoryService.getProcessId().subscribe(data =>{
      this.processId = data.id

    })
   }

   showSuccess(data:string) {
    this.toastr.success( '', data , {timeOut: 2000, progressBar:true , });
  }


  ngOnInit(): void {
  }

}
