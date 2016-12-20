import React from 'react'
import { Link } from 'react-router'

class AddressDetail extends React.Component {
  componentWillMount() {
    
  }
  
  render() {
    const entry = {...this.props.addresses[this.props.addressId]}
    
    return (
      <div>
        <section className="bubble">
          <h3 className="bubble-title">{ entry.name } { entry.lastName }</h3>
          <div className="list">
            <div className="list-item no-icon">
              <p>{ entry.street }</p>
              <p>{ entry.city }, { entry.state } { entry.zip }</p>
            </div>
          </div>
        </section>


        <div className="right">
          <Link to="/" className="btn mr-sm" type="button">Back</Link>
          <Link to={`/address/${this.props.addressId}/edit`} className="btn" type="button">Edit</Link>
        </div>
      </div>
    )
  }
}

export default AddressDetail