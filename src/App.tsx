import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import IntroductionPage from "./pages/IntroductionPage";
import InstallationPage from "./pages/InstallationPage";
import AllBlogPage from "./pages/AllBlogPage";
import ContactSidebarPage from "./pages/ContactSidebarPage";
import BackToTopPage from "./pages/BackToTopPage";
import FooterPage from "./pages/FooterPage";
import FontFamilyLinkPage from "./pages/FontFamilyLinkPage";
import HeaderPage from "./pages/HeaderPage";
import HomeBannerPage from "./pages/HomeBannerPage";
import NewHtmlFunctionPage from "./pages/NewHtmlFunctionPage";
import NewCssFunctionPage from "./pages/NewCssFunctionPage";
import EnsureSectionIdMapPage from "./pages/EnsureSectionIdMapPage";
import CasinoCtaButtonsPage from "./pages/CasinoCtaButtonsPage";
import FAQPage from "./pages/FAQPage";
import CategoryGridEachPage from "./pages/CategoryGridEachPage";
import LandingBannerV1Page from "./pages/LandingBannerV1Page";
import PromotionGridPage from "./pages/PromotionGridPage";
import CategoryGridPage from "./pages/CategoryGridPage";
import Example13YAOPage from "./pages/Example13YAOPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/introduction" replace />} />
      <Route path="/introduction" element={<IntroductionPage />} />
      <Route path="/installation" element={<InstallationPage />} />
      <Route path="/all-blog" element={<AllBlogPage />} />
      <Route path="/contact-sidebar" element={<ContactSidebarPage />} />
      <Route path="/back-to-top" element={<BackToTopPage />} />
      <Route path="/footer" element={<FooterPage />} />
      <Route path="/font-family-link" element={<FontFamilyLinkPage />} />
      <Route path="/header" element={<HeaderPage />} />
      <Route path="/home-banner" element={<HomeBannerPage />} />
      <Route path="/new-html-function" element={<NewHtmlFunctionPage />} />
      <Route path="/new-css-function" element={<NewCssFunctionPage />} />
      <Route
        path="/ensure-section-id-map"
        element={<EnsureSectionIdMapPage />}
      />
      <Route path="/casino-cta-buttons" element={<CasinoCtaButtonsPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/category-grid-each" element={<CategoryGridEachPage />} />
      <Route path="/landing-banner-v1" element={<LandingBannerV1Page />} />
      <Route path="/promotion-grid" element={<PromotionGridPage />} />
      <Route path="/category-grid" element={<CategoryGridPage />} />
      <Route path="/example-13yao" element={<Example13YAOPage />} />
    </Routes>
  );
}

export default App;
