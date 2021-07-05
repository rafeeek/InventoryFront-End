export class DeleteProces {
    processId:number;
    InventoryProcessId:number;




    constructor(InventoryProcessId : number ,processId : number ){
        this.processId = processId;
        this.InventoryProcessId = InventoryProcessId;
    }
}
