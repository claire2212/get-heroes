const Header = ({ title = "Get Heroes" as string }) => {

  return (
    <nav className="bg-blue-600 text-center py-2 md:py-4">
      <h1 className="text-white">{title}</h1>
    </nav>
  );
};

export default Header;
