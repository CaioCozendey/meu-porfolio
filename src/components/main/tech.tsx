import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs } from "react-icons/si"

const techs = [
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'CSS', icon: <SiCss3 /> },
    { name: 'Javascript', icon: <SiJavascript /> },
    { name: 'Typescript', icon: <SiTypescript /> },
    { name: 'ReactJS', icon: <SiReact /> },
    { name: 'NextKS', icon: <SiNextdotjs /> },
]

export default function Tech() {
    return (
        <div id='techs'>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <h1 className="text-white text-3xl xl:text-5xl lg:text-5xl font-semibold pb-12 text-center xl:text-left lg:text-left"> Tecnologias </h1>
            <div className="flex flex-row flex-wrap justify-around text-8xl pb-8 text-[#34d399] gap-8">
                {techs.map((tech) => (
                    <div>
                        {tech.icon}
                        <p className="text-lg text-center pt-2">{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}