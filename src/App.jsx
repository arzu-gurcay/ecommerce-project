import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";

function Placeholder({ title }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-xl font-semibold">{title}</h1>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <PageContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Placeholder title="Shop" />} />
          <Route path="/about" element={<Placeholder title="About" />} />
          <Route path="/contact" element={<Placeholder title="Contact" />} />
        </Routes>
      </PageContent>
      <Footer />
    </div>
  );
}
