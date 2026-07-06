import Image from "next/image";

const LOGOS = [
  "https://api.builder.io/api/v1/image/assets/TEMP/dd8b27f0dfd7c41f3fea1dd584394278feb06292?width=260",
  "https://api.builder.io/api/v1/image/assets/TEMP/bb319a998f7c1bf838d3164cb9df31c0457ad02e?width=256",
  "https://api.builder.io/api/v1/image/assets/TEMP/0ed5dcf6b8c4cd57748912259cf920572a42f196?width=262",
  null,
  "https://api.builder.io/api/v1/image/assets/TEMP/6d9495f54e8624c2febdef98fbbfd7a9af2b8eb4?width=256",
  "https://api.builder.io/api/v1/image/assets/TEMP/bdab28832e6c7d671f1c52b3669107ebc57f13dd?width=264",
];

export default function PartnerLogos() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10">
      <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-[85px]">
        {LOGOS.map((logo, i) => (
          <div
            key={i}
            className="flex h-[77px] w-[145px] shrink-0 items-center justify-center rounded-md border border-neutral-100 bg-white"
          >
            {logo ? (
              <div className="relative h-[70px] w-[130px]">
                <Image src={logo} alt="Partner logo" fill className="object-contain" />
              </div>
            ) : (
              <span className="text-sm font-medium text-green">
                Suchitwa Mission
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
