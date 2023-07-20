import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import './globals.css';
import avatar from '@/public/assets/avatar.jpg';
import youtube from '@/public/assets/youtube_icon.png';
import twitter from '@/public/assets/twitter_icon.png';
import facebook from '@/public/assets/fb_icon.png';
import email from '@/public/assets/email_icon.png';
import motor from '@/public/assets/motor.jpeg';
import office from '@/public/assets/office.jpeg';
import pool from '@/public/assets/pool.jpeg';
import welding from '@/public/assets/welding.jpeg';
import electrical from '@/public/assets/electrical.jpeg';
import plumb from '@/public/assets/plumb.jpg';
import pump from '@/public/assets/pump.jpeg';
import bgmotor from '@/public/assets/bgmotor.jpeg';


const Home = () => (
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
                <div className="relative md:flex z-10 bg-gray-50 p-12 max-w-4xl rounded-md shadow-md">
                    <div className="flex flex-col space-x-11 justify-between md:flex-row">
                        <div className="space-y-16 py-2">
                            <div>
                            <p className="text-lg">Hello, I am</p>
                            <h1 className="pt-1 text-5xl font-bold text-gray-800">
                                Wasoma Moses
                            </h1>
                            </div>
                            <p className="text-xl leading-relaxed">
                                Electrical Engineer who offers all kinds 
                                of services related to all engineering works.
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
                                <Link href='https://www.gmail.com'>
                                <Image src={email} 
                                        className="w-6 h-5"/>
                                </Link>
                            </div>            
                        </div>
                        <Image src={avatar} 
                                className="w-80 h-80 rounded-full border-8 border-white shadow-md flex-shrink-0"/>
                    </div>
                </div>
            </div>
        </section>

        {/* Services section */}
        <section className="bg-gray-100">
            <div className="max-w-7xl mx-auto pt-20 pb-16 px-6">
                <div className="text-center text-gray-800 space-y-2">
                    <h2 className="text-5xl font-bold">Services</h2>
                    <p className="text-lg">Here are the services we offer.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
                <div className="relative">
                    {/* <div className="backDiv"></div> */}
                    <div className="relative z-10 bg-gray-200 p-8 rounded:lg shadow:md space-y-2">
                        <Image 
                            src={motor} 
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
                            src={pump} 
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
                            src={electrical} 
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
                            src={welding} 
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
                    <p className="text-lg">Here are some of the projects we have worked on.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
                <div className="relative">
                    {/* <div className="backDiv"></div> */}
                    <div className="relative z-10 bg-gray-200 p-8 rounded:lg shadow:md space-y-2">
                        <Image 
                            src={motor} 
                            className="w-60 h-40 rounded"/>
                        <h3 className="text-2xl font-bold">Project Title</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adip non pro id el 
                            Lorem ipsum dolor sit amet, consectetur adip non pro id el 
                            Lorem ipsum dolor sit amet, consectetur adip non pro id el 
                            Lorem ipsum dolor sit amet, consectetur adip non pro id el 
                        </p><br />
                        <div>
                            <Link href='' className="bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-2 rounded-md shadow:md">
                                Explore More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    {/* <div className="backDiv"></div> */}
                    <div className="relative z-10 bg-gray-200 p-8 rounded:lg shadow:md space-y-2">
                        <Image 
                            src={pump} 
                            className="w-60 h-40 rounded"/>
                        <h3 className="text-2xl font-bold">Project Title</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adip non pro id el 
                            Lorem ipsum dolor sit amet, consectetur adip non pro id el 
                            Lorem ipsum dolor sit amet, consectetur adip non pro id el 
                            Lorem ipsum dolor sit amet, consectetur adip non pro id el 
                        </p><br />
                        <div>
                            <Link href='' className="bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-2 rounded-md shadow:md">
                                Explore More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    {/* <div className="backDiv"></div> */}
                    <div className="relative z-10 bg-gray-200 p-8 rounded:lg shadow:md space-y-2">
                        <Image 
                            src={plumb} 
                            className="w-60 h-40 rounded"/>
                        <h3 className="text-2xl font-bold">Project Title</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adip non pro id el 
                            Lorem ipsum dolor sit amet, consectetur adip non pro id el 
                            Lorem ipsum dolor sit amet, consectetur adip non pro id el 
                            Lorem ipsum dolor sit amet, consectetur adip non pro id el 
                        </p><br />
                        <div>
                            <Link href='' className="bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-2 rounded-md shadow:md">
                                Explore More
                            </Link>
                        </div>
                    </div>
                </div> 
            </div>
        </section>

        {/* Contact section */}
        <section className="pb-20">
            <div className="max-w-7xl mx-auto pt-20 pb-12 px-6">
                <div className="text-center text-gray-800 space-y-2">
                    <h2 className="text-5xl font-bold">Contact</h2>
                    <p className="text-lg">Get in touch with us.</p>
                </div>
            </div>
            <div className="flex justify-center">
                {/* <div className="backDiv"> */}
                {/* </div> */}
                <div className="relative md:flex z-10 bg-gray-50 p-12 max-w-4xl rounded-md shadow-md">
                    <div className="flex flex-col space-x-11 justify-between md:flex-row">
                        <form action="">
                            <div className="flex flex-col space-y-5 md:space-y-0 md:space-x-24 md:flex-row">
                                <input 
                                    type="text" 
                                    className="shadow appearance-none border rounded w-80 md:w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="name" 
                                    placeholder="Name"/>
                                <input 
                                    type="email" 
                                    className="shadow appearance-none border rounded w-80 md:w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="email" 
                                    placeholder="Email"/>
                            </div>
                            <div className="mt-5">
                                <input 
                                    type="text" 
                                    className="shadow appearance-none border rounded w-80 md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="subject" 
                                    placeholder="Subject"/>
                            </div>
                            <div className="mt-5">
                                <input 
                                    type="text" 
                                    className="shadow overflow-auto resize-y h-40 appearance-none border rounded w-full md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="message" 
                                    placeholder="Enter Your Message Here"/>
                            </div>
                            <div className="mt-5">
                                <button type="submit" className="bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-2 rounded-md shadow:md">
                                    Send Feedback
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </div>
);

export default Home;