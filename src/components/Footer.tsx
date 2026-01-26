const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          ARAV CHAND - © {new Date().getFullYear()}
        </p>
        {/* <p className="text-xs text-muted-foreground/60 mt-2">
          Built with passion and lots of ☕
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
