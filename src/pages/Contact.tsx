import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Form submitted:", Object.fromEntries(formData));
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Whether you're a passenger with a question, an operator interested in the platform, or just want to say hello — we'd love to hear from you."
      />

      <SectionWrapper className="bg-card py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="bg-background rounded-2xl border border-surface-border p-8">
            <h3 className="text-lg font-bold text-foreground mb-6">Contact Details</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a href="mailto:cxdemxn@gmail.com" className="text-sm text-primary hover:underline">cxdemxn@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg mt-0.5">𝕏</span>
                <div>
                  <p className="text-sm font-medium text-foreground">X (Twitter)</p>
                  <a href="https://x.com/cxdemxn" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">@cxdemxn</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg mt-0.5">📸</span>
                <div>
                  <p className="text-sm font-medium text-foreground">Instagram</p>
                  <a href="https://instagram.com/cxdemxn" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">@cxdemxn</a>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-6 italic">Typically respond within 24–48 hours.</p>
            <hr className="my-6 border-surface-border" />
            <h4 className="text-sm font-bold text-foreground mb-2">Interested in using GoBusIt for your fleet?</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Reach out via email with details about your operation — routes, fleet size, and location — and we'll get back to you.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-2xl border border-surface-border p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Message sent!</h3>
                <p className="text-muted-foreground">We'll be in touch soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-lg font-bold text-foreground mb-2">Send a Message</h3>
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground block mb-1.5">Name</label>
                  <input id="name" name="name" type="text" required className="w-full bg-muted rounded-xl px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground block mb-1.5">Email</label>
                  <input id="email" name="email" type="email" required className="w-full bg-muted rounded-xl px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div>
                  <label htmlFor="role" className="text-sm font-medium text-foreground block mb-1.5">I am a...</label>
                  <select id="role" name="role" className="w-full bg-muted rounded-xl px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30">
                    <option>Passenger</option>
                    <option>Bus Operator</option>
                    <option>Investor / Partner</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground block mb-1.5">Message</label>
                  <textarea id="message" name="message" rows={4} required className="w-full bg-muted rounded-xl px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground font-semibold rounded-xl py-2.5 hover:bg-primary-dark transition-colors text-sm">
                  Send Message
                </button>
                <p className="text-xs text-muted-foreground text-center">Your message goes directly to the team. No bots, no auto-replies.</p>
              </form>
            )}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Contact;
