import languageSelectReducer, { localeChange } from 'redux/modules/LanguageSelect'

describe('(Module) LanguageSelect', () => {
  const initialState = 'en'

  it('Should return initial state', () => {
    const state = languageSelectReducer(undefined, '')
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
