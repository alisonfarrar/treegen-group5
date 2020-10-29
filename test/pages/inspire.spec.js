import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Inspire from '@/pages/inspire.vue'
import Vuetify from 'vuetify'
//import flushPromises from 'flush-promises'

Vue.use(Vuetify);

const localVue = createLocalVue()

// Required for Vuetify
const app = document.createElement('div');
app.setAttribute('data-app', 'true');
document.body.appendChild(app);

describe('Inspire', () => {
    let vuetify
    let wrapper
    beforeEach(() => {
        vuetify = new Vuetify()
        wrapper = mount(Inspire, {
            localVue,
            vuetify,
        })
    })
    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    it('Has about button', () => {
        expect(wrapper.find('#btn_about').text()).toMatch('About')
    })

    it('Clicks about button', async () => {
        await wrapper.find('#btn_about').trigger('click')
    })

    it('Has run button', () => {
        expect(wrapper.find('#btn_run').text()).toMatch('Run')
    })

    it('LSystem function default', async () => {
        //await wrapper.find('#btn_run').trigger('click')
        // Call the method directly
        wrapper.vm.submit();
        // Check the word output
        expect(wrapper.vm.tree_word).toEqual('FFF')
    })

    it('LSystem function example 1', async () => {
        // Change to the first example
        wrapper.vm.tree_selected = wrapper.vm.tree_list[0]
        wrapper.vm.tree_change();
        expect(wrapper.vm.settings).toEqual({
            axiom: "'F'",
            prod_keys: ['F'],
            prod_values: ['FF-[-F+F+F]+[+F-F-F]'],
            prod_str: "'F -> FF-[-F+F+F]+[+F-F-F]'",
            iterations: 4,
            angle: 22.5,
            line_length: 40,
        })
        // Make the output manageable
        wrapper.vm.settings.iterations = 1
        // Call the method directly
        wrapper.vm.submit();
        // Check the word output
        expect(wrapper.vm.tree_word).toEqual("'FF-[-F+F+F]+[+F-F-F]'")
    })

    it('LSystem function example 2', async () => {
        // Change to the first example
        wrapper.vm.tree_selected = wrapper.vm.tree_list[1]
        wrapper.vm.tree_change();
        expect(wrapper.vm.settings).toEqual({
            axiom: "'X'",
            prod_keys: ['X', 'F'],
            prod_values: ['F[+X][-X]FX', 'FF'],
            prod_str: "'X -> F[+X][-X]FX', 'F -> FF'",
            iterations: 7,
            angle: 25.7,
            line_length: 20,
        })
        // Make the output manageable
        wrapper.vm.settings.iterations = 1
        // Call the method directly
        wrapper.vm.submit();
        expect(wrapper.vm.tree_word).toEqual("'F[+X][-X]FX'")
    })

})
