import { connect } from 'react-redux'
import { getCharacters } from '../actions/Character'
import CharacterList from '../components/characterList/CharacterList'

const question = state => {
  return {
    characters: state.characters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    renderCharacters: () => {
      dispatch(getCharacters())
    }
  }
}

const Characters = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList)

export default Characters