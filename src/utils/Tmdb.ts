
const API_BASE: string = 'https://api.themoviedb.org/3';
const API_KEY: string = import.meta.env.VITE_REACT_API_KEY;

const fetchData = async (endpoint: string) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}
interface IHomeItem {
  slug: string,
  title: string,
  items: Awaited<ReturnType<typeof fetchData>>
}

export async function getHomeList(): Promise<IHomeItem[]> {
  return [
    {
      slug: 'originals',
      title: 'Netflix Originals',
      items: await fetchData(`/discover/tv?with_network=213&api_key=${API_KEY}&language=en-US`)
    },
    {
      slug: 'trending',
      title: 'Trending now',
      items: await fetchData(`/trending/all/week?&api_key=${API_KEY}&language=en-US`)
    },
    {
      slug: 'toprated',
      title: 'Top rated',
      items: await fetchData(`/movie/top_rated?&api_key=${API_KEY}&language=en-US`)
    },
    {
      slug: 'action',
      title: 'Action',
      items: await fetchData(`/discover/movie?with_genres=28&api_key=${API_KEY}&language=en-US`)
    },
    {
      slug: 'comedy',
      title: 'Comedy',
      items: await fetchData(`/discover/movie?with_genres=35&api_key=${API_KEY}&language=en-US`)
    },
    {
      slug: 'thriller',
      title: 'Thriller',
      items: await fetchData(`/discover/movie?with_genres=27&api_key=${API_KEY}&language=en-US`)
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await fetchData(`/discover/movie?with_genres=10749&api_key=${API_KEY}&language=en-US`)
    },
    {
      slug: 'documentaries',
      title: 'Documentaries',
      items: await fetchData(`/discover/movie?with_genres=99&api_key=${API_KEY}&language=en-US`)
    },
  ]
}

export async function getDetails(tv_id: number) {
  let details = await fetchData(`/tv/${tv_id}?api_key=${API_KEY}&language=en-US`)
  return details;
}

export async function getVideosDetails(tv_id: number) {
  let details = await fetchData(`/tv/${tv_id}?api_key=${API_KEY}&append_to_response=videos`)
  return details;
}
