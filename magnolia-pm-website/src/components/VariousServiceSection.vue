<template>
  <div
    class="bg-stone-50 w-full px-40 pt-10 pb-20"
    id="various-service-section"
  >
    <h1 class="text-neutral-900 text-4xl font-black leading-relaxed mb-10">
      {{ $t("message.sections.various.title") }}
    </h1>
    <div class="grid grid-cols-3 gap-4">
      <!-- left -->
      <div class="flex flex-col items-center">
        <span
          class="
            text-neutral-900 text-2xl
            font-black
            leading-relaxed
            underline
            decoration-magnolia-blue/70
            hover:decoration-magnolia-blue
            decoration-4
            underline-offset-4
          "
          >{{ $t("message.sections.various.consulting.title") }}</span
        >
        <p class="text-neutral-900 text-xl text-center mt-4">
          {{ $t("message.sections.various.consulting.text") }}
        </p>
      </div>

      <div class="flex flex-col items-center">
        <span
          class="
            text-neutral-900 text-2xl
            font-black
            leading-relaxed
            underline
            decoration-pink-500/70
            hover:decoration-pink-500
            decoration-4
            underline-offset-4
          "
          >{{ $t("message.sections.various.software.title") }}</span
        >
        <p class="text-neutral-900 text-xl text-center mt-4">
          {{ $t("message.sections.various.software.text") }}
          <a
            class="
              underline underline-offset-4
              decoration-teal-400 decoration-2 decoration-dotted
              hover:text-teal-400
            "
            href="https://devhausleipzig.de"
            target="_blank_blank"
            >Devhaus Leipzig</a
          >.
        </p>
      </div>

      <div class="flex flex-col items-center">
        <span
          class="
            text-neutral-900 text-2xl
            font-black
            leading-relaxed
            underline
            decoration-teal-400/70
            hover:decoration-teal-400
            decoration-4
            underline-offset-4
          "
          >{{ $t("message.sections.various.workshops.title") }}</span
        >
        <p class="text-neutral-900 text-xl text-center mt-4">
          {{ $t("message.sections.various.workshops.text") }}
        </p>
      </div>
    </div>
  </div>
</template>