import Sidebar from "../components/SideBar";

function AppLayout() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-6 min-h-screen">
      <Sidebar />
      <main className="w-full lg:w-2/3 p-6">
        <h1 className="text-3xl font-bold mb-6">Main Content</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
          scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices
          nec congue eget, auctor vitae massa.
        </p>
      </main>
    </div>
  );
}

export default AppLayout;
