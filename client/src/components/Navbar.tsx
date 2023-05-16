import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-screen h-[97px] bg-[#fff] flex justify-between items-center px-8">
      <div className="mr-335">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={209} height={38} />
        </Link>
      </div>
      <nav className="flex space-x-10 ml-335 md:ml-0">
        <div className="flex items-center space-x-10 text-[#FF8811] font-semibold">
          <Link href="/">
            <span>Home</span>
          </Link>
          <Link href="/about">
            <span>About Us</span>
          </Link>
          <Link href="/contact">
            <span>Contact</span>
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/login">
            <button className="text-[#FF8811] font-semibold border border-[#FF8811] border-solid rounded-full px-4 py-2 bg-white shadow-lg">
              Sign in
            </button>
          </Link>
          <Link href="/register">
            <button className="text-white font-semibold border border-[#FF8811] border-solid rounded-full px-4 py-2 bg-[#FF8811] shadow-lg">
              Create Account
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
