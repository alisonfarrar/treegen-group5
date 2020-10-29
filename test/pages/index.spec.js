import { mount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Index', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Index, {
            stubs: [
                'logo',
                'vuetfy-logo',
                'v-btn',
                'v-row',
                'v-layout',
                'v-col',
                'v-card',
                'v-card-title',
                'v-card-text',
                'v-card-actions',
                'v-spacer',
            ],
        })
        expect(wrapper.vm).toBeTruthy()
    })
})
