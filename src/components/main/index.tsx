import Card from "../card/cardeffect";

const projects = [
    { name: 'Spotify', descrition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna quam, rutrum vitae nisl non, vehicula posuere purus. Cras hendrerit porttitor nisi.' },
]

export default function () {
    return (
        <div className="mx-auto max-w-6xl px-2 sm:px-2 lg:px-8">
            <div className="text-white pt-3 text-center xl:text-left lg:text-left">
                <p className="pl-1">Olá, meu nome é</p>
                <h1 className="text-[#34d399] text-6xl xl:text-8xl lg:text-8xl font-semibold pt-3">Caio Dias.</h1>
                <h1 className="text-[#28926b] text-4xl xl:text-6xl lg:text-6xl font-semibold pt-3">Eu faço coisas para Web</h1>
                <p className="pl-1 pt-4 max-w-md m-auto xl:m-0 lg:m-0">Sou um desenvolvedor Frontend Web, as vezes me aventuro em Unreal Engine, e também Python para Bots no Discord!</p>
            </div>
            <div className="mt-4 mx-2">
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <h1 className="text-white text-3xl xl:text-5xl lg:text-5xl font-semibold pb-4"> Projetos </h1>
                {projects.map((item) => (
                    <Card
                        key={item.name}
                        name={item.name}
                        text={item.descrition}
                    />
                ))}
            </div>
        </div>
    )
}