import coreLayoutReducer, { localeChange } from 'layouts/CoreLayout/modules/CoreLayout'

describe('(Module) CoreLayout', () => {
  const initialState = 'en'

  it('Should return initial state', () => {
    const state = coreLayoutReducer(undefined, '')
    expect(state).to.deep.equal(initialState)
  })

  describe('(Action) localeChange', () => {
    let dispatch, getState, func

    beforeEach(() => {
      dispatch = sinon.spy()
      getState = () => {}
      func = localeChange('fr')
      expect(func).to.be.a('function')
      dispatch.should.have.not.been.called
    })

    it('Should dispatch LOCALE_CHANGE action', () => {
      func(dispatch, getState)
      .then(() => dispatch.should.have.been.calledWith({ type: 'LOCALE_CHANGE', payload: 'fr' }))
    })
  })
})