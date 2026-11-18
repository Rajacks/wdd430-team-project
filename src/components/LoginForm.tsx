"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { authenticateDemoAccount } from "@/lib/demo-auth";
import { useDemoSession } from "./DemoSessionProvider";
import { Icon } from "./Icon";

export function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { logIn } = useDemoSession();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const account = authenticateDemoAccount(name, password);
    if (!account) {
      setError("That name and password do not match a demo account.");
      return;
    }

    logIn(account);
    router.push("/dashboard");
  }

  return <form className="login-form" onSubmit={handleSubmit}>
    <label htmlFor="login-name">Name</label>
    <input id="login-name" name="name" autoComplete="username" value={name} onChange={(event) => { setName(event.target.value); setError(""); }} placeholder="Emmanuel Ndogo or Taeg Dayley" required />
    <label htmlFor="login-password">Password</label>
    <input id="login-password" name="password" type="password" autoComplete="current-password" value={password} onChange={(event) => { setPassword(event.target.value); setError(""); }} placeholder="Enter your password" required />
    {error && <p className="login-error" role="alert">{error}</p>}
    <button className="button button-primary login-submit" type="submit">Log in <Icon name="arrow" size={16} /></button>
    <p className="demo-only-note"><Icon name="sparkles" size={15} />Demo sign-in only. This does not provide real authentication or store real account data.</p>
  </form>;
}
