(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{244:function(t,e,n){var content=n(282);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("a7d3593e",content,!0,{sourceMap:!1})},281:function(t,e,n){"use strict";var o=n(244);n.n(o).a},282:function(t,e,n){(e=n(82)(!1)).push([t.i,".e4[data-v-18d3c78d]{width:200px}.e4[data-v-18d3c78d],.e5[data-v-18d3c78d]{margin:auto}.e5[data-v-18d3c78d]{width:500px}",""]),t.exports=e},360:function(t,e,n){"use strict";n.r(e);var o=n(280),r=n.n(o),l={data:function(){return{settings:{text:"Tree",simple_description:"Please select a tree.",extended_description:"There are many suggested trees to choose from in the drop-down list.",axiom:"'F'",prod_keys:"'F'",prod_values:"'FF'",prod_str:"'F -> FF'",iterations:5,angle:22.5,line_length:4},dialog:!1,show_card:!1,tree_selected:Object.assign({},this.settings),tree:[{text:"Bifurcating Bush",simple_description:"I am a bush.",extended_description:"I am the most special of all the trees because I am actually a bush. Example 1.24c) from 'The Algorithmic Beauty of Plants'.",defaults:{axiom:"'F'",prod_keys:["F"],prod_values:["FF-[-F+F+F]+[+F-F-F]"],prod_str:"'F -> FF-[-F+F+F]+[+F-F-F]'",iterations:4,angle:22.5,line_length:40}},{text:"Stabby Spear",simple_description:"Don't touch me!",extended_description:"Some call me dangerous, but I know I am the best. Example 1.24e) from 'The Algorithmic Beauty of Plants'",defaults:{axiom:"'X'",prod_keys:["X","F"],prod_values:["F[+X][-X]FX","FF"],prod_str:"'X -> F[+X][-X]FX', 'F -> FF'",iterations:7,angle:25.7,line_length:20}},{text:"Swaying Sweetgrass",simple_description:"Pleasing to observe.",extended_description:"Will tickle your nose if you get too close! Example 1.24d) from 'The Algorithmic Beauty of Plants'",defaults:{axiom:"'X'",prod_keys:["X","F"],prod_values:["F[+X]F[-X]+X","FF"],prod_str:"'X -> F[+X]F[-X]+X', 'F -> FF'",iterations:7,angle:20,line_length:20}},{text:"Budding Branch",simple_description:"Spring is here!",extended_description:"Soon I will be covered in leaves! Example 1.24a) from 'The Algorithmic Beauty of Plants'",defaults:{axiom:"'F'",prod_keys:["F"],prod_values:["F[+F]F[-F]F"],prod_str:"'F -> F[+F]F[-F]F'",iterations:5,angle:25.7,line_length:20}},{text:"Windswept Tuft",simple_description:"Watch me move in the wind!",extended_description:"The autumn storms have arrived! Example 1.24b) from 'The Algorithmic Beauty of Plants'",defaults:{axiom:"'F'",prod_keys:["F"],prod_values:["F[+F]F[-F][F]"],prod_str:"'F -> F[+F]F[-F][F]'",iterations:5,angle:20,line_length:40}}]}},methods:{tree_change:function(){console.log(this.tree),console.log(this.tree_selected),console.log(this.settings),this.settings=Object.assign({},this.tree_selected.defaults)},submit:function(){var canvas=document.getElementById("canvas"),t=canvas.getContext("2d");t.save(),t.translate(canvas.width/2,3*canvas.height/4);var e,n,o=this.settings.angle,l=this.settings.iterations,c=this.settings.line_length,d=0,v=0,h=11,_=[],m=new r.a({finals:{"+":function(){h+=Math.PI/180*o},"-":function(){h-=Math.PI/180*o},"[":function(){_.push({x:d,y:v,orientation:h})},"]":function(){e=_.pop(),d=e.x,v=e.y,h=e.orientation},F:function(){t.beginPath(),t.moveTo(d,v);var e=c/(m.iterations+1);d+=e*Math.cos(h),v+=e*Math.sin(h),t.lineTo(d,v),t.stroke()}}});for(m.setAxiom(this.settings.axiom),n=0;n<this.settings.prod_keys.length;n++)m.setProduction(this.settings.prod_keys[n],this.settings.prod_values[n]);m.iterate(l),m.final()},clean_canvas:function(){var canvas=document.getElementById("canvas"),t=canvas.getContext("2d");t.restore(),t.clearRect(0,0,canvas.width,canvas.height)}}},c=(n(281),n(60)),d=n(166),v=n.n(d),h=n(231),_=n(362),m=n(264),f=n(236),F=n(353),x=n(364),y=n(361),w=n(273),k=n(237),S=n(363),T=n(355),V=n(359),X=n(260),C=n(356),A=n(357),I=n(358),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-main",{staticClass:"grey lighten-3"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"3"}},[n("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"red lighten-2",dark:""}},"v-btn",r,!1),o),[t._v("\n                                About\n                            ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2"},[t._v("\n                                About the Project\n                            ")]),t._v(" "),n("v-card-text",[n("p"),t._v(" "),n("p",[t._v("\n                                    Lindenmayer systems (L-systems) are\n                                    systems that enable the definition of\n                                    complex shapes through the use of\n                                    iteration and formal grammar.\n                                ")]),t._v(" "),n("p",[t._v("\n                                    They’re named after their creator,\n                                    Hungarian theoretical biologist Aristid\n                                    Lindenmayer, who initially conceived\n                                    them as a mathematical theory of plant\n                                    development. L-systems are based on the\n                                    concept of ‘rewriting’ - the process of\n                                    definingcomplex objects by successively\n                                    replacing parts of a simple initial\n                                    object (or ‘axiom’) using a specific set\n                                    of rules.\n                                ")]),t._v(" "),n("p",[t._v("\n                                    This is a simple L-system for the\n                                    generation of fractal trees. These trees\n                                    are built recursively by feeding the\n                                    axiom through a set of production rules.\n                                    We’ve provided a set of examples so you\n                                    can see this system in action, but feel\n                                    free to adjust the parameters to see\n                                    what shapes you can generate yourself!\n                                ")])]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                                    Close\n                                ")])],1)],1)],1),t._v(" "),n("v-btn",{attrs:{color:"orange lighten-2",outlined:"",rounded:"",text:""},on:{click:function(e){t.clean_canvas(),t.submit()}}},[t._v("\n                                Run\n                    ")]),t._v(" "),n("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[n("v-card-title",[t._v("\n                                "+t._s(this.tree_selected.text)+"\n                            ")]),t._v(" "),n("v-card-subtitle",[t._v("\n                                "+t._s(this.tree_selected.simple_description)+"\n                            ")]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"orange lighten-2",outlined:"",rounded:"",text:""},on:{click:function(e){t.show_card=!t.show_card}}},[t._v("\n                                    Details\n                                ")])],1),t._v(" "),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show_card,expression:"show_card"}]},[n("v-divider"),t._v(" "),n("v-card-text",[t._v("\n                                        "+t._s(this.tree_selected.extended_description)+"\n                                    ")])],1)])],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"5"}},[n("v-sheet",{attrs:{rounded:"lg","min-height":"70vh"}},[n("canvas",{staticStyle:{border:"1px solid black"},attrs:{id:"canvas",width:"300vw",height:"500vw"}})])],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-sheet",{attrs:{rounded:"lg","min-height":"268"}},[n("v-card",[n("v-card-text",[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"12"}},[n("v-select",{attrs:{items:t.tree,label:"Tree","return-object":""},on:{change:function(e){t.tree_change(),t.clean_canvas(),t.submit()}},model:{value:t.tree_selected,callback:function(e){t.tree_selected=e},expression:"tree_selected"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("header",[t._v("Iterations")]),t._v(" "),n("v-slider",{staticClass:"align-left",attrs:{max:10,min:0,"thumb-size":12,"thumb-label":"",step:"1",ticks:""},model:{value:t.settings.iterations,callback:function(e){t.$set(t.settings,"iterations",e)},expression:"\n                                                    settings.iterations"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("header",[t._v("Rotation (˚)")]),t._v(" "),n("v-slider",{staticClass:"align-left",attrs:{max:180,min:0,"thumb-size":12,"thumb-label":"",step:"0.5",ticks:""},model:{value:t.settings.angle,callback:function(e){t.$set(t.settings,"angle",e)},expression:"settings.angle"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("header",[t._v("Line Length")]),t._v(" "),n("v-slider",{staticClass:"align-left",attrs:{max:10,min:0,"thumb-size":12,"thumb-label":"",step:"1",ticks:""},model:{value:t.settings.line_length,callback:function(e){t.$set(t.settings,"line_length",e)},expression:"\n                                                    settings.line_length"}})],1)],1)],1)],1)],1),t._v(" "),n("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[n("tbody",[n("tr",{staticStyle:{"text-align":"left"}},[n("td",{staticStyle:{width:"50%"}},[t._v("Axiom:")]),t._v(" "),n("td",[t._v(t._s(t.settings.axiom))])]),t._v(" "),n("tr",{staticStyle:{"text-align":"left"}},[n("td",{staticStyle:{width:"50%"}},[t._v("\n                                            Production:\n                                        ")]),t._v(" "),n("td",[t._v(t._s(t.settings.prod_str))])]),t._v(" "),n("tr",{staticStyle:{"text-align":"left"}},[n("td",{staticStyle:{width:"50%"}},[t._v("\n                                            Angle of Rotation:\n                                        ")]),t._v(" "),n("td",[t._v(t._s(t.settings.angle+"°"))])]),t._v(" "),n("tr",{staticStyle:{"text-align":"left"}},[n("td",{staticStyle:{width:"50%"}},[t._v("\n                                            Number of Iterations:\n                                        ")]),t._v(" "),n("td",[t._v(t._s(t.settings.iterations))])]),t._v(" "),n("tr",{staticStyle:{"text-align":"left"}},[n("td",{staticStyle:{width:"50%"}},[t._v("\n                                            Length of Initial Line:\n                                        ")]),t._v(" "),n("td",[t._v(t._s(t.settings.line_length))])])])]},proxy:!0}])})],1)],1)],1)],1)],1)],1)}),[],!1,null,"18d3c78d",null);e.default=component.exports;v()(component,{VApp:h.a,VBtn:_.a,VCard:m.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VCol:F.a,VContainer:x.a,VDialog:y.a,VDivider:w.a,VExpandTransition:k.a,VMain:S.a,VRow:T.a,VSelect:V.a,VSheet:X.a,VSimpleTable:C.a,VSlider:A.a,VSpacer:I.a})}}]);