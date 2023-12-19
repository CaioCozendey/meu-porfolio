import React from 'react';
import Image from 'next/image';

interface Xp {
    id: number;
    funcao: string;
    nome: string;
    tempo: string;
    imagem: string;
    tech1?: string;
    tech2?: string;
    tech3?: string;
    urlEmpresa: string,
}

interface ListaXps {
    itens: Xp[];
}

const XpCard: React.FC<Xp> = ({ funcao, nome, tempo, imagem, tech1, tech2, tech3, urlEmpresa }) => {
    return (
        <div className="static w-56 h-80 rounded-md text-gray-400 shadow-md shadow-black">
            <div className="text-center">
                <h2 className="text-sm mb-2 pt-6">{funcao}</h2>
                <a
                    href={urlEmpresa}
                    target='_blank'
                >
                    <Image
                        className="h-32 w-32 m-auto mt-1 hover:scale-110 duration-300 block"
                        src={imagem}
                        alt={"Logo da " + nome}
                        width={128}
                        height={128}
                    />
                </a>
                <h1 className="text-lg">{nome}</h1>
                <div className="border-t-2 w-48 m-auto mt-2 mb-4 border-gray-700 rounded-md"></div>
                <p className="text-xs mb-2">{tempo}</p>
                <div className="text-xs">
                    <p>{tech1}</p>
                    <p>{tech2}</p>
                    <p>{tech3}</p>
                </div>
            </div>
        </div>
    );
};

const ListaXpCards: React.FC<ListaXps> = ({ itens }) => {
    return (
        <div className="flex flex-row flex-wrap justify-evenly text-8xl pb-8 gap-12 mx-4">
            {itens.map((xp) => (
                <XpCard key={xp.id} {...xp} />
            ))}
        </div>
    );
};

export default ListaXpCards;
