import Input from "./Input";

interface FormularioProps{

}

export default function Formulario(props: FormularioProps){
    return (
        <div>
            <Input texto="Nome" valor="teste"></Input>
            
            <Input texto="Idade" tipo="number" valor="teste"></Input>
        </div>
    )
}