import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { useState } from "react";
import { HiOutlineMenuAlt4 } from "@react-icons/all-files/hi/HiOutlineMenuAlt4"
import { IconContext } from "@react-icons/all-files";
import { GrClose } from "@react-icons/all-files/gr/GrClose"
import { BiCaretDown } from "@react-icons/all-files/bi/BiCaretDown"

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]

export default function Navbar() {
  const [active, setActive] = useState(true);

  return (
    <StaticQuery
      query={graphql`
      {
        sanityAppearances {
          header {
            mainNav {
              items {
                internalLink {
                  ... on SanityPost {
                    id
                    slug {
                      current
                    }
                    title
                    _type
                  }
                  ... on SanityLegal {
                    id
                    slug {
                      current
                    }
                    title
                    _type
                  }
                  ... on SanityAuthor {
                    id
                    name
                    slug {
                      current
                    }
                    _type
                  }
                }
                externalUrl
                text
                submenuChild {
                  text
                  internalLink {
                    ... on SanityAuthor {
                      id
                      name
                      slug {
                        current
                      }
                      _type
                    }
                    ... on SanityLegal {
                      id
                      title
                      slug {
                        current
                      }
                      _type
                    }
                    ... on SanityPost {
                      id
                      title
                      slug {
                        current
                      }
                      _type
                    }
                  }
                  externalUrl
                  _type
                }
              }
            }
          }
          branding {
            logo {
              asset {
                url
              }
            }
            favicon {
              asset {
                url
              }
            }
            logoWidth
          }
        }
        sanityProfileSettings {
          company_name
        }
      }
      
            `
      }
      render={data => (
        <>
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white border-b">
                        <Popover>
                            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                        <div className="flex items-center justify-between w-full md:w-auto">
                                            <a href="/">
                                            <h1 class="font-bold text-2xl">George<span class="accent"> Aguilar</span></h1>
                                            </a>
                                            <div className="-mr-2 flex items-center md:hidden">
                                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Open main menu</span>
                                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                        {navigation.map((item) => (
                                            <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        ))}
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Log in
                                        </a>
                                    </div>
                                </nav>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="duration-150 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                                >
                                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="px-5 pt-4 flex items-center justify-between">
                                            <div>
                                                <img
                                                    className="h-8 w-auto"
                                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Close main menu</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="px-2 pt-2 pb-3 space-y-1">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                        <a
                                            href="#"
                                            className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>


                    </div>
                </div>
            </div>

        </>
      )}
    />
  )
}