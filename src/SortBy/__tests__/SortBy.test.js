import { mount } from '@vue/test-utils';
import SortByComponent from '../index.vue';

describe('SortBy.vue', () => {

    it('renders the expected HTML structure, before search', () => {
        const wrapper = mount(SortByComponent, {
            propsData: {
                query: '',
                sortBy: null
            } 
        });

        expect(wrapper.find('[id="sort-button-group"]').exists()).toBe(false);
        expect(wrapper.element).toMatchSnapshot();
    })

    it('renders the expected HTML structure, after search', () => {
        const wrapper = mount(SortByComponent, {
            propsData: { query: 'harry' } 
        });

        expect(wrapper.find('[id="sort-button-group"]').exists()).toBe(true);
        expect(wrapper.element).toMatchSnapshot();
    });
});