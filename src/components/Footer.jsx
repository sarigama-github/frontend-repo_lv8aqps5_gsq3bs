import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Help</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a href="#men">Men</a></li>
              <li><a href="#women">Women</a></li>
              <li><a href="#new">New Arrivals</a></li>
              <li><a href="#sale">Sale</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Follow</h4>
            <div className="mt-3 flex gap-3 text-neutral-600">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full border hover:bg-neutral-50"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-full border hover:bg-neutral-50"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-full border hover:bg-neutral-50"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-full border hover:bg-neutral-50"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} Nova Threads. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-neutral-500">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
