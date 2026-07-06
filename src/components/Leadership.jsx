import Image from "next/image";

const MEMBERS = [
  {
    name: "Haris Kannan",
    designation: "Chairman",
    image: "/Haris kannan.png",
  },
  {
    name: "Rakesh Kumar",
    designation: "Executive Director",
    image: "/Rakesh Kumar.png",
  },
  {
    name: "Sharanya Nair",
    designation: "Executive Director",
    image: "/Sharanya Nair.png",
  },
  {
    name: "Priyanka Menon",
    designation: "Funding Officer",
    image: "/Priyanka Menon.png",
  },
];

function MemberCard({ name, designation, image }) {
  return (
    <div className="flex w-[160px] flex-col items-start gap-[15px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[30px] rounded-bl-[10px] border border-[#EEE] bg-white p-[12px] sm:w-[200px]">
      <div className="relative h-[110px] w-full overflow-hidden rounded-tl-[10px] rounded-tr-[10px] rounded-br-[20px] rounded-bl-[10px] bg-neutral-200 shadow-[4px_4px_0_0_rgba(3,145,35,0.25)] sm:h-[140px]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 640px) 176px, 136px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-blackish">{name}</p>
        <p className="text-xs text-textclr">{designation}</p>
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 lg:w-auto lg:flex-1 lg:justify-end">
      {MEMBERS.map((member) => (
        <MemberCard key={member.name} {...member} />
      ))}
    </div>
  );
}
