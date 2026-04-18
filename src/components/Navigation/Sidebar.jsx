const Sidebar = () => {
  return (
    <div className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-white shadow-md flex-col p-6">
      <h1 className="font-bold text-xl mb-8">Portfolio</h1>

      <nav className="flex flex-col gap-4">
        <a href="#hero">Top</a>
        <a href="#profile">Profile</a>
        <a href="#portfolio">Works</a>
        <a href="#price">Price</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Sidebar;