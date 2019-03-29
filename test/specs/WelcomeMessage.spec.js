import { shallowMount } from '@vue/test-utils'
import WelcomeMessage from '@/components/common/WelcomeMessage'

describe('WelcomeMessage.vue', () => {
  it('renders props.msg when passed', () => {
    const name = 'tester'

    const wrapper = shallowMount(WelcomeMessage, {
      propsData: { name: item }
    })

    expect(wrapper.text()).toBe('Hello tester from my Vue.js page, built with Webpack 4!')
  })
})
