

export class Solo{

    public id: number;
    description: string;
    createdAt: string;

    d: Date;

    public Solo(id){
        this.id = id;
    }

    
   get getAnoMesDia(): string{
       this.d = new Date(this.createdAt);
       return this.d.getFullYear() + "/" + (this.d.getUTCMonth()+1) + "/" + this.d.getDate();
   }
   
    
	
	
}