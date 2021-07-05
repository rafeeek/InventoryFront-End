import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { UpdataProcessModel } from '../../model/Process/UpdataProcessModel';
import { UpdataInventoryProcess } from '../../model/Process/UpdataInventoryProcess';
import { InventoryService } from 'src/app/Services/inventory.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-process',
  templateUrl: './update-process.component.html',
  styleUrls: ['./update-process.component.scss']
})
export class UpdateProcessComponent implements OnInit {

  inventoryId:any;
  processId:any;

  inventoryData:any;
  processData:any;


  cstProcess:FormGroup;
  inventoryProcess:FormGroup;
  goodsDetails:any;

  cost:any;
  count:any;
  Goodselected:any;
  cstName:any;
  processType:any;

  constructor(
    public _ActivatedRoute:ActivatedRoute ,
     public _InventoryService:InventoryService ,
      public _Router:Router ,
       private toastr: ToastrService
       ) { 

    this.inventoryId = this._ActivatedRoute.snapshot.paramMap.get("InvId")
    this.processId = this._ActivatedRoute.snapshot.paramMap.get("procId")

    this._InventoryService.getInventoryById(this.inventoryId).subscribe(data=>{
      this.cost = data.cost
      this.count = data.count
      this.Goodselected = data.goodsId
      this.cstName = data.cstName
      this.processType = data.processType


    })



    this.cstProcess = new FormGroup({
      "cstName" : new FormControl( null, [Validators.required]),
      "processType" : new FormControl("Process Type" , [Validators.required])
    })

    this.inventoryProcess = new FormGroup({
      "cost" : new FormControl( null, [Validators.required]),
      "ProcessId" : new FormControl(null , [Validators.required]),
      "GoodsId" : new FormControl(null, [Validators.required]),
      "count" : new FormControl(null , [Validators.required])
    })


    this._InventoryService.getGoodsData().subscribe(data=>{
      this.goodsDetails = data
    })


  }


  updateCstProcess(data:FormGroup){
    const value = data.value
    const date = new Date();
    const ProcessModel = new UpdataProcessModel(this.processId , value.cstName , value.processType , date)
    this._InventoryService.updataProcess(ProcessModel).subscribe(data=>{
      const message = "Done! Updated Cst Process"
      this.showSuccess(message)
    })}
  

  updateInventoryProcess(data:FormGroup){
    const value = data.value
    const date = new Date();
    const UpdataInvProcess = new UpdataInventoryProcess(this.inventoryId , value.count , value.cost , this.processId , value.GoodsId , date)

    this._InventoryService.updataInventoryProcess(UpdataInvProcess).subscribe(data=>{
      const message = "Done! Updated Inventory Process"
      this.showSuccess(message)
      setTimeout(() => {
        this._Router.navigate(["/home"])
      }, 500);
  })}


  showSuccess(data:string) {
    this.toastr.success('' , data ,{timeOut: 2000, progressBar:true});
  }

  ngOnInit(): void {
  }

}
