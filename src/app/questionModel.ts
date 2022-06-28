export class question {
    id : number ;
    valQ: string;
    domaine : string ;
    typeR:string ;
    reponse: string[];
constructor(id: number , valQ :string , domaine : string 
    ,typeR : string , reponse : string [])
{
    this.id=id ; 
    this.valQ=valQ ;
    this.domaine=domaine ; 
    this.typeR=typeR ;
    this.reponse=reponse ; 
      
} 
}

export class categorie {
    nom! : string; 
    url ! :string ; 
}