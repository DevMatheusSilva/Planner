class User {
    private nome: String;
    private sobrenome: String;

    constructor(nome: String, sobrenome: String) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    public getName(): String {
        return this.nome;
    }

    public getLastname(): String {
        return this.sobrenome;
    }
}

const userInstance = new User("Matheus", "Silva");

export {User, userInstance};
