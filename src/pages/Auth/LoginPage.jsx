import Navbar from "../../components/layout/Navbar";
import BottomNav from "../../components/layout/BottomNav";
import PageContainer from "../../components/layout/PageContainer";

import AuthHero from "../../components/auth/AuthHero";
import AuthCard from "../../components/auth/AuthCard";

function LoginPage() {
  return (
    <PageContainer>
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#9EFF0015,transparent_40%)] pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Top navigation */}
        <Navbar />

        {/* Hero cinematic section */}
        <section className="mt-4">
          <AuthHero />
        </section>

        {/* Login card */}
        <section className="-mt-10 px-2 relative z-20">
          <AuthCard />
        </section>

        {/* Bottom navigation */}
        <div className="mt-auto pt-6">
        </div>
      </div>
    </PageContainer>
  );
}

export default LoginPage;