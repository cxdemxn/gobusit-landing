const MockRouteCard = () => (
  <div className="bg-card rounded-2xl border border-surface-border p-5 shadow-sm">
    <div className="flex items-center justify-between mb-3">
      <div>
        <p className="text-xs font-semibold text-muted-foreground">Route</p>
        <p className="text-base font-bold text-foreground">Cotonou → Lagos</p>
      </div>
      <span className="text-xs font-semibold bg-primary/10 text-primary rounded-full px-3 py-1">
        SCHEDULED
      </span>
    </div>
    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
      <span>🕐 07:00</span>
      <span>💰 5,000 FCFA</span>
    </div>

    {/* Mini Seat Grid */}
    <div className="mb-4">
      <p className="text-xs font-semibold text-muted-foreground mb-2">Select a seat</p>
      <div className="grid grid-cols-5 gap-1.5">
        {Array.from({ length: 20 }).map((_, i) => {
          const taken = [0, 2, 5, 7, 11, 14, 17].includes(i);
          const selected = i === 6;
          return (
            <div
              key={i}
              className={`w-8 h-8 rounded-md text-xs flex items-center justify-center font-medium transition-colors ${
                selected
                  ? "bg-primary text-primary-foreground"
                  : taken
                  ? "bg-muted text-muted-foreground"
                  : "bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer"
              }`}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>

    <button className="w-full bg-primary text-primary-foreground font-semibold text-sm rounded-xl py-2.5 hover:bg-primary-dark transition-colors">
      Book Seat 7 — 5,000 FCFA
    </button>
  </div>
);

export default MockRouteCard;
