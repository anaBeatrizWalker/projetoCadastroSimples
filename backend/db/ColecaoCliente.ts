import firebase from "../config";
import Cliente from "../../src/core (dominios)/Cliente";
import ClienteRepositorio from "../../src/core (dominios)/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio{

    #conversor = {
        toFirestore(cliente: Cliente){
            return {
                nome: cliente.nome,
                idade: cliente.idade
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente>{
        return null
    }
    async excluir(cliente: Cliente): Promise<void>{
        return null
    }
    async obterTodos(): Promise<Cliente[]>{
        return null
    }

    private colecao(){
        return firebase.firestore().collection('clientes').withConverter(this.#conversor)
    }
}