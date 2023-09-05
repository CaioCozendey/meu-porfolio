import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss } from "react-icons/si"

const techs = [
    { id: 1, name: 'HTML', icon: <SiHtml5 />, hover: 'hover:text-[#ec6231] duration-300' },
    { id: 2, name: 'CSS', icon: <SiCss3 />, hover: 'hover:text-[#264de4] duration-300' },
    { id: 3, name: 'Javascript', icon: <SiJavascript />, hover: 'hover:text-[#f0db4f] duration-300' },
    { id: 4, name: 'Typescript', icon: <SiTypescript />, hover: 'hover:text-[#007acc] duration-300' },
    { id: 5, name: 'ReactJS', icon: <SiReact />, hover: 'hover:text-[#61DBFB] duration-300' },
    { id: 6, name: 'NextJS', icon: <SiNextdotjs />, hover: 'hover:text-[#ffffff] duration-300' },
    { id: 7, name: 'Tailwind', icon: <SiTailwindcss />, hover: 'hover:text-[#3490dc] duration-300' },
]

function Tech() {
    return (
        <div id='techs'>
            <hr className="mb-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <h1 className="text-white text-3xl xl:text-5xl lg:text-5xl font-semibold pb-12 text-center xl:text-left lg:text-left"> Tecnologias </h1>
            <div className="flex flex-row flex-wrap justify-evenly text-8xl pb-8 text-[#34d399] gap-8">
                {techs.map((item) => (
                    <div
                        key={item.name}
                        className={item.hover}
                    >
                        {item.icon}
                        <p className="text-lg text-center pt-2">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tech;