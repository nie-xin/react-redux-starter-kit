import { connect } from 'react-redux'
import { localeChange } from '../modules/languageSelect'
import LanguageSelect from '../components/LanguageSelect'

const mapStateToProps = (state) => ({
  locale: state.locale
})

export default connect(mapStateToProps, { localeChange })(LanguageSelect)
