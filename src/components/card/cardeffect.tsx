import { StaticImageData } from "next/image";

interface Card {
    text: string,
    name: string,
    image: string,
}

export default function Card(props: Card) {

    return (
        <div className="static rounded-lg duration-300 cursor-pointer w-48 h-72 bg-cover bg-no-repeat shadow-xl shadow-black"
            style={{ backgroundImage: `url(${props.image})`}}
        >
            <div className="w-full h-72 hover:bg-white hover:bg-opacity-5 rounded-lg hover:backdrop-blur-lg duration-300">
                <div className="w-48 h-60 pt-2 text-transparent hover:text-white hover:blur-none duration-300 px-4">
                    <p className="drop-shadow-md">{props.text}</p>
                </div>
                <h1 className="pl-4 text-white text-2xl text-bold hover:pl-20 duration-300 align-bottom">{props.name}</h1>
            </div>
        </div>
    )
}
