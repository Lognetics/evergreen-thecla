import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import WorkWithMe from "./pages/WorkWithMe";
import UnboxYourAura from "./pages/UnboxYourAura";
import Books from "./pages/Books";
import Blog from "./pages/Blog";
import Podcast from "./pages/Podcast";
import Advocacy from "./pages/Advocacy";
import Contact from "./pages/Contact";
import { ChallengeProvider } from "./challenge/store";
import Challenge from "./pages/challenge/Challenge";
import ChallengeDashboard from "./pages/challenge/Dashboard";
import ChallengeDay from "./pages/challenge/Day";
import ChallengeCertificate from "./pages/challenge/Certificate";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ChallengeProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work-with-me" element={<WorkWithMe />} />
            <Route path="/unbox-your-aura" element={<UnboxYourAura />} />
            <Route path="/books" element={<Books />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/advocacy" element={<Advocacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/challenge" element={<Challenge />} />
            <Route path="/challenge/dashboard" element={<ChallengeDashboard />} />
            <Route path="/challenge/day/:n" element={<ChallengeDay />} />
            <Route path="/challenge/certificate" element={<ChallengeCertificate />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </ChallengeProvider>
    </>
  );
}
