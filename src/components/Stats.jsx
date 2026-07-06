const STATS = [
  { label: "NHG Network", value: "3 Lakh+", color: "#FF595E" },
  { label: "Women Members", value: "48 Lakh+", color: "#8AC926" },
  { label: "Micro Enterprises", value: "75000+", color: "#1982C4" },
  { label: "CDS Units", value: "19000+", color: "#6A4C93" },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-10">
      <div className="flex flex-wrap items-center justify-center gap-8 rounded-2xl bg-white py-6 sm:gap-10">
        {STATS.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <span
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: `${stat.color}1A`, color: stat.color }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </span>
              <div>
                <p className="text-sm text-blackish">{stat.label}</p>
                <p className="font-mulish text-2xl font-bold text-green">
                  {stat.value}
                </p>
              </div>
            </div>
            {i < STATS.length - 1 && (
              <span className="hidden h-8 w-px bg-black/10 sm:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
