
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Monitor, Smartphone, Globe, Code2, ArrowRight, Zap, Shield, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhyChooseSection from "@/components/WhyChooseSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import CTASection from "@/components/CTASection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const features = [
    {
        icon: Monitor,
        title: "Responsive Design",
        description: "Websites that look stunning on every device, from mobile phones to large desktop screens."
    },
    {
        icon: Zap,
        title: "Lightning Fast Speed",
        description: "Optimized performance for instant loading times and better user experience."
    },
    {
        icon: Shield,
        title: "Robust Security",
        description: "Built with security best practices to protect your data and your users."
    },
    {
        icon: Search,
        title: "SEO Optimized",
        description: "Clean code structure that search engines love, helping you rank higher."
    }
];

const processSteps = [
    {
        number: "01",
        title: "Discovery",
        description: "We dive deep into your business goals, target audience, and brand identity."
    },
    {
        number: "02",
        title: "Design",
        description: "Crafting beautiful, user-centric designs that align with your brand."
    },
    {
        number: "03",
        title: "Development",
        description: "Coding your site with the latest technologies for performance and scalability."
    },
    {
        number: "04",
        title: "Launch & Support",
        description: "Smooth deployment and ongoing maintenance to keep your site running perfectly."
    }
];

const WebDevelopment = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-950 text-white">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                            alt="Web Development Background"
                            className="w-full h-full object-cover opacity-10"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/90 to-gray-950" />
                    </div>

                    <div className="section-container relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className="text-center lg:text-left space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary animate-fade-up">
                                    <Code2 className="w-4 h-4 text-primary" />
                                    Premium Web Solutions
                                </div>

                                <h1 className="heading-display text-white animate-fade-up delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>
                                    Custom <span className="text-primary">Web Development</span> That Drives Growth
                                </h1>

                                <p className="text-xl text-gray-400 animate-fade-up delay-200 opacity-0 max-w-xl mx-auto lg:mx-0" style={{ animationFillMode: 'forwards' }}>
                                    We build fast, secure, and beautiful websites tailored to your business needs using the latest technologies.
                                </p>

                                <div className="flex flex-wrap gap-4 animate-fade-up delay-300 opacity-0 justify-center lg:justify-start" style={{ animationFillMode: 'forwards' }}>
                                    <div className="flex items-center gap-2 text-white font-medium bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                                        <Shield className="w-5 h-5 text-primary" />
                                        <span>Secure & Scalable</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white font-medium bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                                        <Zap className="w-5 h-5 text-primary" />
                                        <span>Lightning Fast</span>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/10 animate-fade-up delay-400 opacity-0" style={{ animationFillMode: 'forwards' }}>
                                    <p className="text-sm text-gray-400 mb-4">Trusted by innovative companies</p>
                                    <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start opacity-70 grayscale">
                                        {/* Placeholder Logos */}
                                        <div className="text-xl font-bold">Acme Corp</div>
                                        <div className="text-xl font-bold">GlobalTech</div>
                                        <div className="text-xl font-bold">Nebula</div>
                                        <div className="text-xl font-bold">FoxRun</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Form */}
                            <div className="lg:w-full max-w-md mx-auto lg:ml-auto animate-fade-left delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
                                <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50">
                                    <h3 className="text-2xl font-bold mb-2">Get a Free Quote</h3>
                                    <p className="text-muted-foreground mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>

                                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                                <Input id="name" placeholder="John Doe" />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                                                <Input id="phone" placeholder="+971..." />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                                            <Input id="email" type="email" placeholder="john@example.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium">Project Details</label>
                                            <Textarea id="message" placeholder="Tell us about your project..." />
                                        </div>
                                        <Button type="submit" className="w-full text-lg h-12">
                                            Request Quote
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
                    <div className="section-container">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="heading-section mb-6">Built for Excellence</h2>
                            <p className="text-lg text-muted-foreground">
                                Every website we build comes with these core standards included.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, index) => (
                                <div key={feature.title} className="bg-background p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                        <feature.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Portfolio Section */}
                <section className="py-20">
                    <div className="section-container">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                            <div className="max-w-2xl">
                                <h2 className="heading-section mb-6">Our Recent Work</h2>
                                <p className="text-lg text-muted-foreground">
                                    Check out some of our latest web development projects.
                                </p>
                            </div>
                            <Button variant="outline" className="group">
                                View Full Portfolio
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                        <PortfolioGrid />
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 bg-primary text-white">
                    <div className="section-container">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Process</h2>
                            <p className="text-xl text-white/80">
                                A streamlined workflow to bring your vision to life.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {processSteps.map((step, index) => (
                                <div key={step.title} className="relative">
                                    <div className="text-6xl font-bold text-white/10 mb-4">{step.number}</div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-white/80">{step.description}</p>
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-white/20 translate-x-1/2" />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                                Start Your Journey
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Why Us Section */}
                <WhyChooseSection />

                {/* Final CTA */}
                <CTASection />

            </main>
            <Footer />
        </div>
    );
};

export default WebDevelopment;
