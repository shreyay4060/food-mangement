import { useState } from "react";
import {
  auth,
  provider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "../firebase";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      onLogin(result.user);
    } catch (err) {
      setError("Invalid email or password.");
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await signInWithPopup(auth, provider);
      onLogin(result.user);
    } catch (err) {
      setError("Google sign-in failed.");
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(120deg, #ffb6d5 0%, #fff 100%)",
        padding: "5px",
      }}
    >
      <form
        onSubmit={handleEmailLogin}
        style={{
          height: "60vh",
          width: "35vw",
          minWidth: "240px",
          maxWidth: "420px",
          background: "#fff",
          borderRadius: "24px",
          boxShadow: "0 8px 32px rgba(221,36,118,0.18)",
          padding: "2rem 1rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Pacifico', cursive",
            color: "#dd2476",
            fontSize: "2.5rem",
            marginBottom: "1.5rem",
            letterSpacing: "2px",
          }}
        >
          Welcome to Foodie Menu
        </h1>
        <p style={{ color: "#888", marginBottom: "2rem" }}>
          Login to continue
        </p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "0.8rem",
            marginBottom: "1rem",
            borderRadius: "12px",
            border: "1px solid #ffb6d5",
            fontSize: "1rem",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "0.8rem",
            marginBottom: "1.5rem",
            borderRadius: "12px",
            border: "1px solid #ffb6d5",
            fontSize: "1rem",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "30px",
            padding: "0.8rem 2.5rem",
            fontWeight: 600,
            fontSize: "1.2rem",
            cursor: "pointer",
            marginBottom: "1rem",
            width: "100%",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <div style={{ margin: "1.5rem 0", color: "#888" }}>or</div>
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          style={{
            background: "#fff",
            color: "#dd2476",
            border: "1px solid #ffb6d5",
            borderRadius: "30px",
            padding: "0.8rem 2.5rem",
            fontWeight: 600,
            fontSize: "1.1rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            margin: "0 auto",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google"
            style={{
              width: "24px",
              height: "24px",
              background: "#fff",
              borderRadius: "50%",
            }}
          />
          Sign in with Google
        </button>
        {error && (
          <div style={{ color: "#ff512f", marginTop: "1rem" }}>{error}</div>
        )}
      </form>
      <style>{`
        @media (max-width: 700px) {
          form {
            width: 90vw !important;
            height: auto !important;
            padding: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;