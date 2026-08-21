"use client";

import { useState, useCallback } from "react";
import { Navbar, scrollToSection } from "@/components/arche/navbar";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { StatsRow } from "@/components/sections/stats";
import { WorkSection } from "@/components/sections/work";
import { FeaturesSection } from "@/components/sections/features";
import { AboutSection } from "@/components/sections/about";
import { ProcessSection } from "@/components/sections/process";
import { ServicesSection } from "@/components/sections/services";
import { ToolsSection } from "@/components/sections/tools";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FutureSection } from "@/components/sections/future";
import { ReviewsSection } from "@/components/sections/reviews";
import { FaqSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";

export function ArcheApp() {
  const [contactInquiry, setContactInquiry] = useState<string | undefined>(
    undefined,
  );

  const goContact = useCallback((inquiry?: string) => {
    setContactInquiry(inquiry);
    scrollToSection("contact");
  }, []);

  const goWork = useCallback(() => {
    scrollToSection("work");
  }, []);

  return (
    <>
      <Navbar onContactClick={() => goContact()} />

      <main className="relative">
        <HeroSection onContactClick={() => goContact()} onWorkClick={goWork} />
        <StatsRow />
        <WorkSection onContactClick={() => goContact()} />
        <FeaturesSection />
        <AboutSection />
        <ProcessSection />
        <ServicesSection onContactClick={goContact} />
        <ToolsSection />
        <CtaBanner onContactClick={() => goContact()} />
        <FutureSection />
        <ReviewsSection />
        <FaqSection onContactClick={() => goContact()} />
        <ContactSection preselectInquiry={contactInquiry} />
      </main>

      <Footer onContactClick={() => goContact()} />
    </>
  );
}
