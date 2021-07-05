export class AddInventoryProcessModel {
    Count:number;
    Cost:number;
    Date:Date;
    ProcessId:number;
    GoodsId:number;


    constructor(Count : number , Cost : number , ProcessId:number, GoodsId:number , Date:Date){
        this.Count = Count;
        this.Cost = Cost;
        this.GoodsId = GoodsId;
        this.ProcessId = ProcessId;
        this.Date = Date;

    }
}
