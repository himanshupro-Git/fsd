import { useEffect, useState } from 'react';
import NewsCard from './components/NewsCard';

function App() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("tesla");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&from=2026-02-20&sortBy=publishedAt&apiKey=1219b238c82e4492b629be93924cacd6`
      );
      
      const data = await res.json();
      setSearch(search);
      setNews(data.articles);
      setLoading(false);
    } catch (err) {
      setError("Failed to load news");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <>
      <div>Fetching APIs</div>
      <></>
      <div className="news-container">
        {news.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </>
  );
}

export default App;