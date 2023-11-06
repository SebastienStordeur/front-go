import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import { useAuth } from "../../../context/auth";

const LoginForm = () => {
  const { login } = useAuth();

  const [error, setError] = useState<string>("");
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      email: emailInputRef.current?.value,
      password: passwordInputRef.current?.value,
    };

    const response = await login(formData);
    console.log(response);
    if (response?.error) {
      setError(response.error);
      return;
    }

    if (response?.token) {
      localStorage.setItem("token", response.token);
      setError("");
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
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginForm;
