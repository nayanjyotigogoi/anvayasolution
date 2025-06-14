"use client"

interface AdSlotProps {
  position: "after-hero" | "mid-content" | "sidebar" | "footer"
  className?: string
}

export function AdSlot({ position, className = "" }: AdSlotProps) {
  // In a real application, this would integrate with an ad network
  const adContent = {
    "after-hero": {
      title: "Boost Your Business",
      description: "Professional services tailored for your success",
      cta: "Learn More",
    },
    "mid-content": {
      title: "Special Offer",
      description: "Get 20% off on your first project consultation",
      cta: "Claim Offer",
    },
    sidebar: {
      title: "Quick Quote",
      description: "Get instant pricing for your project",
      cta: "Get Quote",
    },
    footer: {
      title: "Newsletter",
      description: "Stay updated with latest tech trends",
      cta: "Subscribe",
    },
  }

  const ad = adContent[position]

  return (
    <div
      className={`bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8 ${className}`}
    >
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2 text-blue-900 dark:text-blue-100">{ad.title}</h3>
        <p className="text-blue-700 dark:text-blue-200 mb-4">{ad.description}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
          {ad.cta}
        </button>
      </div>
      <div className="text-xs text-blue-500 dark:text-blue-400 mt-2 text-center opacity-60">Advertisement</div>
    </div>
  )
}
