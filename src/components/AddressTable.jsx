import React from 'react'
import { sortByKey, objectHasValue } from '../helpers'

class AddressTable extends React.Component {
  constructor() {
    super()
    this.renderAddress = this.renderAddress.bind(this)
  }
  
  renderAddress(item) {
    let christmasIcon
    
    if (item.christmas === true) {
      christmasIcon = <span className="icon-wrapper green"><i className="icon icon-tree"></i></span>
    } else {
      christmasIcon = <span></span>
    }
    
    return(
      <tr key={item.id}>
        <td>
          <span className="pad-tree">
            {christmasIcon}{ item.lastName }
          </span>
        </td>
        <td>{item.name}</td>
        <td>{item.street}</td>
        <td>{item.city}</td>
        <td>{item.state}</td>
        <td>{item.zip}</td>
      </tr>  
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
        <table className="table">
          <thead>
            <tr>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
            </tr>
          </thead>
          <tbody>
            {addressList.map(this.renderAddress)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default AddressTable