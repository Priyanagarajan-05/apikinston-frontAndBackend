/*
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [passwordHash, setPasswordHash] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5295/api/Auth/login', {
        email: email,
        password: passwordHash, 
      });

      localStorage.setItem('token', response.data.token);
      navigate('/courses');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleCreateAccount = () => {
    navigate('/create-account'); // Navigate to Register.js
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
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
      cursor: 'pointer',
    },
    createAccountButton: {
      marginTop: '20px',
      width: '100%',
      padding: '10px',
      backgroundColor: '#008CBA',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    errorText: {
      color: 'red',
      fontWeight: 'bold',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        {error && <p style={styles.errorText}>{error}</p>}
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
      <button onClick={handleCreateAccount} style={styles.createAccountButton}>
        Create New Account
      </button>
    </div>
  );
};

export default Login;

*/


/* -- not working ---
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [passwordHash, setPasswordHash] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5295/api/Auth/login', {
        email: email,
        password: passwordHash,
      });

      // Store the token and user role
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role); // Save user role

      // Redirect based on the user role
      if (response.data.role === 'Admin') {
        navigate('/admin-dashboard');
      } else if (response.data.role === 'Professor') {
        navigate('/professor-dashboard');
      } else {
        navigate('/student-dashboard');
      }
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleCreateAccount = () => {
    navigate('/create-account'); // Navigate to Register.js
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
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
      cursor: 'pointer',
    },
    createAccountButton: {
      marginTop: '20px',
      width: '100%',
      padding: '10px',
      backgroundColor: '#008CBA',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    errorText: {
      color: 'red',
      fontWeight: 'bold',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        {error && <p style={styles.errorText}>{error}</p>}
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
      <button onClick={handleCreateAccount} style={styles.createAccountButton}>
        Create New Account
      </button>
    </div>
  );
};

export default Login;
*/


/* -- working --


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5295/api/Auth/login', {
                email,
                password
            });

            const { token, role, username } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('username', username);

            if (role === 'Admin') {
                navigate('/admin-dashboard');
            } else if (role === 'Professor') {
                navigate('/professor-dashboard');
            } else {
                navigate('/student-dashboard');
            }
        } catch (err) {
            setError('Invalid credentials or your account has not been approved.');
        }
    };

    const handleCreateAccount = () => {
        navigate('/register');
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div style={{ marginTop: '10px' }}>
                <p>Don't have an account?</p>
                <button onClick={handleCreateAccount}>Create New Account</button>
            </div>
        </div>
    );
};

export default Login;
*/



/*
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5295/api/Auth/login', {
                email,
                password,
            });

            const { token, role, username } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('username', username);

            if (role === 'Admin') {
                navigate('/admin-dashboard');
            } else if (role === 'Professor') {
                navigate('/professor-dashboard');
            } else {
                navigate('/student-dashboard');
            }
        } catch (err) {
            setError('Invalid credentials or your account has not been approved.');
        }
    };

    const handleCreateAccount = () => {
        navigate('/register');
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Login</h2>
            <form onSubmit={handleLogin} style={styles.form}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>
                    Login
                </button>
            </form>
            {error && <p style={styles.error}>{error}</p>}
            <div style={styles.createAccountContainer}>
                <p>Don't have an account?</p>
                <button onClick={handleCreateAccount} style={styles.createAccountButton}>
                    Create New Account
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        padding: '20px',
    },
    heading: {
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
    },
    input: {
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        marginTop: '10px',
    },
    createAccountContainer: {
        marginTop: '10px',
        textAlign: 'center',
    },
    createAccountButton: {
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    },
};

export default Login;
*/




/*
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5295/api/Auth/login', {
                email,
                password,
            });

            const { token, role, username } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('username', username);

            if (role === 'Admin') {
                navigate('/admin-dashboard');
            } else if (role === 'Professor') {
                navigate('/professor-dashboard');
            } else {
                navigate('/student-dashboard');
            }
        } catch (err) {
            setError('Invalid credentials or your account has not been approved.');
        }
    };

    const handleCreateAccount = () => {
        navigate('/register');
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Login</h2>
                <form onSubmit={handleLogin} style={styles.form}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>
                        Login
                    </button>
                </form>
                {error && <p style={styles.error}>{error}</p>}
                <div style={styles.createAccountContainer}>
                    <p>Don't have an account?</p>
                    <button onClick={handleCreateAccount} style={styles.createAccountButton}>
                        Create New Account
                    </button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f7f7f7',
        padding: '20px',
    },
    card: {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center',
    },
    heading: {
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        padding: '12px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
    },
    button: {
        padding: '12px',
        marginTop: '10px',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
    },
    error: {
        color: 'red',
        marginTop: '10px',
    },
    createAccountContainer: {
        marginTop: '20px',
    },
    createAccountButton: {
        padding: '12px',
        borderRadius: '5px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default Login;
*/

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5295/api/Auth/login', {
                email,
                password,
            });

            const { token, role, username } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('username', username);

            if (role === 'Admin') {
                navigate('/admin-dashboard');
            } else if (role === 'Professor') {
                navigate('/professor-dashboard');
            } else {
                navigate('/student-dashboard');
            }
        } catch (err) {
            setError('Invalid credentials or your account has not been approved.');
        }
    };

    const handleCreateAccount = () => {
        navigate('/register');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.universityTitle}>Kiston ELearning University</h1>
            <div style={styles.card}>
                <h2 style={styles.heading}>Login</h2>
                <form onSubmit={handleLogin} style={styles.form}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>
                        Login
                    </button>
                </form>
                {error && <p style={styles.error}>{error}</p>}
                <div style={styles.createAccountContainer}>
                    <p>Don't have an account?</p>
                    <button onClick={handleCreateAccount} style={styles.createAccountButton}>
                        Create New Account
                    </button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f7f7f7',
        padding: '20px',
    },
    universityTitle: {
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '20px',
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center',
    },
    heading: {
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        padding: '12px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
    },
    button: {
        padding: '12px',
        marginTop: '10px',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
    },
    error: {
        color: 'red',
        marginTop: '10px',
    },
    createAccountContainer: {
        marginTop: '20px',
    },
    createAccountButton: {
        padding: '12px',
        borderRadius: '5px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default Login;
