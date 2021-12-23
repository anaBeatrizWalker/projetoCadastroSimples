interface InputProps{
    texto: string
    tipo?: 'text' | 'number'
    valor: any
    soLeitura?: boolean
}

export default function Input(props: InputProps){
    return (
        <div className="flex flex-col">
            
            <label className="mb-4">{props.texto}</label>
            
            <input type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.soLeitura}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100
                    px-4 py-2 
                    ${props.soLeitura ? '' : 'focus: bg-white'}
                `} />
        </div>
    )
}