import React from 'react'
import base from '../base'
import { BrowserRouter, Match, Miss } from 'react-router'
import AddressList from './AddressList.jsx'
import AddressTable from './AddressTable.jsx'
import AddressListFilter from './AddressListFilter.jsx'
import AddressDetail from './AddressDetail.jsx'
import EditAddress from './EditAddress.jsx'
import NewAddress from './NewAddress.jsx'

class App extends React.Component {
  constructor() {
    super()
    
    this.updateFilterTerm = this.updateFilterTerm.bind(this)
    this.addEntry = this.addEntry.bind(this)
    this.updateEntry = this.updateEntry.bind(this)
    this.removeEntry = this.removeEntry.bind(this)
    
    this.state = {
      addresses: {},
      filterTerm: ''
    }
  }
  
  componentWillMount() {
    // this runs right before the app is rendered
    this.ref = base.syncState('addresses', {
      context: this,
      state: 'addresses'
    })
  }
  
  componentWillUnmount() {
    base.removeBinding(this.ref)
  }
  
  updateFilterTerm(term) {
    this.setState({ filterTerm: term })
  }
  
  addEntry(entry) {
		const addresses = {...this.state.addresses}
		const timestamp = Date.now()
		addresses[timestamp] = entry
		this.setState({ addresses })
	}
  
  updateEntry(key, updatedEntry) {
    const addresses = {...this.state.addresses}
    console.log({ key, updatedEntry })
    addresses[key] = updatedEntry
    this.setState({ addresses })
  }
	
	removeEntry(key) {
		const addresses = {...this.state.addresses}
		addresses[key] = null
		this.setState({ addresses })
	}
  
  render() {
    // the following functions allow us to pass props into our component routes
    const renderAddressList = (props) => {
      return (
        <div>
          <AddressListFilter
            filterTerm={this.state.filterTerm}
            updateFilterTerm={this.updateFilterTerm} />
          <AddressList
            addresses={this.state.addresses}
            filterTerm={this.state.filterTerm} />
        </div>
      )
    }
    
    const renderAddressDetail = (props) => {
      return (
        <AddressDetail
          addressId={props.params.addressId}
          addresses={this.state.addresses} />
      )
    }
    
    const renderAddressEdit = (props) => {
      return (
        <EditAddress
          addressId={props.params.addressId}
          addresses={this.state.addresses}
          updateEntry={this.updateEntry}
          removeEntry={this.removeEntry} />
      )
    }
    
    const renderAddressCreate = (props) => {
      return (
        <NewAddress addEntry={this.addEntry} />
      )
    }
      
    const renderAddressTable = (props) => {
      return (
        <div>
          <AddressListFilter
            filterTerm={this.state.filterTerm}
            updateFilterTerm={this.updateFilterTerm} />
          <AddressTable
            addresses={this.state.addresses}
            filterTerm={this.state.filterTerm} />
        </div>
      )
    }
    
    return (
      <BrowserRouter>
  			<div className="container">
  				<Match exactly pattern='/' render={renderAddressList} />
          <Match exactly pattern='/address/:addressId' render={renderAddressDetail} />
          <Match exactly pattern='/address/:addressId/edit' render={renderAddressEdit} />
          <Match exactly pattern='/new' render={renderAddressCreate} />
          <Match exactly pattern='/table' render={renderAddressTable} />
          <Miss render={renderAddressList} />
  			</div>
  		</BrowserRouter>
    )
  }
}

export default App
