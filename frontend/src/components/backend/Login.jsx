import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"


const Login = () => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const {
    register,
    watch,
    formState: { errors },
  } = useForm<Inputs>('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Login successful!'); // Replace with actual login logic
    }, 1500);
  };

  return (
   <main
  className="d-flex justify-content-center align-items-center"
  style={{
    minHeight: '100vh',
    width: '100vw',
    margin: 0,
    background: '#f5f7fa',
  }}
>
  <div
    className="login-form"
    style={{
      width: '400px',
      padding: '2rem',
      borderRadius: '8px',
      background: 'white',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    }}
  >
    <h4 className="mb-3 text-center">Login Here</h4>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <div className="input-group">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary w-100"
        disabled={isLoading}
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  </div>
</main>

  );
}

export default Login;
