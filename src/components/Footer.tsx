const Footer = () => {
  return (
    <footer className="bg-muted border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href="/" className="hover:text-primary transition-colors">
            Archived 2022 Edition
          </a>
          <span className="text-border">|</span>
          <a href="/" className="hover:text-primary transition-colors">
            References
          </a>
          <span className="text-border">|</span>
          <a href="/" className="hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <span className="text-border">|</span>
          <a href="/" className="hover:text-primary transition-colors">
            Terms of Use
          </a>
        </div>
        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>Leading adult education through support for and the effective application of technology.</p>
          <p className="mt-2">© 2025 OTAN - Outreach and Technical Assistance Network</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
