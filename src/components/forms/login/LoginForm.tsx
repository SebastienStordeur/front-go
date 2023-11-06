import React, { useRef } from "react";
import Input from "../../UI/Input";

const LoginForm = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      email: emailInputRef.current?.value,
      password: passwordInputRef.current?.value,
    };

    try {
      const response = await fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // store in local
      localStorage.setItem("token", data.token);
      console.log(data.token, response.ok);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form id="login-form" onSubmit={handleSubmit}>
      <Input id="email-login" name="email" type="email" ref={emailInputRef} />
      <Input
        id="password-login"
        name="password"
        type="password"
        ref={passwordInputRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
