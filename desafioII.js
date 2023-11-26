let saldoVitorias = quantidade(10,6) 

function quantidade (vitoria,derrota) {
    let somatorio = vitoria - derrota
     return somatorio}

     let nivel = determinarNivel(47)

     function determinarNivel (vitorias) {

        if (vitorias < 10)
         {return  "ferro"}
       
         else if (vitorias >= 11 && vitorias <= 20)
          {return  "Bronze"}  
      
          else if (vitorias >= 21 && vitorias <= 50 )
          {return "Prata"}
       
          else if (vitorias >= 51 && vitorias <= 80 )
          {return "Ouro"}
        
          else if ( vitorias >= 91 && vitorias <= 100)
          {return "Lendário"}
         
          else if ( vitorias >= 101 )
          {return "Imortal"}
        
          let resultado =  determinarNivel(vitorias)
         return resultado

     


  } 

      

 console.log(`O Herói tem saldo de ${saldoVitorias} e é de nivel ${nivel}`);