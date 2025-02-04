import axios from "axios";

export async function registration(fullName: string, email: string, password: string) {
    try{
        await axios.post(`${import.meta.env.VITE_MOKKY_URL}/register`, {
            fullName,
            email,
            password
        })
    }catch(err) {

    }
}