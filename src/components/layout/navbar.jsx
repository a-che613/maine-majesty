import Link from "next/link";

const NavBar = ({isFixed=true}) => {

  const navItems = [
    {
      link: 'Home',
      url: '/'
    },
    {
      link: 'Explore',
      url: '/explore'
    }
  ]

  return ( 
    <div className={`w-full flex items-center justify-center text-[#0b2651] z-[200] bg-white py-[10px] ${isFixed ? "fixed top-0 w-full" : "invisible"}`}>
      <div className="w-[90%] flex items-center justify-between">
        <p className="text-[38px] charm  font-bold ">Maine Majesty</p>
        <div className="flex items-center gap-[40px]">
          {
            navItems.map((i, index) => (
              <Link key={index} href={i.url}>{i.link}</Link>
            ))
          }
        </div>
      </div>
    </div>
   );
}
 
export default NavBar;