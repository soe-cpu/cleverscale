import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gray-100">
        {/* Centered container */}
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
