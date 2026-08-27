import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-transparent text-base-content font-sans antialiased selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="max-w-[720px] mx-auto px-4 sm:px-6 pb-20 pt-6 space-y-8">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
