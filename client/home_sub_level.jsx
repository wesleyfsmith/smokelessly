import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

class SubscriptionLevel extends TrackerReact(React.Component) {
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
  render () {


    return (
      <div className="row">
        <div className="col-md-6">
          <h3>Step 1</h3>
          <h5>Choose a Subscription Level</h5>
          <p>
            Tell us how many vape cartridges you'd like delivered per month.
          </p>
        </div>
        <div className="col-md-6">
          <div className="orange-panel">
            <h5>{'How many do you want a month?'}</h5>
            <p>3 cartridges</p>
            <p>{this.price()}</p>
          </div>

        </div>
      </div>
    )
  }
}

export default SubscriptionLevel;
