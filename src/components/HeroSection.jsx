import { ChevronRight } from 'lucide-react';

export default function HeroSection({ 
    backgroundImage, 
    title, 
    description, 
    breadcrumbs = [] 
}) {
    return (
        <section 
            className="relative pt-32 pb-16 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Translucent Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
            
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-10">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-white/90 text-sm mb-6 flex-wrap">
                    <a 
                        href="/" 
                        className="hover:text-primary transition-colors font-medium"
                    >
                        Home
                    </a>
                    {breadcrumbs.map((crumb, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4" />
                            {crumb.link ? (
                                <a 
                                    href={crumb.link} 
                                    className="hover:text-primary transition-colors font-medium"
                                >
                                    {crumb.label}
                                </a>
                            ) : (
                                <span className="text-white font-medium">
                                    {crumb.label}
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Title and Description */}
                <div className="text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-xl md:text-2xl text-neutral-100 max-w-2xl">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
