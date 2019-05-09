import { mount } from '@vue/test-utils';
import Vue from 'vue';

import ListItemsComponent from '../index.vue';
import * as mockProps from '../../mockData';

function getRenderedText (Component, propsData) {
    const Constructor = Vue.extend(Component)
    const vm = new Constructor({ propsData: propsData }).$mount()
    return vm.$el.textContent
  }

describe('ListItems.vue', () => {

    it('renders the text correctly with different props', () => {
        
        expect(getRenderedText(ListItemsComponent, {
            data: mockProps.set1
        })).toEqual(` 1. Testament to Youth  Author(s): Vera Brittain Book Summary:  This classic memoir of the First World War is now a major motion picture starring Alicia Vikander and Kit Harington. Includes an afterword by Kate Mosse OBE. In 1914 Vera Brittain was 20, and as war was declared she was preparing to study at Oxford. Four years later her life - and the life of her whole generation - had changed in a way that would have been unimaginable in the tranquil pre-war era. TESTAMENT OF YOUTH, one of the most famous autobiographies of the First World War, is Brittain's account of how she survived those agonising years; how she lost the man she loved; how she nursed the wounded and how she emerged into an altered world. A passionate record of a lost generation, it made Vera Brittain one of the best-loved writers of her time, and has lost none of its power to shock, move and enthral readers since its first publication in 1933.`);
    
        expect(getRenderedText(ListItemsComponent, {
            data: mockProps.set2
        })).toEqual(` 1. Hoot  Author(s): Carl Hiaasen Book Summary:  Roy, who is new to his small Florida community, befriends a mysterious boy who introduces him to potty-trained alligators, burrowing owls, and sparkly-tailed poisonous snakes. A Newbery Honor Book, ALA Notable Book, & ALA Best Book for Young Adults. Reissue.`);
    })

    it('renders N/A for empty list data', () => {
        const wrapper = mount(ListItemsComponent, {
            propsData: { data: mockProps.set3 }
        });

        expect(wrapper.find('[class="book-authors"]').text())
        .toEqual('N/A');

        expect(wrapper.find('[class="book-description"]').text())
        .toEqual('N/A');
    })

    it('renders the expected HTML structure', () => {
        const wrapper = mount(ListItemsComponent, {
            propsData: { data: mockProps.set1 }
        })

        expect(wrapper.element).toMatchSnapshot();
    })
});