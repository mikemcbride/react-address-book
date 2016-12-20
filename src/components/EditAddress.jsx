import React from 'react'
import { Link } from 'react-router'

class EditAddress extends React.Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  
  handleSubmit(event) {
    event.preventDefault()
    
    const entry = {
      name: this.name.value,
      lastName: this.lastName.value,
      street: this.street.value,
      city: this.city.value,
      state: this.state.value,
      zip: this.zip.value,
      christmas: this.christmas.checked
    }
    
    this.props.updateEntry(this.props.addressId, entry)
    this.context.router.transitionTo(`/address/${this.props.addressId}`)
  }
  
  handleDelete() {
    this.props.removeEntry(this.props.addressId)
    this.context.router.transitionTo('/')
  }
  
  render() {
    const entry = {...this.props.addresses[this.props.addressId]}
    
    return (
      <div>
        <form ref={(input) => this.addressForm = input} onSubmit={(e) => this.handleSubmit(e)}>
          <dl className="form-group">
            <dt><label>First name(s)</label></dt>
            <dd><input ref={(input) => this.name = input} defaultValue={entry.name} className="form-control" type="text" placeholder="First name" /></dd>
          </dl>
          
          <dl className="form-group">
            <dt><label>Last name</label></dt>
            <dd><input ref={(input) => this.lastName = input} defaultValue={entry.lastName} className="form-control" type="text" /></dd>
          </dl>
          
          <dl className="form-group">
            <dt><label>Street</label></dt>
            <dd><input ref={(input) => this.street = input} defaultValue={entry.street} className="form-control" type="text" /></dd>
          </dl>
          
          <dl className="form-group">
            <dt><label>City</label></dt>
            <dd><input ref={(input) => this.city = input} defaultValue={entry.city} className="form-control" type="text" /></dd>
          </dl>
          
          <dl className="form-group">
            <dt><label>State</label></dt>
            <dd><input ref={(input) => this.state = input} defaultValue={entry.state} className="form-control" type="text" /></dd>
          </dl>
          
          <dl className="form-group">
            <dt><label>Zip</label></dt>
            <dd><input ref={(input) => this.zip = input} defaultValue={entry.zip} className="form-control" type="text" /></dd>
          </dl>
          
          <div className="form-checkbox">
            <label>
              <input type="checkbox" ref={(input) => this.christmas = input} defaultValue={entry.christmas} />
              Christmas card
            </label>
          </div>
          
          <div className="clearfix">
            <div className="right">
              <Link to={`/address/${this.props.addressId}`} className="btn mr-sm">Cancel</Link>
              <button className="btn btn-primary" type="submit">Update</button>
            </div>
          </div>
        </form>

        <h3>Danger Zone!</h3>
        <button className="btn btn-danger btn-block" type="button" onClick={() => this.handleDelete()}>Delete</button>
      </div>
    )
  }
}

EditAddress.contextTypes = {
	router: React.PropTypes.object
}

export default EditAddress