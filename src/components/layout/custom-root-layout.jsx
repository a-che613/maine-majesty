import NavBar from "./navbar";

const CustomRootLayout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div>
        
        {children}
      </div>
    </div>
  );
}

export default CustomRootLayout;