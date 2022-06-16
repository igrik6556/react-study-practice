import React from "react";

export default class Form extends React.Component {

    state = {
        email: '',
        isAgree: false
    }

    handlerOnChange = (e) => {
        const inputValue = e.target.value
        const inputName = e.target.name
        this.setState({
            [inputName]: inputValue
        })
    }

    handleCheckboxChange = (e) => {
        const inpName = e.target.name
        const inpChecked = e.target.checked
        this.setState({
            [inpName]: inpChecked
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const emailValue = e.target.email.value
        const isAgreeChecked = e.target.isAgree.checked
        if (!emailValue) {
            alert('You must fill Email field')
        } else if (emailValue && !isAgreeChecked) {
            alert('You must agree with terms')
        } else {
            alert('Form was send')
        }
    }

    render() {
        const {email, isAgree} = this.state
        return (
            <form className="w-25 mx-auto"
                  onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="idEmail">Email</label>
                    <input type="email"
                           onChange={this.handlerOnChange}
                           name="email"
                           id="idEmail"
                           className="form-control"
                           value={email}
                    />
                </div>
                <div className="form-group">
                    <label>
                        <input type="checkbox"
                               className="mr-2"
                               name="isAgree"
                               checked={isAgree}
                               onChange={this.handleCheckboxChange} />
                        <span>Agree</span>
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}