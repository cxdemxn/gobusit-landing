import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Armchair, CheckCircle, Ticket, Bus, Shield } from "lucide-react";
import MockRouteCard from "@/components/MockRouteCard";
import SectionWrapper from "@/components/SectionWrapper";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--hero-from))] via-[hsl(var(--hero-mid))] to-[hsl(var(--hero-to))] pt-24 pb-20 overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-semibold text-primary-foreground/80 bg-primary-foreground/10 rounded-full px-4 py-1.5 mb-6"
            >
              ✦ Intercity Bus Booking, Reimagined
            </motion.span>
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground tracking-tight leading-tight mb-6"
            >
              Book Your Bus Seat in Seconds.
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-primary-foreground/70 mb-8 max-w-lg"
            >
              GoBusIt makes intercity travel simple — search trips, pick your seat, and confirm your booking instantly. No queues. No hassle.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <a
                href="https://gobusit-app.vercel.app/search"
                className="bg-primary-foreground text-primary font-semibold rounded-xl px-6 py-3 hover:bg-primary-foreground/90 transition-colors text-sm"
              >
                Find a Bus →
              </a>
              <a
                href="#how-it-works"
                className="border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-xl px-6 py-3 hover:bg-primary-foreground/10 transition-colors text-sm"
              >
                See How It Works
              </a>
            </motion.div>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xs text-primary-foreground/50"
            >
              ✓ Free to sign up &nbsp; ✓ No hidden fees &nbsp; ✓ Book in under 60 seconds
            </motion.p>
          </div>

          {/* Mock UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden md:block"
          >
            <MockRouteCard />
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <SectionWrapper className="bg-card py-8 border-b border-surface-border">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { stat: "3 Countries", label: "Routes Covered" },
            { stat: "Real-time", label: "Seat Availability" },
            { stat: "60 sec", label: "Average Booking Time" },
            { stat: "Zero", label: "Hidden Fees" },
          ].map((item, i) => (
            <div key={i} className={i > 0 ? "md:border-l md:border-surface-border" : ""}>
              <p className="text-2xl font-extrabold text-foreground">{item.stat}</p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper id="how-it-works" className="bg-background py-20">
        <div className="max-w-6xl mx-auto px-6 text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            Getting from A to B has never been this easy.
          </h2>
          <p className="text-muted-foreground text-lg">Three steps. Zero stress.</p>
        </div>
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: MapPin, title: "Search Your Trip", body: "Enter your origin, destination, and travel date to see available buses in real time." },
            { icon: Armchair, title: "Pick Your Seat", body: "Browse the interactive seat map and tap the seat you want. What you see is what you get." },
            { icon: CheckCircle, title: "Confirm & Go", body: "Review your booking and confirm. Your ticket is saved instantly — no printing needed." },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Feature Highlights */}
      <SectionWrapper className="bg-card py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
              Everything you need. Nothing you don&apos;t.
            </h2>
            <p className="text-muted-foreground text-lg">Built for passengers, operators, and everyone in between.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Ticket, color: "bg-teal-100 text-teal-600", title: "Seamless Booking", body: "Search routes, see live seat availability, pick your spot, and book — all from your phone or browser." },
              { icon: Bus, color: "bg-primary/10 text-primary", title: "Full Fleet Control", body: "Manage your buses, routes, and schedules from a powerful admin dashboard. Track bookings and passenger data in one place." },
              { icon: Shield, color: "bg-emerald-100 text-emerald-600", title: "Transparent & Secure", body: "No surprise fees. No overbooking. Your seat is reserved the moment you book it." },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card border border-surface-border rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className={`w-11 h-11 rounded-xl ${card.color} flex items-center justify-center mb-4`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/features" className="text-sm font-semibold text-primary hover:underline">
              Explore all features →
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonial */}
      <SectionWrapper className="bg-gradient-to-r from-[hsl(var(--hero-from))] to-[hsl(var(--hero-mid))] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xl md:text-2xl font-semibold text-primary-foreground italic leading-relaxed mb-6">
            "GoBusIt turned a 3-hour ticket queue into a 30-second tap on my phone."
          </p>
          <p className="text-sm text-primary-foreground/60">— A GoBusIt Passenger</p>
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <SectionWrapper className="bg-card py-20 border-t border-surface-border">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            Ready to travel smarter?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join passengers and operators already using GoBusIt.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://gobusit.vercel.app/register"
              className="bg-primary text-primary-foreground font-semibold rounded-xl px-6 py-3 hover:bg-primary-dark transition-colors text-sm"
            >
              Book a Trip Now
            </a>
            <Link
              to="/contact"
              className="border-2 border-primary text-primary font-semibold rounded-xl px-6 py-3 hover:bg-primary-light transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Index;
