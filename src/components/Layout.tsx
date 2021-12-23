import Titulo from "./Titulo";

//Recurso do TypeScript
interface LayoutProps{
    //Quais propriedades se espera receber obrigatoriamente no componente Layout
    titulo?: string //? = prop opcional
    children: any //prop obrigatória
}

export default function Layout(props: LayoutProps){
    return (
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800
            rounded-md
        `}>
            <div>
                <Titulo>{props.titulo}</Titulo>
                <div className="p-6">
                    {props.children}
                </div>
            </div>
        </div>
    )
}