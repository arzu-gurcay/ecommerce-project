export default function Footer() {
  return (
    <footer className="w-full border-t bg-white sticky bottom-0 z-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="flex flex-col items-start justify-between gap-6 border-b pb-8 lg:flex-row lg:items-center">
          <p className="text-lg font-semibold">Bandage</p>
          <div className="flex gap-3 text-sm text-gray-500">
            <span>fb</span>
            <span>ig</span>
            <span>tw</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 py-8 text-sm lg:grid-cols-5">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-gray-900">Company Info</p>
            {["About Us", "Carrier", "We are hiring", "Blog"].map((t) => (
              <a key={t} href="#" className="text-gray-600 hover:text-black">
                {t}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-semibold text-gray-900">Legal</p>
            {["About Us", "Carrier", "We are hiring", "Blog"].map((t) => (
              <a key={t} href="#" className="text-gray-600 hover:text-black">
                {t}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-semibold text-gray-900">Features</p>
            {["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"].map((t) => (
              <a key={t} href="#" className="text-gray-600 hover:text-black">
                {t}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-semibold text-gray-900">Resources</p>
            {["IOS & Android", "Watch a Demo", "Customers", "API"].map((t) => (
              <a key={t} href="#" className="text-gray-600 hover:text-black">
                {t}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-semibold text-gray-900">Get In Touch</p>
            <div className="flex w-full overflow-hidden rounded-lg border">
              <input className="w-full px-3 py-2 text-sm outline-none" placeholder="Your Email" />
              <button className="bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500">Lore imp sum dolor Amit</p>
          </div>
        </div>

        <p className="pt-2 text-xs text-gray-500">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </footer>
  );
}
