
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
              v-model="line_length"
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
          <td>{{ line_length }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
      <v-btn
        class="mr-4"
        @click="submit"
      >
      submit
    </v-btn>
    <canvas id="canvas" width="1000" height="1000"></canvas>
  </div>
</template>


<script>
  import LSystem from 'lindenmayer'

  export default {
    data () {
      return {
        axiom: "X",
        productions: "Y",
        iterations: 5,
        angle: 22.5,
        line_length: 4,
      }
    },
    methods: {
      submit () {

        var canvas = document.getElementById('canvas')
        var ctx = canvas.getContext("2d")

        // translate to center of canvas
        ctx.translate(canvas.width / 2, canvas.height / 4)

        // now define the parameters for figure 1.24c

        var angle = this.angle;
        var iterations = this.iterations;
        var line_length = this.line_length;

        // create some variables which describe the position and orientation of the turtle
        var x = 0;
        var y = 0;
        var orientation = 0;
        // variable d describes how the step size decreases
        var d = 100;
        // create var state so we can call ] before [
        var state = {
            x: 0,
            y: 0,
            orientation: 0
        };
        // define the tree generation L-system
        var tree = new LSystem({
          axiom: 'F',
          productions: {
            'F': 'FF-[-F+F+F]+[+F-F-F]'
          },
          finals: {
            '+': () => { orientation += (Math.PI/180) * angle },
            '-': () => { orientation -= (Math.PI/180) * angle },
            // save the current turtle position and orientation to a list
            '[': () => { state.x = x, state.y = y, state.orientation = orientation },
            // set the turtle's position and orientiation to most recent values from list
            ']': () => { x = state.x, y = state.y, orientation = state.orientation, console.log("x,y,phi: ", x,y,orientation) },
            // pass plotting instructions to the turtle
            'F': () => {
              // create a line
              ctx.beginPath()
              // start it at x,y
              ctx.moveTo(x, y)
              // calculate the new coordinates
              // decrease factor d:
              d = 50/(tree.iterations + 1)
              // calculate
              x += d * Math.cos(orientation)
              y += d * Math.sin(orientation)
              // draw a line to the new point
              ctx.lineTo(x, y)
              // plot the line with stroke()
              ctx.stroke()
              }
          }
        });

        tree.iterate(iterations)
        tree.final()


      },
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