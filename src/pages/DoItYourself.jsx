import React, { useState } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import { DIY_RECIPES, DIYRecipeCard } from '../components/DIYRecipes';

const DIY_CATEGORIES = [
  "Massage Oils",
  "Bath Bombs",
  "Candles",
  "Home Cleaning",
  "Skin Care",
  "Hair Care",
  "Diffusion",
  "Body Care",
];

function DoItYourself() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  // Filter recipes by category and search (by name or ingredient)
  const recipes = (selectedCategory
    ? DIY_RECIPES.filter(r => r.category === selectedCategory)
    : DIY_RECIPES
  ).filter(recipe => {
    const searchLower = search.toLowerCase();
    // Search by recipe title
    const inTitle = recipe.title.toLowerCase().includes(searchLower);
    // Search by ingredient name
    const inIngredients = recipe.ingredients.some(ing =>
      ing.name.toLowerCase().includes(searchLower)
    );
    return inTitle || inIngredients;
  });

  const handleAddToCart = (ingredients) => {
    setCart(prevCart => [
      ...prevCart,
      ...ingredients.map(ing => ing.shopItem)
    ]);
    alert(
      "Added to cart:\n" +
      ingredients.map(ing => `• ${ing.shopItem.name} (${ing.amount})`).join('\n')
    );
  };

  return (
    <div className="page-container" style={{ maxWidth: '950px', margin: '0 auto' }}>
      <div className="step-card" style={{ padding: '30px', position: 'relative' }}>
        <h2 style={{ color: '#b8860b', marginBottom: 8 }}>Do It Yourself (DIY)</h2>
        <p style={{ marginBottom: 24 }}>
          Learn to create your own natural products and remedies at home. Browse by category:
        </p>

        {/* Search Bar */}
        <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
          <input
            type="text"
            placeholder="Search by recipe name or essential oil..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              flex: 1,
              padding: '10px 16px',
              borderRadius: 8,
              border: '1.5px solid #ffe066',
              fontSize: '1rem',
              outline: 'none',
              background: '#fffbe6',
              color: '#b8860b',
              boxShadow: '0 2px 8px rgba(255, 215, 0, 0.04)'
            }}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              style={{
                background: '#ffe066',
                color: '#b8860b',
                border: 'none',
                borderRadius: 8,
                padding: '8px 16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Clear
            </button>
          )}
        </div>

        <div style={{ marginBottom: 32, display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <button
            onClick={() => setSelectedCategory(null)}
            className={selectedCategory === null ? 'category-btn active' : 'category-btn'}
            style={{
              margin: 0,
              padding: '8px 18px',
              borderRadius: 8,
              border: selectedCategory === null ? '2px solid #b8860b' : '1px solid #ffe066',
              background: selectedCategory === null ? '#fffbe6' : '#fff',
              color: '#b8860b',
              fontWeight: selectedCategory === null ? 'bold' : 'normal',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            All
          </button>
          {DIY_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cat === selectedCategory ? 'category-btn active' : 'category-btn'}
              style={{
                margin: 0,
                padding: '8px 18px',
                borderRadius: 8,
                border: cat === selectedCategory ? '2px solid #b8860b' : '1px solid #ffe066',
                background: cat === selectedCategory ? '#fffbe6' : '#fff',
                color: '#b8860b',
                fontWeight: cat === selectedCategory ? 'bold' : 'normal',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {recipes.length === 0 && (
          <div style={{ color: '#b8860b', fontStyle: 'italic', margin: '32px 0' }}>
            No recipes available for this category yet.
          </div>
        )}

        <div className="recipes-container">
          {recipes.map(recipe => (
            <DIYRecipeCard
              key={recipe.title}
              recipe={recipe}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <ScrollToTop/>
    </div>
  );
}

export default DoItYourself;
