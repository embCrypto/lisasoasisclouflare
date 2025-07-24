// Example page demonstrating how to import and use multilingual affirmations
import { 
  // English affirmations
  DIVINE_WAY_EN, 
  FINANCIAL_SURPRISES_EN, 
  EXPECT_UNEXPECTED_EN,
  ALL_AFFIRMATIONS_EN,
  AFFIRMATIONS_MAP_EN,
  
  // German affirmations
  DIVINE_WAY_DE,
  FINANCIAL_SURPRISES_DE,
  EXPECT_UNEXPECTED_DE,
  ALL_AFFIRMATIONS_DE,
  AFFIRMATIONS_MAP_DE,
  
  // Romanian affirmations
  DIVINE_WAY_RO,
  FINANCIAL_SURPRISES_RO,
  EXPECT_UNEXPECTED_RO,
  ALL_AFFIRMATIONS_RO,
  AFFIRMATIONS_MAP_RO
} from '../components/Affirmations';

function AffirmationsExample() {
  return (
    <>
      <h2>Multilingual Affirmations Examples</h2>
      
      <div>
        <h3>Individual Affirmations - English</h3>
        <p><strong>Daily Divine Guidance:</strong> {DIVINE_WAY_EN}</p>
        <p><strong>Financial Abundance:</strong> {FINANCIAL_SURPRISES_EN}</p>
        <p><strong>Expecting Miracles:</strong> {EXPECT_UNEXPECTED_EN}</p>
      </div>

      <div>
        <h3>Individual Affirmations - German (Deutsch)</h3>
        <p><strong>Tägliche göttliche Führung:</strong> {DIVINE_WAY_DE}</p>
        <p><strong>Finanzielle Fülle:</strong> {FINANCIAL_SURPRISES_DE}</p>
        <p><strong>Wunder erwarten:</strong> {EXPECT_UNEXPECTED_DE}</p>
      </div>

      <div>
        <h3>Individual Affirmations - Romanian (Română)</h3>
        <p><strong>Îndrumarea divină zilnică:</strong> {DIVINE_WAY_RO}</p>
        <p><strong>Abundența financiară:</strong> {FINANCIAL_SURPRISES_RO}</p>
        <p><strong>Așteptând miracole:</strong> {EXPECT_UNEXPECTED_RO}</p>
      </div>

      <div>
        <h3>All English Affirmations</h3>
        <ul>
          {ALL_AFFIRMATIONS_EN.slice(0, 5).map((affirmation, index) => (
            <li key={index}>{affirmation}</li>
          ))}
          <li><em>... and {ALL_AFFIRMATIONS_EN.length - 5} more affirmations</em></li>
        </ul>
      </div>

      <div>
        <h3>Affirmation Count by Language</h3>
        <p>English: {ALL_AFFIRMATIONS_EN.length} affirmations</p>
        <p>German: {ALL_AFFIRMATIONS_DE.length} affirmations</p>
        <p>Romanian: {ALL_AFFIRMATIONS_RO.length} affirmations</p>
      </div>

      <div>
        <h3>Using Maps for Dynamic Access</h3>
        <p><strong>English:</strong> {AFFIRMATIONS_MAP_EN.DIVINE_GUIDANCE}</p>
        <p><strong>German:</strong> {AFFIRMATIONS_MAP_DE.DIVINE_GUIDANCE}</p>
        <p><strong>Romanian:</strong> {AFFIRMATIONS_MAP_RO.DIVINE_GUIDANCE}</p>
      </div>
    </>
  );
}

export default AffirmationsExample;
