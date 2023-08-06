'use client';

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import './globals.css';
import avatar from './public/assets/avatar.jpg';
import youtube from './public/assets/youtube_icon.png';
import twitter from './public/assets/twitter_icon.png';
import facebook from './public/assets/fb_icon.png';
import email from './public/assets/email_icon.png';
import motor1 from './public/assets/motor1.jpeg';
import office from './public/assets/office.jpeg';
import pool from './public/assets/pool.jpeg';
import welding1 from './public/assets/welding1.jpeg';
import electrical1 from './public/assets/electrical1.jpeg';
import plumb from './public/assets/plumb.jpg';
import pump1 from './public/assets/pump1.jpeg';
import logo1 from './public/assets/logo1.jpeg';
import machineInstallation from './public/assets/machine_installation.jpg';
import weldingProject from './public/assets/welding_project.jpg';


export default function Home() {

    const emailAddress = 'dimaxelectricalsolutions@gmail.com'

    const router = useRouter();
    const [client, setClient] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [loading, setLoading] = React.useState(false);

    const [buttonDisabled, setButtonDisabled] = React.useState(true);

    useEffect(() => {
        if(client.name.length > 0 && client.email.length > 0 && client.subject.length > 0 && client.message.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [client]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch('/api/clients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(client)
            });
            const data = await res.json();
            if(data.success) {
                setClient({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
                setLoading(false);
            } else {
                setLoading(false);
            }
            router.push('/');
        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="antialiased text-gray-600 bg-gray-100">
            <div className="absolute w-full min-h-screen">
                <div className="absolute top-0 w-full h-72 bg bg-bottom">
                </div>
            </div>

            {/* Hero section */}
            <section className="flex justify-center items-center min-h-screen">
                <div className="relative">
                    <div className="backDiv">
                    </div>
                    <div className="relative md:flex z-10 bg-gray-50 p-10 max-w-4xl rounded-md shadow-md">
                        <div className="flex flex-col space-x-11 justify-between md:flex-row">
                            <div className="space-y-10 py-2">
                                <div className='flex flex-col space-x-6 bg-gray-200 md:bg-gray-50 p-5 md:p-0 rounded-lg'>
                                    <h1 className="text-4xl md:text-4xl font-serif text-center font-bold text-gray-800">
                                        DIMAX ENGINEERING COMPANY LTD
                                    </h1>
                                    <h2 className="text-md md:text-lg text-center text-gray-600">
                                        'Where Engineering Excellence Meets Customer Satisfaction'
                                    </h2>
                                    <div className='flex justify-center pb-2'>
                                        <Image 
                                            src={logo1} 
                                            className='w-28 h-28 rounded-xl'/>
                                            
                                    </div>                                    
                                </div>
                                <p className="text-lg md:text-xl text-center md:text-left leading-relaxed">
                                    Welcome to Dimax Engineering Company, we empower innovation 
                                    through engineering excellence.  
                                    Our team of skilled engineers is committed to delivering 
                                    top-notch services that surpass expectations. Partner 
                                    with us for unmatched quality, precision, and a 
                                    dedication to achieving your project's success. 
                                    Step into a world of engineering brilliance with 
                                    Dimax Engineering Company.
                                </p>
                                <div className="inline-flex space-x-4 text-xl">
                                    <Link href='https://www.youtube.com'>
                                        <Image src={youtube} 
                                            className="w-6 h-5"/>
                                    </Link>
                                    <Link href='https://www.twitter.com'>
                                    <Image src={twitter} 
                                            className="w-6 h-5"/>
                                    </Link>
                                    <Link href='https://www.facebook.com'>
                                    <Image src={facebook} 
                                            className="w-6 h-5"/>
                                    </Link>
                                    <a href={`mailto:${process.env.EMAIL_USER}`}>
                                    <Image src={email} 
                                            className="w-6 h-5"/>
                                    </a>
                                </div>            
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us section */}
            <section className="bg-gray-100">
                <div className="max-w-7xl mx-auto pb-10 pt-10 px-6">
                    <div className="text-center text-gray-800 space-y-2">
                        <h2 className="text-5xl font-bold">About Us</h2>
                        <p className="text-lg text-gray-600">Here is a brief description of what we are.</p>
                    </div>
                </div>
                <div className='mx-auto px-6 md:px-10'>
                    <p className="text-lg leading-relaxed">
                        Dimax Engineering Company is a leading provider of comprehensive 
                        electrical and mechanical solutions, catering to a diverse range 
                        of industries. With a strong commitment to excellence, innovation, 
                        and customer satisfaction, we have established ourselves as a 
                        reliable partner for all your engineering needs. Our team of 
                        skilled and experienced electrical engineers specializes in 
                        various services, including motor rewinding, water pump servicing 
                        and repair, electrical and plumbing works, swimming pool repair 
                        and construction, electric machine repair, office design, welding, 
                        and fabrication. 
                        <br/><br/>
                        At Dimax Engineering Company, we take pride in 
                        delivering top-notch solutions that exceed our clients' 
                        expectations. Whether it's optimizing the performance of your 
                        electrical systems, providing expert plumbing solutions, or 
                        crafting intricate welding and fabrication projects, we ensure 
                        unmatched quality and precision in every endeavor. 
                        With a client-centric approach, we tailor our services to meet 
                        your specific requirements, ensuring seamless integration and 
                        exceptional results. Our commitment to innovation and continuous 
                        improvement enables us to stay at the forefront of industry 
                        advancements, ensuring that your projects benefit from the 
                        latest technologies and practices. 
                        <br/><br/>
                        Choose Dimax Engineering 
                        Company for unparalleled expertise, reliability, and a steadfast 
                        commitment to delivering excellence in engineering solutions. 
                        Let us be your trusted partner in achieving your goals and 
                        bringing your projects to successful fruition.
                    </p>
                </div>
            </section>

            {/* Services section */}
            <section className="bg-gray-100">
                <div className="max-w-7xl mx-auto pt-8 pb-16 px-6">
                    <div className="text-center text-gray-800 space-y-2">
                        <h2 className="text-5xl font-bold">Services</h2>
                        <p className="text-lg text-gray-600 ">Here are the services we offer.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
                    <div className="relative">
                        {/* <div className="backDiv"></div> */}
                        <div className="relative z-10 bg-gray-200 p-8 rounded:lg shadow:md space-y-2">
                            <Image 
                                src={motor1} 
                                className="w-60 h-40 rounded"/>
                            <h3 className="text-2xl font-bold">Motor Rewinding</h3>
                            <p>
                                Efficient motor rewinding is crucial for extending the life 
                                and optimizing the performance of electric motors. With our 
                                expertise, we provide precise and reliable motor rewinding 
                                services, ensuring that your motors operate at their best, 
                                reducing downtime and saving costs. Trust us with your motor 
                                for repair and maintenance.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        {/* <div className="backDiv"></div> */}
                        <div className="relative z-10 bg-gray-200 p-8 rounded:lg shadow:md space-y-2">
                            <Image 
                                src={pump1} 
                                className="w-60 h-40 rounded"/>
                            <h3 className="text-2xl font-bold">Water Pump Servicing and Repair</h3>
                            <p>
                                Our comprehensive water pump servicing and repair solutions guarantee 
                                a consistent water supply for your residential, commercial, or industrial 
                                needs. From routine maintenance to urgent repairs, we keep your water pumps 
                                functioning optimally.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        {/* <div className="backDiv"></div> */}
                        <div className="relative z-10 bg-gray-200 p-8 rounded:lg shadow:md space-y-2">
                            <Image 
                                src={plumb} 
                                className="w-60 h-40 rounded"/>
                            <h3 className="text-2xl font-bold">Electrical And Plumbing Works</h3>
                            <p>
                                Covering a wide range of electrical and plumbing solutions, we 
                                ensure seamless integration of these essential systems in your projects. 
                                We handle everything from electrical wiring and lighting installations to 
                                plumbing fixtures, ensuring safety and compliance with industry standards.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        {/* <div className="backDiv"></div> */}
                        <div className="relative z-10 bg-gray-200 p-8 rounded:lg shadow:md space-y-2">
                            <Image 
                                src={pool} 
                                className="w-60 h-40 rounded"/>
                            <h3 className="text-2xl font-bold">Swimming Pool Repair And Construction</h3>
                            <p>
                                Dive into a worry-free swimming experience with our top-notch swimming pool 
                                repair and construction services. Whether it's fixing leaks, upgrading pool 
                                equipment, or designing and building a new pool, we bring professionalism and 
                                quality to every project.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        {/* <div className="backDiv"></div> */}
                        <div className="relative z-10 bg-gray-200 p-8 rounded:lg shadow:md space-y-2">
                            <Image 
                                src={electrical1} 
                                className="w-60 h-40 rounded"/>
                            <h3 className="text-2xl font-bold">Electrical Machine Repair</h3>
                            <p>
                                Our electrical machine repair services cater to various industrial 
                                machinery, helping you maintain peak performance and minimize downtime. 
                                We possess the technical know-how to diagnose and address issues promptly, 
                                ensuring your equipment operates smoothly. Trust us with your machine.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        {/* <div className="backDiv"></div> */}
                        <div className="relative z-10 bg-gray-200 p-8 rounded:lg shadow:md space-y-2">
                            <Image 
                                src={welding1} 
                                className="w-60 h-40 rounded"/>
                            <h3 className="text-2xl font-bold">Welding And Fabrication</h3>
                            <p>
                                From intricate metalwork to robust structures, our welding and fabrication 
                                services are tailored to meet diverse industrial and construction needs. 
                                We bring craftsmanship and precision to 
                                every project, ensuring the creatio of durable, custom-made solutions. In all, we 
                                deliver excellence every weld.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        {/* <div className="backDiv"></div> */}
                        <div className="relative z-10 bg-gray-200 p-8 rounded:lg shadow:md space-y-2">
                            <Image 
                                src={office} 
                                className="w-60 h-40 rounded"/>
                            <h3 className="text-2xl font-bold">Office Design</h3>
                            <p>
                                Elevate your workspace with our expert office design services. From 
                                efficient electrical layouts to innovative lighting solutions, we create 
                                a conducive environment that fosters productivity, comfort, and aesthetics 
                                for your office space. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work section */}
            <section className="bg-gray-100">
                <div className="max-w-7xl mx-auto pt-20 pb-16 px-6">
                    <div className="text-center text-gray-800 space-y-2">
                        <h2 className="text-5xl font-bold">Projects</h2>
                        <p className="text-lg text-gray-700">Some of the projects we have worked on.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
                    <div className="relative">
                        {/* <div className="backDiv"></div> */}
                        <div className="relative z-10 bg-gray-200 p-8 rounded:lg shadow:md space-y-2">
                            <Image 
                                src={machineInstallation} 
                                className="w-60 h-40 rounded"/>
                            <h3 className="text-2xl font-bold">Machine Installation</h3>
                            <p>
                                We have done machine installation projects in various places in Uganda. 
                                The machines that we have installed include motors, both single and three-phase 
                                motors and many more electric machines. We have worked in various places including 
                                Kampala, Bweyogerere and many more.
                            </p><br />
                        </div>
                    </div>
                    <div className="relative">
                        {/* <div className="backDiv"></div> */}
                        <div className="relative z-10 bg-gray-200 p-8 rounded:lg shadow:md space-y-2">
                            <Image 
                                src={pump1} 
                                className="w-60 h-40 rounded"/>
                            <h3 className="text-2xl font-bold">Water Pump Repair</h3>
                            <p>
                                 We have done water pump repairs in various places in the country, places like 
                                 Bweyogerere and others. We have repaired different types of water pumps in various 
                                 companies in Uganda including Pepsi Uganda and many others. We managed to gain the 
                                 trust of such big companies.  
                            </p><br />
                        </div>
                    </div>
                    <div className="relative">
                        {/* <div className="backDiv"></div> */}
                        <div className="relative z-10 bg-gray-200 p-8 rounded:lg shadow:md space-y-2">
                            <Image 
                                src={weldingProject} 
                                className="w-60 h-40 rounded"/>
                            <h3 className="text-2xl font-bold">Metal Works</h3>
                            <p>
                                We have produced all kinds of metal works in various places in Uganda. 
                                Our company has made numerous products from welding, such as metallic beds, 
                                chairs, tables, and many others. These have been delivered to various customers 
                                on order and they really love our products. 
                            </p><br />
                        </div>
                    </div> 
                </div>
            </section>

            {/* Contact section */}
            <section className="pb-20">
                <div className="max-w-7xl mx-auto pt-20 pb-12 px-6">
                    <div className="text-center text-gray-800 space-y-2">
                        <h2 className="text-5xl font-bold">Contact</h2>
                        <p className="text-lg text-gray-600">Get in touch with us.</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    {/* <div className="backDiv"> */}
                    {/* </div> */}
                    <div className="relative md:flex z-10 bg-gray-50 p-12 max-w-4xl rounded-md shadow-md">
                        <div className="flex flex-col space-x-11 justify-between md:flex-row">
                            <form action="" onSubmit={handleSubmit}>
                                <div className="flex flex-col space-y-5 md:space-y-0 md:space-x-24 md:flex-row">
                                    <input 
                                        type="text" 
                                        className="shadow appearance-none border rounded w-80 md:w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                        id="name" 
                                        placeholder="Name" 
                                        onChange={(e) => setClient({...client, name:e.target.value})}/>
                                    <input 
                                        type="email" 
                                        className="shadow appearance-none border rounded w-80 md:w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                        id="email" 
                                        placeholder="Email" 
                                        onChange={(e) => setClient({...client, email:e.target.value})}/>
                                </div>
                                <div className="mt-5">
                                    <input 
                                        type="text" 
                                        className="shadow appearance-none border rounded w-80 md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                        id="subject" 
                                        placeholder="Subject" 
                                        onChange={(e) => setClient({...client, subject:e.target.value})}/>
                                </div>
                                <div className="mt-5">
                                    <textarea 
                                        type="text" 
                                        className="shadow overflow-auto resize-y h-40 appearance-none border rounded w-full md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                        id="message" 
                                        placeholder="Enter Your Message Here" 
                                        onChange={(e) => setClient({...client, message:e.target.value})}/>
                                </div>
                                <div className="mt-5">
                                    <div className="-mt-2 mb-4">
                                        <h1 className="text-md">{loading ? 'Processing Feedback Form .....' : ''}</h1>
                                    </div>
                                    <button type="submit" className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-white hover:text-amber-900 px-6 py-2 rounded-md shadow:md">
                                        {buttonDisabled ? 'Provide Feedback' : 'Send Feedback'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

             {/* Footer */}
             <footer className="py-5 pl-10 bg-black text-white">
                <div className="container pt-lg-4">
                    <div className="flex flex-col text-center space-y-3 md:space-y-0 md:flex-row md:justify-between md:px-48">
                        <div className="col-lg-3 col-sm-6 footer-top">
                            <h4 className=" text-lg text-gray-300">Contacts</h4>
                            <ul className="text-gray-400">					
                                <li className="my-2"><span className="fa mr-1 fa-phone"></span>+256-705-785-716</li>
                                <li className="my-2"><span className="fa mr-1 fa-phone"></span>+256-761-062-045</li>
                    
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6 footer-top flex flex-col">
                            <h4 className="mb-1 text-lg text-gray-300">Email Address</h4>
                            <div className="flex">
                                <div>                                
                                    <span className="fa mr-1 fa-envelope text-gray-500"></span>
                                </div>
                                <div className="text-gray-400 pl-20 md:pl-0">
                                    <a href={`mailto:${emailAddress}`}><span className="hover:text-amber-700">dimaxelectricalsolutions@gmail.com</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <section className="copy-right py-4 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <p className="">© 2023 Dimax Engineering Company. All rights reserved | Design by TroyMoses
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>

            {/* Move to top */}
            <div className="move-top text-right">
                <Link href="/" className="move-top text-green-500 bg-green-500"> 
                    <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span>
                </Link>
            </div>

        </div>
    )
};