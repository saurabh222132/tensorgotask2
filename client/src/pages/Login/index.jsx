import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here

    console.log("Form submitted:", formData);
  };
  const googleAuth = () => {
    window.open(`http://localhost:8080/auth/callback`, "_self");
  };
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="d-flex">
          <button type="submit" className="btn px-1  btn-primary">
            Login
          </button>
          <div className=" d-flex flex-lg-row">
            <h6 className=" px-1 mt-1 ">Or</h6>

            <Button
              onClick={googleAuth}
              style={{ color: "white" }}
              className="px-1 "
            >
              Login With Google
            </Button>

            <h6 className=" px-1 mt-1">Or</h6>
            <Link to="/signup">
              <Button style={{ color: "white" }} className=" px-1 ">
                SignUp
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
