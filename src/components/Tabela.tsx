import Cliente from '../core (dominios)/Cliente'
import { IconeEdicao, IconeExcluir } from './Icones'

interface TabelaProps{
    clientes: Cliente[] //array de clientes
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps){

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderCabecalho(){
        <tr>
            <th className='text-left p-4'>Código</th>
            <th className='text-left p-4'>Nome</th>
            <th className='text-left p-4'>Idade</th>
            {exibirAcoes ? <th className='p-4'>Ações</th> : false}
        </tr>
    }

    function renderDados(){
        /*se cliente estiver preenchido*/
        return props.clientes?.map((cliente, i)=>{
            return (
                <tr key={cliente.id} 
                    className={`${i % 2 === 0 ?'bg-purple-200': 'bg-purple-100'}`}>
                    <td className='text-left p-4'>{cliente.id}</td>
                    <td className='text-left p-4'>{cliente.nome}</td>
                    <td className='text-left p-4'>{cliente.idade}</td>

                    {/*Se foi passada as ações, para cada cliente renderizado, renderiza suas ações*/}
                    {exibirAcoes ? renderAcoes(cliente):false}
                </tr>
            )
        })   
    }

    function renderAcoes(cliente: Cliente){
        return (
            <td className='flex justify-center'>
                {/*Se a função for passada como props, renderiza o botao*/}
                {props.clienteSelecionado ? (

                    <button
                        onClick={()=> props.clienteSelecionado?.(cliente)}
                        className={`
                            flex justify-center items-center
                            text-green-600 rounded-full p-2 m-1
                            hover:bg-purple-50
                        `}>
                        {IconeEdicao}
                    </button>

                ) : false}
                
                {props.clienteExcluido ? (

                    <button 
                        onClick={()=> props.clienteExcluido?.(cliente)}
                        className={`
                            flex justify-center items-center
                            text-red-500 rounded-full p-2 m-1
                            hover:bg-purple-50
                        `}>
                        {IconeExcluir}
                    </button>

                ) : false}

            </td>
        )
    }

    return (
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-700
            `}>
                {renderCabecalho}
            </thead>
            <tbody>
                {renderDados}
            </tbody>
        </table>
    )
}