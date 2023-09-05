import Card from "../card/cardeffect"
// import portfolioImg from '../../../public/portfolio.png'

const projects = [
    { id: 1, name: 'Portfólio', href: '/', descrition: 'Essé e o meu Portfólio! Meu primeiro site que desenvolvi 100% e fiz deploy. Querendo ou não também é um projeto.', image: 'https://raw.githubusercontent.com/CaioCozendey/meu-porfolio/main/public/portfolio.PNG' },
    { id: 2, name: 'Calculadora', href: '/', descrition: 'In Development! Essa é uma calculadora baseada na do MacOS desenvolvida com Reactjs e Tailwind', image: 'https://raw.githubusercontent.com/CaioCozendey/meu-porfolio/main/public/calculator.PNG' },
]



function Projetos() {
    return (
        <div className="mt-4" >
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <h1 className="text-white text-3xl xl:text-5xl lg:text-5xl font-semibold pb-12 text-center xl:text-left lg:text-left" id='projetos'> Projetos </h1>
            <div className="px-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-around ps-4 pb-12">
                {projects.map((item) => (
                    <div
                        key={item.name}
                        className="w-48"
                    >
                        <a
                            href={item.href}
                            target="_blank"
                        >
                            <Card
                                name={item.name}
                                text={item.descrition}
                                image={item.image}
                            />
                        </a>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projetos;
