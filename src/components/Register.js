/*
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordHash, setPasswordHash] = useState('');
  const [role, setRole] = useState('Student');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5295/api/Auth/register', {
        name: name,
        email: email,
        passwordHash: passwordHash,
        role: role,
      });

      setSuccess('Registration successful! Awaiting admin approval.');
      setError('');

      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      setError('Registration failed. Please try again.');
      setSuccess('');
    }
  };

  // Internal CSS styles
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    inputField: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '10px',
    },
    errorText: {
      color: 'red',
      fontWeight: 'bold',
      marginTop: '10px',
    },
    successText: {
      color: 'green',
      fontWeight: 'bold',
      marginTop: '10px',
    },
    label: {
      display: 'block',
      textAlign: 'left',
      marginBottom: '5px',
    },
    title: {
      marginBottom: '20px',
      fontSize: '24px',
    },
    selectField: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      marginBottom: '10px',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            style={styles.inputField}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            style={styles.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            style={styles.inputField}
            value={passwordHash}
            onChange={(e) => setPasswordHash(e.target.value)}
            required
          />
        </div>
        <div>
          <label style={styles.label}>Role:</label>
          <select style={styles.selectField} value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
            <option value="Professor">Professor</option>
          </select>
        </div>
        {error && <p style={styles.errorText}>{error}</p>}
        {success && <p style={styles.successText}>{success}</p>}
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

export default Register;
*/

/* -- t1 --
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordHash, setPasswordHash] = useState('');
  const [role, setRole] = useState('Student');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Post request to the backend API
      await axios.post('http://localhost:5295/api/Auth/register', {
        name: name,
        email: email,
        passwordHash: passwordHash,
        role: role,
      });

      // On success
      setSuccess('Registration successful! Awaiting admin approval.');
      setError('');

      // Navigate to the homepage after 2 seconds
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      // Log the error details for better debugging
      if (err.response) {
        console.error('Error response:', err.response.data);
        console.error('Status:', err.response.status);
        console.error('Headers:', err.response.headers);

        // Extract the error messages from the response
        const errorMessages = err.response.data.errors 
          ? Object.values(err.response.data.errors).flat().join(' ') 
          : 'Registration failed. Please try again.';
        setError(errorMessages);
      } else {
        // General error message for other cases
        setError('Network error occurred. Please try again later.');
      }
      setSuccess('');
    }
  };

  // Inline CSS styling
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
    },
    inputField: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
    },
    errorText: {
      color: 'red',
      fontWeight: 'bold',
      marginTop: '10px',
    },
    successText: {
      color: 'green',
      fontWeight: 'bold',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.inputField}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.inputField}
        />
        <input
          type="password"
          placeholder="Password"
          value={passwordHash}
          onChange={(e) => setPasswordHash(e.target.value)}
          required
          style={styles.inputField}
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={styles.inputField}
        >
          <option value="Student">Student</option>
          <option value="Admin">Admin</option>
          <option value="Professor">Professor</option>
        </select>
        {error && <p style={styles.errorText}>{error}</p>}
        {success && <p style={styles.successText}>{success}</p>}
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
*/

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordHash, setPasswordHash] = useState('');
  const [role, setRole] = useState('Student');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Determine isActive based on the role
    const isActive = role === 'Admin' ? true : false;

    try {
      // Post request to the backend API
      await axios.post('http://localhost:5295/api/Auth/register', {
        name: name,
        email: email,
        passwordHash: passwordHash,
        role: role,
        isActive: isActive, // Adding the isActive field
      });

      // On success
      setSuccess('Registration successful! Awaiting admin approval.');
      setError('');

      // Navigate to the homepage after 2 seconds
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      // Log the error details for better debugging
      if (err.response) {
        console.error('Error response:', err.response.data);
        console.error('Status:', err.response.status);
        console.error('Headers:', err.response.headers);

        // Extract the error messages from the response
        const errorMessages = err.response.data.errors 
          ? Object.values(err.response.data.errors).flat().join(' ') 
          : 'Registration failed. Please try again.';
        setError(errorMessages);
      } else {
        // General error message for other cases
        setError('Network error occurred. Please try again later.');
      }
      setSuccess('');
    }
  };

  // Inline CSS styling
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
    },
    inputField: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
    },
    errorText: {
      color: 'red',
      fontWeight: 'bold',
      marginTop: '10px',
    },
    successText: {
      color: 'green',
      fontWeight: 'bold',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.inputField}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.inputField}
        />
        <input
          type="password"
          placeholder="Password"
          value={passwordHash}
          onChange={(e) => setPasswordHash(e.target.value)}
          required
          style={styles.inputField}
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={styles.inputField}
        >
          <option value="Student">Student</option>
         
          <option value="Professor">Professor</option>
        </select>
        {error && <p style={styles.errorText}>{error}</p>}
        {success && <p style={styles.successText}>{success}</p>}
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
