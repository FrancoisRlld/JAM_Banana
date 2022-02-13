<template>
    <div style="margin-bottom: 50px" class="q-mt-lg q-mr-lg" align="right">
        <!--  Le bouton Return est entièrement fonctionnel -->
        <q-btn color="red" @click="prevPage">
            RETURN
        </q-btn>
    </div>
    <h5 style="text-align: center">Ici, la liste des succès à accomplir.</h5>
    <div align="center" class="text-body2">
        Vous pouvez y inclure des tableaux, des items. Fin, faites ça beau quoi
    </div>

</template>

<script>

import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'SuccessLayout',

  setup () {
    const router = useRouter()
    return {
      prevPage: () => {
        return router.push({ path: '/' })
      }
    }
  }
})
</script>
