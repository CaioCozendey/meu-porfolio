import Card from "../card/cardeffect"

const projects = [
    { name: 'Spotify', href: 'https://www.google.com/search?q=instam&oq=instam&aqs=edge..69i57j0i512j0i10i433i512j0i10i512l3j0i512l2j69i60.527j0j1&sourceid=chrome&ie=UTF-8', descrition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna quam, rutrum vitae nisl non, vehicula posuere purus. Cras hendrerit porttitor nisi.' },
]

export default function Projetos() {
    return (
        <div className="mt-4" >
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <h1 className="text-white text-3xl xl:text-5xl lg:text-5xl font-semibold pb-12 text-center xl:text-left lg:text-left" id='projetos'> Projetos </h1>
            <div className="px-auto grid grid-cols-2 md:grid-cols-3 lg-grid-cols-4 xl:grid-cols-4 gap-4 justify-around ps-4 pb-12">
                {projects.map((item) => (
                    <a
                        href={item.href}
                        target="_blank"
                    >
                        <Card
                            key={item.name}
                            name={item.name}
                            text={item.descrition}
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}