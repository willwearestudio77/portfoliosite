import {getHome} from './queries/home';

export async function fetchHome() {
    const response = await fetch('https://whale-app-up83z.ondigitalocean.app/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization:`Bearer ${process.env.API_KEY}`
        },
        body: JSON.stringify({
          query:getHome
        })
      });
    
      const { data } = await response.json();
    
      return data;
}