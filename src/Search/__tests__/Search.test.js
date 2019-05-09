import { mount } from '@vue/test-utils';
import SearchComponent from '../index.vue';

import { beforeSearch, afterSearch } from '../../mockData';

describe('Search.vue', () => {

    it('renders the expected HTML structure, before search', () => {
        const wrapper = mount(SearchComponent, {
            data: () => beforeSearch 
        });
        expect(wrapper.element).toMatchSnapshot();
    })

    it('renders the expected HTML structure, after search', () => {
        const wrapper = mount(SearchComponent, {
            data: () => afterSearch 
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});