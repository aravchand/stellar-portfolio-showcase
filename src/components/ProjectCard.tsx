import { ExternalLink, FileText, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  links?: {
    paper?: string;
    demo?: string;
    video?: string;
    github?: string;
    poster?: string;
  };
}

const ProjectCard = ({ title, description, image, links }: ProjectCardProps) => {
  return (
    <div className="group bg-card/30 border border-border rounded-xl overflow-hidden card-hover">
      {/* Image */}
      <div className="aspect-[16/10] bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Code className="w-8 h-8 text-primary" />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Links */}
        {links && (
          <div className="flex flex-wrap gap-2">
            {links.paper && (
              <Button
                asChild
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs rounded-full"
              >
                <a href={links.paper} target="_blank" rel="noopener noreferrer">
                  Read the Paper!
                </a>
              </Button>
            )}
            {links.video && (
              <Button
                asChild
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs rounded-full"
              >
                <a href={links.video} target="_blank" rel="noopener noreferrer">
                  Watch my Project Pitch!
                </a>
              </Button>
            )}
            {links.poster && (
              <Button
                asChild
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs rounded-full"
              >
                <a href={links.poster} target="_blank" rel="noopener noreferrer">
                  See the Poster!
                </a>
              </Button>
            )}
            {links.demo && (
              <Button
                asChild
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs rounded-full"
              >
                <a href={links.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={14} className="mr-1" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
