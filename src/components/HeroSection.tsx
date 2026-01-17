import { ArrowRight, Info, Download, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative px-4 pt-20"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile */}
          <div className="text-center lg:text-left">
            {/* Profile Image */}
            <div className="mb-6 inline-block">
              <div className="w-48 h-56 md:w-56 md:h-64 rounded-lg overflow-hidden border-2 border-border shadow-xl mx-auto lg:mx-0">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                  <span className="text-7xl">👤</span>
                </div>
              </div>
            </div>

            {/* Name */}
            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
              Hi, I'm <span className="text-foreground">Your Name</span>!
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Aspiring Researcher and Entrepreneur
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                See Projects
                <ArrowRight size={16} />
              </a>
              <Button
                asChild
                variant="outline"
                className="border-primary bg-primary/10 text-foreground hover:bg-primary/20 rounded-full px-6"
              >
                <a href="#about" className="flex items-center gap-2">
                  More Info
                  <Info size={16} />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Connect */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            {/* Download CV */}
            <Button
              asChild
              variant="outline"
              className="border-border bg-secondary/50 text-foreground hover:bg-secondary rounded-full px-6"
            >
              <a href="#" className="flex items-center gap-2">
                <Download size={16} />
                Download CV
              </a>
            </Button>

            {/* Connect Section */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Connect with Me</h3>
              <a
                href="#"
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/50 hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Contact Button */}
            <Button
              asChild
              variant="outline"
              className="border-primary bg-primary/10 text-foreground hover:bg-primary/20 rounded-full px-6"
            >
              <a href="#contact" className="flex items-center gap-2">
                <MessageSquare size={16} />
                Contact
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
