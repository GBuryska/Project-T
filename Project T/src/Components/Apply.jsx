import React from 'react'
import "./Apply.css"

const Apply = () => {
    return (
        <div className="page">
            <div className="head">
                <h2 className="form-header">Apply Here</h2>
            </div>
            <div className="body">

                <form>
                    <div className="form-row">
                        <div className="form-input">
                                <label className="form-label" htmlFor="fName">First Name: </label>
                                <input name="fName"  className="text-input" type="text"/>
                        </div>

                        <div className="form-input">
                                <label className="form-label" htmlFor="LName">Last Name: </label>
                                <input name="LName" className="text-input" type="text"/>
                        </div>
                    </div>

                    <div className="form-row flex-row">
                        <div className="form-input">
                                <label className="form-label" htmlFor="Email">Email: </label>
                                <input name="Email" className="text-input" type="text"/>
                        </div>

                        <div className="form-input">
                                <label className="form-label" htmlFor="Position">Position: </label>
                                <input name="Position" className="text-input" type="text"/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-input">
                            <label className="form-label" htmlFor="Instagram">Instagram Handle: </label>
                            <input name="Instagram" className="text-input" type="text"/>
                        </div>
                        <p>-Please be sure to have your account public. <br></br>If you do not have an instagram please put your facebook name </p>
                    </div>

                    <div className="form-row">
                        <label htmlFor="check1">I am at least 18 years of age and a  U.S. citizem or am authorized to work in the U.S. and understand that the status of my employment upon hire will be conditional upon the completion of an I-9 form and providing documentation establishing my identity and work authorization.  </label>
                        <input name="check1" type="checkbox"/>
                    </div>

                    <div className="form-row">
                        <div className="form-input flex-col">
                            <label htmlFor="hours">Hours Available to work- Use specific days and times (i.e. open 11 am-4pm, dinner 4-10pm, close 9-1 AM</label>
                            <textarea name="hours" rows="5" cols="30"/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-input flex-col">
                            <label htmlFor="history">Please List Relevant Work History in restaurants or customer service</label>
                            <textarea name="history" rows="5" cols="30"/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-input flex-col">
                            <label htmlFor="date">Please list available start date</label>
                            <input name="date" className="text-input" type="text"/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-input flex-col">
                            <label htmlFor="days">Days and times that wok best for an interview</label>
                            <input name="days" className="text-input" type="text"/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="check1">I certify that the information in this application is correct to the best of my knowledge. I understand that to falsify information is grounds for refusing to hire me, or for discharge should I be hired. </label>
                        <input name="check2" type="checkbox"/>
                    </div>

                    <div className="form-row">
                        <input className="submit" name="submit" type="submit" value="Submit" />
                    </div>

                </form>
            </div>
        </div>
    )
}
export default Apply
