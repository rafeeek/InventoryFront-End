import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router } from '@angular/router';
import { FormControl , FormGroup } from '@angular/forms';
import { InventoryService } from 'src/app/Services/inventory.service';
import { DeleteProces } from 'src/app//model/Process/DeleteProces';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {


  InventoryId:any;
  ProcessId:any;

  DeleProces:any;
  InventoryDetails:any;

  constructor(public ActivatedRoute:ActivatedRoute , public Inventory:InventoryService , public _Router:Router) {

    this.InventoryId = this.ActivatedRoute.snapshot.paramMap.get("InvId")
    this.ProcessId = this.ActivatedRoute.snapshot.paramMap.get("procId")

    this.Inventory.getInventoryById(this.InventoryId).subscribe(data=>{
      this.InventoryDetails =  data
    })
    
  }

  

  deleteModel(InventoryProcessId:number , processId:number){
    this.DeleProces = new DeleteProces(InventoryProcessId , processId)
  }

  confirmedDelete(){
    this.Inventory.DeleteInventoryProcess(this.DeleProces.InventoryProcessId).subscribe(data=>{
      this.Inventory.DeleteProcess(this.DeleProces.processId).subscribe(data=>{
        setTimeout(() => {
          this._Router.navigate(["/home"])
        }, 100);
      })
    })
  }


  ngOnInit(): void {
    
  }

}
