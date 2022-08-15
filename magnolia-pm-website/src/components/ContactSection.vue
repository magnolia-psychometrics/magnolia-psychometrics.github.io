<template>
  <div class="bg-stone-50 w-full px-40 pt-10 pb-20" id="ContactSection">
    <div class="flex flex-col lg:flex-row gap-10">
      <div class="h-full w-full">
        <h1 class="text-neutral-900 text-4xl font-black leading-relaxed">
          {{ $t("message.sections.contact.title") }}
        </h1>
        <p class="text-neutral-900 text-xl font-bold">
          magnolia psychometrics GmbH
        </p>
        <p class="text-neutral-900 text-xl font-base">
          Peterssteinweg 14, DE-04107 Leipzig
        </p>
        <p class="text-neutral-900 text-xl font-base">
          {{ $t("message.sections.contact.phone") }}: +49 (0)341 / 98 97 71 07
        </p>
        <p class="text-neutral-900 text-xl font-base">
          {{ $t("message.sections.contact.email") }}:
          <a
            class="text-pink-500 font-semibold hover:underline"
            href="mailto:contact@magnolia-psychometrics.com"
            >contact@magnolia-psychometrics.com</a
          >
        </p>
      </div>
      <div class="h-full w-full">
        <form class="">
          <input
            class="
              appearance-none
              block
              w-full
              bg-white
              text-neutral-900
              font-semibold
              border-4
              text-base
              border-neutral-900
              py-1
              px-4
              mb-3
              focus:outline-none
            "
            id=""
            type="text"
            :placeholder="this.$t('message.sections.contact.form.name')"
          />
          <input
            class="
              appearance-none
              block
              w-full
              bg-white
              text-neutral-900
              font-semibold
              border-4
              text-base
              border-neutral-900
              py-1
              px-4
              mb-3
              focus:outline-none
            "
            id=""
            type="text"
            :placeholder="this.$t('message.sections.contact.form.email')"
          />
          <input
            class="
              appearance-none
              block
              w-full
              bg-white
              text-neutral-900
              font-semibold
              border-4
              text-base
              border-neutral-900
              py-1
              px-4
              mb-3
              focus:outline-none
            "
            id=""
            type="text"
            :placeholder="this.$t('message.sections.contact.form.company')"
          />

          <textarea
            class="
              appearance-none
              block
              w-full
              bg-white
              text-neutral-900
              font-semibold
              border-4
              text-base
              border-neutral-900
              py-1
              px-4
              mb-3
              resize-none
              h-48
              focus:outline-none
            "
            :placeholder="this.$t('message.sections.contact.form.text')"
          ></textarea>
          <button
            class="
              w-full
              bg-teal-300
              text-white text-lg
              uppercase
              font-bold
              py-1
              px-4
            "
          >
            {{ $t("message.sections.contact.form.button") }}
          </button>
        </form>
      </div>
    </div>
    <!-- <h1 class="text-neutral-900 text-2xl font-black">
          Unsere Dienstleistungen
        </h1>
        <p class="text-neutral-900 text-lg font-semibold leading-6">
          Wir helfen zukunftsorientierten Unternehmen, qualifiziertes Personal
          zu identifizieren, zu gewinnen und an sich zu binden. Dies gelingt uns
          durch einen abgestimmten Dreiklang aus den neuesten Erkenntnissen der
          Arbeits- und Organisationspsychologie, hochmodernen IT-Lösungen und
          den Methoden der psychologischen Diagnostik.
        </p> -->
  </div>
</template>
