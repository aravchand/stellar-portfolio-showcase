import { ExternalLink, FileText, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  links?: {
    paper?: string;
    demo?: string;
    video?: string;
    github?: string;
  };
}

const ProjectCard = ({ title, description, image, links }: ProjectCardProps) => {
  return (
    <div className="group bg-card/50 border border-border rounded-xl overflow-hidden card-hover">
      {/* Image */}
      <div className="aspect-video relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Code className="w-8 h-8 text-primary" />
            </div>
          </div>
        )}
        <div className="absolute inset-0 opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-foreground transition-colors">
          {title}
        </h3>
        <p className="text-foreground text-sm mb-4">
          {description}
        </p>

        {/* Links */}
        {links && (
          <div className="flex flex-wrap gap-2">
            {links.paper && (
              <Button
                asChild
                size="sm"
                variant="outline"
                // className="border-primary/30 hover:bg-primary/10 hover:border-primary text-xs"
                className="btn-dark hover:bg-primary hover:text-primary-foreground rounded-md"

              >
                <a href={links.paper} target="_blank" rel="noopener noreferrer">
                  <FileText size={14} className="mr-1" />
                  Paper
                </a>
              </Button>
            )}
            {/* {links.video && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="btn-dark hover:bg-primary hover:text-primary-foreground rounded-md"
              >
                <a href={links.video} target="_blank" rel="noopener noreferrer">
                  <Play size={14} className="mr-1" />
                  Watch
                </a>
              </Button>
            )} */}
            {links.demo && (
              <Button
                asChild
                size="sm"
                variant='ghost'
                className="btn-dark hover:bg-primary hover:text-primary-foreground rounded-md"

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

// Need to import Code
import { Code } from 'lucide-react';

export default ProjectCard;
