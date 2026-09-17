import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import AiAgent from "../components/AiAgent";

export default function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen min-w-0 flex-col overflow-x-hidden bg-white">
      <Navbar />
      <main id="main" className="min-w-0 flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <AiAgent />
    </div>
  );
}
