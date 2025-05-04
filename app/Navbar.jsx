import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-linear-to-bl from-violet-960 to-fuchsia-950 py-3 px-4 fixed w-full z-40">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="text-xs font-bold  ">
            {/* <Image src={''} alt="" className="w-12" /> */}
          </div>
          <div>
            {/* <Image src={icon2} alt="" className="w-24 h-12 mt-2" /> */}
          </div>
        </div>

        {/* Links */}
        <div>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="btn bg-linear-to-bl from-violet-500 to-fuchsia-900 text-white  font-bold  hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="btn bg-linear-to-bl from-violet-500 to-fuchsia-900 text-white font-bold  hover:underline"
              >
                Menu
              </Link>
            </li>

            <li>
              <Link
                href="/menu/contact"
                className="btn bg-linear-to-bl from-violet-500 to-fuchsia-900 text-white font-bold  hover:underline"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/menu/contact/profile"
                className="btn bg-linear-to-bl from-violet-500 to-fuchsia-900 text-white font-bold  hover:underline"
              >
                Profile
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard"
                className="btn bg-linear-to-bl from-violet-500 to-fuchsia-900 text-white font-bold  hover:underline"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
