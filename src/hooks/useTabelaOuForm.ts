import { useState } from "react";

export default function useTabelaOuForm(){
    const [visivel, setVisisel] = useState<'tabela' | 'form'>('tabela')

    const exibirTabela = ()=> setVisisel('tabela')
    const exibirFormulario = ()=> setVisisel('form')

    return {
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        exibirTabela,
        exibirFormulario
    }
}