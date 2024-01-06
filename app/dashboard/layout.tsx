import DashboardContainer from "@/components/containers/dashboard";
import Navigation from "@/components/pages/dashboard/Navigation";
import Header from "@/components/pages/dashboard/header/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <DashboardContainer>{children}</DashboardContainer>
      <Navigation />
    </>
  );
};

export default Layout;
