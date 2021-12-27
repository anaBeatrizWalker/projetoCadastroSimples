import { useState } from "react";
import Cliente from "../core (dominios)/Cliente";
import Botao from "./Botao";
import Input from "./Input";

interface FormularioProps{
    cliente: Cliente
    clienteMudou? : (cliente: Cliente) => void
    cancelar? : ()=> void
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id //se temos um id do cliente
    const [nome, setNome] = useState(props.cliente.nome ?? '')
    const [idade, setIdade] = useState(props.cliente.idade ?? 0)

    return (
        <div>
            {/*Se o código foi setado, mostra ele*/}
            {id ? (
                <Input 
                    soLeitura
                    texto="Código" 
                    valor={id}
                    className="mb-5"></Input>
            ) : false}
            <Input 
                texto="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-5"
            ></Input>
            
            <Input 
                texto="Idade" 
                tipo="number" 
                valor={idade}
                valorMudou={setIdade}
            ></Input>

            <div className="flex justify-end mt-3">
                <Botao cor="blue"className="mr-2" onClick={()=> props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' :  'Salvar'}
                </Botao>
                <Botao onClick={props.cancelar}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}