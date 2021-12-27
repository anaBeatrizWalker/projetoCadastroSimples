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

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>

      <div className='flex justify-end'>
        <Botao cor="green" className='mb-4'>Novo Cliente</Botao>
      </div>
  
      <Layout titulo='Cadastro Simples'>
        <Tabela clientes={clientes} 
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}></Tabela>

          <Formulario cliente={clientes[0]}></Formulario>
      </Layout>
    </div>
  )
}
