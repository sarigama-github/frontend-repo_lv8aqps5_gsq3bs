import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-white">
      <div className="absolute inset-0 opacity-50 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-rose-200 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-200 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" /> New Drop
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Elevate your everyday style with statement pieces
          </h1>
          <p className="text-neutral-600 text-lg">
            Minimal silhouettes. Luxe fabrics. Designed for comfort and confidence. Discover the collection crafted for modern movement.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#new" className="px-5 py-3 rounded-md bg-neutral-900 text-white font-medium hover:opacity-90">Shop New Arrivals</a>
            <a href="#sale" className="px-5 py-3 rounded-md border font-medium hover:bg-neutral-50">Explore Sale</a>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-neutral-600">
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <img key={i} src={`https://i.pravatar.cc/40?img=${i + 10}`} alt="customer" className="h-8 w-8 rounded-full ring-2 ring-white" />
              ))}
            </div>
            <span>Trusted by 10k+ fashion lovers</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1548883354-7622d03aca3e?q=80&w=1600&auto=format&fit=crop"
            alt="Streetwear model"
            className="w-full h-[520px] object-cover rounded-2xl shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
