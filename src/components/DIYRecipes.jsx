import React from "react";

export function DIYRecipeCard({ recipe, onAddToCart }) {
  return (
    <div
      className="collapsible-recipe"
      style={{
        background: "linear-gradient(135deg, #fffbe6 80%, #ffe066 100%)",
        border: "1.5px solid #e6c200",
        borderRadius: "18px",
        padding: "32px 28px",
        margin: "36px 0",
        boxShadow: "0 6px 24px rgba(184, 134, 11, 0.10)",
        maxWidth: 650,
        marginLeft: "auto",
        marginRight: "auto",
        transition: "box-shadow 0.2s",
      }}
    >
      <h3
        style={{
          color: "#b8860b",
          marginBottom: 8,
          fontSize: "1.55rem",
          fontWeight: 700,
          letterSpacing: "0.5px",
        }}
      >
        {recipe.title}
      </h3>
      <p style={{ marginBottom: 18, color: "#6b5b1e", fontSize: "1.08rem" }}>
        {recipe.description}
      </p>
      <div
        className="recipe-ingredients"
        style={{
          marginBottom: 22,
          background: "#fffde9",
          borderRadius: 10,
          padding: "18px 18px 10px 18px",
          border: "1px solid #ffe066",
        }}
      >
        <h4
          style={{
            marginBottom: 10,
            color: "#a88b2a",
            fontWeight: 600,
            fontSize: "1.13rem",
            letterSpacing: "0.2px",
          }}
        >
          🧪 Ingredients
        </h4>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {recipe.ingredients.map((ing, idx) => (
            <li
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 10,
                paddingBottom: 6,
                borderBottom:
                  idx !== recipe.ingredients.length - 1
                    ? "1px dashed #ffe066"
                    : "none",
              }}
            >
              <span
                style={{
                  fontWeight: 600,
                  color: "#b8860b",
                  minWidth: 90,
                  marginRight: 10,
                  fontSize: "1.05em",
                }}
              >
                {ing.amount}
              </span>
              <span style={{ flex: 1, color: "#6b5b1e" }}>{ing.name}</span>
              <span
                style={{
                  color: "#a88b2a",
                  fontSize: "0.98em",
                  marginLeft: 10,
                  fontStyle: "italic",
                  whiteSpace: "nowrap",
                }}
              >
                {ing.shopItem.name} – ${ing.shopItem.price.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="recipe-instructions"
        style={{
          marginBottom: 22,
          background: "#fdf6e3",
          borderRadius: 10,
          padding: "18px 18px 12px 18px",
          border: "1px solid #ffe066",
        }}
      >
        <h4
          style={{
            marginBottom: 10,
            color: "#a88b2a",
            fontWeight: 600,
            fontSize: "1.13rem",
            letterSpacing: "0.2px",
          }}
        >
          📋 Instructions
        </h4>
        <div
          style={{
            color: "#6b5b1e",
            fontSize: "1.07em",
            lineHeight: 1.7,
            paddingLeft: 2,
          }}
        >
          {recipe.instructions}
        </div>
      </div>
      <button
        onClick={() => onAddToCart(recipe.ingredients)}
        className="add-to-cart-btn"
        style={{
          background: "linear-gradient(90deg, #ffe066 60%, #fffbe6 100%)",
          color: "#b8860b",
          border: "none",
          borderRadius: 8,
          padding: "12px 28px",
          fontWeight: "bold",
          fontSize: "1.08em",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(255, 215, 0, 0.10)",
          transition: "background 0.2s, box-shadow 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = "#ffe066")}
        onMouseOut={(e) =>
          (e.currentTarget.style.background =
            "linear-gradient(90deg, #ffe066 60%, #fffbe6 100%)")
        }
      >
        🛒 Add Ingredients to Cart
      </button>
    </div>
  );
}

// DIYRecipes.jsx

export const DIY_RECIPES = [
  {
    category: "Skin Care",
    title: "Myrrh Diaper Rash Gel",
    description: "A gentle, soothing gel for diaper rash.",
    ingredients: [
      {
        name: "Aloe gel",
        amount: "4 tablespoons",
        shopItem: { name: "Aloe Gel", price: 6.99 },
      },
      {
        name: "Myrrh essential oil",
        amount: "8 drops",
        shopItem: { name: "Myrrh Essential Oil", price: 12.99 },
      },
      {
        name: "Lavender essential oil",
        amount: "8 drops",
        shopItem: { name: "Lavender Essential Oil", price: 9.99 },
      },
    ],
    instructions:
      "Mix ingredients well. Store in a jar with a tight-fitting lid.",
  },
  {
    category: "Hair Care",
    title: "Myrrh Coconut Oil Hair Treatment",
    description: "For dry hair and dandruff relief.",
    ingredients: [
      {
        name: "Coconut oil",
        amount: "2 tablespoons",
        shopItem: { name: "Coconut Oil", price: 5.99 },
      },
      {
        name: "Myrrh essential oil",
        amount: "4 drops",
        shopItem: { name: "Myrrh Essential Oil", price: 12.99 },
      },
    ],
    instructions:
      "For dry hair, use 2 tablespoons of coconut oil and 4 drops of myrrh to work through your hair before shampooing. To combat dandruff, massage your scalp with the mixture first.",
  },
  {
    category: "Home Cleaning",
    title: "Super Surface Cleaner",
    description: "A natural, effective cleaner for all surfaces.",
    ingredients: [
      { name: "Water", amount: "2 cups", shopItem: { name: "Water", price: 0.0 } },
      {
        name: "Castile soap",
        amount: "2 tablespoons",
        shopItem: { name: "Castile Soap", price: 7.99 },
      },
      {
        name: "Sandalwood essential oil",
        amount: "7 drops",
        shopItem: { name: "Sandalwood Essential Oil", price: 14.99 },
      },
      {
        name: "Lemon essential oil",
        amount: "7 drops",
        shopItem: { name: "Lemon Essential Oil", price: 8.99 },
      },
    ],
    instructions:
      "Combine all the ingredients in a spray bottle, then spray on surfaces and wipe off with a clean cloth.",
  },
  {
    category: "Candles",
    title: "Brighter Day Ginger Candles",
    description: "Makes 3 to 4 tealight candles with a bright, uplifting scent.",
    ingredients: [
      {
        name: "Blend of ginger, mandarin, and cedarwood (Virginia) essential oils",
        amount: "1 teaspoon",
        shopItem: { name: "Essential Oil Blend", price: 7.99 },
      },
      { name: "Beeswax", amount: "1 ounce", shopItem: { name: "Beeswax", price: 3.99 } },
      {
        name: "Coconut oil",
        amount: "1 teaspoon",
        shopItem: { name: "Coconut Oil", price: 5.99 },
      },
    ],
    instructions:
      "Melt the beeswax and coconut oil together in a double boiler. Remove from heat and stir in the essential oil blend. Pour into tealight molds and let cool completely before using.",
  },
  {
    category: "Diffusion",
    title: "Fresh Air Diffuser Blend",
    description: "A bright, uplifting blend for air and carpet deodorizing.",
    ingredients: [
      {
        name: "Mandarin essential oil",
        amount: "3 parts",
        shopItem: { name: "Mandarin Essential Oil", price: 8.99 },
      },
      {
        name: "Neroli essential oil",
        amount: "2 parts",
        shopItem: { name: "Neroli Essential Oil", price: 15.99 },
      },
      {
        name: "Ginger essential oil",
        amount: "1 part",
        shopItem: { name: "Ginger Essential Oil", price: 9.99 },
      },
    ],
    instructions:
      "To freshen the air in your home, diffuse 3 parts mandarin, 2 parts neroli, and 1 part ginger. This combination also works well as a carpet deodorizer.",
  },
  {
    category: "Bath Bombs",
    title: "Rosemary Warming Winter Bath",
    description: "A soothing, warming bath blend for winter relaxation.",
    ingredients: [
      { name: "Epsom or sea salt", amount: "2 cups", shopItem: { name: "Epsom Salt", price: 4.99 } },
      {
        name: "Carrier oil or blend",
        amount: "4 tablespoons",
        shopItem: { name: "Carrier Oil Blend", price: 6.99 },
      },
      {
        name: "Rosemary essential oil",
        amount: "5 drops",
        shopItem: { name: "Rosemary Essential Oil", price: 7.99 },
      },
      {
        name: "Marjoram essential oil",
        amount: "4 drops",
        shopItem: { name: "Marjoram Essential Oil", price: 8.99 },
      },
      {
        name: "Fir needle essential oil",
        amount: "3 drops",
        shopItem: { name: "Fir Needle Essential Oil", price: 9.99 },
      },
    ],
    instructions:
      "Place the salt in a glass or ceramic bowl. Combine the carrier and essential oils and add to the dry ingredients. Mix thoroughly.",
  },
  {
    category: "Skin Care",
    title: "Rosemary Circulation Massage Oil",
    description: "Helps ease discomfort of varicose veins and aids circulation.",
    ingredients: [
      {
        name: "Rosemary essential oil",
        amount: "6 or 7 drops",
        shopItem: { name: "Rosemary Essential Oil", price: 7.99 },
      },
      {
        name: "Carrier oil",
        amount: "1 tablespoon",
        shopItem: { name: "Carrier Oil", price: 6.99 },
      },
    ],
    instructions:
      "To ease the discomfort of varicose veins and aid circulation, use 6 or 7 drops of rosemary in a tablespoon of carrier oil for a massage. A drop or two of rosemary on a tissue is effective for reviving someone who has fainted.",
  },
  {
    category: "Skin Care",
    title: "Rosemary Stretch Mark & Oily Skin Remedy",
    description:
      "Rosemary's antibacterial and astringent properties make it ideal for oily skin and fading stretch marks.",
    ingredients: [
      {
        name: "Rosemary essential oil",
        amount: "5 drops",
        shopItem: { name: "Rosemary Essential Oil", price: 7.99 },
      },
      {
        name: "Carrier oil",
        amount: "1 tablespoon",
        shopItem: { name: "Carrier Oil", price: 6.99 },
      },
    ],
    instructions:
      "To help fade stretch marks, mix 5 drops of rosemary in a tablespoon of carrier oil and gently massage into the skin. Rosemary is also ideal for oily skin, especially during pimple outbreaks.",
  },
  {
    category: "Hair Care",
    title: "Rosemary Scalp & Hair Growth Oil",
    description:
      "Combine rosemary with a light carrier oil to massage into the scalp to get rid of dandruff and promote hair growth. Rosemary is also good for normal hair.",
    ingredients: [
      {
        name: "Rosemary essential oil",
        amount: "5 drops",
        shopItem: { name: "Rosemary Essential Oil", price: 7.99 },
      },
      {
        name: "Light carrier oil (e.g., jojoba or grapeseed)",
        amount: "1 tablespoon",
        shopItem: { name: "Light Carrier Oil", price: 6.99 },
      },
    ],
    instructions:
      "Mix 5 drops of rosemary essential oil with 1 tablespoon of a light carrier oil. Massage into the scalp to help get rid of dandruff and promote hair growth. Suitable for normal hair as well.",
  },
  {
    category: "Skin Care",
    title: "Clary Antioxidant Astringent",
    description:
      "Rich in antioxidants, clary is a boon to mature skin, tightening pores, improving skin texture, and reducing the appearance of wrinkles. Especially helpful for delicate skin around the eyes. Clary's antibacterial properties aid oily skin, combating acne and occasional pimple outbreaks.",
    ingredients: [
      {
        name: "Chamomile tea",
        amount: "1/4 cup",
        shopItem: { name: "Chamomile Tea", price: 3.99 },
      },
      {
        name: "Witch hazel",
        amount: "1 tablespoon",
        shopItem: { name: "Witch Hazel", price: 4.99 },
      },
      {
        name: "Clary essential oil",
        amount: "6 drops",
        shopItem: { name: "Clary Essential Oil", price: 11.99 },
      },
      {
        name: "Bergamot essential oil",
        amount: "6 drops",
        shopItem: { name: "Bergamot Essential Oil", price: 8.99 },
      },
      {
        name: "Spearmint essential oil",
        amount: "6 drops",
        shopItem: { name: "Spearmint Essential Oil", price: 7.99 },
      },
    ],
    instructions:
      "Brew 1/4 cup of chamomile tea and let it cool. Add 1 tablespoon of witch hazel and 6 drops each of clary, bergamot, and spearmint essential oils. Mix well. Apply gently to clean skin with a cotton pad, especially around the eyes or on oily/acne-prone areas.",
  },
  {
    category: "Diffusion",
    title: "Clary Headache Relief Diffuser Blend",
    description: "A soothing blend to help relieve headaches and promote relaxation.",
    ingredients: [
      {
        name: "Clary sage essential oil",
        amount: "3 parts",
        shopItem: { name: "Clary Sage Essential Oil", price: 11.99 },
      },
      {
        name: "Lavender essential oil",
        amount: "2 parts",
        shopItem: { name: "Lavender Essential Oil", price: 9.99 },
      },
      {
        name: "Lemon balm essential oil",
        amount: "1 part",
        shopItem: { name: "Lemon Balm Essential Oil", price: 13.99 },
      },
    ],
    instructions:
      "Combine 3 parts clary sage essential oil, 2 parts lavender essential oil, and 1 part lemon balm essential oil. Place the blend in your diffuser and enjoy the soothing aroma.",
  },
  {
    category: "Massage Oils",
    title: "Spanish Sage Deep Relief Massage Oil",
    description:
      "A soothing massage oil for deep relief. Spanish sage helps ease discomfort, rosemary supports circulation, and coriander adds a gentle warmth. Sage also eases indigestion when gently massaged on the stomach and abdominal areas.",
    ingredients: [
      {
        name: "Carrier oil or blend",
        amount: "2 tablespoons",
        shopItem: { name: "Carrier Oil Blend", price: 6.99 },
      },
      {
        name: "Spanish sage essential oil",
        amount: "6 drops",
        shopItem: { name: "Spanish Sage Essential Oil", price: 12.99 },
      },
      {
        name: "Rosemary essential oil",
        amount: "4 drops",
        shopItem: { name: "Rosemary Essential Oil", price: 7.99 },
      },
      {
        name: "Coriander essential oil",
        amount: "2 drops",
        shopItem: { name: "Coriander Essential Oil", price: 9.99 },
      },
    ],
    instructions:
      "Combine all oils and mix thoroughly. Store any leftover oil in a bottle with a tight-fitting cap. For circulation and varicose vein relief, make a similar massage oil using sage, cypress, and lemon. For indigestion, gently massage sage oil on the stomach and abdominal areas.",
  },
];