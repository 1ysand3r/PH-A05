import Logo from "./assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="grid grid-cols-5 p-8">
      <div className="col-span-2 gap-4">
        <img src={Logo} alt="" />
        <p>
          Curated tools, technologies, and resources for developers building
          modern software.
        </p>
        <div className="flex gap-2">
          <a href="">GitHub</a>
          <a href="">Twitter</a>
          <a href="">LinkedIn</a>
        </div>
      </div>
      <div className="gap-4">
        <ul>
          <h3 className="font-bold">PRODUCT</h3>
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
        </ul>
      </div>
      <div className="gap-4">
        <h3 className="font-bold">COMPANY</h3>
        <li>About</li>
        <li>Contact</li>
        <li>Careers</li>
      </div>
      <div className="gap-4">
        <h3 className="font-bold">LEGAL</h3>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </div>
    </footer>
  );
};

export default Footer;
