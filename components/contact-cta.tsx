"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

export function ContactCTA() {
  const { t } = useLanguage()

  return (
    <section className="py-20 business-gradient text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="opacity-90">+91 97073 85552</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="opacity-90">hello@anvayasolution.com</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
            <p className="opacity-90">Dhemaji, Assam. or Guwahati Assam</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              {t("contact.cta")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
