import './index.css'

const CountryItem = props => {
  const {country, onVisit} = props
  const {id, name, isVisited} = country
  const onVisitCountry = () => {
    onVisit(id)
  }

  return (
    <li className="country">
      <p>{name}</p>
      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button onClick={onVisitCountry} className="visit-btn" type="button">
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
