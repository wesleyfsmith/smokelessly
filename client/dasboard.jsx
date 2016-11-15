import React, { PropTypes } from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';


const creditCardSchema = new SimpleSchema({
  cardNumber: {
    type: Number
  },
  expirationDate: {
    type: Date
  },
  cvc: {
    type: Number
  }
});

const addressSchema = new SimpleSchema({
  street: {
    type: String
  },
  city: {
    type: String,
    max: 50
  },
  state: {
    type: String,
      allowedValues: ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI",
      "ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO",
      "MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI",
      "SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
      autoform: {
        afFieldInput: {
          firstOption: "(Select a State)"
        }
      }
  },
  zip: {
    type: String,
    regEx: /^[0-9]{5}$/
  }
})

class Dashbaord extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <Blaze template="quickForm" schema={creditCardSchema} id='creditCardForm' />
            </div>
            <h6>You would like this order delieverd to:</h6>
              <div>
                <Blaze template="quickForm" schema={addressSchema}  id='addressForm'/>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashbaord;
