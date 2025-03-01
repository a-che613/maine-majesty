import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="w-full flex items-center lg:h-screen justify-center text-[#0b2651] py-[40px]">
      <div className="w-[90%]  flex flex-col lg:flex-row items-center gap-[50px] lg:gap-[80px]">
        <div className="w-full md:w-[80%] lg:w-[40%]   flex flex-col gap-[20px]">
          <h1 className="text-[24px] lg:text-[32px] font-bold">The Royal Home of Maine Coon Cats</h1>
          <p className="text-lg">{"Discover the elegance, charm, and grandeur of Maine Coon cats. Whether you're looking for expert care tips, stunning photos, or your next feline companion, Maine Majesty is your ultimate destination for all things Maine Coon."}</p>
          <Link href={'/explore'}>
            <button className="h-[48px] px-[50px] bg-[#2A3B8F] text-white rounded-[10px] mt-[10px]">Explore the Majesty 👑</button>
          </Link>
        </div>
        <div className="w-full lg:w-[50%] relative grid">
          <Image
            src={'/images/hero.jpg'}
            width={500}
            height={300}
            style={{ width: "auto", height: "auto" }}
            alt="hero image"
            className="rounded-[80px] max-lg:h-auto lg:max-h-[350px] lg:-translate-y-[20%] border-[15px] border-opacity-5 max-lg:hidden"
          />
          <Image
            src={'/images/hero2.jpg'}
            width={500}
            height={300}
            style={{ width: "auto", height: "auto" }}
            alt="hero image"
            className="rounded-[80px] absolute max-h-[350px] right-0 translate-y-[15%] border-[15px] border-opacity-5 translate-x-[5%] max-lg:hidden"
          />
          <Image
            src={'/images/hero-mobile.png'}
            width={500}
            height={300}
            style={{ width: "auto", height: "auto" }}
            alt="hero image"
            className="rounded-[80px] max-h-[350px] lg:-translate-y-[20%] border-opacity-5 lg:hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;