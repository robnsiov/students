import DashboardContainer from "@/components/containers/dashboard";
import Navigation from "@/components/pages/dashboard/Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="fixed inset-x-0 top-0 border-b-[1px] border-black/10">
        <div className="container mx-auto">
          <div className="py-4 sm:py-2 text-nowrap truncate">
            <span className="sm:text-sm">Welcome</span>{" "}
            <span className="ml-2  font-semibold">Mr Zollfaghari</span>
          </div>
        </div>
      </div>
      <DashboardContainer>{children}</DashboardContainer>
      <Navigation />
    </>
  );
};

export default Layout;
