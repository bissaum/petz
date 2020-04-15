import { shallow } from 'enzyme'
import React from 'react'

import Header from '../components/layout.header.js'

describe('Testing header layout', () => {

  it('Header shows logo', () => {
    const app = shallow(<Header />)
    expect(app.find('h1').text()).toEqual('Petz - Seu pet center de estimação')
  })
})