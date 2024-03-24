import './index.css'

const VisitItem = props => {
  const {item, onRemove} = props
  const {id, name, imageUrl} = item

  const onRemoveCountry = () => {
    onRemove(id)
  }
  return (
    <li className="visit-item">
      <img src={imageUrl} alt="thumbnail" className="country-img" />
      <div className="remove">
        <p>{name}</p>
        <button onClick={onRemoveCountry} className="remove-btn" type="button">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitItem
