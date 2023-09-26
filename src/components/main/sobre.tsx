import Image from "next/image";
import MaquinaDeEscrever from "../maquina_de_escrever/index"

export default function Sobre() {
    return (
        <div id='sobre'>
            <div className="text-white pt-4 text-center xl:text-left lg:text-left">
                <p className="pl-1">Olá, meu nome é</p>
                <h1 className="text-[#34d399] text-6xl xl:text-8xl lg:text-8xl font-semibold pt-12">Caio Dias.</h1>
                <h1 className="text-[#28926b] text-4xl xl:text-6xl lg:text-6xl font-semibold pt-3">Front-end Developer</h1>
                <p className="pl-1 pt-4 max-w-md m-auto xl:m-0 lg:m-0">
                    <MaquinaDeEscrever
                        text={"Sou um desenvolvedor Frontend Web e as vezes me aventuro em Unreal Engine para criação de GameMods!"}
                        delay={1200}
                    />
                </p>
            </div>
            <Image src={'/react-banner.jpg'} width={1080} height={256} alt="React Banner" className="mt-8 px-2" />
        </div>
    )
}