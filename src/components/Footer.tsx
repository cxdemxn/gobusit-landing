import { Link } from "react-router-dom";
import { Bus } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Bus className="w-6 h-6" />
              <span className="text-lg font-extrabold tracking-tight">GoBusIt</span>
            </div>
            <p className="text-sm opacity-60 mb-4">Intercity bus booking, simplified.</p>
            <div className="flex items-center gap-4">
              <a href="https://x.com/cxdemxn" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="opacity-60 hover:opacity-100 transition-opacity text-sm font-medium">𝕏</a>
              <a href="https://instagram.com/cxdemxn" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-60 hover:opacity-100 transition-opacity text-sm font-medium">📸</a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm mb-4 opacity-80">Navigation</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "Features", to: "/features" },
                { label: "About", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* App */}
          <div>
            <h4 className="font-semibold text-sm mb-4 opacity-80">App</h4>
            <div className="flex flex-col gap-2">
              <a href="https://gobusit.vercel.app/search" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Book a Trip</a>
              <a href="https://gobusit.vercel.app/register" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Create Account</a>
              <a href="https://gobusit.vercel.app/login" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Operator Login</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs opacity-50">
          <span>© 2025 GoBusIt. All rights reserved.</span>
          <span>Built with ♥ for travelers everywhere.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
