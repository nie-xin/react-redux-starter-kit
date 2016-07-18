import { connect } from 'react-redux'
import { localeChange } from 'redux/modules/LanguageSelect'
import LanguageSelectView from 'components/LanguageSelect/LanguageSelectView'

const mapStateToProps = (state) => ({ locale: state.locale })

const mapActionCreators = { localeChange }

export default connect(mapStateToProps, mapActionCreators)(LanguageSelectView)
