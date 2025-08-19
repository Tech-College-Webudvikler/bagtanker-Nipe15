import { useEffect, useState } from "react";

function Nyheder() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("http://localhost:3306/api/news"); 
        const data = await res.json();
        setNews(data);
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">News</h1>
      {loading ? (
        <p>Loading...</p>
      ) : news.length > 0 ? (
        <ul className="space-y-4">
          {news.map((item) => (
            <li key={item.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No news found.</p>
      )}
    </div>
  );
}

export default Nyheder;