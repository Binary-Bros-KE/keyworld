import SecondaryGallerySection from "../seniorSecondary/components/SecondaryGallerySection";
import About from "./components/About";
import Curriculum from "./components/Curriculum";
import HomeBlogSection from "./components/HomeBlogSection";
import HomeGallerySection from "./components/HomeGallerySection";
import HomeStorySection from "./components/HomeStorySection";

export default function Home() {
    return (
        <main>
            <div className="bg-gray-50">
                <div className="h-150 flex items-center justify-center bg-[url('/home/hero.png')] bg-cover bg-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">Keyworld Academy</h1>
                        <p className="text-xl md:text-2xl">Beyond Excellence</p>
                        <div className="mt-6 flex justify-center space-x-80 max-md:flex-col max-md:items-center max-md:space-x-0 max-md:space-y-4">
                            <a className="bg-primary hover:bg-primary-dark text-white px-6 py-1.5 rounded text-xl font-medium transition-all duration-200 hover:shadow-md cursor-pointer">Keyworld Academy</a>
                            <a className="bg-secondary hover:bg-secondary-dark text-white px-6 py-1.5 rounded text-xl font-medium transition-all duration-200 hover:shadow-md cursor-pointer">Keyworld High School</a>
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <Curriculum />
            <HomeStorySection />
            <HomeBlogSection />
            <SecondaryGallerySection images={[
                "/keyworld-academy.jpeg",
                "/gallery/keyworld-students.jpg",
                "/gallery/students-in-mosque.jpg",
                "/gallery/graduation.jpg",
                "/gallery/keyworld-classes.jpg",
            ]} />
        </main>
    )
}
