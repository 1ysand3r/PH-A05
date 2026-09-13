import Logo from "./assets/logo-text.png";

const Header = () => {
  return (
    <nav className="flex justify-between container mx-auto my-2">
      <img src={Logo} alt="" />
      <ul className="flex gap-4 items-center">
        <li>Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div>
        <button className="btn rounded-r-none rounded-l-full border-none font-light">Sign In</button>
        <button className="btn btn-primary rounded-l-none rounded-r-full bg-[#D91B7E] border-none font-light">Sign Up</button>
      </div>
    </nav>
  );
};

export default Header