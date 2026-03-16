import { motion } from "framer-motion";
import { Globe, Smartphone, Zap } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";

const About = () => {
  return (
    <>
      <PageHero
        title="About GoBusIt"
        subtitle="We're building the infrastructure for intercity bus travel — starting with the booking experience."
      />

      {/* The Problem */}
      <SectionWrapper className="bg-card py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-10">
            Bus travel is broken. We&apos;re fixing it.
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                Booking an intercity bus seat today often means showing up early, joining a long queue, and hoping a seat is available. There's no visibility into schedules, no way to reserve ahead, and no digital record of your journey.
              </p>
              <p>
                GoBusIt changes that. We give passengers the ability to search, seat-select, and book from anywhere — and give operators a complete digital platform to manage their fleet and passengers.
              </p>
            </div>
            <div className="bg-background rounded-2xl border border-surface-border overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="p-5 border-b border-r border-surface-border">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Before GoBusIt</p>
                </div>
                <div className="p-5 border-b border-surface-border">
                  <p className="text-xs font-semibold text-primary mb-2">With GoBusIt</p>
                </div>
                {[
                  ["❌ Queue at the terminal", "✅ Book from your phone"],
                  ["❌ No seat guarantee", "✅ Pick your exact seat"],
                  ["❌ Paper tickets only", "✅ Digital booking reference"],
                  ["❌ No schedule visibility", "✅ Real-time availability"],
                ].map(([before, after], i) => (
                  <motion.div key={i} className="contents" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <div className="p-4 border-b border-r border-surface-border text-sm text-muted-foreground">{before}</div>
                    <div className="p-4 border-b border-surface-border text-sm text-foreground">{after}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Vision */}
      <SectionWrapper className="bg-background py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">A platform for everywhere buses run.</h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-14">
            GoBusIt is being built as a location-agnostic platform. Whether you're in West Africa, Southeast Asia, or Eastern Europe — if buses move people, GoBusIt can power the booking.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Location Agnostic", body: "Deploy GoBusIt wherever there are roads. No geographic restrictions." },
              { icon: Smartphone, title: "Mobile First", body: "Designed for the phone in your pocket, not the desktop on your desk." },
              { icon: Zap, title: "Built to Scale", body: "From a single operator to a national network — the platform grows with demand." },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* The Builder */}
      <SectionWrapper className="bg-card py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">Built with care.</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            GoBusIt is an independent product built by a developer who believes that better software makes everyday life meaningfully better. It's not backed by a corporation — it's built with attention to detail, user empathy, and a clear vision of what intercity travel could feel like.
          </p>
          <p className="text-lg font-semibold text-foreground italic">"I built the thing I wished existed."</p>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-background py-20 border-t border-surface-border">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-6">Curious to see it in action?</h2>
          <a href="https://gobusit.vercel.app/register" className="inline-block bg-primary text-primary-foreground font-semibold rounded-xl px-6 py-3 hover:bg-primary-dark transition-colors text-sm">
            Try GoBusIt Free
          </a>
        </div>
      </SectionWrapper>
    </>
  );
};

export default About;
