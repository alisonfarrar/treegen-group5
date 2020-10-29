import { mount } from '@vue/test-utils'
import Inspire from '@/pages/Inspire.vue'

describe('Inspire', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Inspire, {
            stubs: [
                'v-btn',
                'v-row',
                'v-layout',
                'v-col',
                'v-card',
                'v-card-title',
                'v-card-text',
                'v-card-actions',
                'v-spacer',
                'v-dialog',
                'v-divider',
                'v-container',
                'v-select',
                'v-slider',
                'v-simple-table',
                'v-card-subtitle',
                'v-expand-transition',
            ],
        })
        expect(wrapper.vm).toBeTruthy()
    })
})
