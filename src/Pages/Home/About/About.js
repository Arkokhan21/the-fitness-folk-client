import React from 'react';

const About = () => {
    return (
        <section>
            <section className="p-6 my-6 bg-gray-800 text-gray-100">
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  bg-teal-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9  text-gray-800">
                                <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                                <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                                <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">300</p>
                            <p className="capitalize">Orders</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-gray-900  text-gray-100">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  bg-teal-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9  text-gray-800">
                                <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                                <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                                <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                                <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">3500</p>
                            <p className="capitalize">New Customers</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-gray-900  text-gray-100">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  bg-teal-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9  text-gray-800">
                                <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                                <rect width="32" height="32" x="80" y="264"></rect>
                                <rect width="32" height="32" x="240" y="128"></rect>
                                <rect width="32" height="32" x="136" y="168"></rect>
                                <rect width="32" height="32" x="400" y="264"></rect>
                                <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">182%</p>
                            <p className="capitalize">Growth</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-gray-900  text-gray-100">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4  bg-teal-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9  text-gray-800">
                                <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">11%</p>
                            <p className="capitalize">Bounce rate</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="p-6">
                <div className="container max-w-xl mx-auto">
                    <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8  bg-gray-900  text-gray-100">
                        <img src="https://media.istockphoto.com/photos/happy-personal-trainer-working-at-the-gym-picture-id852401732?b=1&k=20&m=852401732&s=170667a&w=0&h=fWQZfRpZTvSJ-xDnbeuwlci5Te_4RKt5raaeCShlgpk=" alt="" className="w-20 h-20 rounded-full  bg-gray-500" />
                        <p>About Me</p>
                        <blockquote className="max-w-lg text-lg italic font-medium text-center">I am a certified personal trainer with over 10 years training experience with a specialization in aesthetic bodybuilding, functional strength training, and powerlifting. I am also a certified nutrition specialist. I have helped trained hundreds of clients at my gym "FP Fitness" and would love to help you too! I will help you achieve your goals, whatever they may be! My services will be able to help any beginner, intermediate, or advanced lifter achieve their goals. The success of my clients is what I take the most pride in and I will make sure that you will be on the right path!</blockquote>
                        <div className="text-center  text-gray-400">
                            <p>Tony Stark</p>
                            <p>The Fitness Folk</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default About;