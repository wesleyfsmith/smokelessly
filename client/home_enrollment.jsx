import React from 'react';

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

class Enrollment extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col-md-6">
          <h1>3</h1>
          <h3>
            Start Enrollment
          </h3>
          <p>
            Begin your monthly subscription, and we'll start delivery to your door.
          </p>
        </div>
        <div className="col-md-6">
          <h6>

          </h6>
        </div>
      </div>
    )
  }
}

export default Enrollment;
