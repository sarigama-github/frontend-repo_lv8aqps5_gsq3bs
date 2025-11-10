export default function PromoBanner() {
  return (
    <section id="sale" className="relative mx-4 sm:mx-6 lg:mx-8 mt-10">
      <div className="rounded-2xl overflow-hidden bg-neutral-900 text-white">
        <div className="grid md:grid-cols-2">
          <div className="p-8 sm:p-12">
            <p className="text-xs uppercase tracking-widest text-white/70">Limited Time</p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold">End of Season Sale</h3>
            <p className="mt-2 text-white/80">Up to 40% off select styles. While supplies last.</p>
            <div className="mt-6 flex gap-3">
              <a href="#men" className="px-4 py-2 rounded-md bg-white text-neutral-900 text-sm font-semibold">Shop Men</a>
              <a href="#women" className="px-4 py-2 rounded-md border border-white/20 text-sm font-semibold">Shop Women</a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600&auto=format&fit=crop"
              alt="Promo"
              className="h-64 md:h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
