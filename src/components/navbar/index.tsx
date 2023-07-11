'use client'

import { Link } from "react-scroll"
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Sobre', href: '#', current: false, to: 'sobre', spy: true, smooth: true, offset: - 100, duration: 500 },
    { name: 'Projetos', href: '#', current: false, to: 'projetos', spy: true, smooth: true, offset: - 100, duration: 500 },
    { name: 'Tecnologias', href: '#', current: false, to: 'techs', spy: true, smooth: true, offset: - 100, duration: 500 },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Disclosure as="nav" className="bg-gray-900 fixed w-full">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                to={item.to}
                                                spy={item.spy}
                                                smooth={item.smooth}
                                                offset={item.offset}
                                                duration={item.duration}
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:text-[#34d399] duration-150',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                        <a href="https://web.whatsapp.com/send?phone=5522998562641"
                                            className='text-gray-300 hover:text-[#34d399] duration-150 rounded-md px-3 py-2 text-sm font-medium'
                                            target="_blank"
                                        >
                                            WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="/me.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Link
                                    to={item.to}
                                    spy={item.spy}
                                    smooth={item.smooth}
                                    offset={item.offset}
                                    duration={item.duration}
                                    key={item.name}
                                    href={item.href}
                                    as="a"
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:text-[#34d399] duration-150',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : false}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
