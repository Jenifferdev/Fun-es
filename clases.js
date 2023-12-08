
 class heroi { 
  constructor(nome,idade,tipo){
     this.nome = nome
     this.idade = idade 
     this.tipo = tipo 
    }
      
     tipoDeAtaque () {
        let ataque = this.tipo;

        switch (this.tipo) {
      case  "mago": 
     ataque = "magia";
      break;
     
      case  "guerreiro" :  
      ataque = "espada";
   break;
   
   case  "monge":  
     ataque= "artes marciais";
   break
   
   case "ninja" : 
     ataque = "shuriken";
   break;

  default:
      
      
} 
    
      console.log(`o ${this.tipo} atacou usando ${ataque}`)
}

 }
 
  

let propriedades = new heroi ("Peridot" , "26", "guerreiro");
propriedades.tipoDeAtaque() 
