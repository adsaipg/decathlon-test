import React, { useState, useEffect } from "react";
import { credentials } from "../../data";
import { connect } from "react-redux";
import { login } from "../../actions/action";
import "./login.css";

const Login = props => {
  const [text, setText] = useState("Login");
  useEffect(() => {
    props.state && props.state.login && setText(credentials.name);
  });
  const login = () => {
    const email = prompt("Enter email:");
    if (email === credentials.email) {
      setText(credentials.name);
      props.login();
    } else {
      alert("Invalid email");
    }
  };
  return (
    <div className={"loginButn"} onClick={() => login()}>
      {text}
    </div>
  );
};

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = { login };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
