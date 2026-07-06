import Image from "next/image";

const QUICK_LINKS = [
  { label: "LWM", color: "#FF595E" },
  { label: "SWM", color: "#8AC926" },
  { label: "IEC/CB", color: "#FFCA3A" },
  { label: "Service Providers", color: "#1982C4" },
  { label: "Gallery", color: "#FF924C" },
  { label: "Media", color: "#6A4C93" },
];

const CARDS = [
  {
    title: "Vision",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/fc391e27909aaa66cd3659d0ecefee2396da5aeb?width=120",
    text: "Ensure inclusive women empowerment through economic growth, collective participation, and sustainable community development initiatives.",
    linkLabel: "Learn more about our vision",
  },
  {
    title: "Mission",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/c8907b3ae1036e6565c66db42965455efd2810f9?width=120",
    text: "Provide women support through livelihood development, entrepreneurship promotion, financial inclusion, social participation, and community empowerment initiatives.",
    linkLabel: "Learn more about our mission",
  },
];

export function ReadMore({ label }) {
  return (
    <a href="#" className="btn-readmore">
      {label}
      <span className="arrow-circle">
        <svg width="24" height="14" viewBox="0 0 36 14" fill="none">
          <path
            d="M0 7a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z"
            fill="#039123"
          />
          <path
            d="M35.6 6.36a1 1 0 0 1 0 1.28l-4.3 2.7a1 1 0 0 1-1.5-.87V4.53a1 1 0 0 1 1.5-.87l4.3 2.7Z"
            fill="#039123"
          />
        </svg>
      </span>
    </a>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[520fr_750fr]">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {QUICK_LINKS.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-4 rounded-md border border-neutral-100 bg-white py-4 shadow-sm"
              >
                <span
                  className="flex h-6 w-6 items-center justify-center"
                  style={{ color: item.color }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </span>
                <span className="text-center text-sm font-medium text-blackish">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-4 rounded-tl-lg border border-neutral-100 p-5"
            >
              <div className="flex items-end gap-3">
                <Image src={card.icon} alt="" width={60} height={60} />
                <h3 className="text-xl font-semibold text-bluedark">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm text-textclr">{card.text}</p>
              <ReadMore label={card.linkLabel} />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold text-bluedark sm:text-4xl">
            About Stree Shakthi
          </h2>
          <p className="text-sm text-textclr sm:text-base">
            Stree Shakthi is the State Poverty Eradication and Women
            Empowerment Mission of the Government of Kerala. It empowers
            women through community networks, entrepreneurship development,
            financial inclusion, livelihood activities, and local self
            governance participation.
          </p>
          <ReadMore label="Read more about us" />

          <div className="mt-6 flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-bluedark">
              Latest Highlights
            </h3>
            <ReadMore label="View all events" />
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-tl-lg sm:h-80 lg:h-[430px]">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/9e43d601a10bfb9014fac315dbb67b50cca75abd?width=1500"
              alt="Public toilet assessment launch"
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-bluedark/75 px-4 py-3">
              <p className="line-clamp-1 text-sm font-medium text-neutral-100">
                Launch of public toilet assessment and rating system in
                Kerala
              </p>
            </div>
            <div className="absolute right-4 top-4 flex gap-1.5 rounded-lg bg-black/50 px-2.5 py-1.5">
              {[0, 1, 2, 3].map((dot) => (
                <span
                  key={dot}
                  className={`h-2.5 w-2.5 rounded-full ${
                    dot === 0 ? "bg-green" : "bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
