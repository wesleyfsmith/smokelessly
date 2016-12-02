import React, { PropTypes } from 'react'
import Cartridges from '/imports/ui/shared/cartridges';

class Step2 extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Cartridges />
          </div>
        </div>
      </div>
    )
  }
}

export default Step2;
