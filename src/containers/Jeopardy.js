import { connect } from 'react-redux'
import { getCharacters } from '../actions/Jeopardy'
import JeopardyDisplay from '../components/jeopardyDisplay/JeopardyDisplay'

const mapStateToProps = state => {
  return {
    characters: state.characters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    renderQuestion: () => {
      dispatch(getQuestion())
    }
  }
}

const Characters = connect(
  mapStateToProps,
  mapDispatchToProps
)(JeopardyDisplay)

export default Questions