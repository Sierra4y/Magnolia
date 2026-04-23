import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="flex justify-between items-center p-4">
        <h1 className="font-bold">Magnolia</h1>

        <button onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="flex flex-col p-4 gap-4 bg-white">
          <a href="#hero" onClick={() => setOpen(false)}>Top</a>
          <a href="#profile" onClick={() => setOpen(false)}>Profile</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#portfolio" onClick={() => setOpen(false)}>Samples</a>
          <a href="#workflow" onClick={() => setOpen(false)}>Workflow</a>
          <a href="#price" onClick={() => setOpen(false)}>Price</a>
          <a href="#form" onClick={() => setOpen(false)}>Form</a>
        </div>
      )}
    </div>
  );
};
 
export default MobileNav;