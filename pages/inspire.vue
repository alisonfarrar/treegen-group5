
<template>
  <div>
  <v-card class="e4">
    <v-card-text>
      <v-container fluid>
        <v-row>
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
  </div>
</template>


<script>
  export default {
    data () {
      return {
        axiom: "X",
        productions: "Y",
        iterations: 5,
        angle: 22.5,
        length: 4,
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