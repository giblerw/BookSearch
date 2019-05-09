import { shallowMount, mount } from '@vue/test-utils';
import AppComponent from '../index.vue';

describe('App.vue', () => {
    it('should render title text correctly', () => {
        const wrapper = shallowMount(AppComponent);
        expect(wrapper.find('[id="app-title"]').text())
        .toEqual('Bookz');
    });

    it('renders correctly', () => {
        const wrapper = mount(AppComponent);
        expect(wrapper.element).toMatchSnapshot();
    })
});