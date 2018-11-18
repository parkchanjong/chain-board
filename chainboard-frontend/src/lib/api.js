import axios from 'axios';
import queryString from 'query-string';


export const list = () => axios.get(`/url/?${queryString.stringify()}`);