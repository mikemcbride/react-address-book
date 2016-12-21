import React from 'react'
import { sortByKey, objectHasValue } from '../helpers'
import { Link } from 'react-router'

class AddressList extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      filterChristmas: false
    }
  }
  
  handleChange(e) {
    const filterChristmas = e.target.checked
    this.setState({ filterChristmas })
  }
  
  renderAddress(address) {
    let christmasIcon
    
    if (address.christmas === true) {
      christmasIcon = <span className="icon-wrapper green"><i className="icon icon-tree"></i></span>
    } else {
      christmasIcon = <span></span>
    }
    
    return (
      <Link to={`/react-address-book/address/${address.id}`} key={ address.id } className="list-item">
        { christmasIcon }
        <strong>{ address.lastName },</strong> { address.name }
      </Link>
    )
  }

  render() {
    const addressIds = Object.keys(this.props.addresses)
    let addressList = addressIds.reduce((arr, id) => {
      const newItem = { ...this.props.addresses[id], id }
      const retVal = objectHasValue(newItem, this.props.filterTerm) ? [...arr, newItem] : [...arr]
      return sortByKey(retVal, 'lastName')
    }, [])
    
    let christmasToggle
    
    if (this.state.filterChristmas === true) {
      christmasToggle = <i className="icon icon-toggle-on green"></i>
      addressList = addressList.filter(it => it.christmas === true)
    } else {
      christmasToggle = <i className="icon icon-toggle-off gray"></i>
    }

    return (
      <div>
        <section className="bubble">
          <h3 className="bubble-title clearfix">
            Addresses
            <label className="right" htmlFor="christmas-toggle">
              <i className="icon icon-tree green mr-sm"></i>
              {christmasToggle}
              <input className="d-none" id="christmas-toggle" type="checkbox" onChange={(e) => this.handleChange(e)} />
            </label>
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