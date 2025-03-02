import NavBar from "@/components/layout/navbar";
import Image from "next/image";



const ExplorePage = () => {

  const kittens = [
    {
      img: '/images/1.jpg',
      name: 'Moose',
      status: 'Available',
      pricing: [
        {
          currency: "US($)",
          price: "$780"
        },
        {
          currency: "NZ($)",
          price: "$740"
        },
        {
          currency: "UK(£)",
          price: "£800"
        },
        {
          currency: "AU($)",
          price: "$760"
        },
      ]
    },
    {
      img: '/images/2.jpg',
      name: 'Mac',
      status: 'Available',
      pricing: [
        {
          currency: "US($)",
          price: "$700"
        },
        {
          currency: "NZ($)",
          price: "$680"
        },
        {
          currency: "UK(£)",
          price: "£780"
        },
        {
          currency: "AU($)",
          price: "$730"
        },
      ]
    },
    {
      img: '/images/3.jpg',
      name: 'Nova',
      status: 'Available',
      pricing: [
        {
          currency: "US($)",
          price: "$780"
        },
        {
          currency: "NZ($)",
          price: "$740"
        },
        {
          currency: "UK(£)",
          price: "£800"
        },
        {
          currency: "AU($)",
          price: "$760"
        },
      ]
    },
    {
      img: '/images/4.jpg',
      name: 'Nightshade',
      status: 'Available',
      pricing: [
        {
          currency: "US($)",
          price: "$680"
        },
        {
          currency: "NZ($)",
          price: "$640"
        },
        {
          currency: "UK(£)",
          price: "£700"
        },
        {
          currency: "AU($)",
          price: "$650"
        },
      ]
    },
    {
      img: '/images/5.jpg',
      name: 'Turnip',
      status: 'Available',
      pricing: [
        {
          currency: "US($)",
          price: "$750"
        },
        {
          currency: "NZ($)",
          price: "$700"
        },
        {
          currency: "UK(£)",
          price: "£799"
        },
        {
          currency: "AU($)",
          price: "$720"
        },
      ]
    },
    {
      img: '/images/6.jpg',
      name: 'Norman',
      status: 'Available',
      pricing: [
        {
          currency: "US($)",
          price: "$699"
        },
        {
          currency: "NZ($)",
          price: "$650"
        },
        {
          currency: "UK(£)",
          price: "£720"
        },
        {
          currency: "AU($)",
          price: "$670"
        },
      ]
    },
    {
      img: '/images/7.jpg',
      name: 'Kate',
      status: 'Available',
      pricing: [
        {
          currency: "US($)",
          price: "$700"
        },
        {
          currency: "NZ($)",
          price: "$680"
        },
        {
          currency: "UK(£)",
          price: "£780"
        },
        {
          currency: "AU($)",
          price: "$730"
        },
      ]
    },
    {
      img: '/images/8.jpg',
      name: 'Zephyr ',
      status: 'Available',
      pricing: [
        {
          currency: "US($)",
          price: "$780"
        },
        {
          currency: "NZ($)",
          price: "$740"
        },
        {
          currency: "UK(£)",
          price: "£800"
        },
        {
          currency: "AU($)",
          price: "$760"
        },
      ]
    },
  ]


  return (
    <div className="w-full flex flex-col items-center justify-center py-[40px] text-[#0b2651]">
      <NavBar isFixed={false} />
      <div className="w-[90%] grid md:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-[40px]">
        {
          kittens.map((k, index) => (
            <div className="flex flex-col hover:scale-105 transition-all duration-500" key={index}>
              <div className="h-[200px] w-full relative">
                <div className="absolute top-[10px] left-[10px] bg-green-500 bg-opacity-70 text-white px-[10px] py-[5px] rounded-[20px] text-[12px]">{k.status}</div>
                <Image
                  src={k.img}
                  width={500}
                  height={300}
                  style={{ width: "100%", height: "100%" }}
                  alt="hero image"
                  className="object-cover max-md:h-auto"
                />
              </div>
              <div className="w-full flex flex-col gap-[10px]">
                <div className="h-[40px] w-full flex items-center justify-center bg-[#2A3B8F] bg-opacity-30 text-[#2A3B8F] font-medium">{k.name}</div>
                <div className="grid grid-cols-4">
                  {
                    k.pricing.map((p, index) => (
                      <div key={index} className="flex items-center justify-center font-bold">{p.currency}</div>
                    ))
                  }
                </div>
                <div className="grid grid-cols-4">
                  {
                    k.pricing.map((p, index) => (
                      <div key={index} className="flex items-center justify-center">{p.price}</div>
                    ))
                  }
                </div>
                <button className="h-[40px] w-full flex items-center justify-center border-2 border-[#2A3B8F] text-[#2A3B8F] font-medium hover:bg-[#2A3B8F] hover:text-white rounded-[4px] transition-all duration-500">{"Adopt"}</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ExplorePage;