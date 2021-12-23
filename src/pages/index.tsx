import Layout from '../components/Layout'

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        <span>Conteudo</span>
      </Layout>
    </div>
  )
}
