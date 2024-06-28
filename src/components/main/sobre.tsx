import Image from "next/image";
import Typewriter from "../typewriter/main";

export default function Sobre() {
    return (
        <div id='sobre'>
            <div className="text-white pt-4 text-center">
                <p className="pl-1">Olá, meu nome é</p>
                <h1 className="text-[#34d399] text-6xl xl:text-8xl lg:text-8xl font-semibold pt-12">Caio Dias</h1>
                <h1 className="text-[#28926b] text-4xl xl:text-6xl lg:text-6xl font-semibold pt-3">Python Developer</h1>
                <div className="m-auto">                    
                    <p className="pl-1 pt-4 max-w-3xl h-40 xl:h-20 mx-4 xl:m-auto lg:m-auto">
                        < Typewriter 
                            text="  Sou um desenvolvedor Python com experiência profissional. 
                            Atualmente trabalho na Tree Inova com Automação de Processos utilizando Python, 
                            Selenium e Pyautogui. Também possuo conhecimento em Javascript, Reactjs e Typescript." 
                            speed={50}
                        />
                    </p>
                </div>
            </div>
            <Image src={'/react-banner.jpg'} width={1080} height={256} alt="React Banner" className="mt-8 px-2" />
        </div>
    )
}