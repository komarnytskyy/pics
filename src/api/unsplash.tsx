import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID UPsDD0ZO_4eD4eMRYHcNYWHoPNRjKioNn_VAqblHHKI'
  }
})
