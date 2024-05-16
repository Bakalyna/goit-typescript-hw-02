import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const API_KEY = 'u2fui_M-UnADngg8coI02NQJPjyeH3l1BNX8oxfw4jQ';
const ENDPOINT = 'search/photos';

const fetchImg = async (query:string, currentPage:number) => {
  const response = await axios.get(ENDPOINT, {
    params: {
      client_id: API_KEY,
      query: query,
      per_page: 15,
      page: currentPage,
      orientation: 'landscape',
    },
  });
  return response.data;
};
export default fetchImg;
