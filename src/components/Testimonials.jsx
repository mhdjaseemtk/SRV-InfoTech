import Image from "next/image";

const TESTIMONIALS = [
  {
    text: "Kudumbashree helped our community women achieve financial independence and confidence through entrepreneurship support.",
    name: "Revathi Jayaraj",
    role: "CEO, Test Solutions",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/ccd8e3ed0441b7a78c56fe25108278471a6c1739?width=97",
  },
  {
    text: "Our neighbourhood groups became stronger through livelihood initiatives and training programmes provided by the Mission.",
    name: "Sreenivas Menon",
    role: "Technical Consultant",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/3e0c6a0270c9589d1e2eccf9f4d032019a9bd11d?width=97",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-bluedark sm:text-3xl">
              What people says!
            </h2>
            <a href="#" className="btn-readmore">
              View All
              <span className="arrow-circle">
                <svg width="24" height="14" viewBox="0 0 36 14" fill="none">
                  <path d="M0 7a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z" fill="#039123" />
                  <path d="M35.6 6.36a1 1 0 0 1 0 1.28l-4.3 2.7a1 1 0 0 1-1.5-.87V4.53a1 1 0 0 1 1.5-.87l4.3 2.7Z" fill="#039123" />
                </svg>
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="flex flex-col gap-5 rounded-tl-lg border border-neutral-100 p-5"
              >
                <p className="line-clamp-3 text-sm leading-relaxed text-textclr">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full border-2 border-green/50 object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-blackish">
                      {t.name}
                    </p>
                    <p className="text-xs text-textclr">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[260px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#F0D6EE] p-8 text-center">
          <p className="font-serif text-3xl text-[#6E1971] sm:text-4xl">
            Stree Shakthi
          </p>
          <p className="mt-2 text-sm capitalize text-blackish">
            Smart Community Mission Platform
          </p>
        </div>
      </div>
    </section>
  );
}
