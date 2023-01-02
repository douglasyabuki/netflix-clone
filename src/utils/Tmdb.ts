
const API_BASE: string = 'https://api.themoviedb.org/3';
const API_KEY: string = import.meta.env.VITE_REACT_API_KEY;

const fetchData = async (endpoint: string) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default async function getHomeList() {
  return [
    {
      slug: 'originals',
      title: 'Netflix Originals',
      items: await fetchData(`/discover/tv?with_network=213&api_key=${API_KEY}`)
    },
    {
      slug: 'trending',
      title: 'Trending now',
      items: await fetchData(`/trending/all/week?&api_key=${API_KEY}`)
    },
    {
      slug: 'toprated',
      title: 'Top rated',
      items: await fetchData(`/movie/top_rated?&api_key=${API_KEY}`)
    },
    {
      slug: 'action',
      title: 'Action',
      items: await fetchData(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
    },
    {
      slug: 'comedy',
      title: 'Comedy',
      items: await fetchData(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
    },
    {
      slug: 'thriller',
      title: 'Thriller',
      items: await fetchData(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await fetchData(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
    },
    {
      slug: 'documentaries',
      title: 'Documentaries',
      items: await fetchData(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
    },
  ]
}
