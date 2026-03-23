
export default function NewsCard({ key, article }) {
    return (
        <>
            <div className="news-card">
                <div className="heading">
                    <h2>News Title: {article.title}</h2>
                    <h2>Author: {article.author}</h2>
                </div>
                <div className="content">
                    <p>{article.description}</p>
                </div>
            </div>
        </>
    );
}