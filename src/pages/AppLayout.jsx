import Map from "../components/Map";
import Sidebar from "../components/SideBar";

function AppLayout() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-6 min-h-screen">
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
