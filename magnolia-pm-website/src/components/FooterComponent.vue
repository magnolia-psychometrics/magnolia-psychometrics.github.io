<template>
  <footer class="w-full bg-slate-900 flex flex-col items-center pt-14 pb-4">
    <div class="w-2/3 grid grid-cols-6 gap-6 mb-6">
      <div class="w-full col-start-6">
        <span
          class="text-stone-50 font-bold uppercase text-base tracking-wide"
          >{{ $t("message.sections.footer.legal.title") }}</span
        >
        <ul class="list-none text-sm tracking-wide text-stone-50 text-left">
          <li class="py-2">
            <a class="font-semibold hover:underline" href="">{{
              $t("message.sections.footer.legal.imprint")
            }}</a>
          </li>
          <li class="pb-2">
            <a class="font-semibold hover:underline" href="">{{
              $t("message.sections.footer.legal.privacy")
            }}</a>
          </li>
          <li class="pb-2">
            <a class="font-semibold hover:underline" href="">{{
              $t("message.sections.footer.legal.terms")
            }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-2/3 mb-2">
      <span class="text-stone-50 font-medium text-sm"
        >&#169; 2017–2022 magnolia psychometrics — precision in mind</span
      >
    </div>
  </footer>
</template>
