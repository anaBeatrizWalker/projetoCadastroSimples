import { useEffect, useState } from 'react'
import Cliente from '../core (dominios)/Cliente'
import ClienteRepositorio from '../core (dominios)/ClienteRepositorio'
import ColecaoCliente from '../../backend/db/ColecaoCliente'
import useTabelaOuForm from './useTabelaOuForm'

export default function useClientes(){
    //Repositório de Clientes
    const repo: ClienteRepositorio = new ColecaoCliente()

    const {
        tabelaVisivel, 
        exibirTabela, 
        exibirFormulario
    } = useTabelaOuForm()

    //Armazenando cliente selecionado (para edição)
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())

    const [clientes, setClientes] = useState<Cliente[]>([])

    //Altera o estado de clientes na inicialização do componente
    useEffect(obterTodos, [])

    function obterTodos(){
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente){
        console.log(cliente.nome)
        setCliente(cliente)
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente){
        await repo.excluir(cliente)
        obterTodos()
    }

    function novoClienteButton(cliente: Cliente){
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    async function salvarCliente(cliente: Cliente){
        await repo.salvar(cliente)
        obterTodos()
    }

    return {
        cliente,
        clientes,
        obterTodos,
        selecionarCliente,
        excluirCliente,  
        novoClienteButton,
        salvarCliente,
        tabelaVisivel, 
        exibirTabela
    }
}