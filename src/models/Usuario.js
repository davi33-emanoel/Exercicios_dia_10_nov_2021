var id = 0
class Usuario{
    constructor(nome,email,senha){
        this.id=id++
        this.nome = nome
        this.email = email
        this.senha= this.verificar_senha(senha);
    }
    verificar_senha(senha){
        if(senha.length <= 6){
            return senha
        }
        else{
            throw new error("Senha tem que ser maior que 6 caracteres")
        }
    }
}
module.exports= Usuario