interface Card {
    text: string,
    name: string,
    image: string,
}

export default function Card(props: Card) {

    return (
        <div className="static mb-8 rounded-lg duration-300 cursor-pointer w-48 h-72 bg-cover bg-no-repeat shadow-xl shadow-black"
            style={{ backgroundImage: `url(${props.image})`}}
        >
            <div className="w-full h-72 hover:bg-white hover:bg-opacity-5 rounded-lg hover:backdrop-blur-lg duration-300">
                <div className="w-48 h-60 pt-2 text-transparent hover:text-white hover:blur-none duration-300 px-4">
                    <p>{props.text}</p>
                </div>
                <h1 className="pl-4 text-[#34d399] text-2xl text-bold hover:pl-8 duration-300 align-bottom drop-shadow-md">{props.name}</h1>
            </div>
        </div>
    )
}
