import React from 'react'
import { Router } from 'react-router'
import { Provider, connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import * as messages from '../i18n'

class AppContainer extends React.Component {
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

AppContainer.propTypes = {
  history: React.PropTypes.object.isRequired,
  routes: React.PropTypes.object.isRequired,
  routerKey: React.PropTypes.number,
  store: React.PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return { locale: state.locale }
}

export default connect(mapStateToProps)(AppContainer)
