import { useState } from 'react';
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-fuchsia-500 via-rose-500 to-orange-400" />
            <span className="text-xl font-extrabold tracking-tight">Nova Threads</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#new" className="hover:text-neutral-900 text-neutral-600">New Arrivals</a>
            <a href="#men" className="hover:text-neutral-900 text-neutral-600">Men</a>
            <a href="#women" className="hover:text-neutral-900 text-neutral-600">Women</a>
            <a href="#sale" className="hover:text-neutral-900 text-neutral-600">Sale</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-neutral-100">
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="Account" className="p-2 rounded-full hover:bg-neutral-100">
              <User className="h-5 w-5" />
            </button>
            <button aria-label="Cart" className="p-2 rounded-full hover:bg-neutral-100 relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 text-[10px] leading-none px-1.5 py-0.5 rounded-full bg-neutral-900 text-white">2</span>
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-neutral-100" aria-label="Toggle Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2 text-sm font-medium">
              <a href="#new" className="px-3 py-2 rounded hover:bg-neutral-100">New Arrivals</a>
              <a href="#men" className="px-3 py-2 rounded hover:bg-neutral-100">Men</a>
              <a href="#women" className="px-3 py-2 rounded hover:bg-neutral-100">Women</a>
              <a href="#sale" className="px-3 py-2 rounded hover:bg-neutral-100">Sale</a>
              <div className="flex items-center gap-2 pt-2">
                <button className="flex-1 px-3 py-2 rounded bg-neutral-900 text-white">Search</button>
                <button className="flex-1 px-3 py-2 rounded border">Account</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
