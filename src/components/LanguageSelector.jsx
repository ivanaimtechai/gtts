import { Globe, ChevronDown } from 'lucide-react'

export default function LanguageSelector({ className = '' }) {
  return (
    <div className={`flex flex-col items-end ${className}`}>
      <span className="text-xs text-brand-navy/70 mb-1">Select Language</span>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-md border border-brand-line bg-white px-3 py-1.5 text-sm text-brand-navy shadow-sm"
      >
        <Globe className="h-4 w-4" />
        English (US)
        <ChevronDown className="h-4 w-4" />
      </button>
    </div>
  )
}
