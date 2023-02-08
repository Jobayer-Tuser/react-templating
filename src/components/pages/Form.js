import React from 'react';

function Form() {
    return (
        <div className="card">
            <div className="card-body">
                <form>
                <div className="mb-3 row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>
                <fieldset className="mb-2">
                    <div className="row">
                    <label className="col-form-label col-sm-2 pt-0">Radios</label>
                    <div className="col-sm-10">
                        <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
                        <label className="form-check-label" htmlFor="gridRadios1">
                            First radio
                        </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                        <label className="form-check-label" htmlFor="gridRadios2">
                            Second radio
                        </label>
                        </div>
                        <div className="form-check disabled">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" defaultValue="option3" disabled />
                        <label className="form-check-label" htmlFor="gridRadios3">
                            Third disabled radio
                        </label>
                        </div>
                    </div>
                    </div>
                </fieldset>
                <div className="row mb-2">
                    <label className="col-sm-2 col-form-label pt-0">Checkbox</label>
                    <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                        <label className="form-check-label" htmlFor="gridCheck1">
                        Example checkbox
                        </label>
                    </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10 offset-sm-2">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Form;