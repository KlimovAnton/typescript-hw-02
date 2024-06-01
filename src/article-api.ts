import axios from 'axios';
import { Images } from './types';

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
const KEY = "Rzjb11MIGphoB4QB6Wt31UHKUWjReCwwYsGe250Sv4k";

export const fetchArticles = async (
    query: string, 
    page: number
        ): Promise<[Images]> => {
            const response = await axios.get("", {
                params: {
                    query,
                    page,
                    per_page: 10,
                    client_id: KEY,
                }
            })

            return response.data.results;
        }

