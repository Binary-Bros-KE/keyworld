
export default function HomeGallerySection() {
    return (
        <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
                <div className="overflow-hidden  hover:shadow-lg transition-shadow h-64">
                    <img
                        src="/gallery/keyworld-school.png"
                        alt="School hallway"
                        className="w-full h-full object-cover "
                    />
                </div>

                <div className="overflow-hidden  hover:shadow-lg transition-shadow h-64">
                    <img
                        src="/gallery/keyworld-students.jpg"
                        alt="Teacher with students"
                        className="w-full h-full object-cover "
                    />
                </div>

                <div className="overflow-hidden  hover:shadow-lg transition-shadow h-64">
                    <img
                        src="/gallery/students-in-mosque.jpg"
                        alt="Student learning"
                        className="w-full h-full object-cover "
                    />
                </div>

                <div className="overflow-hidden  hover:shadow-lg transition-shadow h-64">
                    <img
                        src="/gallery/graduation.jpg"
                        alt="Student collaboration"
                        className="w-full h-full object-cover "
                    />
                </div>

                <div className="overflow-hidden  hover:shadow-lg transition-shadow h-64">
                    <img
                        src="/gallery/keyworld-classes.jpg"
                        alt="School activities"
                        className="w-full h-full object-cover "
                    />
                </div>
            </div>
        </section>
    )
}