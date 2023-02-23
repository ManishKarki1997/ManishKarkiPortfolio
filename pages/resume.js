import React from 'react'

import resumeStyles from '../styles/resume.module.css'

const Resume = () => {
    return (
        // <div className={`${resumeStyles.resumePage} p-6 mx-auto page max-w-2xl print:max-w-a4 md:max-w-a4 md:h-a4 xsm:p-8 sm:p-9 md:p-16 bg-white`}>
        <div className={`${resumeStyles.resumePage} p-6 mx-auto page max-w-2xl print:max-w-a4 md:max-w-5xl md:h-a4 xsm:p-8 sm:p-9 md:p-16 bg-white`}>

            <div className="mb-14">
                <h1 className='font-bold mb-2'>Manish Karki</h1>
                <p className="font-normal">Fullstack Web Developer | karkimanish.com</p>
                {/* <span className='text-lg text-rsecondary'>I specialize in building fullstack web applications and occasional mobile app development.</span> */}
            </div>

            <div className='md:col-count-2 print:col-count-2 col-gap-md md:h-a4-col print:h-a4-col col-fill-auto'>

                <div className="grid gap-6 grid-cols-2">
                    <div>
                        {/* experience - 1 */}
                        <section className="section">
                            <h5 className='text-rsecondary mb-5 font-bold'>Experience</h5>
                            <div className="mb-8">
                                <div className="mb-1">
                                    <h5 className="text-rprimary font-bold mb-1">GatewayX</h5>
                                    <div className="flex items-center gap-2">
                                        <p className="text-rsecondary font-normal">&apos;22 - Present</p>
                                        <div className="flex items-center gap-2">
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

                            {/* experience 3 */}
                            <div className="mb-8">
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
                                    <p className='font-semibold'>&gt; Handled the logic and functionality of registering a company in the USA for a US based company </p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="mb-1">
                                    <h5 className="text-rprimary font-bold mb-1">Softweb Developers</h5>
                                    <div className="flex items-center gap-2">
                                        <p className="text-rsecondary font-normal">Jul &apos;20 - Oct &apos;20</p>
                                        <div className="flex items-center gap-2">
                                            <p className='text-rtertiary'>|</p>
                                            <p className='text-rtertiary'>Vue.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <p className='font-semibold'>&gt; Tasked with the responsibilities of developing business logic for components, and API Integrations for a Canadian insurance firm</p>
                                </div>
                            </div>

                        </section>
                    </div>

                    <div>
                        {/* projects */}
                        <section className="section">
                            <h5 className='text-rsecondary mb-5 font-bold'>Projects</h5>

                            {/* project 1 */}
                            <div className="mb-8">
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
                            <div className="mb-8">
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
                            <div className="mb-8">
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
                            <div className="mb-8">
                                <div className="mb-1">
                                    <h5 className="text-rprimary font-bold mb-1">Organize App</h5>
                                    <div className="flex items-center gap-2">
                                        {/* <p className="text-rsecondary font-normal">&apos;22 - Present</p> */}
                                        <div className="flex items-center gap-2">
                                            {/* <p className='text-rtertiary'>|</p> */}
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume