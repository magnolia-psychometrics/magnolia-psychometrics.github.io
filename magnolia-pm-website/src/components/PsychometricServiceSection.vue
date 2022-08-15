<template>
  <div
    class="bg-stone-50 w-full px-40 pt-10 pb-20"
    id="psychometric-service-section"
  >
    <!-- <h1 class="text-neutral-900 text-2xl font-black">
      Unsere Dienstleistungen
    </h1> -->
    <h1 class="text-neutral-900 text-4xl font-black leading-relaxed">
      {{ $t("message.sections.psychometric.title") }}
    </h1>
    <p class="text-neutral-900 text-xl font-medium leading-normal mb-10">
      {{ $t("message.sections.psychometric.leading.start") }}
      <a
        class="
          underline underline-offset-4
          decoration-teal-400 decoration-2 decoration-dotted
          hover:text-teal-400
        "
        href="https://www.beuth.de/de/norm/din-33430/254909784"
        target="_blank_blank"
        >DIN 33430</a
      >
      {{ $t("message.sections.psychometric.leading.end") }}
    </p>

    <div class="w-full flex flex-col xl:flex-row gap-8 justify-center">
      <!-- left -->
      <div class="w-full h-full flex flex-row gap-4">
        <div
          class="
            w-20
            h-20
            bg-white
            border-8 border-[#1E45AD]
            flex
            justify-center
            items-center
            rounded-full
          "
        >
          <span class="font-material text-4xl text-neutral-900"
            >person_search</span
          >
        </div>
        <div class="flex-1">
          <span
            class="
              text-neutral-900 text-2xl
              font-black
              leading-relaxed
              underline
              decoration-[#1E45AD]/70
              hover:decoration-[#1E45AD]
              decoration-4
              underline-offset-4
            "
            >{{ $t("message.sections.psychometric.diagnostics.title") }}</span
          >
          <p class="text-neutral-900 text-lg font-medium leading-normal my-2">
            {{ $t("message.sections.psychometric.diagnostics.text") }}
          </p>
        </div>
      </div>
      <!-- right -->
      <div class="w-full h-full flex flex-row gap-4">
        <div
          class="
            w-20
            h-20
            bg-white
            border-8 border-[#1E45AD]
            flex
            justify-center
            items-center
            rounded-full
          "
        >
          <span class="font-material text-4xl text-neutral-900"
            >edit_document</span
          >
        </div>
        <div class="flex-1">
          <span
            class="
              text-neutral-900 text-2xl
              font-black
              leading-relaxed
              underline
              decoration-[#1E45AD]/70
              hover:decoration-[#1E45AD]
              decoration-4
              underline-offset-4
            "
            >{{ $t("message.sections.psychometric.test_dev.title") }}</span
          >
          <p class="text-neutral-900 text-lg font-medium leading-normal my-2">
            {{ $t("message.sections.psychometric.test_dev.text") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>