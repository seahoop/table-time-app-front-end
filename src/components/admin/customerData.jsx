import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import customerData from '../../assets/customers';

const CustomerDatabase = () => {
    const [query, setQuery] = useState('');
    const [customers, setCustomers] = useState(customerData);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        const queryValue = e.target.value;
        setQuery(queryValue);

        if (queryValue) {
            const filteredCustomers = customerData.filter(customer =>
                customer.username.toLowerCase().includes(queryValue.toLowerCase())
            );
            setCustomers(filteredCustomers);
        } else {
            setCustomers(customerData); // Reset to original data if query is empty
        }
    };

    const handleViewProfile = (username) => {
        navigate(`/admin/adminPanel/customerProfile/${username}`);
    };

    const handleTerminate = (username) => {
        const updatedCustomers = customers.filter(customer => customer.username !== username);
        setCustomers(updatedCustomers);
        alert(`${username} has been terminated.`);
    };

    const handleBackClick = () => {
        navigate('/admin/adminPanel');
    };

    return (
        <>
            <section id="title">
                <h1>Table Time</h1>
            </section>

            <section id="welcome-Title">
                <h2>Welcome to Table Time Customer Database</h2>
            </section>

            <section id="search">
                <input 
                    type="text" 
                    placeholder="Search customers..." 
                    value={query} 
                    onChange={handleSearch} 
                />
            </section>

            <section id="customerList">
                <ul>
                    {customers.map(customer => (
                        <li key={customer.username}>
                            {customer.username}
                            <button onClick={() => handleViewProfile(customer.username)}>View Full Profile</button>
                            <button onClick={() => handleTerminate(customer.username)}>Terminate</button>
                        </li>
                    ))}
                </ul>
            </section>

            <section id="backToAdminPanel">
                <button onClick={handleBackClick} >
                    Back To Admin Panel
                </button>
            </section>
        </>
    );
}

export default CustomerDatabase;
