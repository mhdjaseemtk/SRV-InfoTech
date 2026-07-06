const MEMBERS = [1, 2, 3, 4];

function MemberCard() {
  return (
    <div className="flex w-[160px] flex-col items-start gap-[15px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[30px] rounded-bl-[10px] border border-[#EEE] bg-white p-[12px] sm:w-[200px]">
      <div className="flex h-[110px] w-full items-center justify-center rounded-tl-[10px] rounded-tr-[10px] rounded-br-[20px] rounded-bl-[10px] bg-neutral-200 shadow-[4px_4px_0_0_rgba(3,145,35,0.25)] sm:h-[140px]">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          className="text-neutral-400"
        >
          <path
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-blackish">Name Placeholder</p>
        <p className="text-xs text-textclr">Designation Placeholder</p>
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 lg:w-auto lg:flex-1 lg:justify-end">
      {MEMBERS.map((id) => (
        <MemberCard key={id} />
      ))}
    </div>
  );
}
