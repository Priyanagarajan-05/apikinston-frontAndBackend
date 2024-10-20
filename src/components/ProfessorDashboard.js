/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfessorDashboard = () => {
    const username = localStorage.getItem('username');
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [modules, setModules] = useState([{ name: '', content: '' }]);
    const [courseCreated, setCourseCreated] = useState(false); // Flag to know if the course is created
    const [currentModuleIndex, setCurrentModuleIndex] = useState(0); // For module navigation

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/');
    };

    const handleAddModule = () => {
        setModules([...modules, { name: '', content: '' }]);
    };

    const handleModuleChange = (index, field, value) => {
        const updatedModules = modules.map((module, idx) =>
            idx === index ? { ...module, [field]: value } : module
        );
        setModules(updatedModules);
    };

    const handleCreateCourse = async () => {
        try {
            const course = {
                title,
                description,
                startDate,
                endDate,
                professorId: username,
                modules,
            };

            await axios.post('http://localhost:5295/api/Courses', course);
            setCourseCreated(true); // Set flag to true after course creation
            alert('Course created successfully!');
        } catch (error) {
            console.error('Error creating course:', error);
        }
    };

    const handleNextModule = () => {
        if (currentModuleIndex < modules.length - 1) {
            setCurrentModuleIndex(currentModuleIndex + 1);
        }
    };

    const handlePreviousModule = () => {
        if (currentModuleIndex > 0) {
            setCurrentModuleIndex(currentModuleIndex - 1);
        }
    };

    return (
        <div>
            <h2>Professor Dashboard</h2>
            <p>Welcome, {username}</p>
            <button onClick={handleLogout}>Logout</button>

            {!courseCreated ? (
                <div>
                    <h3>Create a Course</h3>
                    <div>
                        <label>Course Title:</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label>Description:</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <label>Start Date:</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                        <label>End Date:</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                        <h4>Modules</h4>
                        {modules.map((module, index) => (
                            <div key={index}>
                                <label>Module Name:</label>
                                <input
                                    type="text"
                                    value={module.name}
                                    onChange={(e) =>
                                        handleModuleChange(index, 'name', e.target.value)
                                    }
                                />
                                <label>Module Content:</label>
                                <textarea
                                    value={module.content}
                                    onChange={(e) =>
                                        handleModuleChange(index, 'content', e.target.value)
                                    }
                                ></textarea>
                            </div>
                        ))}
                        <button onClick={handleAddModule}>Add Module</button>
                        <button onClick={handleCreateCourse}>Create Course</button>
                    </div>
                </div>
            ) : (
                <div>
                    <h3>Course Created! Navigate Modules</h3>
                    {modules.length > 0 && (
                        <div>
                            <h4>Module: {modules[currentModuleIndex].name}</h4>
                            <p>{modules[currentModuleIndex].content}</p>
                            <button
                                onClick={handlePreviousModule}
                                disabled={currentModuleIndex === 0}
                            >
                                Previous
                            </button>
                            <button
                                onClick={handleNextModule}
                                disabled={currentModuleIndex === modules.length - 1}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProfessorDashboard;
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfessorDashboard = () => {
    const username = localStorage.getItem('username');
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [modules, setModules] = useState([{ name: '', content: '' }]);
    const [courseCreated, setCourseCreated] = useState(false); // Flag to know if the course is created
    const [currentModuleIndex, setCurrentModuleIndex] = useState(0); // For module navigation

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/');
    };

    const handleAddModule = () => {
        setModules([...modules, { name: '', content: '' }]);
    };

    const handleModuleChange = (index, field, value) => {
        const updatedModules = modules.map((module, idx) =>
            idx === index ? { ...module, [field]: value } : module
        );
        setModules(updatedModules);
    };

    const handleCreateCourse = async () => {
        try {
            const course = {
                title,
                description,
                startDate,
                endDate,
                professorId: username,
                modules,
            };

            await axios.post('http://localhost:5295/api/Courses', course);
            setCourseCreated(true); // Set flag to true after course creation
            alert('Course created successfully!');
        } catch (error) {
            console.error('Error creating course:', error);
        }
    };

    const handleNextModule = () => {
        if (currentModuleIndex < modules.length - 1) {
            setCurrentModuleIndex(currentModuleIndex + 1);
        }
    };

    const handlePreviousModule = () => {
        if (currentModuleIndex > 0) {
            setCurrentModuleIndex(currentModuleIndex - 1);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Professor Dashboard</h2>
            <p style={styles.welcomeMessage}>Welcome, {username}</p>
            <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>

            {!courseCreated ? (
                <div>
                    <h3 style={styles.subHeading}>Create a Course</h3>
                    <div style={styles.courseForm}>
                        <label style={styles.label}>Course Title:</label>
                        <input
                            style={styles.input}
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label style={styles.label}>Description:</label>
                        <textarea
                            style={styles.textArea}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <label style={styles.label}>Start Date:</label>
                        <input
                            style={styles.input}
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                        <label style={styles.label}>End Date:</label>
                        <input
                            style={styles.input}
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                        <h4 style={styles.subHeading}>Modules</h4>
                        {modules.map((module, index) => (
                            <div key={index}>
                                <label style={styles.label}>Module Name:</label>
                                <input
                                    style={styles.input}
                                    type="text"
                                    value={module.name}
                                    onChange={(e) =>
                                        handleModuleChange(index, 'name', e.target.value)
                                    }
                                />
                                <label style={styles.label}>Module Content:</label>
                                <textarea
                                    style={styles.textArea}
                                    value={module.content}
                                    onChange={(e) =>
                                        handleModuleChange(index, 'content', e.target.value)
                                    }
                                ></textarea>
                            </div>
                        ))}
                        <button style={styles.addButton} onClick={handleAddModule}>Add Module</button>
                        <button style={styles.createButton} onClick={handleCreateCourse}>Create Course</button>
                    </div>
                </div>
            ) : (
                <div>
                    <h3 style={styles.subHeading}>Course Created! Navigate Modules</h3>
                    {modules.length > 0 && (
                        <div>
                            <h4 style={styles.moduleHeading}>Module: {modules[currentModuleIndex].name}</h4>
                            <p>{modules[currentModuleIndex].content}</p>
                            <button
                                style={styles.navButton}
                                onClick={handlePreviousModule}
                                disabled={currentModuleIndex === 0}
                            >
                                Previous
                            </button>
                            <button
                                style={styles.navButton}
                                onClick={handleNextModule}
                                disabled={currentModuleIndex === modules.length - 1}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
    },
    heading: {
        fontSize: '24px',
        color: '#333',
    },
    subHeading: {
        fontSize: '20px',
        color: '#555',
    },
    welcomeMessage: {
        fontSize: '18px',
        color: '#777',
    },
    logoutButton: {
        margin: '10px 0',
        padding: '8px 16px',
        backgroundColor: '#d9534f',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
    },
    courseForm: {
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    label: {
        display: 'block',
        margin: '10px 0 5px',
        fontSize: '16px',
    },
    input: {
        width: '100%',
        padding: '8px',
        margin: '5px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    textArea: {
        width: '100%',
        padding: '10px',
        margin: '5px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
        minHeight: '80px',
    },
    addButton: {
        marginTop: '10px',
        padding: '8px 16px',
        backgroundColor: '#5bc0de',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
    },
    createButton: {
        marginTop: '10px',
        padding: '10px 20px',
        backgroundColor: '#5cb85c',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
    },
    moduleHeading: {
        fontSize: '18px',
        color: '#333',
    },
    navButton: {
        margin: '10px 5px',
        padding: '8px 16px',
        backgroundColor: '#0275d8',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
    },
};

export default ProfessorDashboard;
