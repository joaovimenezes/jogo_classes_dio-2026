    //Objeto Heroi recebe os seguintes atríbutos:
    //                                            name = String
    //                                            age = int
    //                                            type = { "mago", "guerreiro", "monge", "ninja" }

    class Hero{
        constructor(name, age, type){
            this.name = name
            this.age = age
            this.type = type.toLowerCase()
        }
        attack(){
            //dicionário de ataques por type
            const ataque = {
                "mago": "magia",
                "guerreiro": "espada",
                "monge": "marciais",
                "ninja": "shuriken",
                "goat": "bola de basquete",
            }
            if (!ataque[this.type]){
                return "ERRO: Tipo não encontrado."
            }
        return `${this.name}, o ${this.type}, atacou usando: ${ataque[this.type]}.`
        }
    }

    // Defina aqui seu Heroi
    let heroi = new Hero("LeBron", 41, "GOAT")


    console.log(heroi.attack())
