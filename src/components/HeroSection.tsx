import { ArrowDown, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-16"
    >
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        {/* Profile Image */}
        <div className="mb-8 relative inline-block">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-primary/30 shadow-[0_0_40px_hsl(var(--primary)/0.3)] animate-float">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
              <span className="text-6xl">👤</span>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground text-sm">✨</span>
          </div>
        </div>

        {/* Greeting */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 glow-text">
          Hi, I'm <span className="gradient-text">Your Name</span>!
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Researcher, Developer & Innovator
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]"
          >
            <a href="#projects">See Projects</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary"
          >
            <a href="#about">More Info</a>
          </Button>
        </div>

        {/* Download CV */}
        <a
          href="#"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <FileText size={18} />
          <span>Download CV</span>
        </a>

        {/* Connect Section */}
        <div className="mt-12">
          <p className="text-sm text-muted-foreground mb-4">Connect with Me</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>Contact</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
