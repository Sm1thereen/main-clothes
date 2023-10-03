import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const loginUser = async (email:string,password:string) => {
    try{
        const formData = JSON.stringify({
            email:email,
            password:password
        });
        console.log('formData:',formData);
       
        const response = await axios.post(`${API_BASE_URL}/Users/login`,formData,{
            headers:{
                'Content-Type': 'application/json',
            }
        });
        console.log('response',response);

        if(response.status >= 200 && response.status < 300){
            return response.data
        } else {
            throw new Error(`Login error`)
        }
    }
    catch(error){
        throw error;
    }
}

export const registrationUser = async(firstName:string,lastName:string,email:string,password:string,phone:string) => {
     try{
        const formData = JSON.stringify({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
            phone:phone,
        })
        console.log('formData:',formData)
        const response = await axios.post(`${API_BASE_URL}/Users/register`,formData,{
            headers:{
                'Content-Type': 'application/json',
            }
        });
        console.log('response',response);
        }
        catch(error:any){
            console.error('Error',error.message);
        }
}
