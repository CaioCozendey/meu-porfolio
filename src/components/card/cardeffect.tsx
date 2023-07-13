
interface Card {
    text: string,
    name: string,
    image: string,
}

export default function Card(props: Card) {

    let imageurl: any = props.image;

    return (
        <div className="static rounded-lg duration-300 cursor-pointer w-48 h-72 bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(${imageurl})`,
            }}
        >
            <div className="w-full h-72 hover:bg-white hover:bg-opacity-5 rounded-lg hover:backdrop-blur-lg duration-300">
                <div className="w-48 h-64 pt-2 text-transparent hover:text-white hover:blur-none duration-300 px-4">
                    <p>{props.text}</p>
                </div>
                <h1 className="pl-4 text-white text-xl text-bold hover:pl-24 duration-300">{props.name}</h1>
            </div>
        </div>
    )
}