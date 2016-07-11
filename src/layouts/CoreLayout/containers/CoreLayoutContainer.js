import { connect } from 'react-redux'
import { localeChange } from '../modules/CoreLayout'
import CoreLayoutView from '../components/CoreLayoutView'

const mapStateToProps = (state) => ({
  locale: state.locale
})

const mapActionCreators = { localeChange }

export default connect(mapStateToProps, mapActionCreators)(CoreLayoutView)
