import { mount } from '@vue/test-utils'
import Inspire from '@/pages/inspire.vue'

describe('Inspire', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Inspire, {
            stubs: ['v-layout', 'v-flex', 'v-col'],
        })
        expect(wrapper.vm).toBeTruthy()
    })
})
