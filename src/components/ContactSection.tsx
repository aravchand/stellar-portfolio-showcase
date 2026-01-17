import { useState } from 'react';
import { Send, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setEmail('');
    setMessage('');
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@example.com' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="section-heading text-center mb-4">Contact</h2>
        <p className="text-center text-muted-foreground mb-12">
          Send Me a Message
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-secondary/50 border-border focus:border-primary"
            />
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="bg-secondary/50 border-border focus:border-primary resize-none"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
          >
            <Send size={18} className="mr-2" />
            Send Message
          </Button>
        </form>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
