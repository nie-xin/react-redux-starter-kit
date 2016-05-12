import { connect } from 'react-redux'
import { localeLoad } from '../modules/languageSelect'
import LanguageSelectView from '../components/LanguageSelectView'

const mapStateToProps = (state) => ({
  locale: state.locale
})

const mapActionCreators = { localeLoad }

export default connect(mapStateToProps, mapActionCreators)(LanguageSelectView)
