export class UpdataInventoryProcess {
    id:number
    count:number;
    cost:number;
    date:Date;
    processId:number;
    goodsId:number;


    constructor(id:number , count : number , cost : number , processId:number, goodsId:number , date:Date){
        
        this.id = id;
        this.count = count;
        this.cost = cost;
        this.goodsId = goodsId;
        this.processId = processId;
        this.date = date;

    }
}
