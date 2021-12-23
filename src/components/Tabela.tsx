import Cliente from '../core (dominios)/Cliente'

interface TabelaProps{
    clientes: Cliente[] //array de clientes
}

export default function Tabela(props: TabelaProps){

    function renderCabecalho(){
        <tr>
            <th className='text-left p-4'>Código</th>
            <th className='text-left p-4'>Nome</th>
            <th className='text-left p-4'>Idade</th>
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
                </tr>
            )
        })
            
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