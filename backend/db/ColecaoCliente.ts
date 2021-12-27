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
        //Se há um id, vai alterar
        if(cliente?.id){
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente //cliente já convertido para objeto

        //Senão, irá adicionar os dados
        }else{
            //Pega a referencia do documento
            const docRef = await this.colecao().add(cliente)

            //Pega o snapshot do documento
            const doc = await docRef.get()

            //Retorna os dados do documento
            return doc.data()
        }
    }

    async excluir(cliente: Cliente): Promise<void>{
        //Acessando um documento de um cliente pelo id
        return this.colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Cliente[]>{
        //Pega um query snapshot
        const query = await this.colecao().get()

        //A partir da query pega vários documentos, mapeia cada e pega o objeto data que são os próprios clientes
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao(){
        return firebase.firestore().collection('clientes').withConverter(this.#conversor)
    }
}