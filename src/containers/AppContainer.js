import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import * as messages from '../i18n'

class AppContainer extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    routerKey: PropTypes.number,
    store: PropTypes.object.isRequired,
    locale: PropTypes.string.isRequired
  }

  getContent ({ history, routes, routerKey, locale }) {
    const intlData = {
      locale,
      messages: messages[locale]
    }
    return (
      <IntlProvider {...intlData}>
        <Router
          history={this.props.history}
          key={routerKey}
          children={routes}
        >
          {this.props.routes}
        </Router>
      </IntlProvider>
    )
  }

  render () {
    const content = this.getContent(this.props)

    return (
      <Provider store={this.props.store}>
        {content}
      </Provider>
    )
  }
}

export default AppContainer
