
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
            v-model="tree_selected"
            :items="tree"
            label="Tree"
            @change="tree_change"
            return-object
          ></v-select>
      </v-col>
          <v-col cols="12">
            <header>
              Iterations
            </header>
            <v-slider
              v-model="settings.iterations"
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
              v-model="settings.angle"
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
              v-model="settings.line_length"
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
          <td>{{ settings.axiom }}</td>
        </tr>
        <tr style="text-align:left">
          <td style="width:60%">Productions</td>
          <td>{{ settings.productions }}</td>
        </tr>
        <tr style="text-align:left">
          <td style="width:60%">Angle of Rotation</td>
          <td>{{ settings.angle }}</td>
        </tr>
        <tr style="text-align:left">
          <td style="width:60%">Number of Iterations</td>
          <td>{{ settings.iterations }}</td>
        </tr>
        <tr style="text-align:left">
          <td style="width:60%">Length of Initial Line</td>
          <td>{{ settings.line_length }}</td>
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
      <v-btn
        class="mr-4"
        @click="submit"
      >
      submit
    </v-btn>
    <canvas id="canvas" width="1000" height="1000"></canvas>
  </div>
</template>


<!--TODO: Group script parameters together-->
<script>
  import LSystem from 'lindenmayer'

  export default {
    data () {
      return {
        settings: {
          axiom: "X",
          productions: "Y",
          iterations: 5,
          angle: 22.5,
          line_length: 4,
        },
        show_card: false,
        tree_selected: undefined,
        tree: [
          {
            text: "Tree1",
            simple_description: "I am Tree1",
            extended_description: "I am the most special of all the trees because I come first",
            defaults: {
              axiom: "X",
              productions: "Y",
              iterations: 2,
              angle: 10,
              line_length: 1,
            }
          },
          {
            text: "Tree2",
            simple_description: "I am Tree2",
            extended_description: "Some call me second, but I know I am the best",
            defaults: {
              axiom: "X",
              productions: "Y",
              iterations: 2,
              angle: 10,
              line_length: 1,
            }
          },
        ],
      }
    },
    methods: {
      tree_change () {
        //alert('change')
        //self.tree
        console.log(this.tree)
        console.log(this.tree_selected)
        console.log(this.settings)
        this.settings = Object.assign({}, this.tree_selected.defaults);
      },
      submit () {

        var canvas = document.getElementById('canvas')

        // TODO add canvas reset

        var ctx = canvas.getContext("2d")

        // translate to center of canvas
        ctx.translate(canvas.width / 2, canvas.height / 4)

        // now define the parameters for figure 1.24c

        var angle = this.settings.angle;
        var iterations = this.settings.iterations;
        var line_length = this.settings.line_length;

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