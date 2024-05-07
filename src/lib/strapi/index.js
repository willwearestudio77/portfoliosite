import {getHome,workQuery,slugQuery} from './queries/home';

export async function getWork(slug){
    const response = await fetch('https://whale-app-up83z.ondigitalocean.app/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization:`Bearer ${process.env.API_KEY}`
        },
        body: JSON.stringify({
          query:workQuery,
          variables: {
            filters: {
              slug:{
              eq:slug
              }
            }
          }
        })
      });
      
      const { data } = await response.json();
      return data;

}
export async function getWorkSlug(){
    const response = await fetch('https://whale-app-up83z.ondigitalocean.app/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization:`Bearer ${process.env.API_KEY}`
        },
        body: JSON.stringify({
          query:slugQuery
        })
      });
    
      const { data } = await response.json();
    
      return data;

}
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