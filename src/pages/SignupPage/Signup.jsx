// Signup.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Signup.module.css';

const Signup = () => {
  const [userType, setUserType] = useState('donor');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    // NGO specific fields
    ngoName: '',
    address: '',
    categories: []
  });
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [emailOtp, setEmailOtp] = useState('');
  const [phoneOtp, setPhoneOtp] = useState('');

  const donationCategories = [
    'Clothing', 'Food', 'Books', 'Electronics', 'Furniture', 'Toys', 'Medical Supplies', 
    'Household Items', 'School Supplies', 'Personal Care'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'categories') {
      if (checked) {
        setFormData({
          ...formData,
          categories: [...formData.categories, value]
        });
      } else {
        setFormData({
          ...formData,
          categories: formData.categories.filter(category => category !== value)
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const toggleUserType = (type) => {
    setUserType(type);
    setErrors({});
    setStep(1);
  };

  const validateStep1 = () => {
    const newErrors = {};
    
    if (userType === 'donor') {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
    } else { // NGO
      if (!formData.ngoName.trim()) {
        newErrors.ngoName = 'NGO Name is required';
      }
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    
    if (userType === 'ngo') {
      if (!formData.address.trim()) {
        newErrors.address = 'Address is required';
      }
      
      if (formData.categories.length === 0) {
        newErrors.categories = 'Please select at least one category';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep4 = () => {
    const newErrors = {};
    
    if (!emailOtp) {
      newErrors.emailOtp = 'Email OTP is required';
    } else if (!/^\d{6}$/.test(emailOtp)) {
      newErrors.emailOtp = 'Email OTP must be 6 digits';
    }
    
    if (!phoneOtp) {
      newErrors.phoneOtp = 'Phone OTP is required';
    } else if (!/^\d{6}$/.test(phoneOtp)) {
      newErrors.phoneOtp = 'Phone OTP must be 6 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    let isValid = false;
    
    if (step === 1) {
      isValid = validateStep1();
      if (isValid && userType === 'donor') {
        setStep(3); // Skip step 2 for donors
      } else if (isValid) {
        setStep(2);
      }
    } else if (step === 2) {
      isValid = validateStep2();
      if (isValid) {
        setStep(3);
      }
    } else if (step === 3) {
      isValid = validateStep3();
      if (isValid) {
        // Simulate sending OTP (in a real app, this would call the backend)
        setOtpSent(true);
        setStep(4);
      }
    }
  };

  const prevStep = () => {
    if (step === 3 && userType === 'donor') {
      setStep(1);
    } else if (step > 1) {
      setStep(step - 1);
    }
  };

  const sendOtp = () => {
    console.log('OTP would be sent to', formData.email, formData.phone);
    // In a real application, this would make an API call to send OTPs
    setOtpSent(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (step === 4) {
      if (validateStep4()) {
        // This would normally call the API to verify OTPs and create account
        console.log('Registration form submitted:', {
          ...formData,
          userType
        });
        alert('Registration successful! You can now login.');
        // Reset form and redirect to login
      }
    } else {
      nextStep();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const renderStep1 = () => (
    <>
      {userType === 'donor' ? (
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.formLabel}>Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? `${styles.formInput} ${styles.inputError}` : styles.formInput}
            placeholder="Enter your full name"
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>
      ) : (
        <div className={styles.formGroup}>
          <label htmlFor="ngoName" className={styles.formLabel}>NGO Name</label>
          <input
            type="text"
            id="ngoName"
            name="ngoName"
            value={formData.ngoName}
            onChange={handleChange}
            className={errors.ngoName ? `${styles.formInput} ${styles.inputError}` : styles.formInput}
            placeholder="Enter NGO name"
          />
          {errors.ngoName && <span className={styles.errorText}>{errors.ngoName}</span>}
        </div>
      )}
      
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
        <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? `${styles.formInput} ${styles.inputError}` : styles.formInput}
          placeholder="Enter your phone number"
        />
        {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
      </div>
    </>
  );

  const renderStep2 = () => (
    <>
      <div className={styles.formGroup}>
        <label htmlFor="address" className={styles.formLabel}>Address</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className={errors.address ? `${styles.formTextarea} ${styles.inputError}` : styles.formTextarea}
          placeholder="Enter NGO address"
          rows="3"
        />
        {errors.address && <span className={styles.errorText}>{errors.address}</span>}
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Categories of Accepted Donations</label>
        <div className={styles.categoriesContainer}>
          {donationCategories.map(category => (
            <div key={category} className={styles.categoryCheckbox}>
              <input
                type="checkbox"
                id={`category-${category}`}
                name="categories"
                value={category}
                checked={formData.categories.includes(category)}
                onChange={handleChange}
              />
              <label htmlFor={`category-${category}`}>{category}</label>
            </div>
          ))}
        </div>
        {errors.categories && <span className={styles.errorText}>{errors.categories}</span>}
      </div>
    </>
  );

  const renderStep3 = () => (
    <>
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
            placeholder="Create a password"
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
      
      <div className={styles.formGroup}>
        <label htmlFor="confirmPassword" className={styles.formLabel}>Confirm Password</label>
        <div className={styles.passwordInputContainer}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? `${styles.formInput} ${styles.inputError}` : styles.formInput}
            placeholder="Confirm your password"
          />
          <button 
            type="button"
            className={styles.passwordToggle}
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {errors.confirmPassword && <span className={styles.errorText}>{errors.confirmPassword}</span>}
      </div>
    </>
  );

  const renderStep4 = () => (
    <>
      <div className={styles.otpInfo}>
        <p>We've sent verification codes to your email and phone.</p>
        {!otpSent && (
          <button type="button" className={styles.resendOtpButton} onClick={sendOtp}>
            Send OTP
          </button>
        )}
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="emailOtp" className={styles.formLabel}>Email Verification Code</label>
        <input
          type="text"
          id="emailOtp"
          value={emailOtp}
          onChange={(e) => setEmailOtp(e.target.value)}
          className={errors.emailOtp ? `${styles.formInput} ${styles.inputError}` : styles.formInput}
          placeholder="Enter 6-digit code"
          maxLength="6"
        />
        {errors.emailOtp && <span className={styles.errorText}>{errors.emailOtp}</span>}
        {otpSent && (
          <button type="button" className={styles.resendOtpButton} onClick={sendOtp}>
            Resend Code
          </button>
        )}
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="phoneOtp" className={styles.formLabel}>Phone Verification Code</label>
        <input
          type="text"
          id="phoneOtp"
          value={phoneOtp}
          onChange={(e) => setPhoneOtp(e.target.value)}
          className={errors.phoneOtp ? `${styles.formInput} ${styles.inputError}` : styles.formInput}
          placeholder="Enter 6-digit code"
          maxLength="6"
        />
        {errors.phoneOtp && <span className={styles.errorText}>{errors.phoneOtp}</span>}
        {otpSent && (
          <button type="button" className={styles.resendOtpButton} onClick={sendOtp}>
            Resend Code
          </button>
        )}
      </div>
    </>
  );

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupCard}>
        <h2 className={styles.signupTitle}>Create Account</h2>
        <p className={styles.signupSubtitle}>Join our donation platform</p>
        
        <div className={styles.userTypeSelector}>
          <button
            type="button"
            className={`${styles.userTypeButton} ${userType === 'donor' ? styles.activeUserType : ''}`}
            onClick={() => toggleUserType('donor')}
          >
            Donor
          </button>
          <button
            type="button"
            className={`${styles.userTypeButton} ${userType === 'ngo' ? styles.activeUserType : ''}`}
            onClick={() => toggleUserType('ngo')}
          >
            NGO
          </button>
        </div>
        
        <div className={styles.stepIndicator}>
          <div className={`${styles.step} ${step >= 1 ? styles.activeStep : ''}`}>1</div>
          {userType === 'ngo' && (
            <div className={`${styles.step} ${step >= 2 ? styles.activeStep : ''}`}>2</div>
          )}
          <div className={`${styles.step} ${step >= 3 ? styles.activeStep : ''}`}>
            {userType === 'donor' ? '2' : '3'}
          </div>
          <div className={`${styles.step} ${step >= 4 ? styles.activeStep : ''}`}>
            {userType === 'donor' ? '3' : '4'}
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.signupForm}>
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}
          
          <div className={styles.formNavigation}>
            {step > 1 && (
              <button type="button" onClick={prevStep} className={styles.backButton}>
                Back
              </button>
            )}
            
            <button
              type={step === 4 ? "submit" : "button"}
              onClick={step === 4 ? undefined : nextStep}
              className={styles.nextButton}
            >
              {step === 4 ? "Complete Registration" : "Next"}
            </button>
          </div>
        </form>
        
        <div className={styles.loginContainer}>
          <p>
            Already have an account?{' '}
            <Link to="/login" className={styles.loginLink}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;