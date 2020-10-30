(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{245:function(t,e,n){var content=n(283);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("6bb117c9",content,!0,{sourceMap:!1})},282:function(t,e,n){"use strict";var o=n(245);n.n(o).a},283:function(t,e,n){(e=n(82)(!1)).push([t.i,".e4[data-v-1d9f4ac4]{width:200px}.e4[data-v-1d9f4ac4],.e5[data-v-1d9f4ac4]{margin:auto}.e5[data-v-1d9f4ac4]{width:500px}",""]),t.exports=e},365:function(t,e,n){"use strict";n.r(e);var o=n(281),r=n.n(o),l={data:function(){return{settings:{text:"Tree",simple_description:"Please select a tree.",extended_description:"There are many suggested trees to choose from in the drop-down list.",axiom:"'F'",prod_keys:"'F'",prod_values:"'FF'",prod_str:"'F -> FF'",iterations:5,angle:22.5,line_length:40},dialog:!1,show_card:!1,tree_word:"",tree_selected:Object.assign({},this.settings),tree_list:[{text:"Budding Branch",simple_description:"Spring is here!",extended_description:"Soon I will be covered in leaves! Example 1.24a) from 'The Algorithmic Beauty of Plants'",defaults:{axiom:"'F'",prod_keys:["F"],prod_values:["F[+F]F[-F]F"],prod_str:"'F -> F[+F]F[-F]F'",iterations:5,angle:25.7,line_length:15}},{text:"Windswept Tuft",simple_description:"Watch me move in the wind!",extended_description:"The autumn storms have arrived! Example 1.24b) from 'The Algorithmic Beauty of Plants'",defaults:{axiom:"'F'",prod_keys:["F"],prod_values:["F[+F]F[-F][F]"],prod_str:"'F -> F[+F]F[-F][F]'",iterations:5,angle:20,line_length:40}},{text:"Bifurcating Bush",simple_description:"I am a bush.",extended_description:"I am the most special of all the trees because I am actually a bush. Example 1.24c) from 'The Algorithmic Beauty of Plants'.",defaults:{axiom:"'F'",prod_keys:["F"],prod_values:["FF-[-F+F+F]+[+F-F-F]"],prod_str:"'F -> FF-[-F+F+F]+[+F-F-F]'",iterations:4,angle:22.5,line_length:40}},{text:"Swaying Sweetgrass",simple_description:"Pleasing to observe.",extended_description:"Will tickle your nose if you get too close! Example 1.24d) from 'The Algorithmic Beauty of Plants'",defaults:{axiom:"'X'",prod_keys:["X","F"],prod_values:["F[+X]F[-X]+X","FF"],prod_str:"'X -> F[+X]F[-X]+X', 'F -> FF'",iterations:7,angle:20,line_length:20}},{text:"Stabby Sprig",simple_description:"Don't touch me!",extended_description:"Some call me dangerous, but I know I am the best. Example 1.24e) from 'The Algorithmic Beauty of Plants'",defaults:{axiom:"'X'",prod_keys:["X","F"],prod_values:["F[+X][-X]FX","FF"],prod_str:"'X -> F[+X][-X]FX', 'F -> FF'",iterations:7,angle:25.7,line_length:20}}]}},methods:{tree_change:function(){this.settings=Object.assign({},this.tree_selected.defaults)},submit:function(){this.clean_canvas();var canvas=this.$refs.lcanvas,t=canvas.getContext("2d");t.save(),t.translate(canvas.width/2,3*canvas.height/4);var e,n,o=this.settings.angle,l=this.settings.iterations,c=this.settings.line_length,d=0,v=0,h=11,_=[],m=new r.a({finals:{"+":function(){h+=Math.PI/180*o},"-":function(){h-=Math.PI/180*o},"[":function(){_.push({x:d,y:v,orientation:h})},"]":function(){e=_.pop(),d=e.x,v=e.y,h=e.orientation},F:function(){t.beginPath(),t.moveTo(d,v);var e=c/(m.iterations+1);d+=e*Math.cos(h),v+=e*Math.sin(h),t.lineTo(d,v),t.stroke()}}});for(m.setAxiom(this.settings.axiom),n=0;n<this.settings.prod_keys.length;n++)m.setProduction(this.settings.prod_keys[n],this.settings.prod_values[n]);this.tree_word=m.iterate(l),m.final()},clean_canvas:function(){var canvas=this.$refs.lcanvas,t=canvas.getContext("2d");t.restore(),t.clearRect(0,0,canvas.width,canvas.height)}}},c=(n(282),n(60)),d=n(166),v=n.n(d),h=n(231),_=n(367),m=n(267),f=n(236),F=n(357),x=n(369),y=n(366),w=n(273),k=n(237),S=n(368),T=n(359),V=n(364),C=n(263),X=n(360),A=n(361),P=n(362),I=n(363),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-main",{staticClass:"grey lighten-3"},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"2"}},[n("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"red lighten-2",dark:"",id:"btn_about"}},"v-btn",r,!1),o),[t._v("\n              About\n            ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2"},[t._v("\n                About the Project\n              ")]),t._v(" "),n("v-card-text",[n("p"),t._v(" "),n("p",[t._v(" Lindenmayer systems (L-systems) are systems that enable the definition of complex shapes \n                  through the use of iteration and formal grammar. ")]),t._v(" "),n("p",[t._v(" They’re named after their creator, Hungarian theoretical biologist Aristid Lindenmayer,  \n                  who initially conceived them as a mathematical theory of plant development. \n                  L-systems are based on the concept of ‘rewriting’ - the process of defining complex objects \n                  by successively replacing parts of a simple initial object (or ‘axiom’) \n                  using a specific set of rules, known as ‘productions‘. ")]),t._v(" "),n("p",[t._v(" This is a simple L-system for the generation of fractal trees. \n                  These trees are built iteratively by feeding the axiom through a set of production rules. \n                  At each iteration, each letter (or ‘predecessor‘) in the axiom is replaced by a string of letters, the ‘successor‘. \n                  We’ve provided a set of examples so you can see this system in action, but feel free to \n                  adjust the parameters to see what shapes you can generate yourself! \n                  "),n("br"),t._v("\n                  Interested in joining our team? Check out our\n                    "),n("a",{staticClass:"github-link",attrs:{href:"https://github.com/alisonfarrar/treegen-group5"}},[t._v("\n                        GitHub repository! \n                    ")])])]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                  Close\n                ")])],1)],1)],1),t._v(" "),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{color:"orange lighten-2",outlined:"",rounded:"",text:"",id:"btn_run"},on:{click:function(e){return t.submit()}}},o),[t._v("\n                    Run\n                  ")])]}}])},[t._v(" "),n("span",[t._v("Apply settings and "),n("br"),t._v("show your tree!")])])],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-sheet",{attrs:{rounded:"lg","min-height":"70vh"}},[n("canvas",{ref:"lcanvas",staticStyle:{border:"1px solid black"},attrs:{id:"canvas",width:"600vh",height:"800vh"}})])],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-sheet",{attrs:{rounded:"lg","min-height":"268"}},[n("v-card",[n("v-card-text",[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[n("v-select",{attrs:{items:t.tree_list,label:"Pick a tree","return-object":""},on:{change:function(e){t.tree_change(),t.submit()}},model:{value:t.tree_selected,callback:function(e){t.tree_selected=e},expression:"tree_selected"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("header",[t._v("\n                      Iterations\n                    ")]),t._v(" "),n("v-slider",{staticClass:"align-left",attrs:{max:10,min:0,"thumb-size":12,"thumb-label":"",step:"1",ticks:""},model:{value:t.settings.iterations,callback:function(e){t.$set(t.settings,"iterations",e)},expression:"settings.iterations"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("header",[t._v("\n                      Rotation (˚)\n                    ")]),t._v(" "),n("v-slider",{staticClass:"align-left",attrs:{max:180,min:0,"thumb-size":12,"thumb-label":"",step:"0.1",ticks:""},model:{value:t.settings.angle,callback:function(e){t.$set(t.settings,"angle",e)},expression:"settings.angle"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("header",[t._v("\n                      Line Length\n                    ")]),t._v(" "),n("v-slider",{staticClass:"align-left",attrs:{max:40,min:0,"thumb-size":12,"thumb-label":"",step:"1",ticks:""},model:{value:t.settings.line_length,callback:function(e){t.$set(t.settings,"line_length",e)},expression:"settings.line_length"}}),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"red lighten-2",dark:""}},"v-btn",r,!1),o),[t._v("          \n                        Tips        \n                        ")])]}}])},[t._v(" "),n("span",[t._v("\n                      Pick a tree: Which default tree do you want to start with?"),n("br"),t._v("\n                      Iterations: How many times will productions be applied?"),n("br"),t._v("\n                      Rotation: At what angle should the branches diverge?"),n("br"),t._v("\n                      Line Length: How long should the branches be?\n                    ")])])],1)],1)],1)],1)],1),t._v(" "),n("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[n("tbody",[n("tr",{staticStyle:{"text-align":"left"}},[n("td",{staticStyle:{width:"50%"}},[t._v("Axiom:")]),t._v(" "),n("td",[t._v(t._s(t.settings.axiom))])]),t._v(" "),n("tr",{staticStyle:{"text-align":"left"}},[n("td",{staticStyle:{width:"50%"}},[t._v("Production:")]),t._v(" "),n("td",[t._v(t._s(t.settings.prod_str))])]),t._v(" "),n("tr",{staticStyle:{"text-align":"left"}},[n("td",{staticStyle:{width:"50%"}},[t._v("Angle of Rotation:")]),t._v(" "),n("td",[t._v(t._s(t.settings.angle+"°"))])]),t._v(" "),n("tr",{staticStyle:{"text-align":"left"}},[n("td",{staticStyle:{width:"50%"}},[t._v("Number of Iterations:")]),t._v(" "),n("td",[t._v(t._s(t.settings.iterations))])]),t._v(" "),n("tr",{staticStyle:{"text-align":"left"}},[n("td",{staticStyle:{width:"50%"}},[t._v("Length of Initial Line:")]),t._v(" "),n("td",[t._v(t._s(t.settings.line_length))])])])]},proxy:!0}])}),t._v(" "),n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[n("v-card-title",[t._v("\n              "+t._s(this.tree_selected.text)+"\n            ")]),t._v(" "),n("v-card-subtitle",[t._v("\n              "+t._s(this.tree_selected.simple_description)+"\n            ")]),t._v(" "),n("v-card-actions",[n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{color:"orange lighten-2",outlined:"",rounded:"",text:""},on:{click:function(e){t.show_card=!t.show_card}}},o),[t._v("\n                    Details\n                  ")])]}}])},[t._v(" "),n("span",[t._v("More about this"),n("br"),t._v("type of tree!")])])],1),t._v(" "),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show_card,expression:"show_card"}]},[n("v-divider"),t._v(" "),n("v-card-text",[t._v("\n                  "+t._s(this.tree_selected.extended_description)+"\n                ")])],1)])],1)],1)],1)],1)],1)],1)}),[],!1,null,"1d9f4ac4",null);e.default=component.exports;v()(component,{VApp:h.a,VBtn:_.a,VCard:m.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VCol:F.a,VContainer:x.a,VDialog:y.a,VDivider:w.a,VExpandTransition:k.a,VMain:S.a,VRow:T.a,VSelect:V.a,VSheet:C.a,VSimpleTable:X.a,VSlider:A.a,VSpacer:P.a,VTooltip:I.a})}}]);