import { useState } from 'react'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core (dominios)/Cliente'

export default function Home() {

  const clientes = [
    new Cliente('Ana', 20, '1'),
    new Cliente('Gustavo', 21, '2'),
    new Cliente('Julia', 12, '3'),
    new Cliente('Claudia', 40, '4'),
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(`Selecionado: ${cliente.nome}`)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(`Excluir: ${cliente.nome}`)
  }

  function salvarCliente(cliente: Cliente){

  }

  //Alternando entre Formulário e Tabela
  const [visivel, setVisisel] = useState<'tabela' | 'form'>('tabela')//mostrar tabela por padrão


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
            <Botao cor="green" className='mb-4' onClick={() => setVisisel('form')}>
              Novo Cliente
            </Botao>
          </div>
          <Tabela clientes={clientes} 
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}></Tabela>
          </>
        ): (
          <Formulario 
            cliente={clientes[0]}
            clienteMudou={salvarCliente}
            cancelar={()=> setVisisel('tabela')}></Formulario>
        )}          
      </Layout>
    </div>
  )
}
