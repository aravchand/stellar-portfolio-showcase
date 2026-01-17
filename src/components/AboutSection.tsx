const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="section-heading text-center mb-12">About Me</h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="animate-slide-up opacity-0 stagger-1">
            Hi! I'm a passionate researcher and developer with a focus on mathematics, 
            cryptography, and building impactful social initiatives.
          </p>

          <p className="animate-slide-up opacity-0 stagger-2">
            My work spans from theoretical research in number theory and cryptographic 
            protocols to hands-on development of applications that solve real-world problems. 
            I believe in the power of technology to create positive change.
          </p>

          <p className="animate-slide-up opacity-0 stagger-3">
            When I'm not coding or researching, you can find me contributing to open-source 
            projects, mentoring aspiring developers, or exploring new ideas at the intersection 
            of mathematics and computer science.
          </p>

          <p className="animate-slide-up opacity-0 stagger-4">
            I'm always excited to collaborate on projects that push boundaries and make 
            a meaningful difference in people's lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
