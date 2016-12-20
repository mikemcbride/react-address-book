import React from 'react'
import { Link } from 'react-router'

class AddressListFilter extends React.Component {
  constructor () {
    super()
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }
  
  handleFilterChange(e) {
    this.props.updateFilterTerm(e.target.value)
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
        <div className="flex-table-item add-button">
          <Link to="/new" className="btn" type="button">New</Link>
        </div>
      </div>
    )
  }
}

export default AddressListFilter