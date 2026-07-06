import Image from "next/image";

const INITIATIVES = [
  {
    title: "K-Inam",
    text: "Women-led premium food product initiative.",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/e4be7f3a7199cc5c46a4ba43328ed67f25ef5f16?width=520",
    imageFirst: true,
  },
  {
    title: "Thelima Rural Enterprises",
    text: "Supporting women entrepreneurs through sustainable production activities.",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/527eda625051e1cc04f6a119d4c57197abc2aa1c?width=520",
    imageFirst: false,
  },
  {
    title: "She Empowerment Mission",
    text: "Skill development and financial inclusion for women communities.",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/8f96aefd2ad4d970d92165ef2f913535b1b1b3a4?width=520",
    imageFirst: true,
  },
];

export default function Initiatives() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-bluedark sm:text-3xl">
          Our Initiatives
        </h2>
        <a href="#" className="btn-readmore">
          View all initiatives
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
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {INITIATIVES.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-4 rounded-tl-lg border border-neutral-100 p-4"
          >
            {item.imageFirst && (
              <div className="relative h-48 w-full overflow-hidden rounded-tl-lg shadow-[4px_4px_0_0_rgba(3,145,35,0.25)]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <h3 className="text-base font-medium text-blackish">
                {item.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-textclr">
                {item.text}
              </p>
            </div>
            {!item.imageFirst && (
              <div className="relative h-48 w-full overflow-hidden rounded-tl-lg shadow-[4px_4px_0_0_rgba(3,145,35,0.25)]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
