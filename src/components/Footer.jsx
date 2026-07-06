"use client";

import { useState } from "react";
import Image from "next/image";

const QUICK_LINKS = [
  "About Mission",
  "NHG Network",
  "Micro Enterprises",
  "Initiatives",
];

const SUPPORT_LINKS = ["FAQs", "Acts & Rules", "Court Orders", "Feedback"];

const IEC_LINKS = ["Publications", "Presentations", "Press Release", "Gallery"];

const DOWNLOAD_LINKS = [
  "Annual Reports",
  "Documents",
  "Policies & Guidelines",
  "Manuals",
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer id="contact" className="relative overflow-hidden text-blackish">
      <div className="absolute inset-0">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/f490aa1e31f49538cc46b74df3b335bc0c2a016c?width=3002"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-bluedark/80" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 pt-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1300px] rounded-lg border border-neutral-100 bg-white/80 p-6 backdrop-blur-sm sm:p-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <FooterColumn title="Quick Links" links={QUICK_LINKS} />
            <FooterColumn title="Support" links={SUPPORT_LINKS} />
            <FooterColumn title="IEC" links={IEC_LINKS} />
            <FooterColumn title="Downloads" links={DOWNLOAD_LINKS} />

            <div className="col-span-2 sm:col-span-2 lg:col-span-1">
              <h4 className="mb-3 text-base font-medium text-bluedark">
                Contact Info
              </h4>
              <p className="text-sm text-textclr">
                4th Floor, TAIDA Complex, Medical College P.O,
                <br />
                Thiruvananthapuram – 695011
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-black/5 pt-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h4 className="mb-3 text-base font-medium text-bluedark">
                We are always here to help you!
              </h4>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bluedark text-white">
                    <svg width="15" height="18" viewBox="0 0 15 18" fill="currentColor">
                      <path d="M7.5 17.5v-1.67h5.83V15H10V8.33h3.33V7.5c0-1.61-.57-2.99-1.71-4.13C10.49 2.24 9.11 1.67 7.5 1.67s-3 .57-4.13 1.7C2.24 4.51 1.67 5.89 1.67 7.5v.83H5V15H1.67C1.21 15 .82 14.84.49 14.51.16 14.18 0 13.79 0 13.33V7.5C0 4.03 1.03 1.34 4.6.4A7.5 7.5 0 0 1 7.5 0c3.5 0 6.13 1.4 7.5 5.5V15c0 .46-.16.85-.49 1.18-.33.33-.72.32-1.18.32H7.5Z" />
                    </svg>
                  </span>
                  <div className="text-sm text-textclr">
                    <p>91-471-2554714</p>
                    <p>91-471-2554715</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-bluedark text-white">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="currentColor">
                      <path d="M8.33 0 15.9 4.5c.25.15.44.36.58.63.14.26.2.54.2.83V15a1.7 1.7 0 0 1-1.7 1.7H1.67A1.7 1.7 0 0 1 0 15V5.96c0-.29.07-.57.2-.83.14-.27.34-.48.58-.63L8.33 0Z" />
                    </svg>
                  </span>
                  <p className="text-sm text-textclr">info@streeshakthi.org</p>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm text-green">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                  <path
                    d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 7.35C10.03 15.48 11.54 13.79 12.53 12.26C13.51 10.74 14 9.38 14 8.2C14 6.38 13.42 4.9 12.26 3.74C11.1 2.58 9.68 2 8 2C6.32 2 4.9 2.58 3.74 3.74C2.58 4.9 2 6.38 2 8.2C2 9.38 2.49 10.74 3.48 12.26C4.46 13.79 5.97 15.48 8 17.35Z"
                    fill="#039123"
                  />
                </svg>
                Find on Map
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-base font-medium text-bluedark">
                Download Our App
              </h4>
              <div className="flex flex-wrap gap-3">
                <div className="flex h-10 w-32 items-center justify-center rounded-md bg-black text-xs text-white">
                  Google Play
                </div>
                <div className="flex h-10 w-32 items-center justify-center rounded-md bg-black text-xs text-white">
                  App Store
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-full bg-bluedark px-4 py-3 text-white lg:justify-self-end">
              <svg width="21" height="19" viewBox="0 0 21 19" fill="currentColor">
                <path d="M5.4 19 4 17.6l6.9-6.93 3.5 3.5 5.18-5.17L21 10.42 14.4 17l-3.5-3.5L5.4 19ZM2 18a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4.2H2V18Z" />
              </svg>
              <div>
                <p className="text-sm">Visitor Tracking</p>
                <p className="text-lg font-medium uppercase text-green">543475</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1300px] py-8">
          <div className="flex flex-col items-center gap-2 text-white sm:flex-row sm:justify-between">
            <div>
              <h4 className="text-lg font-medium">Newsletter</h4>
              <p className="text-sm text-white/80">
                Never miss a beat with our newsletter updates!
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full max-w-xs gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full flex-1 rounded-md border border-white/25 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/70 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-md bg-green px-4 py-2 text-sm text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/20 py-6 text-center sm:flex-row sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/90">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Disclaimer</a>
            <a href="#">Sitemap</a>
          </div>
          <div className="text-sm text-white/90 sm:text-right">
            <p>© 2026 Stree Shakthi. All Rights Reserved</p>
            <p>Powered by SRV InfoTech</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="mb-3 text-base font-medium text-bluedark">{title}</h4>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-sm text-textclr hover:text-green">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
