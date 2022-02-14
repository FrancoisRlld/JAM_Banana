<template>
    <div class="q-mt-lg q-mr-lg" align="right">
        <!--  Le bouton Return est entièrement fonctionnel -->
        <q-btn color="red" @click="prevPage">
            RETURN
        </q-btn>
    </div>

    <div align="center">
    <q-card class="my-card">
      <q-card-section>
        <h4 style="margin-top: 100px" class="text">{{quote}}</h4>
        <img style="margin-top: 70px" v-bind:src="selectedImage" class="img"/>
      </q-card-section>
    </q-card>

      <q-btn color="green" v-on:click="newQuote">
        <p class="q-mt-md" style="min-width: 200px">Generate a quote about success</p>
      </q-btn>
    </div>

</template>

<script>

import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'CitationsLayout',
  setup () {
    const router = useRouter()
    return {
      prevPage: () => {
        return router.push({ path: '/' })
      }
    }
  },

  data () {
    return {
      el: '#app',
      random: 0,
      quote: 'La taille de la banane ne fait pas la force du gorille !',
      quotes: ['Une raison pour le succès vaut bien la raison du succès.',
        'Le succès de l\'insuccès est un succès.',
        'Le succès de l\'insuccès est un succès.',
        'Le succès est un menteur. Le menteur aime le succès.',
        'Le mérite envie le succès, et le succès se prend pour le mérite.',
        'Les succès produisent les succès, comme l\'argent produit l\'argent.',
        'Plaire n\'est pour lui qu\'un moyen de succès ; tandis que pour elle, c\'est le succès lui-même.',
        'Les auteurs qui pillent sans vergogne leurs aînés ont parfois du talent ; ils “volent” de succès en succès.',
        'Lorsqu\'un film a du succès, c\'est une affaire. Lorsqu\'il n\'a pas de succès, c\'est de l\'art.',
        'La raison pour laquelle un succès précoce peut désorienter un écrivain, c\'est que ce succès peut le pousser à surproduire.',
        'La chance fait le succès, et le succès fait le mérite.',
        'Ce n\'est pas parce que c\'est un succès qu\'un film est bon et ce n\'est pas parce qu\'un film est bon que c\'est un succès.',
        'Un homme qui a du succès est un homme qui gagne plus d\'argent que sa femme n\'en dépense. Une femme qui a du succès est celle qui trouve un tel homme.',
        'Le succès commercial, le seul qui vaille. Les succès d\'estime ne conduisent jamais leur bénéficiaire qu\'aux épinards sans beurre.',
        'Le côté honteux de l\'écriture c\'est lorsque le succès ne vient pas la couronner. Le succès n\'est rien que la permission de continuer.',
        'Ce n\'est pas le succès qui rend heureux, vraiment pas. Le succès, c\'est faire ce qui vous rend heureux, bien travailler et avoir une vie riche.',
        'Là où il y a du monde, les Parisiens viennent en foule. Ce qui fait le succès d\'un endroit, c\'est qu\'il a du succès...',
        'De nombreux hommes doivent leur succès à leur première femme et leur seconde femme à leur succès.',
        'La véritable épreuve de l\'amitié, c\'est le succès : car le malheur ne réclame que du secours et ne risque que la résistance de l\'avarice ; tandis que le succès voudrait de l\'affection et ne rencontre que l\'envie.',
        'Prends garde au lendemain du succès !'
      ],
      images: ['https://picsum.photos/200/300',
        'https://picsum.photos/200/400',
        'https://picsum.photos/200/200',
        'https://picsum.photos/200/250',
        'https://picsum.photos/200/275',
        'https://picsum.photos/200/350',
        'https://picsum.photos/200/450',
        'https://picsum.photos/200/200',
        'https://picsum.photos/200/250',
        'https://picsum.photos/200/275',
        'https://picsum.photos/200/350',
        'https://picsum.photos/200/500',
        'https://picsum.photos/300/600',
        'https://picsum.photos/200/250',
        'https://picsum.photos/200/275',
        'https://picsum.photos/200/350',
        'https://picsum.photos/200/400',
        'https://picsum.photos/200/200',
        'https://picsum.photos/200/250',
        'https://picsum.photos/200/275',
        'https://picsum.photos/200/350',
        'https://picsum.photos/200/400',
        'https://picsum.photos/200/200',
        'https://picsum.photos/200/250',
        'https://picsum.photos/200/275',
        'https://picsum.photos/200/350',
        'https://picsum.photos/200/400',
        'https://picsum.photos/200/200',
        'https://picsum.photos/200/250',
        'https://picsum.photos/200/275',
        'https://picsum.photos/200/350',
        'https://picsum.photos/200/400',
        'https://picsum.photos/200/200',
        'https://picsum.photos/200/250',
        'https://picsum.photos/200/275',
        'https://picsum.photos/200/350',
        'https://picsum.photos/200/400',
        'https://picsum.photos/200/200',
        'https://picsum.photos/200/250',
        'https://picsum.photos/200/275',
        'https://picsum.photos/200/350',
        'https://picsum.photos/200/400',
        'https://picsum.photos/200/200',
        'https://picsum.photos/200/250',
        'https://picsum.photos/200/275',
        'https://picsum.photos/200/350',
        'https://picsum.photos/200/400',
        'https://picsum.photos/200/200',
        'https://picsum.photos/200/250',
        'https://picsum.photos/200/275',
        'https://picsum.photos/200/350',
        'https://picsum.photos/200/400',
        'https://picsum.photos/200/200',
        'https://picsum.photos/200/250',
        'https://picsum.photos/200/275',
        'https://picsum.photos/200/350',
        'https://picsum.photos/200/400',
        'https://picsum.photos/200/200',
        'https://picsum.photos/200/250',
        'https://picsum.photos/200/275',
        'https://picsum.photos/200/350',
        'https://picsum.photos/200/400',
        'https://picsum.photos/200/200',
        'https://picsum.photos/200/250',
        'https://picsum.photos/200/275',
        'https://picsum.photos/200/350',
        'https://picsum.photos/200/400',
        'https://picsum.photos/200/200',
        'https://picsum.photos/200/250',
        'https://picsum.photos/200/275',
        'https://picsum.photos/200/350',
        'https://picsum.photos/200/400',
        'https://picsum.photos/200/200',
        'https://picsum.photos/200/250',
        'https://picsum.photos/200/275',
        'https://picsum.photos/200/350',
        'https://picsum.photos/200/400',
        'https://picsum.photos/200/200',
        'https://picsum.photos/200/250',
        'https://picsum.photos/200/275',
        'https://picsum.photos/200/350'],
      selectedImage: ''
    }
  },
  methods: {
    newQuote: function () {
      this.random = Math.floor(Math.random() * 20) + 0
      this.quote = this.quotes[this.random]
      const idx = Math.floor(Math.random() * 81)
      this.selectedImage = this.images[idx]
    }
  }
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  height: 650px
  max-width: 1000px
  margin-bottom: 50px

.img
  position:fixed
  bottom:0px
  height: 250px
</style>
