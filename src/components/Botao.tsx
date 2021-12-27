//Botão Novo Cliente

interface BotaoProps{
    cor?: 'green' | 'blue' | 'gray'
    className?: string //propriedade que se for passsada irá sobscrever o estilo
    children: any
    onClick?: () => void
}

export default function Botao(props){

    //Cor padrão
    const cor = props.cor ?? 'gray'

    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 rounded-md
            
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}