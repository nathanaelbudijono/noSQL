import Sidebar from "@/modules/sidebar";

const BaseLayout = ({ children }: any) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout__main-content">{children}</main>;
    </div>
  );
};

export default BaseLayout;
