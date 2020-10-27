
<template>
  <div>
  <v-card class="e4">
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col
            class="d-flex"
            cols="12"
            sm="12"
          >
          <v-select
            v-model="tree"
            :items="tree"
            label="Tree"
            return-object
          ></v-select>
      </v-col>
          <v-col cols="12">
            <header>
              Iterations
            </header>
            <v-slider
              v-model="iterations"
              :max="10"
              :min="0"
              class="align-left"
              :thumb-size="12"
              thumb-label
              step="1"
              ticks
            >
            </v-slider>
          </v-col>

          <v-col cols="12">
            <header>
              Rotation (˚)
            </header>
            <v-slider
              v-model="angle"
              :max="180"
              :min="0"
              class="align-left"
              :thumb-size="12"
              thumb-label
              step="0.5"
              ticks
            >
            </v-slider>
          </v-col>

          <v-col cols="12">
            <header>
              Line Length
            </header>
            <v-slider
              v-model="length"
              :max="10"
              :min="0"
              class="align-left"
              :thumb-size="12"
              thumb-label
              step="1"
              ticks
            >
            </v-slider>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>

<v-simple-table dense class="e5">
    <template v-slot:default>
      <tbody>
        <tr style="text-align:left">
          <td style="width:60%">Axiom</td>
          <td>{{ axiom }}</td>
        </tr>
        <tr style="text-align:left">
          <td style="width:60%">Productions</td>
          <td>{{ productions }}</td>
        </tr>
        <tr style="text-align:left">
          <td style="width:60%">Angle of Rotation</td>
          <td>{{ angle }}</td>
        </tr>
        <tr style="text-align:left">
          <td style="width:60%">Number of Iterations</td>
          <td>{{ iterations }}</td>
        </tr>
        <tr style="text-align:left">
          <td style="width:60%">Length of Initial Line</td>
          <td>{{ length }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-card-title>
      {{ tree.text }}
    </v-card-title>

    <v-card-subtitle>
      {{ tree.simple_description }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        outlined
        rounded
        text
        @click="show_card = !show_card"
      >
        Details
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show_card">
        <v-divider></v-divider>

        <v-card-text>
          {{ tree.extended_description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </div>
</template>

<!--TODO: Group script parameters together-->
<script> 
  export default {
    data () {
      return {
        axiom: "X",
        productions: "Y",
        iterations: 5,
        angle: 22.5,
        length: 4,
        show_card: false,
        tree: [
          {
            text: "Tree1",
            simple_description: "I am Tree1",
            extended_description: "I am the most special of all the trees because I come first"
          },
          {
            text: "Tree2",
            simple_description: "I am Tree2",
            extended_description: "Some call me second, but I know I am the best"
          },
        ],
      }
    },
  }
</script>

<style scoped>
.e4 {
  width: 200px;
  margin: auto;
}
.e5 {
  width: 300px;
  margin: auto;
}
</style>