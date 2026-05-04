import { Share2, Phone } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="bg-brand-navy text-white text-sm">
      <div className="container-x flex items-center justify-between py-2">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md border border-white/30 px-3 py-1 text-xs font-semibold tracking-wide hover:bg-white/10 transition-colors"
        >
          <Share2 className="h-3.5 w-3.5" />
          SHARE THIS PAGE
        </button>
        <a href="tel:1-800-909-3909" className="inline-flex items-center gap-2 hover:underline">
          <Phone className="h-4 w-4" />
          <span>Contact Us: 1-800-909-3909</span>
        </a>
      </div>
    </div>
  )
}
