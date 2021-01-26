class validaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, `cpfLimpo`, {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, ``)
        });
    }

    ehSequencia(){
        // no lugar do [0], pode ser usado charAt(0)
        return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const d1 = validaCPF.geraDigito(cpfSemDigitos);
        const d2 = validaCPF.geraDigito(cpfSemDigitos + d1);
        this.geraNovoCpf = cpfSemDigitos + d1 + d2;
    }

    static geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length +1;
        for(let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito): `0`;
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== `string`) return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.ehSequencia()) return false;
        this.geraNovoCpf();

        return this.geraNovoCpf === this.cpfLimpo;
    }

}

// const validacpf = new validaCPF(`070.987.720-03`);
const validacpf = new validaCPF(`999.999.999-99`);

if(validacpf.valida()){
    console.log(`CPF valido!`);
}else{
    console.log(`CPF invalido!`);
}
