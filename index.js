    //Objeto Heroi recebe os seguintes atríbutos:
    //                                            name = String
    //                                            age = int
    //                                            type = { "mago", "guerreiro", "monge", "ninja" }

    class Hero{
        constructor(name, age, type){
            this.name = name
            this.age = age
            this.type = type
        }
        attack(){
            //dicionário de ataques por type
            const ataque = {
                "mago": "magia",
                "guerreiro": "espada",
                "monge": "marciais",
                "ninja": "shuriken",
            }
            if (!ataque[this.type]){
                return "ERRO: Tipo não encontrado."
            }
        return `${this.name}, o ${this.type}, atacou usando: ${ataque[this.type]}`
        }
    }

    // Defina aqui seu Heroi
    let heroi = new Hero("Marcos Antônio", 15, "monge")


    console.log(heroi.attack())
