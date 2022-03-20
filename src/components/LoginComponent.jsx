import { useState, Fragment } from "react";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleEmailChange = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    // console.log(event.target.value);
    setPassword(event.target.value);
  };
  const handleBtnClick = (event) => {
    event.preventDefault();
    if (email && password) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleBtnClick}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleEmailChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      {show && (
        <div>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </div>
      )}
      {show ? (
        <div>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </div>
      ) : (
        <div>Please fill email and password</div>
      )}
    </Fragment>
  );
};

export default LoginComponent;
