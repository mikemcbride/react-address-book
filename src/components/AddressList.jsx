import React from 'react'
import { sortByKey, objectHasValue } from '../helpers'
import { Link } from 'react-router'

class AddressList extends React.Component {
  renderAddress(address) {
    let christmasIcon
    
    if (address.christmas === true) {
      christmasIcon = <span className="icon-wrapper green"><i className="icon icon-tree"></i></span>
    } else {
      christmasIcon = <span></span>
    }
    
    return (
      <Link to={`/address/${address.id}`} key={ address.id } className="list-item">
        { christmasIcon }
        <strong>{ address.lastName },</strong> { address.name }
      </Link>
    )
  }

  render() {
    const addressIds = Object.keys(this.props.addresses)
    const addressList = addressIds.reduce((arr, id) => {
      const newItem = { ...this.props.addresses[id], id }
      const retVal = objectHasValue(newItem, this.props.filterTerm) ? [...arr, newItem] : [...arr]
      return sortByKey(retVal, 'lastName')
    }, [])
          
    return (
      <div>
        <section className="bubble">
          <h3 className="bubble-title clearfix">
            Addresses
            <span className="right">
              <i className="icon icon-tree green mr-sm"></i>
              <i className="icon icon-toggle-off gray"></i>
            </span>
          </h3>
          <div className="list">
            {addressList.map(this.renderAddress)}
          </div>
        </section>

        <ul>
        </ul>
        
      </div>
    )
  }
}

export default AddressList