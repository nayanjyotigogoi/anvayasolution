"use client"

import { useEffect } from "react"

interface AdSlotProps {
  position: "after-hero" | "mid-content" | "sidebar" | "footer"
  className?: string
}

export function AdSlot({ position, className = "" }: AdSlotProps) {
  const isProd = process.env.NODE_ENV === "production"

  useEffect(() => {
    if (isProd) {
      try {
        if (typeof window !== "undefined") {
          // Push ad request to AdSense
          (window.adsbygoogle = window.adsbygoogle || []).push({})
        }
      } catch (e) {
        console.error("AdSense error:", e)
      }
    }
  }, [isProd])

  if (!isProd) {
    // 🚧 Fake ad for local/development
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

  // ✅ Real Google AdSense ad
  return (
    <div className={`my-8 w-full flex justify-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", maxWidth: "728px", height: "90px" }}
        data-ad-client="ca-pub-2463160078947861"
        data-ad-slot="1234567890" // 🔁 Replace with actual AdSense slot ID
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
