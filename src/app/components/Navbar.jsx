import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5 bg-slate-400 text-black font-bold">
      <Link href={"/"} className="text-xl">
        Next Crud
      </Link>

      <ul className="flex gap-3">
        <li>
          <Link href={"/new"}>Form</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
