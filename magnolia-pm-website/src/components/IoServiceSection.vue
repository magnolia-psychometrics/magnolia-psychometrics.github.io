<template>
  <div class="bg-stone-50 w-full px-40 pt-10 pb-20" id="io-service-section">
    <h1 class="text-neutral-900 text-4xl font-black leading-relaxed">
      {{ $t("message.sections.io.title") }}
    </h1>
    <p class="text-neutral-900 text-xl font-medium leading-normal mb-10">
      {{ $t("message.sections.io.leading") }}
    </p>
    <div class="flex flex-col xl:flex-row gap-10 mb-10">
      <div class="h-full w-full">
        <ul class="text-neutral-900 text-lg font-medium leading-normal pl-8">
          <!-- li -->
          <li class="mb-6">
            <div class="inline-block mb-2">
              <span class="font-material text-xl font-bold -left-8 absolute"
                >check</span
              >
              <span class="text-xl font-semibold">{{ $t("message.sections.io.work_analysis.title") }}</span>
              <span class="text-xl font-light">
                — {{ $t("message.sections.io.work_analysis.subtitle") }}</span
              >
            </div>
            <span class="block"
              >{{ $t("message.sections.io.work_analysis.text") }}</span
            >
          </li>
          <!-- li -->
          <li class="mb-6">
            <div class="inline-block mb-2">
              <span class="font-material text-xl font-bold -left-8 absolute"
                >check</span
              >
              <span class="text-xl font-semibold"
                >{{ $t("message.sections.io.assessments.title") }}</span
              >
              <span class="text-xl font-light">
                — {{ $t("message.sections.io.assessments.subtitle") }}</span
              >
            </div>
            <span class="block"
              >{{ $t("message.sections.io.assessments.text") }}</span
            >
          </li>
          <!-- li -->
          <li class="mb-6">
            <div class="inline-block mb-2">
              <span class="font-material text-xl font-bold -left-8 absolute"
                >check</span
              >
              <span class="text-xl font-semibold">{{ $t("message.sections.io.performance.title") }}</span>
              <span class="text-xl font-light">
                — {{ $t("message.sections.io.performance.subtitle") }}</span
              >
            </div>
            <span class="block"
              >{{ $t("message.sections.io.performance.text") }}</span
            >
          </li>
        </ul>
      </div>
      <div class="h-full w-full">hej</div>
    </div>
    <!-- <p class="text-neutral-900 text-xl font-medium leading-normal">
      Wir helfen zukunftsorientierten Unternehmen, qualifiziertes Personal zu
      identifizieren, zu gewinnen und an sich zu binden. Dies gelingt uns durch
      einen abgestimmten Dreiklang aus den neuesten Erkenntnissen der Arbeits-
      und Organisationspsychologie, modernen IT-Lösungen und den Methoden der
      psychologischen Diagnostik.
    </p> -->
  </div>
</template>