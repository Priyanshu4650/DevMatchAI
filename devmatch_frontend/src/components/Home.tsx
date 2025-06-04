import React from 'react';
import axios from 'axios';
// Note: If you want to use dynamic imports for axios, you can remove the above import and use the dynamic import in the function instead.
import config from '../config'; // 👈 import config

const Home: React.FC = () => {
    const handleTestApi = async () => {
        try {
            const response = await axios.get(`${config.API_BASE_URL}/test`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });

            alert('API Response: ' + JSON.stringify(response.data));
            const el = document.querySelector('.api-test');
            if (el) el.textContent = JSON.stringify(response.data);
            setTimeout(() => {
                if (el) el.textContent = '';
            }, 5000)
        } catch (error: any) {
            alert(
                'CORS Error: Ensure the backend at ' + config.API_BASE_URL +
                ' has CORS enabled. ' + (error.response?.data?.message || error.message)
            );
        }
    };

    return (
        <div>
            <h1>Welcome to DevMatchAI</h1>
            <p>This is the Home page.</p>
            <button onClick={handleTestApi}>Test API Endpoint</button>
            <p className="api-test"></p>
        </div>
    );
};

export default Home;
