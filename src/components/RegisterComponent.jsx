import { useState } from "react";

const RegisterComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [biz, setBiz] = useState(false);

  const handleEmailChange = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    // console.log(event.target.value);
    setPassword(event.target.value);
  };
  const handleNameCHange = (event) => {
    setName(event.target.value);
  };
  const handleBizChange = (event) => {
    setBiz(event.target.checked);
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName"
          value={name}
          onChange={handleNameCHange}
        />
      </div>
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
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          onChange={handleBizChange}
          checked={biz}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Biz?
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default RegisterComponent;
