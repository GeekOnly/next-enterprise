"use client";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

const SecondPage = () => {

    const solutions = [
        {
          title: "Customer Support",
          description:
            "Transform every interaction into a positive experience with customer-centric support that scales as you grow.",
          link: "/solutions/customer-support-outsourcing",
          icon: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/6734db6b63d29b612d1a8d19_Icons_Customer-Support.svg",
        },
        {
          title: "Customer Experience",
          description:
            "Enhance every stage of your customer journey and scale confidently — from a single touchpoint to the entire lifecycle.",
          link: "/solutions/customer-experience-outsourcing",
          icon: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c6675ce474a_Solutions%20Icon__Customer%20Service.svg",
        },
        {
          title: "Technical Customer Support",
          description:
            "Outsource dedicated experts on your business to answer customer questions.",
          link: "/solutions/technical-customer-support-outsourcing",
          icon: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cb1f3ce472c_Solutions%20Icon__Technical%20Support.svg",
        },
        {
          title: "Content Moderation",
          description:
            "Build a thriving online presence with a team specially trained to uphold your community standards.",
          link: "/solutions/customer-support-outsourcing",
          icon: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/6734db6b63d29b612d1a8d19_Icons_Customer-Support.svg",
        },
        {
          title: "Data Processing",
          description:
            "Receive analyzed data, specific to how you need it interpreted and presented.",
          link: "/solutions/customer-experience-outsourcing",
          icon: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c6675ce474a_Solutions%20Icon__Customer%20Service.svg",
        },
        {
          title: "Finance & Accounting",
          description:
            "Streamline your financial operations with expert accounting and bookkeeping services.",
          link: "/solutions/technical-customer-support-outsourcing",
          icon: "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cb1f3ce472c_Solutions%20Icon__Technical%20Support.svg",
        },
      ];

      const canvasRef = useRef<HTMLCanvasElement | null>(null);
      const [currentPage, setCurrentPage] = useState(0);
      const textPerPage = 2; // จำนวนข้อความต่อหน้า
      const texts = [
        "ข้อความหน้า 1: ข้อความที่ 1",
        "ข้อความหน้า 1: ข้อความที่ 2",
        "ข้อความหน้า 2: ข้อความที่ 1",
        "ข้อความหน้า 2: ข้อความที่ 2",
        "ข้อความหน้า 3: ข้อความที่ 1",
        "ข้อความหน้า 3: ข้อความที่ 2",
      ];
    
      useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // ล้าง canvas
            ctx.font = "20px Arial";
            ctx.textAlign = "center";
    
            // แสดงข้อความ
            const startIndex = currentPage * textPerPage;
            const endIndex = startIndex + textPerPage;
            const currentTexts = texts.slice(startIndex, endIndex);
    
            currentTexts.forEach((text, index) => {
              ctx.fillText(text, canvas.width / 2, 50 + index * 30); // วางข้อความ
            });
          }
        }
      }, [currentPage]);
    
      const handleNextPage = () => {
        if ((currentPage + 1) * textPerPage < texts.length) {
          setCurrentPage(currentPage + 1);
        }
      };
    
      const handlePrevPage = () => {
        if (currentPage > 0) {
          setCurrentPage(currentPage - 1);
        }
      };
  return (
    <div className="w-full mx-auto" >
    <br/>
    <div className="flex items-center justify-between p-8">
      <div className="flex-1">
        <Image
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%2520Illustration__Woman%2520Watering%2520Bar%2520Chart-p-800.webp"
          alt="Description of image"
          width={500} // Set your desired width
          height={300} // Set your desired height
          className="rounded-lg" // Add any additional styles if needed
        />
      </div>
      <div className="flex-1 pl-8">
        <h2 className="text-2xl font-bold">Free up resources, accelerate growth, and solve for scale.</h2>
        <p className="mt-4 text-gray-600">
        At SupportNinja, we combine cutting-edge technology with value-centricity to foster high-performing, reliable teams that turn growing pains into efficient pathways to profitability.
        </p>
        <p className="mt-4 text-gray-600">
        Our customized, agile, AI-enabled solutions don’t just deliver cost savings — they also help you achieve key business outcomes.
        </p>
        <p className="mt-4 text-gray-600">
        We work closely with you to continually adjust strategies, realize efficiencies, and drive scale according to your unique needs. Plus, flexibility is baked in from day one, so you’re never locked into rigid, long-term contracts.
        </p>
        <p className="mt-4 text-gray-600">
        Now that’s outsourcing worth talking about.
        </p>
        </div>

      </div> // end first section

      <div className="flex justify-center items-center justify-between p-8 gap-8">
        {/* ฝั่งซ้าย: Text */}
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">Don’t grow it alone</h2>
          <p className="mt-4 text-gray-600">
            Don't let headcount become a headache. We’ll connect you with talent that meets your needs.
          </p>
          <p className="mt-4 text-gray-600">
            Your dedicated new team members will become experts in your world — your customers, your tech, your data, your systems — so they can expand on what you’ve built.
          </p>
        </div>
  
        {/* ฝั่งขวา: Image */}
        <div className="w-1/2 flex justify-center">
          <Image
            src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4794ce4765_Illustration%3DPlant%201.svg"
            alt="Illustration of green plant inside of red and white vase"
            width={75}
            height={75}
            className="rounded-lg"
          />
        </div>
      </div>

      // end
      <hr className="my-8 border-t-1 border-gray-300 dark:border-gray-600" />

      <div className="grid grid-cols-3 gap-6 p-6">
      {solutions.map((solution, index) => (
        <Link
          key={index}
          href={solution.link}
          className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg shadow-sm transition hover:shadow-md"
        >
          <Image
            src={solution.icon}
            alt={solution.title}
            width={48}
            height={48}
            className="w-12 h-12 mb-2"
          />
          <h3 className="text-lg font-semibold">{solution.title}</h3>
          <p className="text-gray-600 text-sm">{solution.description}</p>
        </Link>
      ))}
     </div>
     <hr className="my-8 border-t-1 border-gray-300 dark:border-gray-600" />

     <h1 className="mb-7 max-w-1xl text-6xl leading-none tracking-tight md:text-12xl xl:text-6xl dark:text-white">
     Why our clients stick with us </h1>
// end
     <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Canvas Text with Pagination</h1>
      <canvas ref={canvasRef} width={500} height={200}  />
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "20px" }}>
        <span>หน้า {currentPage + 1} ของ {Math.ceil(texts.length / textPerPage)}</span>
        <hr className="my-8 border-t-1 border-gray-300 dark:border-gray-600" />
        <button onClick={handlePrevPage} disabled={currentPage === 0}>LEFT</button>
        <button onClick={handleNextPage} disabled={(currentPage + 1) * textPerPage >= texts.length}>RIGHT</button>
      </div>
    </div>

    </div>
  );
};

export default SecondPage;
