

export class Solo{

    id: number;
    description: string;
    createdAt: string;

    d: Date;

    
   get getAnoMesDia(): string{
       this.d = new Date(this.createdAt);
       return this.d.getFullYear() + "/" + (this.d.getUTCMonth()+1) + "/" + this.d.getDate();
   }
   
    
	
	
}