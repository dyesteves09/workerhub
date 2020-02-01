import Axios from 'axios';
import { API_CONFIG } from '../configs/config';

export const getMessage = () => {
    return Axios.get(API_CONFIG.URL);
}
