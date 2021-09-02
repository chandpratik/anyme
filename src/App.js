import './App.css';
import CardList from './components/CardList';
import Header from './components/Header/Header';

import useFetch from './hooks/useFetch';

function App() {
  const { response: upcoming, loading: upcomingLoading } = useFetch(
    'https://api.jikan.moe/v3/top/anime/1/upcoming'
  );
  const { response: airing, loading: airingLoading } = useFetch(
    'https://api.jikan.moe/v3/top/anime/1/airing'
  );
  const { response: allTime, loading: allTimeLoading } = useFetch(
    'https://api.jikan.moe/v3/top/anime/1/tv'
  );
  const { response: movies, loading: moviesLoading } = useFetch(
    'https://api.jikan.moe/v3/top/anime/1/movie'
  );
  return (
    <>
      <Header />
      <CardList
        cardListTitle="POPULAR THIS SEASON"
        response={airing}
        loading={airingLoading}
      />
      <CardList
        cardListTitle="POPULAR UPCOMING"
        response={upcoming}
        loading={upcomingLoading}
      />
      <CardList
        cardListTitle="ALL TIME POPULAR"
        response={allTime}
        loading={allTimeLoading}
      />
      <CardList
        cardListTitle="ALL TIME POPULAR MOVIES"
        response={movies}
        loading={moviesLoading}
      />
    </>
  );
}

export default App;
