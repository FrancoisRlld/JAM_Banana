<template>
  <q-layout view="lHh Lpr lFf">

    <!-- La partie <q-header> ci-dessous gère tout le header du site (ce qui est en haut en bleu et qui contient <EpiSuccess> -->
    <q-header elevated>
      <q-toolbar>
        <!-- Ce bouton permet de cacher ou non le menu de gauche -->
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

        <!-- Ce bouton sert d'aide au joueur, qu'il comprenne ce qu'il doit faire. J'ai délibérément tout séparé pour que vous puissiez gérer chaque partie comme vous le souhaitez -->
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

    <!-- Ici, je m'occupe du positionnement et de l'affichage des éléments qui sont dans le menu de gauche -->
    <!-- Je n'ai pas encore relié les boutons aux différentes pages associées -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-toolbar-title class="text-h6 q-mt-lg" align="center">
        Menu
      </q-toolbar-title>
      <q-list style="margin-top: 150px">
        <div align="center">
          <!-- Ici, le truc important c'est le <@click>. il exécutera la fonction goToSuccess que j'ai mise dans la partie <script> -->
          <!-- Le même principe sera appliqué aux autres boutons ci-dessous -->
          <!-- Ici, le fichier correspondant est SuccessLayout.vue -->
          <q-btn class="q-mt-lg q-mb-lg text-capitalize" color="green" @click="goToSuccess">Succès</q-btn>
        </div>
        <div align="center" style="margin-top: 100px">
          <!-- Ici, le fichier correspondant est CitationsLayout.vue -->
          <q-btn class="q-mt-lg q-mb-lg text-capitalize" color="orange" @click="goToCitations">Citations</q-btn>
        </div>
        <div align="center" style="margin-top: 100px">
          <!-- Ici, le fichier correspondant est ButtonsLayout.vue -->
          <q-btn class="q-mt-lg q-mb-lg text-capitalize" color="red" @click="goToGame">Jeux</q-btn>
        </div>
      </q-list>
    </q-drawer>

    <!-- Ici, je relie le centre de la page d'accueil avec le fichier Welcome.vue, qui contient tous les éléments que j'y affiche. -->
    <!-- Pour appeler le fichier correspondant, je dois l'importer (voir 2ème import dans le script) avant de pouvoir l'appeler par son petit nom. -->
    <!-- Ici, le fichier correspondant est Welcome.vue -->
    <q-page-container>
      <home />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'
import home from '../pages/Welcome.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: { home },
  name: 'MainLayout',

  setup () {
    const router = useRouter()
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
      leftDrawerOpen,
      loading,
      progress,
      simulateProgress,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      goToSuccess: () => {
        return router.push({ name: 'Success' })
      },
      goToCitations: () => {
        return router.push({ name: 'Citations' })
      },
      goToGame: () => {
        return router.push({ name: 'Buttons' })
      }
    }
  }
})
</script>
