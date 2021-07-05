import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/Services/inventory.service';
import { DeleteProces } from 'src/app//model/Process/DeleteProces';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  inventory:any;
  DeleProces:any;


  DeleteElement:any;
  DeleteMessage:string = "Item Delete!"



  constructor(public Inventory:InventoryService , public _Router:Router , private toastr: ToastrService) { 
    this.Inventory.getInventoryData().subscribe(data=>{
      this.inventory = data
    })


  }

  deleteModel(data:any,processId:number,InventoryProcessId:number){
   this.DeleteElement = data.target.parentElement.parentElement.parentElement;
    this.DeleProces = new DeleteProces(processId,InventoryProcessId )
  }

  confirmedDelete(){
    this.Inventory.DeleteInventoryProcess(this.DeleProces.InventoryProcessId).subscribe(data=>{
      this.Inventory.DeleteProcess(this.DeleProces.processId).subscribe(data=>{
        this.DeleteElement.remove();
        this.showSuccess(this.DeleteMessage)
      })
    })
  }

  showSuccess(data:string) {
    this.toastr.error('', data ,{timeOut: 2000, progressBar:true , });
  }

  
  ngOnInit(): void {

    setTimeout(() => {
      $(function () {
        $('.js-basic-example').DataTable({
            responsive: true,
            paging: true,
            pageLength: 5,
            bSort: true,
            bFilter: true,
            //bLengthChange: false,
            //bInfo: false,
            lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
  
        });
  
        $(".pagination").css({"padding-top" : "20px"})
        $(".pagination").css({"padding-bottom" : "20px"})
        $(".dataTables_length").css({"text-align" : "left"})
        $(".dataTables_info").css({"text-align" : "left"})
    });
    }, 100);
  
  }

}
