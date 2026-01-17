import ProjectCard from './ProjectCard';

const featuredProjects = [
  {
    title: 'Project BLADE',
    description: 'A novel impedance-based sensor for robotic minimally invasive surgery. This research presents the first real-time force sensor based on dynamic changes in bioimpedance values and introduces predictive models for the relationship between applied force and impedance.',
    links: { paper: '#', video: '#' },
  },
  {
    title: 'FABP5 Research',
    description: 'Investigation of a protein called FABP5 within the brain\'s reward center to see if it could be a target for treating addiction. Discovery suggests targeting FABP5 in glial cells could reduce drug withdrawal symptoms.',
    links: { paper: '#', poster: '#' },
  },
  {
    title: 'Kalirouna',
    description: 'A comprehensive platform leveraging modern technologies to solve complex challenges. Built with cutting-edge frameworks and advanced state management for optimal performance.',
    links: { demo: '#' },
  },
  {
    title: 'Neural Network Framework',
    description: 'Custom deep learning framework optimized for edge devices. Features include automatic differentiation, GPU acceleration, and modular architecture for research flexibility.',
    links: { paper: '#', demo: '#' },
  },
  {
    title: 'Robotics Control System',
    description: 'Advanced control algorithms for precision robotics applications. Implements real-time feedback loops and adaptive learning for improved accuracy in surgical contexts.',
    links: { video: '#' },
  },
  {
    title: 'Data Visualization Platform',
    description: 'Interactive visualization tools for complex scientific datasets. Enables researchers to explore multidimensional data with intuitive interfaces and collaborative features.',
    links: { demo: '#' },
  },
];

const researchProjects = [
  {
    title: 'Elliptic Curve Cryptography Analysis',
    description: 'Research into the mathematical foundations of elliptic curve cryptography, exploring novel approaches to key generation and signature schemes with applications in blockchain technology.',
    links: { paper: '#' },
  },
  {
    title: 'Prime Number Distribution Studies',
    description: 'Investigation into patterns of prime number distribution using computational methods and analytical number theory. Developed new heuristics for prime gap estimation.',
    links: { paper: '#', video: '#' },
  },
];

const socialProjects = [
  {
    title: 'Code for Community',
    description: 'Founded an initiative teaching programming to underserved youth. Developed curriculum covering web development, Python, and computational thinking for 200+ students annually.',
    links: { demo: '#' },
  },
  {
    title: 'Open Source Mentorship Program',
    description: 'Mentorship program connecting experienced developers with newcomers to open source. Facilitated over 50 successful first contributions to major open-source projects.',
    links: { demo: '#' },
  },
];

const ProjectsSection = () => {
  return (
    <>
      {/* Featured Projects */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 uppercase tracking-wide">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className="animate-slide-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 uppercase tracking-wide">
            Mathematics, Cryptography Research
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {researchProjects.map((project, index) => (
              <div
                key={project.title}
                className="animate-slide-up opacity-0"
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Initiatives */}
      <section id="social" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 uppercase tracking-wide">
            Social Initiatives
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {socialProjects.map((project, index) => (
              <div
                key={project.title}
                className="animate-slide-up opacity-0"
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
