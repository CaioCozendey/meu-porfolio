import { Code2, Github, Linkedin, Smartphone, Mail } from 'lucide-react';

const navigation = [
    { name: 'Github', href: 'https://github.com/CaioCozendey', current: false, target: '_blank', lucide: <Github /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/caio-dias-cozendey-502a1418a/', current: false, target: '_blank', lucide: <Linkedin /> },
    { name: 'Portfólio', href: '#', current: false, lucide: <Code2 /> },
    { name: 'WhatsApp', href: 'https://web.whatsapp.com/send?phone=5522998562641', current: false, target: '_blank', lucide: <Smartphone /> },
    { name: 'Email', href: 'mailto:caiocozendey@hotmail.com', current: false, target: '_blank', lucide: <Mail /> },
]

export default function Footer() {
    return (
        <footer className="bg-gray-900 shadow mt-4">
            <div className="w-full mx-auto max-w-7xl p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center mb-4 sm:mb-0">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white pr-2 m-auto">Caio Dias</span>
                    </div>
                    <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-0 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 ">
                        {navigation.map((item, index) => (
                            <li
                                key={index}
                                className={'mr-4 hover:underline md:mr-6 flex gap-1'

                                }
                            >
                                <a
                                    href={item.href}
                                    target='_blank'
                                >
                                    <div className='flex items-center gap-1'>
                                        {item.lucide}
                                        {item.name}
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">Caio Dias Cozendey - Front-end Developer</span>
            </div>
        </footer>
    )
}