import React from "react";
import SubmitButton from "./submit-button";
import NavBar from "./navigation";

export default class Form extends React.Component {
    render() {
        return (
            <body>
                <NavBar />
                <br></br>
                <h3>Log In</h3>
                <br></br>
            <div className="row">
            <div className="col"></div>
            <div className="col">
            <form className="container-sm">
                <div className="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
                    <label for="floatingInput">Username</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
                    <label for="floatingPassword">Password</label>
                </div>
                <SubmitButton />
            </form>
            </div>
            <div className="col"></div>
            </div>
            </body>
        );
    }
}