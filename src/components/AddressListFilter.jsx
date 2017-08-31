import React from 'react'
import { Link } from 'react-router'

class AddressListFilter extends React.Component {
  constructor () {
    super()
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.clearInput = this.clearInput.bind(this)
  }
  
  handleFilterChange(e) {
    this.props.updateFilterTerm(e.target.value)
  }
  
  clearInput(e) {
    this.props.updateFilterTerm('')
  }
  
  render() {
    return (
      <div className="flex-table list-search">
        <div className="flex-table-item flex-table-item-primary">
          <input
            className="input-block form-control"
            value={this.props.filterTerm}
            onChange={(e) => this.handleFilterChange(e)}
            type="text"
            placeholder="Search" />
        </div>
        <div className="flex-table-item pl-1">
          <button className="btn" onClick={(e) => this.clearInput(e)}>Clear</button>
        </div>
        <div className="flex-table-item pl-1">
          <Link to="/react-address-book/new" className="btn btn-primary" type="button">New</Link>
        </div>
      </div>
    )
  }
}

export default AddressListFilter