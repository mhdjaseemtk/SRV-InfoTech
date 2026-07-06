import Image from "next/image";
import Leadership from "./Leadership";

const UPDATES = [
  {
    tag: "New",
    date: "04 May 2026",
    title: "NHG training programme launched statewide",
  },
  {
    tag: "New",
    date: "31 May 2026",
    title: "Applications invited for women enterprises",
  },
  {
    tag: null,
    date: "30 May 2026",
    title: "Kudumbashree food products reach markets",
  },
  {
    tag: null,
    date: "20 May 2026",
    title: "Stree CDS leadership workshop conducted",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-[320px] w-full sm:h-[480px] lg:h-[765px]">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/64c54b9aba482273b7a28856ce9464c1c8e349fd?width=2880"
          alt="Women of Kerala working together"
          fill
          priority
          className="object-cover"
        />
        <div
          className="pointer-events-none absolute left-[23%] top-[20%] h-[150px] w-[54%] max-w-[779px] rounded-full bg-white/90 blur-[80px] sm:blur-[120px] lg:blur-[169px]"
          aria-hidden
        />
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/57616e76f37bf05108a4d7168ecfe485957eed6e?width=64"
          alt=""
          width={32}
          height={58}
          className="absolute right-[4%] top-[14%] hidden sm:block"
        />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-5 sm:px-8">
          <h1 className="max-w-3xl text-2xl font-bold text-[#6E1971] sm:text-4xl lg:text-[42px]">
            Empowering Kerala Women
          </h1>
          <p className="max-w-xl text-sm text-white sm:text-base">
            Stree Shakthi is the State Poverty Eradication Mission under the
            Local Self Government Department of Kerala.
          </p>
          <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-bluedark shadow-md transition hover:bg-white/90">
            Learn more about us!
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[70px]">
        <div className="relative z-10 -mt-16 flex flex-col items-start gap-8 sm:-mt-24 lg:-mt-[183px] lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="flex w-full flex-col rounded-tl-[10px] rounded-tr-[10px] rounded-br-[30px] rounded-bl-[10px] bg-white/90 px-[15px] py-[10px] shadow-[6px_6px_20px_0_rgba(3,145,35,0.08)] sm:max-w-sm lg:w-[330px] lg:max-w-none lg:shrink-0">
            <div className="flex items-center justify-between">
              <p className="text-base font-medium">
                <span className="text-bluedark">Latest</span>{" "}
                <span className="text-green">Updates</span>
              </p>
              <a href="#" className="btn-readmore">
                View All
                <span className="arrow-circle">
                  <svg width="24" height="14" viewBox="0 0 36 14" fill="none">
                    <path
                      d="M0 7a1 1 0 0 0 .293.707l6 6a1 1 0 1 0 1.414-1.414L2.414 7l5.293-5.293A1 1 0 0 0 6.293.293l-6 6A1 1 0 0 0 0 7Z"
                      fill="#777"
                    />
                    <path
                      d="M36 7a1 1 0 0 1-.293.707l-6 6a1 1 0 1 1-1.414-1.414L33.586 7l-5.293-5.293A1 1 0 1 1 29.707.293l6 6A1 1 0 0 1 36 7Z"
                      fill="#039123"
                    />
                  </svg>
                </span>
              </a>
            </div>

            <ul className="mt-3 flex flex-col gap-3">
              {UPDATES.map((update) => (
                <li
                  key={update.title}
                  className="border-t border-neutral-100 pt-3 first:border-t-0 first:pt-0"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-bluedark">
                      {update.date}
                    </span>
                    {update.tag && (
                      <span className="rounded bg-gradient-to-r from-[#E79500] to-[#E7066C] px-1.5 py-0.5 text-[11px] text-white">
                        {update.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm text-textclr">
                    {update.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <Leadership />
        </div>
      </div>
    </section>
  );
}
