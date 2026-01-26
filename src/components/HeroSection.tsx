import { ArrowRight, Info, Download, MessageSquare, Linkedin, ArrowDown } from 'lucide-react';
import headshotImage from './assets/headshot.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="py-16 lg:py-32 mx-auto">
      <div className="lg:py-6 container max-w-screen-lg mx-auto flex flex-col md:flex-row items-center mb-4 px-2 md:px-16">
        {/* Left Column: Profile, Name, Title, and Action Links */}
        <div className="md:w-1/2 flex flex-col items-center">
          {/* Profile Image */}
          <img
            src={headshotImage}
            alt="Profile Image"
            className="py-2 rounded-2xl w-64 h-64 object-cover"
            onError={(e) => {
              // Fallback to placeholder if image doesn't exist
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              // const placeholder = document.createElement('div');
              // placeholder.className = 'py-2 rounded-2xl w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center';
              // placeholder.innerHTML = '<span class="text-6xl">👤</span>';
              // target.parentNode?.appendChild(placeholder);
            }}
          />

          <div className="flex flex-col items-center mx-auto">
            <h1 className="text-xl font-bold text-foreground p-2">
              Hi, I'm Arav Chand!
            </h1>

            <p className="text-base lg:text-lg px-4 mt-2 text-center text-foreground">
              Researcher, Inventor in Humanitarian Tech
              {/* Building Tech Today for a Better Tomorrow */}
            </p>
          </div>

          <div className="my-6 flex items-center justify-center space-x-4">
            <a
              href="#projects"
              className="text-foreground font-semibold hover:text-primary hover:underline transition duration-300 inline-flex items-center gap-1"
            >
              See Projects <ArrowRight size={16} />
            </a>
            <a
              href="#about"
              className="btn-dark px-4 py-2 font-semibold hover:bg-primary hover:text-primary-foreground hover:underline inline-flex items-center gap-2 rounded-md"
            >
              More Info
              <Info
                size={16}
                className="animate-bounce"
                style={{ animationDuration: '1s', animationIterationCount: 'infinite', animationTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
              />
            </a>
          </div>
        </div>

        {/* Right Column: Download CV and Connect Section */}
        <div className="md:w-1/2 p-4 text-center">
          <div className="mb-6 py-4">
            <a
              href="#"
              target="_blank"
              className="btn-dark py-2 px-4 hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-2 rounded-md"
            >
              <ArrowDown size={16} className="animate-pulse" />
              Download CV
            </a>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-4">Connect with Me</h3>

          <ul className="flex items-center justify-center space-x-4 p-2">
            <li>
              <a
                href="https://www.linkedin.com/in/arav-chand-978120211/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition duration-300"
              >
                <Linkedin size={32} />
              </a>
            </li>
          </ul>

          <div className="mt-4 py-2">
            <a
              href="#contact"
              className="btn-dark py-2 px-4 mx-auto hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-2 rounded-md"
            >
              <MessageSquare size={16} className="animate-pulse" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
