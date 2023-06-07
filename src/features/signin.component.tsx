import Head from 'next/head';
import { useSignIn } from 'src/hooks/useSignIn';

export const SignInPage = () => {
  const props = useSignIn();
  return (
    <div className="container">
      <h1>Sign In</h1>
      <label>
        Email
        <input value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
      </label>
      <label>
        Password
        <input
          type="password"
          value={props.password}
          onChange={(e) => props.setPassword(e.target.value)}
        />
      </label>
      <button aria-busy={props.loading} type="submit" onClick={props.handleLogin}>
        Submit
      </button>
    </div>
  );
};
