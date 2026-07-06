import Image from "next/image";

const NEWS = [
  {
    date: "20",
    month: "May 2026",
    title: "Kerala women entrepreneurship conclave conducted successfully",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/a563516aaa7b781e4ffacb32e0d372f93fd2460d?width=603",
  },
  {
    date: "19",
    month: "May 2026",
    title: "One day orientation workshop for NHG representatives",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/05870ce55ff332dd8819522d95e4dfd621db41ca?width=603",
  },
  {
    date: "18",
    month: "May 2026",
    title: "National level women collective programme inaugurated",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/e3c70c1eb55b9684a616ae46d2d7ca6c869b6365?width=603",
  },
  {
    date: "17",
    month: "May 2026",
    title: "State CDS leadership meet held in Thiruvananthapuram",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/bd3e1dbc285d7f71abc96e603c780dc57d0ff4c8?width=603",
  },
];

export default function NewsEvents() {
  return (
    <section id="media" className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-medium text-bluedark sm:text-3xl">
          Latest News & Events
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

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {NEWS.map((item) => (
          <div key={item.title} className="relative">
            <div className="relative h-48 w-full overflow-hidden rounded-tl-lg">
              <Image src={item.img} alt={item.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-green/30 to-bluedark/30" />
            </div>
            <div className="relative -mt-10 mx-3 flex flex-col gap-2 rounded-tl-lg border border-neutral-100 bg-white p-4 shadow-[4px_4px_20px_0_rgba(0,0,0,0.05)]">
              <p className="text-sm text-[#FF924C]">
                <span className="text-xl font-medium">{item.date}</span>{" "}
                {item.month}
              </p>
              <p className="line-clamp-2 text-sm text-textclr">
                {item.title}
              </p>
              <a href="#" className="btn-readmore">
                Read More
                <span className="arrow-circle">
                  <svg width="24" height="14" viewBox="0 0 36 14" fill="none">
                    <path d="M0 7a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z" fill="#039123" />
                    <path d="M35.6 6.36a1 1 0 0 1 0 1.28l-4.3 2.7a1 1 0 0 1-1.5-.87V4.53a1 1 0 0 1 1.5-.87l4.3 2.7Z" fill="#039123" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
