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


  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}
