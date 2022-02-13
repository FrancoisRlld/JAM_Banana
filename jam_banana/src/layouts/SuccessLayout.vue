<template>
    <div style="margin-bottom: 50px" class="q-mt-lg q-mr-lg" align="right">
        <!--  Le bouton Return est entièrement fonctionnel -->
        <q-btn color="red" @click="prevPage">
            RETURN
        </q-btn>
    </div>
    <h5 style="text-align: center">Ici, la liste des succès à accomplir.</h5>
    <div align="center" class="text-body2">
        <div class="row" style="margin-top: 20px">
          <div class="col q-mx-md" v-if="!getsuccess">
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the red color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mx-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the red color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row" style="margin-top: 50px">
          <div class="col q-mx-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mx-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row" style="margin-top: 50px">
          <div class="col q-mx-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mx-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row" style="margin-top: 50px">
          <div class="col q-mx-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mx-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">Cliquer sur un bouton</div>
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
