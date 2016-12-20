import React from 'react'
import { Link } from 'react-router'

class NewAddress extends React.Component {
  createEntry (event) {
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
		
		this.props.addEntry(entry)
    this.context.router.transitionTo('/')
  }
  
  render() {
    return (
      <form ref={(input) => this.addressForm = input} onSubmit={(e) => this.createEntry(e)}>
        <dl className="form-group">
          <dt><label>First name(s)</label></dt>
          <dd><input ref={(input) => this.name = input } className="form-control" type="text" placeholder="First name" /></dd>
        </dl>
        
        <dl className="form-group">
          <dt><label>Last name</label></dt>
          <dd><input ref={(input) => this.lastName = input } className="form-control" type="text" /></dd>
        </dl>
        
        <dl className="form-group">
          <dt><label>Street</label></dt>
          <dd><input ref={(input) => this.street = input } className="form-control" type="text" /></dd>
        </dl>
        
        <dl className="form-group">
          <dt><label>City</label></dt>
          <dd><input ref={(input) => this.city = input } className="form-control" type="text" /></dd>
        </dl>
        
        <dl className="form-group">
          <dt><label>State</label></dt>
          <dd><input ref={(input) => this.state = input } className="form-control" type="text" /></dd>
        </dl>
        
        <dl className="form-group">
          <dt><label>Zip</label></dt>
          <dd><input ref={(input) => this.zip = input } className="form-control" type="text" /></dd>
        </dl>
        
        <div className="form-checkbox">
          <label>
            <input type="checkbox" ref={(input) => this.christmas = input } />
            Christmas card
          </label>
        </div>
        
        <div className="right">
          <Link className="btn mr-sm" type="button" to="/list">Cancel</Link>
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

NewAddress.contextTypes = {
	router: React.PropTypes.object
}

export default NewAddress