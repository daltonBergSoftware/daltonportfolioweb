import Image from 'next/image';

export default function HomeComponent() {
    return (
        <section id="home" className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl w-full">
                {/* Text Section */}
                <div className="text-center md:text-left space-y-4 md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold text-red-500">Hi, I&apos;m Dalton Berg</h1>
                    <h2 className="text-3xl md:text-4xl text-red-400">Software Engineering Student at ASU</h2>
                    <p className="text-lg">Determined Learner with experience in Software Development</p>
                    <h3 className="text-xl font-semibold text-red-400 mt-4">Interests:</h3>
                    <ul className="space-y-2 text-lg">
                        <li className="flex items-center gap-2">
                            <span className="text-red-500 text-xl">★</span> Software Engineering
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-red-500 text-xl">★</span> Software Development
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-red-500 text-xl">★</span> Backend Development
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-red-500 text-xl">★</span> AI Engineering
                        </li>
                    </ul>
                </div>

                {/* Image Section */}
                <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-red-500 overflow-hidden group">
                    <Image 
                        src="/src/images/DaltonsPortfolioPicture.jpg" 
                        alt="Dalton Berg" 
                        width={400} 
                        height={400} 
                        className="absolute inset-0 object-cover w-full h-full group-hover:opacity-0 transition-opacity duration-500"
                    />
                    <Image 
                        src="/src/images/PortfolioHomeBackgroundImg.jpeg" 
                        alt="Technology Background" 
                        width={400} 
                        height={400} 
                        className="absolute inset-0 object-cover w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                </div>
            </div>
        </section>
    );
}
