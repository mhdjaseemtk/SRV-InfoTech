import Image from "next/image";

export default function Publications() {
  return (
    <div className="mx-auto flex w-full max-w-xs flex-col items-center gap-4 lg:mx-0 lg:max-w-[339px] lg:items-start">
      <h2 className="text-xl font-semibold text-bluedark sm:text-2xl">
        Latest Publications
      </h2>
      <div className="relative h-72 w-full lg:h-[358px]">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/cc9c3d3cc9eaff6815bb9dacc5465c4e3241c98f?width=563"
          alt="Kudumbashree Annual Report cover"
          fill
          className="rounded-md border border-neutral-300 object-cover"
        />
      </div>
      <div className="w-full max-w-[330px] rounded-md border border-neutral-100 bg-white px-4 py-3 text-center shadow-sm">
        <p className="line-clamp-2 text-sm font-medium text-blackish">
          Kudumbashree – Annual Report 2025
        </p>
        <a href="#" className="mt-2 inline-flex text-sm text-bluedark">
          View All
        </a>
      </div>
    </div>
  );
}
