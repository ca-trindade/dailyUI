/* eslint-disable no-useless-escape */
import { useState } from "react";

function SignIn() {
  const [valueEmail, setValueEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");

  function ValidateEmail() {
    const regexFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const isValid = regexFormat.test(valueEmail);
    setIsValidEmail(isValid);
    setValueEmail("");
    setPassword("");
    return isValid;
  }

  function showPassword() {
    const customerPassword = document.getElementById("password");
    if (customerPassword.type === "password") {
      customerPassword.type = "text";
    } else {
      customerPassword.type = "password";
    }
  }

  return (
    <div className="flex-col rounded-lg bg-slate-300 w-6/12 h-96 p-16">
      <h2 className="text-2xl text-gray-950">Sign In</h2>
      <form action="/signIn" method="POST" id="signIn" />
      <div className="m-3">
        <div className="w-full">
          <label htmlFor="email" className="text-xl">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email@domain.com"
            value={valueEmail}
            onChange={(e) => {
              setValueEmail(e.target.value);
            }}
            className="border-2 rounded-lg bg-slate-100 h-10 w-8/12 p-1 m-2 shadow-md"
          />
          {!isValidEmail && <p>Invalid email</p>}
        </div>
        <div className="w-full">
          <label htmlFor="password" className="text-xl">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 rounded-lg bg-slate-100 h-10 w-7/12 p-1 m-2 shadow-md"
          />
          <div>
            <input type="checkbox" onClick={showPassword} className="m-2" />
            Show Password
          </div>
        </div>
      </div>

      <div className="border-4 border-zinc-400 rounded-lg m-10 hover:bg-zinc-400">
        <input
          type="submit"
          value="Submit"
          onClick={ValidateEmail}
          className="text-2xl text-zinc-600"
        />
      </div>
    </div>
  );
}

export default SignIn;
