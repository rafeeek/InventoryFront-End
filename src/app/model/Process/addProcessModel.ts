export class AddProcessModel {
    
    CstName:string;
    ProcessType:string;
    Date:Date;



    constructor(CstName : string , ProcessType : string , Date:Date){
        this.CstName = CstName;
        this.ProcessType = ProcessType;
        this.Date = Date;

    }
}
