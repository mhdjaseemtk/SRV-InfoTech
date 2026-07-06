import Image from "next/image";

const GALLERY_IMAGES = [
  "https://api.builder.io/api/v1/image/assets/TEMP/1b16ab41f1ecb5a3ef4314f55c6e3eaddd142e91?width=576",
  "https://api.builder.io/api/v1/image/assets/TEMP/f38891dba4025505d4f23da1b2769cb3189c146f?width=576",
  "https://api.builder.io/api/v1/image/assets/TEMP/888245e1c1ec316a2291c38d53995acb6b35928d?width=576",
];

export default function CommunityGallery() {
  return (
    <section id="gallery" className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <h2 className="text-2xl font-semibold text-bluedark sm:text-3xl">
            My Community, My Responsibility
          </h2>
          <p className="mt-3 text-sm text-textclr sm:text-base">
            Women empowerment is an important part of our daily living,
            especially in rural and urban communities. Kudumbashree supports
            sustainable livelihoods and community development initiatives
            across Kerala.
          </p>

          <div className="relative mt-6 h-64 w-full overflow-hidden rounded-tl-lg sm:h-80">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/5435d35f4bfc6b47489c5809577b1b8bef4efe1f?width=926"
              alt="Community outreach"
              fill
              className="object-cover"
            />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FF595E]/50">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="#FF595E">
                  <path d="M19.26 8.75c.99.55.99 1.94 0 2.49L2.22 20.8c-.99.55-2.22-.11-2.22-1.25V1.45C0 .3 1.23-.36 2.22.19l17.04 8.56Z" />
                </svg>
              </span>
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button className="btn-readmore rounded-full border border-neutral-100 px-4 py-2">
              Explore Images
              <span className="text-[#FF595E]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </button>
            <button className="btn-readmore rounded-full border border-neutral-100 px-4 py-2">
              All Videos
              <span className="text-[#1982C4]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="4" width="14" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {GALLERY_IMAGES.map((img, i) => (
            <div key={img} className="relative h-56 overflow-hidden rounded-tl-lg sm:h-full">
              <Image src={img} alt="Community gallery" fill className="object-cover" />
              {i === 0 && (
                <p className="absolute bottom-3 left-3 right-3 line-clamp-2 text-sm font-medium text-white">
                  Team Thrissur engaged in the &lsquo;Youth Meets Harithakarma
                  Sena&rsquo; campaign
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
