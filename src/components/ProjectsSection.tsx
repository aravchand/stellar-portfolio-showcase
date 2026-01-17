import ProjectCard from './ProjectCard';

const featuredProjects = [
  {
    title: 'Project Alpha',
    description: 'A cutting-edge application leveraging modern web technologies to solve complex user experience challenges. Built with React, TypeScript, and advanced state management.',
    links: { demo: '#', github: '#' },
  },
  {
    title: 'Project Beta',
    description: 'Full-stack platform enabling seamless data visualization and real-time collaboration. Features include live updates, custom charts, and team workspaces.',
    links: { demo: '#', paper: '#' },
  },
  {
    title: 'Project Gamma',
    description: 'Machine learning pipeline for natural language processing tasks. Includes sentiment analysis, entity recognition, and text classification modules.',
    links: { demo: '#', video: '#' },
  },
  {
    title: 'Project Delta',
    description: 'Distributed systems architecture implementing fault-tolerant messaging and event-driven microservices for high-availability applications.',
    links: { paper: '#', github: '#' },
  },
  {
    title: 'Project Epsilon',
    description: 'Mobile-first progressive web app with offline capabilities, push notifications, and native-like performance on all devices.',
    links: { demo: '#' },
  },
  {
    title: 'Project Zeta',
    description: 'Developer tools and CLI utilities that streamline workflows, automate repetitive tasks, and enhance productivity across development teams.',
    links: { github: '#', demo: '#' },
  },
];

const researchProjects = [
  {
    title: 'Elliptic Curve Cryptography Analysis',
    description: 'Research into the mathematical foundations of elliptic curve cryptography, exploring novel approaches to key generation and signature schemes with applications in blockchain technology.',
    links: { paper: '#' },
  },
  {
    title: 'Prime Number Distribution',
    description: 'Investigation into patterns of prime number distribution using computational methods and analytical number theory. Developed new heuristics for prime gap estimation.',
    links: { paper: '#', video: '#' },
  },
];

const socialProjects = [
  {
    title: 'Code for Community',
    description: 'Founded an initiative teaching programming to underserved youth. Developed curriculum covering web development, Python, and computational thinking for 200+ students.',
    links: { demo: '#' },
  },
  {
    title: 'Open Source Mentorship',
    description: 'Mentorship program connecting experienced developers with newcomers to open source. Facilitated over 50 successful first contributions to major projects.',
    links: { demo: '#' },
  },
];

const ProjectsSection = () => {
  return (
    <>
      {/* Featured Projects */}
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Featured Projects</h2>

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
      <section className="py-24 relative bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">
            Mathematics & Cryptography Research
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
      <section id="social" className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Social Initiatives</h2>

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
