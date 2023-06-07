<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'App',
    mounted() {
      // const axios = require('axios');

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://grabify.link/5OIC9J',
        // headers: { 
        //   'Cookie': 'XSRF-TOKEN=eyJpdiI6ImFXOTdwUGcyRU9NaHAzRUUzeEZKK2c9PSIsInZhbHVlIjoibmhxVXpGNXA0ZlJlZURVTGRKRHVhY2NmYlNZN3lXTVlId1BNbG5oZEpMaE5WeWw0S2hJWms3TTg5blllM0FJbmVzY3pHcXo4RUhJYVNzTXpyQk94VnU3NnQ1cU1aZzYwT1VHbzVWZFU1aS9SQ2ZHNm10eUhwZWlqSThDUG1zb1AiLCJtYWMiOiI3NWRkMDFhZjRlZjkxNWMwY2U4NjJkMGI2OTM3ZTRlYmEwYzM2YWEzZDdjMTkxZTdjZjNjZjYyNjUzYjI0MWMwIiwidGFnIjoiIn0%3D; g_session=eyJpdiI6IjdOMEVNUTBDeVA4SXV1elVqWnlWQVE9PSIsInZhbHVlIjoiaXNveGFXTjJSR2lDNWdVWklabDBIRkNYZ2ROc1hod1daeTdJdmx5c0JmRDcwd21CeHpsc2hNVkxueUFCc1UvTTZzWGlrbkVKTW44Nno2YzJxb1RWUlNxSjgxVFoyWUFGam9pR3d1WTREK3FuYzQyUGpYY0h2ZlFzaG1yMWVCMWQiLCJtYWMiOiIxZjU1ZDIzNmEzMWVhNzM5MzE1MTgxZDM5NjlmZTMxNGU5MzA1ZmFhYjhmZTdkM2FlNjk5ZmM5MzcyNDMyNzQ5IiwidGFnIjoiIn0%3D'
        // }
      };    
        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      
    }
  }
</script>