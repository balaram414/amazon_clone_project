import React from "react";
import { Link } from "react-router-dom";
export default function RegisterView(props) {
  return (
    <div className="container mb-5">
      <div
        className="card mx-auto mt-5 pb-3 shadow rounded"
        style={{ width: "25rem" }}
      >
        <div className="card-body">
          <h4 className="card-title">Register</h4>

          <form
            className="needs-validation"
            autoComplete="off"
            onSubmit={props.handleSubmit}
            noValidate
          >
            <div className="form-group">
              <label for="userName">Your name: </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Ganguly Tech"
                id="userName"
                value={props.name}
                onChange={props.handleChange}
                required
                minLength="10"
              />
              <div className="valid-feedback">
                <i className="far text-success fa-thumbs-up"></i> OK
              </div>
              <div className="invalid-feedback">
                <i className="fas text-danger fa-exclamation-triangle"></i> Some
                error in your name.
              </div>
            </div>
            <div className="form-group">
              <label for="userEmail">Email: </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="abc@abc.com"
                id="userEmail"
                aria-describedby="emailHelp"
                required
                value={props.email}
                onChange={props.handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                <i className="fas text-primary fa-info"></i> We'll never share
                your email with anyone else.
              </small>
              <div className="valid-feedback">
                <i className="far text-success fa-thumbs-up"></i> OK
              </div>
              <div className="invalid-feedback">
                <i className="fas text-danger fa-exclamation-triangle"></i> Some
                error in email.
              </div>
            </div>
            <div className="form-group">
              <label for="userPassword">Password: </label>
              <input
                type="password"
                className="form-control"
                placeholder="******"
                name="password1"
                id="userPassword"
                aria-describedby="passwordHelp"
                required
                minLength="6"
                value={props.password1}
                onChange={props.handleChange}
              />
              <small id="passwordHelp" className="form-text text-muted">
                <i className="fas text-primary fa-info"></i> Password must be at
                least 6 characters.
              </small>
              <div className="valid-feedback">
                <i className="far text-success fa-thumbs-up"></i> OK
              </div>
              <div className="invalid-feedback">
                <i className="fas text-danger fa-exclamation-triangle"></i> Some
                error in password.
              </div>
            </div>
            <div className="form-group">
              <label for="userPassword2">Password again: </label>
              <input
                type="password"
                className="form-control"
                placeholder="******"
                name="password2"
                id="userPassword2"
                aria-describedby="passwordHelp2"
                required
                minLength="6"
                value={props.password2}
                onChange={props.handleChange}
              />
              <small id="passwordHelp2" className="form-text text-muted">
                <i className="fas text-primary fa-info"></i> Password must match
                the above.
              </small>
              <div className="valid-feedback">
                <i className="far text-success fa-thumbs-up"></i> OK
              </div>
              <div className="invalid-feedback">
                <i className="fas text-danger fa-exclamation-triangle"></i> Some
                error in re-type password.
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-warning w-100 shadow btn-sm rounded"
            >
              Register
            </button>
          </form>

          <hr className="hr-text" data-content="OR" />

          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login">
              Sign in <i className="fas fa-caret-right"></i>
            </Link>
          </p>
          <a href="#" className="btn btn-outline-success btn-sm w-100 mt-2">
            <i className="fab fa-google"></i> Sign in with Google
          </a>
          <a href="#" className="btn btn-outline-primary btn-sm w-100 mt-2">
            <i className="fab fa-facebook-square"></i> Sign in with Facebook
          </a>
        </div>
      </div>
    </div>
  );
}
