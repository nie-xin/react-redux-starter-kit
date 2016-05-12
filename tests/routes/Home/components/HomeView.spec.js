import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import { mountWithIntl } from '../../../utils/intl-test-helper'

describe('(Component) Home', () => {
  let _component

  beforeEach(() => {
    _component = mountWithIntl(<HomeView />)
  })

  it('Renders a welcome message', () => {
    const welcome = _component.find('h4')
    expect(welcome).to.exist
  })

  it('Renders an awesome duck image', () => {
    const duck = _component.find('img')
    expect(duck).to.exist
  })
})
