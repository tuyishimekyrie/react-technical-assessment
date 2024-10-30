import axios from "axios";


const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl)

export async function todos() {
  try {
        const res = await axios
            .get(`${apiUrl}/todos`);
        return res.data;
    } catch (error) {
        console.error("Error fetching todos:", error);
        throw error;
    }
}