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
      return '$84.94';
    }
    if (subscriptionLevel === 3) {
      return '$118.95';
    }
    if (subscriptionLevel === 4) {
      return '$145.95';
    }

  }

  calculateAverage() {
    const subscriptionLevel = Session.get('subscription');
    if (subscriptionLevel === 1) {
      return 49.95;
    }
    if (subscriptionLevel === 2) {
      return 84.94 / 2;
    }
    if (subscriptionLevel === 3) {
      return 118.95 / 3;
    }
    if (subscriptionLevel === 4) {
      return (145.95 / 4).toFixed(2);
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
  plural() {
    if (Session.get('subscription') === 1) {
      return '';
    } else {
      return 's';
    }
  }
  render () {
    return (
      <div className="row">
        <div className="col-xs-3">
          <a onClick={() => this.incrementSubscription(false)} className="btn btn-danger btn-block"><h1 style={{marginTop: '11px'}}>-</h1></a>
        </div>
        <div className="col-xs-6 text-center">
          <h4>
            {Session.get('subscription') + ' Cartridge' + this.plural() + ' per month'}
          </h4>
          <h3>
            {this.price()}
          </h3>
          <p>
            AVG = {this.calculateAverage()}
          </p>
        </div>
        <div className="col-xs-3">
          <a onClick={() => this.incrementSubscription(true)} className="btn btn-success btn-block"><h1 style={{marginTop: '11px'}}>+</h1></a>
        </div>
      </div>
    )
  }
}

export default Subscription;
