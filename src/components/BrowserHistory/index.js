import './index.css'

const BrowserHistory = props => {
  const {initialHistoryList, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = initialHistoryList

  const onDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <div className="container">
      <li className="history-container">
        <p className="time">{timeAccessed}</p>
        <div className="logo-url-container">
          <img src={logoUrl} className="logo-url" alt="domain logo" />
          <div className="text-container">
            <p className="title">{title}</p>
            <p className="domainUrl">{domainUrl}</p>
          </div>
        </div>
      </li>
      <button type="button" className="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </div>
  )
}

export default BrowserHistory
