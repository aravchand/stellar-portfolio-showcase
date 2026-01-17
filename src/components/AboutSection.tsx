import ToolsSection from './ToolsSection';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Me */}
          <div>
            <h2 className="text-xl font-bold mb-6">About Me</h2>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Hi! I'm Your Name, and I'm from [Your Location].
              </p>

              <p>
                I'm a student at{' '}
                <a href="#" className="text-primary hover:underline">
                  Your School
                </a>{' '}
                and actively involved in research and entrepreneurship.
              </p>

              <p>
                I'm familiar with various software and hardware development tools, 
                including Python for data analysis and machine learning, Arduino and 
                Raspberry Pi for hardware prototyping, and CAD software for 3D modeling 
                and manufacturing.
              </p>

              <p>
                My work has received recognition at various competitions including{' '}
                <a href="#" className="text-primary hover:underline">
                  Notable Achievement 1
                </a>
                , the{' '}
                <a href="#" className="text-primary hover:underline">
                  Notable Achievement 2
                </a>
                , and other{' '}
                <a href="#" className="text-primary hover:underline">
                  awards
                </a>
                .
              </p>

              <p>
                In addition to being{' '}
                <a href="#" className="text-primary hover:underline">
                  featured
                </a>{' '}
                in various media outlets for my work, I continue to pursue new 
                opportunities in research and innovation. Check it out{' '}
                <a href="#" className="text-primary hover:underline">
                  here!
                </a>
              </p>

              <p>
                In my free time, I enjoy{' '}
                <a href="#" className="text-primary hover:underline">
                  hobbies
                </a>
                , cooking, and playing music. I speak multiple languages.
              </p>

              <p>
                <strong>Update:</strong> Recent exciting news about achievements 
                or updates can go{' '}
                <a href="#" className="text-primary hover:underline">
                  here!
                </a>
              </p>
            </div>
          </div>

          {/* Right Column - Tools */}
          <div>
            <ToolsSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
