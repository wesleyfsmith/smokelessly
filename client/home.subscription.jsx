import React, { PropTypes } from 'react'
import { Session } from 'meteor/session'
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Session.setDefault('subscription', 1);

class Subscription extends TrackerReact(React.Component) {
  price() {
    const subscriptionLevel = Session.get('subscription');
    if (subscriptionLevel === 1) {
      return '$49.95';
    }
    if (subscriptionLevel === 2) {
      return '$79.95';
    }
    if (subscriptionLevel === 3) {
      return '$115.95';
    }
    if (subscriptionLevel === 4) {
      return '$145.95';
    }

  }
  incrementSubscription(increase) {

    const currentValue = Session.get('subscription');

    if (increase && currentValue < 4) {
      Session.set('subscription', Session.get('subscription') + 1);
    }
    if (!increase && currentValue > 1) {
      Session.set('subscription', Session.get('subscription') - 1);
    }
  }
  images() {

  }
  render () {
    return (
      <div className="row">
        <div className="col-xs-3">
          <a onClick={() => this.incrementSubscription(false)} className="btn btn-danger btn-block">-</a>
        </div>
        <div className="col-xs-6 text-center">
          <h4>
            {Session.get('subscription') + ' Cartridges'}
          </h4>
          <h3>
            {this.price()}
          </h3>
        </div>
        <div className="col-xs-3">
          <a onClick={() => this.incrementSubscription(true)} className="btn btn-success btn-block">+</a>
        </div>
      </div>
    )
  }
}

export default Subscription;
