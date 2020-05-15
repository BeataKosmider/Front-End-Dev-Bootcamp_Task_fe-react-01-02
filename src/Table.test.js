import React from 'react';
import Table from './Table';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableFoot from './TableFoot';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Table tests', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Table />);
    })

    it('Dodano poprawnie komponent Table', () => {
      expect(wrapper.find('table').exists()).toBe(true);
    });
    it('Dodano poprawnie komponent TableHead', () => {
      expect(wrapper.find(TableHead).exists()).toBe(true);
    });
    it('Dodano poprawnie komponent TableBody', () => {
      expect(wrapper.find(TableBody).exists()).toBe(true);
    });
    it('Dodano poprawnie komponent TableFoot', () => {
      expect(wrapper.find(TableFoot).exists()).toBe(true);
    });
    it('Wszystkie wewnętrzne komponenty mają w sobie poprawne tagi', () => {
      const thead = shallow(<TableHead />);
      const tbody = shallow(<TableBody />);
      const tfoot = shallow(<TableFoot />);
      expect(thead.find('thead').exists()).toBe(true);
      expect(tbody.find('tbody').exists()).toBe(true);
      expect(tfoot.find('tfoot').exists()).toBe(true);
    })
  });