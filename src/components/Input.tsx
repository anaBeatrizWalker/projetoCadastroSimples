interface InputProps{
    texto: string
    tipo?: 'text' | 'number'
    valor: any
    soLeitura?: boolean
    valorMudou?: (valor: any) => void
    className?: string //para melhorar o espaçamento do label
}

export default function Input(props: InputProps){
    return (
        <div className={`flex flex-col ${props.className}`}>
            
            <label className="mb-2">{props.texto}</label>
            
            <input type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.soLeitura}
                onChange={e=> props.valorMudou?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100
                    px-4 py-2 
                    ${props.soLeitura ? '' : 'focus: bg-white'}
                `} />
        </div>
    )
}