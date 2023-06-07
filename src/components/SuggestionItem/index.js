// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {value} = suggestionDetails

  const onClickSuggestion = () => {
    updateSearchInput(value)
  }

  return (
    <li className="suggestion-list-items">
      <p className="suggestion-text">{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
