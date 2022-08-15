<script>
export default {
  data() {
    return {
      showServiceMenu: false,
    };
  },

  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>

<template>
  <header class="bg-magnolia-blue w-full text-center py-4 px-8">
    <div class="flex flex-row justify-between items-center">
      <div>
        <img class="logo" src="@/assets/logo.svg" width="60" height="60" />
      </div>
      <div class="flex gap-4">
        <!-- button -->
        <div class="group">
          <button class="p-2 flex flex-row items-center">
            <span
              class="
                text-white
                font-semibold
                tracking-wide
                relative
                inline-block
              "
              >DE</span
            ><span class="ml-1 font-material text-lg font-semibold text-white"
              >expand_more</span
            >
          </button>
          <!-- dropdown -->
          <div
            class="
              origin-top-right
              absolute
              w-max
              right-0
              shadow-md
              bg-white
              ring-1 ring-black ring-opacity-5
              focus:outline-none
              z-50
              hidden
              group-hover:block
            "
          >
            <div class="p-2 text-left" role="none">
              <a
                href="#"
                class="
                  text-neutral-900
                  font-semibold
                  px-1
                  py-1
                  text-base
                  block
                  hover:underline
                  hover:decoration-4
                  hover:decoration-teal-400
                  hover:underline-offset-4
                "
                >Deutsch
              </a>
              <a
                href="#"
                class="
                  text-neutral-900
                  font-semibold
                  px-1
                  py-1
                  text-base
                  block
                  hover:underline
                  hover:decoration-4
                  hover:decoration-teal-400
                  hover:underline-offset-4
                "
                >English
              </a>
            </div>
          </div>
        </div>

        <!-- button -->
        <div class="group">
          <button class="p-2 flex flex-row items-center">
            <span
              class="
                text-white
                font-semibold
                tracking-wide
                relative
                inline-block
              "
              >Dienstleistungen</span
            ><span class="ml-1 font-material text-lg font-semibold text-white"
              >expand_more</span
            >
          </button>

          <!-- dropdown -->
          <div
            class="
              origin-top-right
              absolute
              w-max
              right-0
              shadow-md
              bg-white
              ring-1 ring-black ring-opacity-5
              focus:outline-none
              z-50
              hidden
              group-hover:block
            "
          >
            <div class="p-2 text-left" role="none">
              <a
                href="#"
                class="
                  text-neutral-900
                  font-semibold
                  px-4
                  py-1
                  text-base
                  block
                  hover:underline
                  hover:decoration-4
                  hover:decoration-teal-400
                  hover:underline-offset-4
                "
                >Personal- und Eignungsdiagnostik
              </a>
              <a
                href="#"
                class="
                  text-neutral-900
                  font-semibold
                  px-4
                  py-1
                  text-base
                  block
                  hover:underline
                  hover:decoration-4
                  hover:decoration-teal-400
                  hover:underline-offset-4
                "
                >Psychometrische Dienstleistungen
              </a>
              <a
                href="#"
                class="
                  text-neutral-900
                  font-semibold
                  px-4
                  py-1
                  text-base
                  block
                  hover:underline
                  hover:decoration-4
                  hover:decoration-teal-400
                  hover:underline-offset-4
                "
                >Beratung & Audits
              </a>
              <a
                href="#"
                class="
                  text-neutral-900
                  font-semibold
                  px-4
                  py-1
                  text-base
                  block
                  hover:underline
                  hover:decoration-4
                  hover:decoration-teal-400
                  hover:underline-offset-4
                "
                >Software-Entwicklung
              </a>
              <a
                href="#"
                class="
                  text-neutral-900
                  font-semibold
                  px-4
                  py-1
                  text-base
                  block
                  hover:underline
                  hover:decoration-4
                  hover:decoration-teal-400
                  hover:underline-offset-4
                "
                >Workshops & Training
              </a>
            </div>
          </div>
        </div>
        <!-- button -->
        <button
          class="
            p-2
            text-white
            font-semibold
            tracking-wide
            border-2
            relative
            inline-block
            hover:underline hover:decoration-2 hover:underline-offset-2
          "
        >
          Kostenlose Beratung
        </button>
        <!-- <h1 class="text-white text-2xl">right!</h1> -->
      </div>
    </div>
  </header>
</template>