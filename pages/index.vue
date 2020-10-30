
<template>
  <div>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
          id="btn_about"
        >
          About
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          About the Project
        </v-card-title>

        <v-card-text>
          <p></p>
          <p> Lindenmayer systems (L-systems) are systems that enable the definition of complex shapes 
            through the use of iteration and formal grammar. </p> 
          <p> They’re named after their creator, Hungarian theoretical biologist Aristid Lindenmayer,  
            who initially conceived them as a mathematical theory of plant development. 
            L-systems are based on the concept of ‘rewriting’ - the process of defining complex objects 
            by successively replacing parts of a simple initial object (or ‘axiom’) 
            using a specific set of rules, known as ‘productions‘. </p> 
          <p> This is a simple L-system for the generation of fractal trees. 
            These trees are built iteratively by feeding the axiom through a set of production rules. 
            At each iteration, each letter (or ‘predecessor‘) in the axiom is replaced by a string of letters, the ‘successor‘. 
            We’ve provided a set of examples so you can see this system in action, but feel free to 
            adjust the parameters to see what shapes you can generate yourself! 

            Interested in joining our team? Check out our
              <a href="https://github.com/alisonfarrar/treegen-group5" 
                class = "github-link"
                >
                  GitHub repository! 
              </a>
            </p>
            
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
            :items="tree_list"
            label="Pick a tree"
            @change="tree_change(); submit();"
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
          <v-tooltip bottom>      
            <template v-slot:activator="{ on, attrs }">        
              <v-btn          
                color="red lighten-2"          
                dark          
                v-bind="attrs"          
                v-on="on"        
                >          
                Tips        
                </v-btn>      
               </template>      
            <span>
              Pick a tree: Which default tree do you want to start with?<br>
              Iterations: How many times will productions be applied?<br>
              Rotation: At what angle should the branches diverge?<br>
              Line Length: How long should the branches be?
            </span>    
          </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>

<v-simple-table dense class="e5">
    <template v-slot:default>
      <tbody>
        <tr style="text-align:left">
          <td style="width:50%">Axiom:</td>
          <td>{{ settings.axiom }}</td>
        </tr>
        <tr style="text-align:left">
          <td style="width:50%">Production:</td>
          <td>{{ settings.prod_str }}</td>  
        </tr>
        <tr style="text-align:left">
          <td style="width:50%">Angle of Rotation:</td>
          <td>{{ settings.angle + "°" }}</td>
        </tr>
        <tr style="text-align:left">
          <td style="width:50%">Number of Iterations:</td>
          <td>{{ settings.iterations }}</td>
        </tr>
        <tr style="text-align:left">
          <td style="width:50%">Length of Initial Line:</td>
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
      {{ this.tree_selected.text }}
    </v-card-title>

    <v-card-subtitle>
      {{ this.tree_selected.simple_description }}
    </v-card-subtitle>

    <v-card-actions>
      <v-tooltip left>
        <template v-slot:activator="{ on }">        
          <v-btn 
            v-on="on"
            color="orange lighten-2"
            outlined
            rounded
            text
            @click="show_card = !show_card"
          >
            Details
          </v-btn>
        </template>
        <span>More about this<br>type of tree!</span>
      </v-tooltip>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show_card">
        <v-divider></v-divider>

        <v-card-text>
          {{ this.tree_selected.extended_description }}
        </v-card-text>
      </div>
    </v-expand-transition>

    <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          color="orange lighten-2"
          outlined
          rounded
          text
          @click="submit();"
          id="btn_run"
        >
          Run
        </v-btn>
      </template>
      <span>Apply settings and <br>show your tree!</span>
    </v-tooltip>
  </v-card>
    <canvas id="canvas" ref="lcanvas" width="1000" height="1000" style="border: 1px solid black;">
    </canvas>
  </div>
</template>


<!--TODO: Group script parameters together-->
<script>
  import LSystem from 'lindenmayer'

  export default {
    data () {
      return {
        settings: {
          text: "Tree",
          simple_description: "Please select a tree.",
          extended_description: "There are many suggested trees to choose from in the drop-down list.",
          axiom: "'F'",
          prod_keys: "'F'",
          prod_values: "'FF'",
          prod_str: "'F -> FF'",
          iterations: 5,
          angle: 22.5,
          line_length: 4,
        },
        dialog: false,
        show_card: false,
        tree_word: '',
        tree_selected: Object.assign({}, this.settings),
        tree_list: [
          {
            text: "Bifurcating Bush",
            simple_description: "I am a bush.",
            extended_description: "I am the most special of all the trees because I am actually a bush. Example 1.24c) from 'The Algorithmic Beauty of Plants'.",
            defaults: {
              axiom: "'F'",
              prod_keys: ['F'],
              prod_values: ['FF-[-F+F+F]+[+F-F-F]'],
              prod_str: "'F -> FF-[-F+F+F]+[+F-F-F]'",
              iterations: 4,
              angle: 22.5,
              line_length: 40,
            }
          },
          {
            text: "Stabby Sprig",
            simple_description: "Don't touch me!",
            extended_description: "Some call me dangerous, but I know I am the best. Example 1.24e) from 'The Algorithmic Beauty of Plants'",
            defaults: {
              axiom: "'X'",
              prod_keys: ['X', 'F'],
              prod_values: ['F[+X][-X]FX', 'FF'],
              prod_str: "'X -> F[+X][-X]FX', 'F -> FF'",
              iterations: 7,
              angle: 25.7,
              line_length: 20,
            }
          },
          {
            text: "Swaying Sweetgrass",
            simple_description: "Pleasing to observe.",
            extended_description: "Will tickle your nose if you get too close! Example 1.24d) from 'The Algorithmic Beauty of Plants'",
            defaults: {
              axiom: "'X'",
              prod_keys: ['X', 'F'],
              prod_values: ['F[+X]F[-X]+X', 'FF'],
              prod_str: "'X -> F[+X]F[-X]+X', 'F -> FF'",
              iterations: 7,
              angle: 20,
              line_length: 20,
              }
            },
            {
            text: "Budding Branch",
            simple_description: "Spring is here!",
            extended_description: "Soon I will be covered in leaves! Example 1.24a) from 'The Algorithmic Beauty of Plants'",
            defaults: {
              axiom: "'F'",
              prod_keys: ['F'],
              prod_values: ['F[+F]F[-F]F'],
              prod_str: "'F -> F[+F]F[-F]F'",
              iterations: 5,
              angle: 25.7,
              line_length: 20,
              }
            },
            {
            text: "Windswept Tuft",
            simple_description: "Watch me move in the wind!",
            extended_description: "The autumn storms have arrived! Example 1.24b) from 'The Algorithmic Beauty of Plants'",
            defaults: {
              axiom: "'F'",
              prod_keys: ['F'],
              prod_values: ['F[+F]F[-F][F]'],
              prod_str: "'F -> F[+F]F[-F][F]'",
              iterations: 5,
              angle: 20,
              line_length: 40,
            }
          },
        ],
      }
    },
    methods: {
      tree_change () {
        this.settings = Object.assign({}, this.tree_selected.defaults);
      },
      submit () {

        this.clean_canvas();

        var canvas = this.$refs.lcanvas
        var ctx = canvas.getContext("2d");
        // save the context
        ctx.save();

        // translate to center of canvas
        ctx.translate(canvas.width / 2, 3*canvas.height / 4);

        // now define the parameters for figure 1.24c

        var angle = this.settings.angle;
        var iterations = this.settings.iterations;
        var line_length = this.settings.line_length;

        // create some variables which describe the position and orientation of the turtle
        var x = 0;
        var y = 0;
        var orientation = 11; // close to vertical
        // create var stack which will collect states so we can call ] before [ 
        var stack = [];
        // create var state so that we can use it 
        var state;
        // define the tree generation L-system
        var tree = new LSystem({
          finals: {
            '+': () => { orientation += (Math.PI/180) * angle
          }, 
            '-': () => { orientation -= (Math.PI/180) * angle 
          },
            // save the current turtle position and orientation to a list
            '[': () => { stack.push( { 'x': x, 'y': y, 'orientation': orientation } ) }, 
            // set the turtle's position and orientiation to most recent values from list
            ']': () => { state = stack.pop(); x = state.x, y = state.y, orientation = state.orientation
          },  
            // pass plotting instructions to the turtle
            'F': () => {
              // create a line
              ctx.beginPath()
              // start it at x,y
              ctx.moveTo(x, y)
              //console.log(" x, y, phi:", x, y, orientation)
              // calculate the new coordinates 
              // line length depends on the number of iterations
              var d = line_length/(tree.iterations + 1)
              // calculate 
              x += d * Math.cos(orientation)
              y += d * Math.sin(orientation)
              // draw a line to the new point 
              ctx.lineTo(x, y) 
              //console.log("New x, y", x, y)
              // plot the line with stroke()
              ctx.stroke()
              }
          }
        });
        tree.setAxiom(this.settings.axiom);
        // call setProduction for each pair given in settings
        // setProduction accepts two strings
        var prod;
        for (prod=0; prod < this.settings.prod_keys.length; prod++) {
          tree.setProduction(this.settings.prod_keys[prod], this.settings.prod_values[prod]);
        }
        this.tree_word = tree.iterate(iterations);
        tree.final();
      },
      clean_canvas: function () {
        // wipe the canvas clean for new plotting 
        var canvas = this.$refs.lcanvas
        const ctx = canvas.getContext('2d');
        // get the original (0, 0) (undo all translations)
        ctx.restore();
        // clear the canvas 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
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
  width: 500px;
  margin: auto;
}
</style>
