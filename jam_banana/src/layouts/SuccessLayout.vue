<template>
    <div style="margin-bottom: 50px" class="q-mt-lg q-mr-lg" align="right">
        <!--  Le bouton Return est entièrement fonctionnel -->
        <q-btn color="red" @click="prevPage">
            RETURN
        </q-btn>
    </div>
    <h4 style="text-align: center; text-decoration: underline;">Success</h4>
    <div align="center" class="text-body2">
        <div class="row" style="margin-top: 20px">
          <div class="col q-mx-md" v-if="!getsuccess">
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the green color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mx-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: #11db2c">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the green color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the blue color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: #116fdb">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the blue color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the black color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: #000000">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md text-white">You have discovered the black color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the purple color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: #d111db">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the purple color</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row" style="margin-top: 50px">
          <div class="col q-mx-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the orange color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mx-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: #db6211">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the orange color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the golden color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: #e9be11">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the golden color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the red color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: #ff0000">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the red color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the pink color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: #ff00e1">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the pink color</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row" style="margin-top: 50px">
          <div class="col q-mx-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the turquoise color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mx-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: #00e5ff">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the turquoise color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the yellow color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: #f2ff00">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the yellow color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the blue color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the blue color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the blue color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the blue color</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row" style="margin-top: 50px">
          <div class="col q-mx-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the blue color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mx-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the blue color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the blue color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the blue color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the blue color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the blue color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-if="!getsuccess" style>
            <q-card class="my-card" style="height: 100px; background: grey">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the blue color</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-mr-md" v-else style>
            <q-card class="my-card" style="height: 100px; background: rgb(8, 173, 8)">
              <q-card-section align="center">
                <div class="text-h6 q-mt-md">You have discovered the blue color</div>
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
      getsuccess: true,
      prevPage: () => {
        return router.push({ path: '/' })
      }
    }
  }
})
</script>
