/**
 * A Bit About instancia/estaticos.
 */

 class ControleRemoto{
     constructor(tv){
         this.tv = tv;
         this.volume = 0;
     }

     //método de instância 
     aumentaVolume(){
         if(this.volume >= 100) return;
         this.volume += 2;
     }

     //método de instância 
     diminuiVolume(){
        if(this.volume <= 0) return;
        this.volume -= 2;
     }

     //Método estático, ela não tem permissão de acessar os dados do construct
     static capinhaControle(){
         console.log(`As capinha foram colocadas!`);
     }
 }

 const c1 = new ControleRemoto(`LG - s342`);
 c1.aumentaVolume();
 console.log(c1);
 ControleRemoto.capinhaControle();// forma de chamar o metodo estático
