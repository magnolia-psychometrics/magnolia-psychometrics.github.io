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
    <HeaderComponent />
    <main class="flex-1 overflow-y-scroll">
      <HeroSection />
      <FundingSectionDivider />
      <IoServiceSection />
      <PartnerSectionDivider />
      <PsychometricServiceSection />
      <QuoteSectionDivider />
      <VariousServiceSection />
      <ContactSection />
      <FooterComponent />
    </main>
  </div>
  <!-- <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <TheWelcome /> -->
</template>
