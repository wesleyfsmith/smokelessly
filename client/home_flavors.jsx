import React, { PropTypes } from 'react'

class FlavorSelection extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col-md-6">
          <h3>Step 2</h3>
          <h6>{'Choose Your Vape "Flavors"'}</h6>
          <p>Pick the cartridges you'd like. Get the same ones every month or change it up.</p>
        </div>
        <div className="col-md-6">
          <h6>Pick 4 more catridges</h6>
        </div>
      </div>
    )
  }
}

export default FlavorSelection;
