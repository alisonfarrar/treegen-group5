
<template>
  <v-card class="e4">
 <!---<v-responsive
      :style="{ background: `rgb(${red}, ${green}, ${blue})` }"
      height="300px"
    ></v-responsive>-->

    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <header>
              Number of Iterations
            </header>
            <v-slider
              v-model="Iterations"
              :max="10"
              class="align-left"
            >
            </v-slider>
          </v-col>

          <v-col cols="12">
            <header>
              Angle of Rotation (˚)
            <v-slider
              v-model="angle"
              :max="180"
              class="align-left"
            >
            </v-slider>
          </v-col>

          <v-col cols="12">
            <header>
              Length of Initial Line
            </header>
            <v-slider
              v-model="length"
              :max="10"
              class="align-left"
            >
            </v-slider>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<!---
<script>
  export default {
    data () {
      return {
        red: 64,
        green: 128,
        blue: 0,
      }
    },
  }
</script>-->

<style scoped>
.e4 {
  width: 200px;
  margin: auto;
}
</style>