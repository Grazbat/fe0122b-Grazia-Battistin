class SonAccount{
    nome : string 
    cognome : string
    balanceInit : number;    
    balanceTot: number = 0;

    constructor (nome: string, cognome: string, balanceInit: number){
        this.nome = nome;
        this.cognome = cognome;
        this.balanceInit = balanceInit;
        
        
    };

    oneDeposit(versamento: number): number{  //versamento
        
        return this.balanceTot += versamento;
       
    };

    oneWithDraw(prelievo: number): number{
        
        return this.balanceTot -= prelievo;

    }
     
};
let figlio: SonAccount = new SonAccount('Giovangiorgio', 'Cuppitiello', 1800);



console.log(figlio.oneDeposit(1800));
console.log(figlio.oneWithDraw(300));

class MotherAccount extends SonAccount{
    addInterest: number;

    constructor(nome: string, cognome: string, balanceInit: number, addInterest: number){
        
        super (nome, cognome, balanceInit);
        this.addInterest = addInterest
    }
    oneDeposit(versamento: number): number{  //versamento
        
        return this.balanceTot += versamento;
       
    };

    oneWithDraw(prelievo: number): number{
        
        return this.balanceTot -= prelievo;

    }
    
}
let mother = new MotherAccount('Filomena', 'Spippitiella', 700, 10);
console.log(mother);
console.log(mother.oneDeposit(700));
console.log(mother.oneWithDraw(300));