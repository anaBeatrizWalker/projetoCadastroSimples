import { useEffect, useState } from 'react'
import ColecaoCliente from '../../backend/db/ColecaoCliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core (dominios)/Cliente'
import ClienteRepositorio from '../core (dominios)/ClienteRepositorio'

export default function Home() {

  //Repositório de Clientes
  const repo: ClienteRepositorio = new ColecaoCliente()

  //Alternando entre Formulário e Tabela
  const [visivel, setVisisel] = useState<'tabela' | 'form'>('tabela')//mostrar tabela por padrão

  //Armazenando cliente selecionado (para edição)
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  //Estado inicializa com cliente vazio sendo um elemento do tipo Cliente

  const [clientes, setClientes] = useState<Cliente[]>([])

  //Altera o estado de clientes na inicialização do componente
  useEffect(obterTodos, [])

  function obterTodos(){
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisisel('tabela')
    })
  }

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
    setCliente(cliente)
    setVisisel('form')
  }

  async function clienteExcluido(cliente: Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }

  function novoClienteButton(cliente: Cliente){
    setCliente(Cliente.vazio())
    setVisisel('form')
  }

  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
  
      <Layout titulo='Cadastro Simples'>
        {/*Renderização Condicional*/}
        {visivel === 'tabela' ? (
          <>
          <div className='flex justify-end'>
            <Botao cor="green" className='mb-4' onClick={novoClienteButton}>
              Novo Cliente
            </Botao>
          </div>
          <Tabela clientes={clientes} 
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}></Tabela>
          </>
        ): (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelar={()=> setVisisel('tabela')}></Formulario>
        )}          
      </Layout>
    </div>
  )
}
