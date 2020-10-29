import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Inspire from '@/pages/Inspire.vue'
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
        //console.log('!!!HERE!!!', wrapper.html())
    })

    it('Has an about button', () => {
        expect(wrapper.find('#btn_about').text()).toMatch('About')
    })

    it('Clicks about button', async () => {
        await wrapper.find('#btn_about').trigger('click')
        //await flushPromises()
        //console.log( wrapper.text() )
        //expect(wrapper.text()).toMatch('About the Project')
    })

    it('Clicks submit button', async () => {
        //console.log( wrapper.find('#btn_about').trigger('click') )
        //expect()
        wrapper.vm.submit();
        await wrapper.find('#btn_submit').trigger('click')
    })

})
