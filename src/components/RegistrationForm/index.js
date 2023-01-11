// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    phoneNumberInput: '',
    emailInput: '',
    showFirstNameError: false,
    showLastNameError: false,
    showPhoneNumberError: false,
    showEmailError: false,
    isFormSubmitted: false,
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  onChangeLastName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      lastNameInput: value,
    })
  }

  renderLastNameField = () => {
    const {lastNameInput, showLastNameError} = this.state
    const className = showLastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className={className}
          value={lastNameInput}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  onChangeFirstName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      firstNameInput: value,
    })
  }

  renderFirstNameField = () => {
    const {firstNameInput, showFirstNameError} = this.state
    const className = showFirstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={className}
          value={firstNameInput}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  onBlurPhoneNumber = () => {
    const isValidPhoneNumber = this.validatePhoneNumber()

    this.setState({showPhoneNumberError: !isValidPhoneNumber})
  }

  onChangePhoneNumber = event => {
    const {target} = event
    const {value} = target

    this.setState({
      phoneNumberInput: value,
    })
  }

  renderPhoneNumberField = () => {
    const {phoneNumberInput, phoneNumberError} = this.state
    const className = phoneNumberError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          type="number"
          id="phoneNumber"
          className={className}
          value={phoneNumberInput}
          placeholder="Phone Number"
          onChange={this.onChangePhoneNumber}
          onBlur={this.onBlurPhoneNumber}
        />
      </div>
    )
  }

  onBlurEmail = () => {
    const isValidEmail = this.validateEmail()

    this.setState({showEmailError: !isValidEmail})
  }

  onChangeEmail = event => {
    const {target} = event
    const {value} = target

    this.setState({
      emailInput: value,
    })
  }

  renderEmailField = () => {
    const {emailInput, showEmailError} = this.state
    const className = showEmailError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="email">
          Email
        </label>
        <input
          type="TextField"
          id="email"
          className={className}
          value={emailInput}
          placeholder="Email"
          onChange={this.onChangeEmail}
          onBlur={this.onBlurEmail}
        />
      </div>
    )
  }

  validateLastName = () => {
    const {lastNameInput} = this.state

    return lastNameInput !== ''
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state

    return firstNameInput !== ''
  }

  validatePhoneNumber = () => {
    const {phoneNumberInput} = this.state

    return phoneNumberInput !== ''
  }

  validateEmail = () => {
    const {emailInput} = this.state

    return emailInput !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()
    const isValidPhoneNumber = this.validatePhoneNumber()
    const isValidEmail = this.validateEmail()

    if (
      isValidFirstName &&
      isValidLastName &&
      isValidPhoneNumber &&
      isValidEmail
    ) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        showPhoneNumberError: !isValidPhoneNumber,
        showEmailError: !isValidEmail,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {
      showFirstNameError,
      showLastNameError,
      showPhoneNumberError,
      showEmailError,
    } = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameField()}
        {showFirstNameError && <p className="error-message">Required</p>}
        {this.renderLastNameField()}
        {showLastNameError && <p className="error-message">Required</p>}
        {this.renderPhoneNumberField()}
        {showPhoneNumberError && <p className="error-message">Required</p>}
        {this.renderEmailField()}
        {showEmailError && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstNameInput: '',
      lastNameInput: '',
      phoneNumberInput: '',
      emailInput: '',
    }))
  }

  renderSubmissionSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="registration-form-container">
        <h1 className="form-title">Registration Form</h1>
        <div className="view-container">
          {isFormSubmitted
            ? this.renderSubmissionSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
