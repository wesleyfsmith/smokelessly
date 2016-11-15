import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import Blaze from 'meteor/gadicc:blaze-react-component';
import React, { PropTypes } from 'react'

const signUpSchema = new SimpleSchema({
  email: {
    label: 'Email',
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  password: {
    type: String,
    label: "Enter a password",
    min: 8,
    autoform: {
      type: 'password'
    }
  }
});

AutoForm.addHooks('signUpForm', {
  onSubmit: function (insertDoc, updateDoc, currentDoc) {
    Accounts.createUser(insertDoc, (error) => {
      if (error) {
        console.log(error);
      }
    });
    this.done();
    return false;
  },
  onError() {

  }
  //TODO: make this error handling more robuse
});

class SignUpScreen extends React.Component {

  constructor() {
    super();
  }
  render () {
    return (

        <div>
          <hr />
          <div>
            <Blaze template="quickForm" schema={signUpSchema} id="signUpForm" />
          </div>
        </div>

    )
  }
}

export default SignUpScreen;
