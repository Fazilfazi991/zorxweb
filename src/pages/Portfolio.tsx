import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Sparkles, Monitor, Video, Image as ImageIcon, Camera, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
    // Demo Content Data
    const websites = [
        { id: 1, title: "Neonights", image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fneonights.ae?w=1280&h=8000", link: "https://neonights.ae" },
        { id: 2, title: "BWMC", image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fbwmc.ae?w=1280&h=8000", link: "https://bwmc.ae" },
        { id: 3, title: "Tonio Senora", image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Ftoniosenora.com?w=1280&h=8000", link: "https://toniosenora.com" },
        { id: 4, title: "Veriquondt", image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fveriquondt.com?w=1280&h=8000", link: "https://veriquondt.com" },
        { id: 5, title: "FM Auditors", image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Ffmauditors.com?w=1280&h=8000", link: "https://fmauditors.com" },
        { id: 6, title: "JH Accounting", image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fjhaccounting.ae?w=1280&h=8000", link: "https://jhaccounting.ae" },
        { id: 7, title: "Ikigai Auto Parts", image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fikigaiautoparts.com?w=1280&h=8000", link: "https://ikigaiautoparts.com" },
        { id: 8, title: "Step Vision Hotel Supplies", image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fstepvisionhotelsupplies.com?w=1280&h=8000", link: "https://stepvisionhotelsupplies.com" },
        { id: 9, title: "Universal Yoga", image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.nuniversalyoga.ae?w=1280&h=8000", link: "https://www.nuniversalyoga.ae" },
    ];

    const videos = [
        { id: 1, title: "Brand Commercial", thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80", category: "Commercial", video: "https://www.youtube.com/embed/LXb3EKWsInQ" },
        { id: 2, title: "Product Launch", thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80", category: "Event", video: "https://www.youtube.com/embed/LXb3EKWsInQ" },
        { id: 3, title: "Social Media Reel", thumbnail: "https://images.unsplash.com/photo-1574717432707-c257197fba9a?w=800&q=80", category: "Social", video: "https://www.youtube.com/embed/LXb3EKWsInQ" },
        { id: 4, title: "Corporate Story", thumbnail: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=800&q=80", category: "Corporate", video: "https://www.youtube.com/embed/LXb3EKWsInQ" },
        { id: 5, title: "Music Video", thumbnail: "https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?w=800&q=80", category: "Music", video: "https://www.youtube.com/embed/LXb3EKWsInQ" },
    ];

    const posters = [
        { id: 1, title: "Summer Campaign", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80" },
        { id: 2, title: "Event Promo", image: "https://images.unsplash.com/photo-1626785774573-4b79931434f3?w=800&q=80" },
        { id: 3, title: "Product Showcase", image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&q=80" },
        { id: 4, title: "Brand Identity", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80" },
        { id: 5, title: "Digital Art", image: "https://images.unsplash.com/photo-1558655146-d09347e0c766?w=800&q=80" },
    ];

    const aiVideos = [
        { id: 1, title: "Future City", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80", category: "AI Generated", video: "https://www.youtube.com/embed/LXb3EKWsInQ" },
        { id: 2, title: "Abstract Motion", thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80", category: "AI Art", video: "https://www.youtube.com/embed/LXb3EKWsInQ" },
        { id: 3, title: "Neural Dreams", thumbnail: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80", category: "Deep Learning", video: "https://www.youtube.com/embed/LXb3EKWsInQ" },
        { id: 4, title: "Fluid Dynamics", thumbnail: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80", category: "Simulation", video: "https://www.youtube.com/embed/LXb3EKWsInQ" },
    ];

    const photoshoots = [
        { id: 1, title: "Fashion Editorial", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80" },
        { id: 2, title: "Corporate Headshots", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80" },
        { id: 3, title: "Product Photography", image: "https://images.unsplash.com/photo-1526170375885-4d6036fab570?w=800&q=80" },
        { id: 4, title: "Lifestyle Shot", image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80" },
        { id: 5, title: "Studio Session", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80" },
    ];

    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-hero overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                    </div>

                    <div className="section-container relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground animate-fade-up">
                                <Sparkles className="w-4 h-4 text-primary" />
                                Our Creative Universe
                            </div>

                            <h1 className="heading-display text-foreground animate-fade-up delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>
                                We Craft <span className="text-primary">Digital Masterpieces</span>
                            </h1>

                            <p className="text-xl text-muted-foreground animate-fade-up delay-200 opacity-0 max-w-2xl mx-auto" style={{ animationFillMode: 'forwards' }}>
                                From high-performance websites to cinematic video productions, explore our diverse portfolio of success stories.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Websites Section */}
                <section className="py-20 bg-secondary/30">
                    <div className="section-container">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="p-3 bg-primary/10 rounded-xl">
                                <Monitor className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="heading-section">Websites</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {websites.map((site) => (
                                <div key={site.id} className="group relative rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 bg-white">
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={site.image}
                                            alt={site.title}
                                            className="w-full h-full object-cover object-top transition-all ease-linear group-hover:object-bottom"
                                            style={{ transitionDuration: '10s' }}
                                            onError={(e) => { e.currentTarget.src = '/placeholder.svg'; }}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <a href={site.link} target="_blank" rel="noreferrer" className="px-6 py-2 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform">
                                            Visit Site
                                        </a>
                                    </div>
                                    <div className="p-4 bg-card border-t border-border">
                                        <h3 className="text-lg font-bold text-center">{site.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center mt-12">
                            <Button variant="outline" className="group rounded-full h-12 px-8">
                                See More Websites
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Videos Section */}
                <section className="py-20">
                    <div className="section-container">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="p-3 bg-primary/10 rounded-xl">
                                <Video className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="heading-section">Video Productions</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {videos.map((video) => (
                                <Dialog key={video.id}>
                                    <DialogTrigger asChild>
                                        <div className="group relative rounded-2xl overflow-hidden aspect-video shadow-sm hover:shadow-md transition-all cursor-pointer">
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                                <p className="text-primary-light text-sm font-medium mb-1">{video.category}</p>
                                                <h3 className="text-white text-xl font-bold">{video.title}</h3>
                                            </div>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none text-white">
                                        <div className="aspect-video w-full">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={`${video.video}?autoplay=1`}
                                                title={video.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="border-none"
                                            />
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            ))}
                        </div>

                        <div className="flex justify-center mt-12">
                            <Button variant="outline" className="group rounded-full h-12 px-8">
                                See More Videos
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Posters / Graphic Design */}
                <section className="py-20 bg-secondary/30">
                    <div className="section-container">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="p-3 bg-primary/10 rounded-xl">
                                <ImageIcon className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="heading-section">Posters & Graphics</h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {posters.map((poster) => (
                                <div key={poster.id} className="group relative rounded-xl overflow-hidden aspect-[3/4] shadow-sm hover:shadow-md transition-all">
                                    <img
                                        src={poster.image}
                                        alt={poster.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                        <h3 className="text-white font-bold">{poster.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center mt-12">
                            <Button variant="outline" className="group rounded-full h-12 px-8">
                                See More Posters
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* AI Videos Section */}
                <section className="py-20">
                    <div className="section-container">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="p-3 bg-purple-100 rounded-xl">
                                <BrainCircuit className="w-6 h-6 text-purple-600" />
                            </div>
                            <h2 className="heading-section">AI Generated Videos</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {aiVideos.map((video) => (
                                <Dialog key={video.id}>
                                    <DialogTrigger asChild>
                                        <div className="group relative rounded-2xl overflow-hidden aspect-video shadow-sm hover:shadow-md transition-all cursor-pointer border border-purple-100">
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute top-4 right-4 px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                                AI Generated
                                            </div>
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                                <h3 className="text-white text-xl font-bold">{video.title}</h3>
                                            </div>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none text-white">
                                        <div className="aspect-video w-full">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={`${video.video}?autoplay=1`}
                                                title={video.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="border-none"
                                            />
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            ))}
                        </div>

                        <div className="flex justify-center mt-12">
                            <Button variant="outline" className="group rounded-full h-12 px-8">
                                See More AI Videos
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Photoshoots Section */}
                <section className="py-20 bg-secondary/30">
                    <div className="section-container">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="p-3 bg-primary/10 rounded-xl">
                                <Camera className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="heading-section">Photoshoots</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {photoshoots.map((shoot) => (
                                <div key={shoot.id} className="group relative rounded-xl overflow-hidden aspect-[4/5] shadow-sm hover:shadow-md transition-all">
                                    <img
                                        src={shoot.image}
                                        alt={shoot.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 p-6">
                                            <h3 className="text-white text-xl font-bold">{shoot.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center mt-12">
                            <Button variant="outline" className="group rounded-full h-12 px-8">
                                See More Photos
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="section-padding bg-primary text-white">
                    <div className="section-container">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="max-w-2xl text-center md:text-left">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to create something amazing?</h2>
                                <p className="text-xl text-white/80">Let's collaborate on your next project and bring your vision to life.</p>
                            </div>
                            <Button size="lg" variant="secondary" className="group text-lg px-8 h-14" asChild>
                                <Link to="/contact">
                                    Start Your Project
                                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default Portfolio;
