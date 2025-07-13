import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AuthContext} from './context/Auth'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {login} =useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await fetch('http://localhost:8000/api/Authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.status === false) {
        toast.error(result.message || 'Login failed!');
        return;
      } else {
        const userInfo = {
            id: result.id,
            token : result.token
        }
        localStorage.setItem ('userInfo', JSON.stringify(userInfo))
        login(userInfo);
        navigate('/admin/dashboard')
      }

      if (res.ok) {
        toast.success('Login successful!');
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 2000);
      } else {
        toast.error(result.message || 'Login failed!');
      }

    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                id="email"
                placeholder="Email"
                className="form-control"
              />
              {errors.email && <small className="text-danger">{errors.email.message}</small>}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group">
                <input
                  {...register("password", { required: "Password is required" })}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Password"
                  className="form-control"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.password && <small className="text-danger">{errors.password.message}</small>}
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

      {/* Tambahkan ini */}
      <ToastContainer />
    </>
  );
};

export default Login;
