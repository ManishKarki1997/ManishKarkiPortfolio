import React from 'react'

import resumeStyles from '../styles/resume.module.css'

import { HiOutlineExternalLink as ExternalLinkIcon } from 'react-icons/hi'
import { AiFillGithub as GithubIcon, AiFillLinkedin as LinkedIn } from 'react-icons/ai'
import { BsPhone as PhoneIcon } from 'react-icons/bs'

const LANGUAGES = [
    {
        name: "HTML"
    },
    {
        name: "CSS"
    },
    {
        name: "SCSS"
    },
    {
        name: "Javascript"
    },
    {
        name: "Typescript"
    },
]



const LIBRARIES = [
    {
        name: "Vue"
    },
    {
        name: "Nuxt"
    },
    {
        name: "React"
    },
    {
        name: "Next"
    },
    {
        name: "GSAP"
    },
    {
        name: "Node"
    },
    {
        name: "Express"
    },
    {
        name: "Socket"
    },
    {
        name: "Prisma"
    },
    {
        name: "MongoDB"
    },
    {
        name: "and more..."
    },
]

const TOOLS_AND_PLATFORMS = [
    {
        name: "Git"
    },
    {
        name: "Netlify"
    },
    {
        name: "Heroku"
    },
    {
        name: "Vercel"
    },
    {
        name: "Cloudinary"
    },
]

const Resume = () => {
    return (
        <>
            <div className={`${resumeStyles.resumePage} p-6 mx-auto page max-w-2xl print:max-w-a4 md:max-w-a4 md:h-a4 xsm:p-8 sm:p-9 md:p-16 bg-white`}>

                <div className="mb-14">
                    <h1 className='font-bold mb-2'>Manish Karki</h1>
                    <div className="flex items-center gap-2 text-lg">
                        {/* <p className="font-normal unstyled">Fullstack Web Developer</p>

                        <p className='text-rtertiary unstyled'>|</p> */}

                        <a href="https://karkimanish.com" target="_blank" className="flex items-center gap-2 text-lg" rel="noreferrer">
                            <ExternalLinkIcon className='text-rsecondary' />
                            <p className="text-rsecondary font-normal unstyled">karkimanish.com</p>
                        </a>

                        <p className='text-rtertiary unstyled'>|</p>

                        <a href="https://github.com/ManishKarki1997" target="_blank" className="flex items-center gap-2 text-lg" rel="noreferrer">
                            <GithubIcon className='text-rsecondary' />
                            <p className="text-rsecondary font-normal unstyled" style={{ fontSize: "17px" }}>ManishKarki1997</p>
                        </a>

                        <p className='text-rtertiary unstyled'>|</p>

                        <a href="https://www.linkedin.com/in/manish-karki-179a181b5/" target="_blank" className="flex items-center gap-2 text-lg" rel="noreferrer">
                            <LinkedIn className='text-rsecondary' />
                            <p className="text-rsecondary font-normal unstyled" style={{ fontSize: "17px" }}>LinkedIn</p>
                        </a>

                        <p className='text-rtertiary unstyled'>|</p>

                        <div className="flex items-center gap-2 text-lg cursor-pointer">
                            <PhoneIcon className='text-rsecondary' size={15} />
                            <p className="text-rsecondary font-normal unstyled" style={{ fontSize: "17px" }}>+977-9845701354</p>
                        </div>

                    </div>
                    {/* <span className='text-lg text-rsecondary'>I specialize in building fullstack web applications and occasional mobile app development.</span> */}
                </div>

                <div className='md:col-count-2 print:col-count-2 col-gap-md md:h-a4-col print:h-a4-col col-fill-auto'>

                    {/* experience */}
                    <section className="section first:mt-0">
                        <h5 className='text-link mb-5 font-bold'>Experience</h5>
                        {/* experience - 1 */}
                        <div className="mb-8 break-inside-avoid">
                            <div className="mb-1">
                                <h5 className="text-rprimary font-bold mb-1">GatewayX</h5>
                                <div className="flex items-center gap-2">
                                    <p className="text-rsecondary font-normal  max-content">&apos;22 - Present</p>
                                    <div className="flex flex-wrap items-start gap-2">
                                        <p className='text-rtertiary'>|</p>
                                        <p className='text-rtertiary'>MERN.</p>
                                        <p className='text-rtertiary'>SocketIO.</p>
                                        <p className='text-rtertiary'>WebRTC.</p>
                                        <p className='text-rtertiary'>ReactMapGL.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <p className='font-semibold'>&gt; Built a video/audio and chat communication system for a ticket/support management app</p>
                                <p className='font-semibold'>&gt; Built a case management system for Australia-based healthcare provider  </p>
                                <p className='font-semibold'>&gt; Wrote a webscrapper that scraped news from google/duckduckgo based on different criterion </p>
                                <p className='font-semibold'>&gt; Developed a webapp to live-track user&apos;s position from their mobile devices and render in an interactive map </p>
                            </div>
                        </div>

                        {/* experience 2 */}
                        <div className="mb-8 break-inside-avoid">
                            <div className="mb-1">
                                <h5 className="text-rprimary font-bold mb-1">Worckhub</h5>
                                <div className="flex items-center gap-2">
                                    <p className="text-rsecondary font-normal">Jan &apos;22 - Apr &apos;22</p>
                                    <div className="flex items-center gap-2">
                                        <p className='text-rtertiary'>|</p>
                                        <p className='text-rtertiary'>Vue.</p>
                                        <p className='text-rtertiary'>SocketIO.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <p className='font-semibold'>&gt; Developed the UI and booking system of different &quot;experiences&quot; at DamiExperience </p>
                                <p className='font-semibold'>&gt; Handled the UI logic and functionality of registering a company in the USA for a US based company </p>
                            </div>
                        </div>

                        {/* experience 3 */}
                        <div className="mb-8 break-inside-avoid">
                            <div className="mb-1">
                                <h5 className="text-rprimary font-bold mb-1">Softweb Developers</h5>
                                <div className="flex items-center gap-2">
                                    <p className="text-rsecondary font-normal">August &apos;21 - Dec &apos;21</p>
                                    <div className="flex items-center gap-2">
                                        <p className='text-rtertiary'>|</p>
                                        <p className='text-rtertiary'>Vue.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <p className='font-semibold'>&gt; Tasked with the responsibilities of developing business logic for components,
                                    and API Integrations for a canadian insurance agency </p>
                            </div>
                        </div>

                    </section>

                    {/* education */}
                    <section className="section mt-8 first:mt-0">
                        <h5 className='text-link mb-5 font-bold break-inside-avoid'>Education</h5>
                        <div className="mb-8 break-inside-avoid">
                            <div className="mb-1">
                                <h5 className="text-rprimary font-bold mb-1">Bachelor</h5>
                                <div className="flex items-start gap-2">
                                    <p className="text-rsecondary font-normal max-content">&apos;16 - &apos;21</p>
                                    <p className="text-rsecondary font-normal">|</p>
                                    <p className="text-rsecondary font-normal">Bachelor&apos;s degree in CSIT</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <h5 className="text-rprimary font-bold mb-1">A-Level</h5>
                                <div className="flex items-start gap-2">
                                    <p className="text-rsecondary font-normal max-content">&apos;13 - &apos;15</p>
                                    <p className="text-rsecondary font-normal">|</p>
                                    <p className="text-rsecondary font-normal">A-Levels from Chelsea International Academy</p>
                                </div>
                            </div>
                            <div className="mb-1">
                                <h5 className="text-rprimary font-bold mb-1">SLC</h5>
                                <div className="flex items-start gap-2">
                                    <p className="text-rsecondary font-normal max-content">&apos;11 - &apos;13</p>
                                    <p className="text-rsecondary font-normal">|</p>
                                    <p className="text-rsecondary font-normal">United English Boarding School</p>
                                </div>
                            </div>
                        </div>
                    </section>



                    {/* skills */}
                    <section className="section mt-8 first:mt-0">
                        {/* <h5 className='text-rsecondary mb-5 font-bold  break-inside-avoid'>Skills</h5> */}
                        <div className="mb-8 break-inside-avoid">
                            <div className="mb-6">
                                <h5 className="text-link font-bold mb-4">Languages</h5>
                                <div className="flex items-center gap-2 flex-wrap">
                                    {
                                        LANGUAGES.map(language => (
                                            <div key={language.name} className="px-2 py-1 rounded bg-gray-200 flex items-center justify-center text-sm">
                                                <p className="text-white font-bold mb-0 unstyled">{language.name}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="mb-6">
                                <h5 className="text-link font-bold mb-4">Libraries/Frameworks</h5>
                                <div className="flex items-center gap-2 flex-wrap">
                                    {
                                        LIBRARIES.map(library => (
                                            <div key={library.name} className="px-2 py-1 rounded bg-gray-200 flex items-center justify-center text-sm">
                                                <p className="text-white font-bold mb-0 unstyled">{library.name}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="mb-6">
                                <h5 className="text-link font-bold mb-4">Tools and Platforms</h5>
                                <div className="flex items-center gap-2 flex-wrap">
                                    {
                                        TOOLS_AND_PLATFORMS.map(tool => (
                                            <div key={tool.name} className="px-2 py-1 rounded bg-gray-200 flex items-center justify-center text-sm">
                                                <p className="text-white font-bold mb-0 unstyled">{tool.name}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>
                    </section>


                    {/* projects */}
                    <section className="section mt-8 first:mt-0">
                        <h5 className='text-link mb-5 font-bold break-inside-avoid'>Projects</h5>

                        {/* project 1 */}
                        <div className="mb-8 break-inside-avoid">
                            <div className="mb-1">
                                <h5 className="text-rprimary font-bold mb-1">E-commerce Application</h5>
                                <div className="flex items-center gap-2">
                                    {/* <p className="text-rsecondary font-normal">&apos;22 - Present</p> */}
                                    <div className="flex items-center gap-2">
                                        {/* <p className='text-rtertiary'>|</p> */}
                                        <p className='text-rtertiary'>Nuxt.</p>
                                        <p className='text-rtertiary'>Node.</p>
                                        <p className='text-rtertiary'>Postgres.</p>
                                        <p className='text-rtertiary'>Stripe.</p>
                                    </div>
                                </div>
                                <div className="content">
                                    <p className="font-semibold">
                                        A full-stack server-side rendered e-commerce application including the admin side dashboard.
                                        Includes payment system using Stripe, implement Lazy-Loading images and related products using Intersection Observer.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* project 2 */}
                        <div className="mb-8 break-inside-avoid">
                            <div className="mb-1">
                                <h5 className="text-rprimary font-bold mb-1">Typewars</h5>
                                <div className="flex items-center gap-2">
                                    {/* <p className="text-rsecondary font-normal">&apos;22 - Present</p> */}
                                    <div className="flex items-center gap-2">
                                        {/* <p className='text-rtertiary'>|</p> */}
                                        <p className='text-rtertiary'>Vue.</p>
                                        <p className='text-rtertiary'>Node.</p>
                                        <p className='text-rtertiary'>Mongodb.</p>
                                        <p className='text-rtertiary'>SocketIO.</p>
                                    </div>
                                </div>
                                <div className="content">
                                    <p className="font-semibold">
                                        A real-time multiplayer typing game with the ability to challenge players, play a rematch and some typing stats.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* project 3 */}
                        <div className="mb-8 break-inside-avoid">
                            <div className="mb-1">
                                <h5 className="text-rprimary font-bold mb-1">Genshin Impact Guide App</h5>
                                <div className="flex items-center gap-2">
                                    {/* <p className="text-rsecondary font-normal">&apos;22 - Present</p> */}
                                    <div className="flex items-center gap-2">
                                        {/* <p className='text-rtertiary'>|</p> */}
                                        <p className='text-rtertiary'>React Native.</p>
                                        <p className='text-rtertiary'>Node.</p>
                                        <p className='text-rtertiary'>Webscraping.</p>
                                    </div>
                                </div>
                                <div className="content">
                                    <p className="font-semibold">
                                        A Genshin Impact fanapp to lookup farming materials, character information, events, setup notifications for as well as a free public API, created by webscraping wiki data.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* project 4 */}
                        <div className="mb-8 break-inside-avoid">
                            <div className="mb-1">
                                <h5 className="text-rprimary font-bold mb-1">Organize App</h5>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-2">
                                        <p className='text-rtertiary'>Vue3.</p>
                                        <p className='text-rtertiary'>Electron.</p>
                                        <p className='text-rtertiary'>NaiveUI.</p>
                                    </div>
                                </div>
                                <div className="content">
                                    <p className="font-semibold">
                                        A Vue3 & Electron application that organizes your files in a directory according to your set-up settings by looking at the file extensions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* contact */}
                    {/* <section className="section mt-8 first:mt-0">
                        <h5 className='text-rsecondary mb-5 font-bold  break-inside-avoid'>Contact</h5>
                        <div className="mb-8">

                            <div className="flex items-center gap-2">
                                <a href="https://karkimanish.com" target="_blank" className="flex items-center gap-2 mb-1 text-lg" rel="noreferrer">
                                    <p className="text-rsecondary font-normal unstyled" style={{ fontSize: "17px" }}>karkimanish.com</p>
                                </a>
                                |
                                <a href="https://manishkarki.vercel.app" target="_blank" className="flex items-center gap-2 mb-1 text-lg" rel="noreferrer">
                                    <p className="text-rsecondary font-normal unstyled" style={{ fontSize: "17px" }}>manishkarki.vercel.app</p>
                                </a>
                                <ExternalLinkIcon className='text-rsecondary' />
                            </div>


                            <a href="https://github.com/ManishKarki1997" target="_blank" className="flex items-center gap-2 mb-1 text-lg" rel="noreferrer">
                                <p className="text-rsecondary font-normal unstyled" style={{ fontSize: "17px" }}>github.com/ManishKarki1997</p>
                                <GithubIcon className='text-rsecondary' />
                            </a>

                            <a href="https://www.linkedin.com/in/manish-karki-179a181b5/" target="_blank" className="flex items-center gap-2 mb-1 text-lg" rel="noreferrer">
                                <p className="text-rsecondary font-normal unstyled" style={{ fontSize: "17px" }}>linkedin.com/in/manish-karki-179a181b5/</p>
                                <LinkedIn className='text-rsecondary' />
                            </a>

                            <div className="flex items-center gap-2 mb-1 text-lg cursor-pointer">
                                <p className="text-rsecondary font-normal unstyled" style={{ fontSize: "17px" }}>+977-9845701354</p>
                                <PhoneIcon className='text-rsecondary' />
                            </div>


                        </div>
                    </section> */}


                </div>
            </div>
        </>
    )
}

export default Resume