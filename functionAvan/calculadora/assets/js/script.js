(function () {
    function criaCal() {
        return {
            display: document.querySelector(`.display`),
            
            starta() {
                this.clickBotto();
                alert(`Tudo Ok, vamos la!`);
                this.pressionaEnter();
            },

            pressionaEnter(){
                document.addEventListener(`keypress`, e =>{
                    if(e.keyCode === 13){
                        this.realizaConta();
                    }
                })
            },

            clearDisplay(){
                this.display.value = ``;
            },

            deletOne(){
                this.display.value = this.display.value.slice(0, -1);// apaga ultimo valor
            },

            realizaConta(){
                let conta = this.display.value;
                try{
                    conta = eval(conta);

                    if(!conta){
                        alert(`Formula Errada!`);
                        return;
                    }
                    this.display.value = String(conta);
                }catch(e){
                    alert(`Formula Errada!`);
                    return;
                }
            },

            clickBotto(){
                //document.addEventListener(`click`,function); É usado para
                //capiturar algo do DOM.
                document.addEventListener(`click`,event =>{
                    const el = event.target;//target é oq vc ta clicando
                    console.log(this);

                    if(el.classList.contains(`btn-num`)){
                        this.btnParaDisplay(el.innerText);
                    }

                    if(el.classList.contains(`btn-clear`)){
                        this.clearDisplay();
                    }

                    if(el.classList.contains(`btn-del`)){
                        this.deletOne();
                    }

                    if(el.classList.contains(`btn-eq`)){
                        this.realizaConta();
                    }
                });
            },

            btnParaDisplay(valor){
                this.display.value += valor;
                this.display.focus();
            },



        };
    }

    const calculadora = criaCal();
    calculadora.starta();
})();

