// Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Form is valid - would normally call API here
      console.log('Login form submitted:', formData);
      // Reset form after submission
      setFormData({
        email: '',
        password: '',
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2 className={styles.loginTitle}>Welcome Back</h2>
        <p className={styles.loginSubtitle}>Login to your account</p>
        
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? `${styles.formInput} ${styles.inputError}` : styles.formInput}
              placeholder="Enter your email"
            />
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.formLabel}>Password</label>
            <div className={styles.passwordInputContainer}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? `${styles.formInput} ${styles.inputError}` : styles.formInput}
                placeholder="Enter your password"
              />
              <button 
                type="button"
                className={styles.passwordToggle}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && <span className={styles.errorText}>{errors.password}</span>}
          </div>
          
          <div className={styles.forgotPasswordContainer}>
            <Link to="/forgot-password" className={styles.forgotPasswordLink}>
              Forgot Password?
            </Link>
          </div>
          
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
        
        <div className={styles.signupContainer}>
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className={styles.signupLink}>
              Sign Up
            </Link>
          </p>
        </div>
        
        <div className={styles.userTypeToggle}>
          <Link to="/ngo-login" className={styles.userTypeLink}>
            Login as NGO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;