import XpCard from "../card/xpcard";

const xps = [
    { id: 1, funcao: "Estagiário Desenvolvedor RPA", nome: "High Jump", tempo: "08/22 - 04/23", imagem: "/high-jump.svg", tech1: "Roberty Studio", tech2: "Javascript", tech3: "RPA", urlEmpresa: "https://highjump.com.br/" },
    { id: 2, funcao: "Desenvolvedor RPA Junior I", nome: "Tree Inova", tempo: "10/23 - Atual", imagem: "/tree-inova.png", tech1: "Roberty Studio", tech2: "Javascript", tech3: "RPA", urlEmpresa: "https://www.treeinova.com.br/" },
]

export default function Experiencias() {
    return (
        <div id='experiencias'>
            <hr className="mb-6 mt-8 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <h1 className="text-white text-3xl lg:text-5xl font-semibold pb-12 text-center lg:text-left"> Experiências </h1>
            <XpCard itens={xps} />
        </div>
    )
}