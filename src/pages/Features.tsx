import { motion } from "framer-motion";
import { Search, Grid3X3, CheckCircle, Ticket, Bus, Navigation, Calendar, Users, BarChart } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";

const Features = () => {
  return (
    <>
      <PageHero
        title="Everything GoBusIt Can Do"
        subtitle="A platform built for the full journey — from the moment you search to the moment you arrive."
      />

      {/* Passenger Features */}
      <SectionWrapper className="bg-card py-20">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">For Passengers</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-14">Travel on your terms.</h2>

          <div className="space-y-20">
            {[
              {
                icon: Search,
                heading: "Find any trip, instantly.",
                body: "Filter by origin, destination, and date. See only available trips — no outdated listings, no guesswork. Real-time seat counts update as others book.",
                visual: (
                  <div className="bg-background rounded-2xl border border-surface-border p-5">
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="flex-1 bg-muted rounded-xl px-4 py-2.5 text-sm text-muted-foreground">Cotonou</div>
                        <div className="flex-1 bg-muted rounded-xl px-4 py-2.5 text-sm text-muted-foreground">Lagos</div>
                      </div>
                      <div className="bg-muted rounded-xl px-4 py-2.5 text-sm text-muted-foreground">Mar 20, 2025</div>
                      <div className="bg-primary text-primary-foreground text-sm font-semibold rounded-xl py-2.5 text-center">Search Buses</div>
                    </div>
                  </div>
                ),
              },
              {
                icon: Grid3X3,
                heading: "Choose exactly where you sit.",
                body: "Every schedule shows a live seat map. Taken seats are greyed out. Tap any open seat to claim it before someone else does.",
                visual: (
                  <div className="bg-background rounded-2xl border border-surface-border p-5">
                    <p className="text-xs font-semibold text-muted-foreground mb-3">Seat Map</p>
                    <div className="grid grid-cols-5 gap-1.5">
                      {Array.from({ length: 20 }).map((_, i) => {
                        const taken = [1, 3, 6, 9, 12, 15].includes(i);
                        const selected = i === 8;
                        return (
                          <div
                            key={i}
                            className={`w-8 h-8 rounded-md text-xs flex items-center justify-center font-medium ${
                              selected ? "bg-primary text-primary-foreground" : taken ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary"
                            }`}
                          >
                            {i + 1}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ),
              },
              {
                icon: CheckCircle,
                heading: "Your ticket, right away.",
                body: "No waiting, no email delays. The moment you confirm, your booking reference is generated and your seat is locked in.",
                visual: (
                  <div className="bg-background rounded-2xl border border-surface-border p-5">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs font-semibold text-muted-foreground">Booking Confirmed</p>
                      <span className="text-xs font-semibold bg-emerald-100 text-emerald-600 rounded-full px-3 py-1">BOOKED</span>
                    </div>
                    <p className="text-sm font-bold text-foreground mb-1">Cotonou → Lagos</p>
                    <p className="text-xs text-muted-foreground mb-3">Seat 9 · Mar 20, 2025 · 07:00</p>
                    <p className="text-xs text-muted-foreground">Ref: <span className="font-mono font-semibold text-foreground">GBI-29A7F3</span></p>
                  </div>
                ),
              },
              {
                icon: Ticket,
                heading: "All your trips in one place.",
                body: "View upcoming and past journeys, cancel bookings, and track your travel history — all from your profile.",
                visual: null,
              },
            ].map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <feat.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feat.heading}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feat.body}</p>
                </div>
                {feat.visual && (
                  <div className={`max-w-xs mx-auto md:mx-0 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    {feat.visual}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Operator Features */}
      <SectionWrapper className="bg-background py-20">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">For Operators</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-14">Run your fleet like a pro.</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Bus, title: "Fleet Management", body: "Add buses, set capacity, and track maintenance status across your fleet." },
              { icon: Navigation, title: "Route Configuration", body: "Define routes with stop points, distances, and estimated durations." },
              { icon: Calendar, title: "Schedule Control", body: "Create and manage trip schedules. Advance statuses from Scheduled → Boarding → In Transit → Arrived." },
              { icon: Users, title: "Passenger Oversight", body: "View all registered users, manage roles, enable or disable accounts." },
              { icon: Ticket, title: "Ticket Operations", body: "Browse all bookings, filter by route or status, and cancel tickets on behalf of passengers." },
              { icon: BarChart, title: "Operations Dashboard", body: "Get a real-time overview of fleet activity, bookings today, and active schedules." },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-card border border-surface-border rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-card py-20 border-t border-surface-border">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">Built to scale with your operation.</h2>
          <p className="text-muted-foreground text-lg mb-8">Whether you run 2 buses or 200, GoBusIt grows with you.</p>
          <a href="https://gobusit.vercel.app/register" className="inline-block bg-primary text-primary-foreground font-semibold rounded-xl px-6 py-3 hover:bg-primary-dark transition-colors text-sm">
            Get Started Free
          </a>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Features;
