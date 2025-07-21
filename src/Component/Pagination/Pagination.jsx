import { useEffect, useState } from "react";
import "./Pagination.css";

const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />
      <span>{title}</span>
    </div>
  );
};

const PAGE_SIZE = 10;

export default function Pagination() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products?limit=100");
      const json = await data.json();
      setProducts(json.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const goToPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < noOfPages) setCurrentPage(currentPage + 1);
  };

  return !products.length ? (
    <h1>No Page Found</h1>
  ) : (
    <div>
      <h2>Pagination</h2>

      <div className="pagination-buttons">
        <button onClick={goToPrev} disabled={currentPage === 1}>
          Prev
        </button>

        {[...Array(noOfPages).keys()].map((n) => (
          <span
            className={`page-number ${currentPage === n + 1 ? "active" : ""}`}
            key={n}
            onClick={() => setCurrentPage(n + 1)}
          >
            {n + 1}
          </span>
        ))}

        <button onClick={goToNext} disabled={currentPage === noOfPages}>
          Next
        </button>
      </div>

      <div className="products-container">
        {paginatedProducts.map((p) => (
          <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
    </div>
  );
}
