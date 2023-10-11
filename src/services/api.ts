import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'http://192.168.0.109:5000/api';

interface LoginResponse {
    accessToken: {
        accessToken: {
            token: string;
            expiresIn: number;
        },
        refreshToken: string
    }
}



export const loginUser = async (email: string, password: string) => {
    try {
        const formData = JSON.stringify({
            email: email,
            password: password
        });
        console.log('formData:', formData);

        const response = await axios.post(`${API_BASE_URL}/Auth/login`, formData, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log('response', response);

        if (response.status >= 200 && response.status < 300) {
            return response.data
        } else {
            throw new Error(`Login error`)
        }
    }
    catch (error) {
        throw error;
    }
}

export const registrationUser = async (firstName: string, lastName: string, email: string, password: string, phone: string) => {
    try {
        const formData = JSON.stringify({
            firstName,
            lastName,
            email,
            password,
            phone: phone,
        })
        console.log('formData:', formData)
        const response: AxiosResponse = await axios.post(`${API_BASE_URL}/Auth/register`, formData, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log('response:', response);

        if (Math.trunc(response.status / 100) === 2) {
            return response.data
        } else {
            throw new Error('Registration error');
        }


    }
    catch (error: any) {
        console.error('Error', error.message);
    }
}

