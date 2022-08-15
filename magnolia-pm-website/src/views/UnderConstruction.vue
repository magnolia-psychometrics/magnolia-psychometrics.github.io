<script setup>
// import HomeVue from "../components/HomeVue.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import HeroSection from "../components/HeroSection.vue";
import FundingSectionDivider from "../components/FundingSectionDivider.vue";
import IoServiceSection from "../components/IoServiceSection.vue";
import PartnerSectionDivider from "../components/PartnerSectionDivider.vue";
import PsychometricServiceSection from "../components/PsychometricServiceSection.vue";
import ContactSection from "../components/ContactSection.vue";
import QuoteSectionDivider from "../components/QuoteSectionDivider.vue";
import VariousServiceSection from "../components/VariousServiceSection.vue";
import FooterComponent from "../components/FooterComponent.vue";
</script>

<template>
  <div class="flex flex-col h-screen w-screen overflow-hidden">
    <header class="bg-magnolia-blue w-full text-center py-4 px-8">
      <div class="flex flex-row justify-between items-center">
        <div>
          <img class="logo" src="@/assets/logo.svg" width="60" height="60" />
        </div>
        <!-- <div class="flex gap-4">
         
          <button
            class="
              p-2
              tracking-wide
              border-2
              relative
              inline-block
              hover:underline hover:decoration-2 hover:underline-offset-2
            "
          >
            <a href="#ContactSection" class="text-white font-semibold">{{
              $t("message.navbar.contact_us")
            }}</a>
          </button>          
        </div> -->
      </div>
    </header>

    <main class="flex-1 overflow-y-scroll scroll-smooth">
      <div class="bg-magnolia-blue h-screen w-full px-20 pt-10">
        <h1 class="text-white text-6xl font-black">
          We're currently polishing things up...
        </h1>
        <h2 class="text-white text-4xl font-black">...please check back soon :)</h2>
      </div>
      <FundingSectionDivider />
      <!-- <IoServiceSection />
      <PartnerSectionDivider />
      <PsychometricServiceSection />
      <QuoteSectionDivider />
      <VariousServiceSection /> -->
      <ContactSection />
      <FooterComponent />
    </main>
  </div>
</template>