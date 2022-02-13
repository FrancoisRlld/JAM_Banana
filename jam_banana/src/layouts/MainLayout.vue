<template>
  <q-layout view="lHh Lpr lFf">

    <!-- La partie ci-dessous gère tout le header du site (ce qui est en haut en bleu et qui contient <EpiSuccess> -->
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          color="red-12"
        />

        <q-toolbar-title>EpiSuccess</q-toolbar-title>

        <div class="q-pa-md q-gutter-sm">
          <q-btn class="text-capitalize" label="The Game" color="red-14" @click="lightDialog = true" />

          <q-dialog v-model="lightDialog" persistent>

            <q-card>
              <q-bar>
                <q-icon name="arrow_forward" />
                <q-space />
                <div>How to become a SuccessMaster</div>
                <q-space />
                <q-btn dense flat icon="close" v-close-popup>
                  <q-tooltip>Close</q-tooltip>
                </q-btn>
              </q-bar>

              <q-card-section>
                The goal in this game is actually very simple. Becoming a SuccessMaster !
              </q-card-section>

              <q-card-section class="q-pt-none">
                To do that, you need to do exactly what we told you. Very simple isn't it ?
              </q-card-section>

              <q-card-section class="q-pt-none">
                First Step : Pray for Me, I am your new God.
              </q-card-section>

              <q-card-section class="q-pt-none">
                Second Step : Go to the Success Page, a lot of successes are waiting for you.
              </q-card-section>

              <q-card-section class="q-pt-none">
                Third Step : Obviously, you need to feel in all the successes.
              </q-card-section>

              <q-card-section class="q-pt-none">
                Fourth Step : It's time for a new pray for Me, after all, I am your new God !
              </q-card-section>

              <q-card-section class="q-pt-none">
                Fifth Step : Find the Sacred Gorilla and the Legendary Banana.
              </q-card-section>

              <q-card-section class="text-bold">
                Congrats, you are a SuccessMaster ! Time for a sacrifice in my Name. How about your first born ?
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const loading = ref([
      false,
      false,
      false,
      false,
      false,
      false
    ])

    const progress = ref(false)

    function simulateProgress (number) {
      loading.value[number] = true
      setTimeout(() => {
        loading.value[number] = false
      }, 3000)
    }

    return {
      lightDialog: ref(false),
      essentialLinks: linksList,
      leftDrawerOpen,
      loading,
      progress,
      simulateProgress,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
