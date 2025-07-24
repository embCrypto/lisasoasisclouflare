import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { CountryProvider } from './contexts/CountryContext';
import LanguageModal from './components/LanguageModal';
import CookieConsent from './contexts/CookieConsent';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import MyAccount from './pages/MyAccount';
import Settings from './pages/Settings';
import GuidelineToFeelBetter from './pages/GuidelineToFeelBetter';
import TreatHealthIssuesEssentialOils from './pages/TreatHealthIssuesEssentialOils';
import ProfileOfEssentialOils from './pages/ProfileOfEssentialOils';
import AromaticFengShui from './pages/AromaticFengShui';
import TreatHealthIssuesNaturalRemedies from './pages/TreatHealthIssuesNaturalRemedies';
import DoItYourself from './pages/DoItYourself';
import ImproveMyLifeSituation from './pages/ImproveMyLifeSituation';
import HomeCleaning from './pages/HomeCleaning';
import Shop from './pages/Shop';
import ShoppingCart from './pages/ShoppingCart';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Legals from './pages/Legals';
import './App.css'

function AppContent() {
  const { isLanguageSelected } = useLanguage();

  return (
    <>
      {!isLanguageSelected && <LanguageModal />}
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/guideline-to-feel-better" element={<GuidelineToFeelBetter />} />
        <Route path="/treat-health-issues-essential-oils" element={<TreatHealthIssuesEssentialOils />} />
        <Route path="/profile-of-essential-oils" element={<ProfileOfEssentialOils />} />
        <Route path="/aromatic-feng-shui" element={<AromaticFengShui />} />
        <Route path="/treat-health-issues-natural-remedies" element={<TreatHealthIssuesNaturalRemedies />} />
        <Route path="/do-it-yourself" element={<DoItYourself />} />
        <Route path="/improve-my-life-situation" element={<ImproveMyLifeSituation />} />
        <Route path="/home-cleaning" element={<HomeCleaning />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/legals" element={<Legals />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <LanguageProvider>
        <CountryProvider>
          <AppContent />
          <CookieConsent /> {/* Add the CookieConsent component here */}
        </CountryProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
