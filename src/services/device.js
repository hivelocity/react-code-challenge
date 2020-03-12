import axios from 'axios';

export const getDevices = async () => {
  try {
    const response = await axios.get('https://core.hivelocity.net/api/v2/device', {
      headers: [{
        'X-API-KEY': 'b4b63a0eea99007ed9089582eebe9c62f8e38c20',
      }]
    })
    
    if (response && response.data) return response.data;
  } catch (error) {
    console.log(error);
  }
}