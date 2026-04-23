const Sidebar = () => {
  return (
    <div className="hidden md:flex fixed left-0 top-0 h-screen w-52 bg-white shadow-md flex-col p-6">
      <h1 className="font-bold text-xl mb-10 tracking-wide">
        Magnolia
      </h1>

      <nav className="flex flex-col gap-5 text-base">
        <a href="#hero" className="transition duration-200 hover:translate-x-1 hover:bg-gray-100/60 hover:shadow-sm rounded-md px-2 py-1">Top</a>
        <a href="#profile" className="transition duration-200 hover:translate-x-1 hover:bg-gray-100/60 hover:shadow-sm rounded-md px-2 py-1">Profile</a>
        <a href="#about" className="transition duration-200 hover:translate-x-1 hover:bg-gray-100/60 hover:shadow-sm rounded-md px-2 py-1">About</a>
        <a href="#portfolio" className="transition duration-200 hover:translate-x-1 hover:bg-gray-100/60 hover:shadow-sm rounded-md px-2 py-1">Samples</a>
        <a href="#workflow" className="transition duration-200 hover:translate-x-1 hover:bg-gray-100/60 hover:shadow-sm rounded-md px-2 py-1">Workflow</a>
        <a href="#price" className="transition duration-200 hover:translate-x-1 hover:bg-gray-100/60 hover:shadow-sm rounded-md px-2 py-1">Price</a>
        <a href="#form" className="transition duration-200 hover:translate-x-1 hover:bg-gray-100/60 hover:shadow-sm rounded-md px-2 py-1">Form</a>
      </nav>
    </div>
  );
};

export default Sidebar;