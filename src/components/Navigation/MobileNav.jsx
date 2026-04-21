import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="flex justify-between items-center p-4">
        <h1 className="font-bold">Magnolia</h1>

        <button onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="flex flex-col p-4 gap-4 bg-white">
          <a href="#hero">Top</a>
          <a href="#profile">Profile</a>
          <a href="#contact">About</a>
          <a href="#portfolio">Samples</a>
          <a href="#workflow">Workflow</a>
          <a href="#price">Price</a>
          <a href="#form">Form</a>
        </div>
      )}
    </div>
  );
};

export default MobileNav;