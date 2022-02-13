<template>
    <div style="margin-bottom: 50px" class="q-mt-lg q-mr-lg" align="right">
        <!--  Le bouton Return est entièrement fonctionnel -->
        <q-btn color="red" @click="prevPage">
            RETURN
        </q-btn>
    </div>
    <h5 style="text-align: center">Ici, la liste des succès à accomplir.</h5>
    <div align="center" class="text-body2">
        <div class="row">
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row">
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row">
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row">
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row">
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row">
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row">
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: rgb(243, 46, 28)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="right">
                <div class="text-h6">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
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
      getsuccess: false,
      prevPage: () => {
        return router.push({ path: '/' })
      }
    }
  }
})
</script>
