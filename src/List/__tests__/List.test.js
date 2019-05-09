import { shallowMount, mount } from '@vue/test-utils';
import ListComponent from '../index.vue';
import * as mockData from '../../mockData';

describe('List.vue', () => {
    it('renders the expected HTML structure, without data', () => {
        const wrapper = mount(ListComponent, {
            setData: mockData.emptySet
        });
        
        expect(wrapper.element).toMatchSnapshot();
    });

    it('renders the expected HTML structure, with data', () => {
        const wrapper = mount(ListComponent, {
            setData: mockData.set1
        });
        
        expect(wrapper.element).toMatchSnapshot();
    });

    it('should render prompt before search', () => {
        const wrapper = shallowMount(ListComponent);
        
        expect(wrapper.find('[class="list-prompt"]').text())
        .toEqual('Submit a search above to get Book data.');
        
        expect(wrapper.element).toMatchSnapshot();
    });

    it('should render results prompt after search', () => {
        const wrapper = shallowMount(ListComponent);
        wrapper.setData({
            currentQuery: 'harry potter',
            listData: {
                'harry potter': {
                    items: [],
                    kind: 'books#volumes',
                    totalItems: 2770
                }
            },
            totalItems: 2770,
        })

        expect(wrapper.find('[class="list-prompt"]').text())
        .toEqual('Search found 2770 results for: harry potter');

        expect(wrapper.element).toMatchSnapshot()
    });
});