import { 
  Code2, 
  Database, 
  Lock, 
  Brain, 
  Terminal, 
  Cpu,
  FileCode,
  Server 
} from 'lucide-react';

const tools = [
  { name: 'Python', icon: Code2 },
  { name: 'Rust', icon: Terminal },
  { name: 'TypeScript', icon: FileCode },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Cryptography', icon: Lock },
  { name: 'Machine Learning', icon: Brain },
  { name: 'Systems', icon: Cpu },
  { name: 'Cloud', icon: Server },
];

const ToolsSection = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-12">Tools & Technology</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="flex flex-col items-center gap-3 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <tool.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
