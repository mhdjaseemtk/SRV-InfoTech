const TABS = [
  "Govt. Orders",
  "Tenders/Quotations",
  "Notifications",
  "Circulars",
  "Proceedings",
];

const ORDERS = [
  {
    date: "18 May 2024",
    code: "G.O.(Rt)No.868/2024/LSGD",
    text: "Supporting women entrepreneurs through sustainable production activiti",
    isNew: true,
  },
  {
    date: "04 Jan 2024",
    code: "GO (Rt) 34/2024/LSGD",
    text: "At-source organic waste management - Orders regarding directives for O & M",
    isNew: true,
  },
  {
    date: "22 Dec 2024",
    code: "GO (Rt) 2557/2023/LSGD",
    text: "Amendment to Working Instructions of Waste Management Technical Committee - Reg",
    isNew: false,
  },
];

export default function OrdersNotifications() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#BCFAFE]/25 via-[#BCFAFE]/10 to-transparent py-16">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-10">
        <div className="mb-8 flex flex-col items-center gap-1 text-center">
          <h2 className="text-2xl font-semibold text-bluedark sm:text-3xl">
            Orders & Notifications
          </h2>
          <p className="text-sm text-textclr sm:text-base">
            Find out the latest orders and publications with ease.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              className={`rounded-lg border px-4 py-2 text-sm ${
                i === 0
                  ? "border-blackish text-blackish"
                  : "border-neutral-100 bg-white text-textclr"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {ORDERS.map((order) => (
            <div
              key={order.code}
              className="flex flex-col gap-2 rounded-xl bg-bluedark/5 px-4 py-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <span className="shrink-0 text-sm text-textclr">
                {order.date}
              </span>
              <span className="shrink-0 text-sm text-textclr/75">
                {order.code}
              </span>
              <div className="flex flex-1 items-center gap-2">
                {order.isNew && (
                  <span className="shrink-0 rounded bg-gradient-to-r from-[#E79500] to-[#E7066C] px-2 py-0.5 text-xs text-white">
                    New
                  </span>
                )}
                <p className="line-clamp-1 text-sm text-textclr">
                  {order.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <a href="#" className="btn-readmore">
            View all Govt. Orders
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
      </div>
    </section>
  );
}
