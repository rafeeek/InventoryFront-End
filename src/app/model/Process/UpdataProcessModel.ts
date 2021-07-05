export class UpdataProcessModel {
    id:number;
    cstName:string;
    processType:string;
    date:Date;



    constructor( id:number , cstName : string , processType : string , date:Date){
        this.id = id;
        this.cstName = cstName;
        this.processType = processType;
        this.date = date;


    }
}
