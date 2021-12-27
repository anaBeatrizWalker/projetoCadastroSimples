import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import useClientes from '../hooks/useClientes'

export default function Home() {

  const {
    cliente, 
    clientes, 
    novoClienteButton, 
    selecionarCliente, 
    excluirCliente, 
    salvarCliente,
    tabelaVisivel, 
    exibirTabela
  } = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
  
      <Layout titulo='Cadastro Simples'>
        {/*Renderização Condicional*/}
        {tabelaVisivel ? (
          <>
          <div className='flex justify-end'>
            <Botao cor="green" className='mb-4' onClick={novoClienteButton}>
              Novo Cliente
            </Botao>
          </div>
          <Tabela clientes={clientes} 
            clienteSelecionado={selecionarCliente}
            clienteExcluido={excluirCliente}></Tabela>
          </>
        ): (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelar={exibirTabela}></Formulario>
        )}          
      </Layout>
    </div>
  )
}
