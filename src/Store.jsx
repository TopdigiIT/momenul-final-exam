import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'Phone', image: "./phone.jpg", link: '/store:phone' },
  { name: 'Watch', image: "./watch.jpg", link: '/store:watch' },
  { name: 'Laptop', image: "./laptop.webp", link: '/store:laptop' },
];

export default function Store() {
  const navigate = useNavigate();

  return (
    <div className="category-container">
      {categories.map((category) => (
        <div key={category.name} className="category-card">
          <div className="image-container">
            <img
              src={category.image}
              alt={category.name}
              className="category-image"
              onError={(e) => e.target.src = '/images/default.jpg'} // Fallback image if image is not found
            />
          </div>
          <div className="category-name">{category.name}</div>
          <div className="category-button">
            <button
              className="go-button"
              onClick={() => navigate(category.link, { replace: true })}
            >
              Go to {category.name}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// Styles
const style = document.createElement('style');
style.innerHTML = `
  /* Container Style */
  .category-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 80px;
  }
  
  @media (min-width: 640px) {
    .category-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* Category Card Style */
  .category-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
  }

  .category-card:hover {
    transform: scale(1.05);
  }

  /* Image Container Style to center image */
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  /* Image Style */
  .category-image {
    width: 80%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
    border: 3px solid #ddd;
    border-radius: 8px;
  }

  .category-image:hover {
    animation: vibrate 0.3s ease-in-out;
  }

  /* Category Name Style */
  .category-name {
    padding: 16px;
    text-align: center;
    font-weight: 600;
    font-size: 1.25rem;
  }

  /* Centering the Button */
  .category-button {
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }

  /* Button Style */
  .go-button {
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .go-button:hover {
    background-color: #0056b3;
    transform: scale(1.1);
  }

  /* Vibrate Animation */
  @keyframes vibrate {
    0% { transform: translateX(0); }
    25% { transform: translateX(-4px); }
    50% { transform: translateX(4px); }
    75% { transform: translateX(-4px); }
    100% { transform: translateX(4px); }
  }
`;

document.head.appendChild(style);
