// this is a library that will help us make API calls
import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'

const options = {
  params: {
    bl_latitude: '11.847676',
    bl_longitude: '108.473209',
    tr_longitude: '109.149359',
    tr_latitude: '12.838442',
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '6cab679f86mshb98bac607296612p18c675jsn7f1e973f5ff9'
  }
};


export const getPlacesData = async () => {
    try {

        const { data: { data } } = await axios.get(URL, options);

        return data;
    }   catch (error) {
        // request 
        console.log(error);
    }
    
}