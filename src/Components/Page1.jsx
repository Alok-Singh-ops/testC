const Page1 = () => {
  return (
    <div className="sticky h-screen w-screen flex flex-col md:flex-row justify-center items-center bg-[#1a1a1a] ">
      
      {/* Circle Radial Gradient on the Top Left */}
      <div className="absolute top-[-200px] left-[-450px] w-[1103px] h-[1071.08px] rounded-full bg-[radial-gradient(35.19%_35.19%_at_50%_50%,_rgba(59,_149,_255,_0.17)_0%,_rgba(28,_106,_197,_0)_100%)]"></div>

      {/* Text Content */}
      <div className="absolute p-10 md:p-0 top-5 md:left-[320px] z-10 md:top-[200px] text-white h-[80px] w-full md:w-[283px] md:h-[118px]">
        <h1 className="text-[30px] md:text-[40px] md:font-medium text-left font-league-spartan leading-none">
          <span className="text-[#AAAAAA]">How does <br /> it </span> Work <span className="text-[#459BFF]">?</span>
        </h1>
        {/* Line Separator */}
        <div className="m-2 border-t border-[#5AA5FD] w-[84.02px] md:mt-[36px] md:mb-[36px] "></div>

        <span className="text-[13px] font-medium leading-none text-left font-league-spartan mt-4">
          We make it possible in a quick and easy few steps process, takes max 5 mins
        </span>
      </div>

      {/* Image */}
      <div className="absolute bottom-12 md:top-15 md:right-[330px] md:p-4 md:z-10">
        <img src="/Images/screenshot1.png" alt="Screenshot" className="w-[180px] md:w-[230px] h-auto" />
      </div>

      {/* Rectangle on the Right Side */}
      <div className="opacity-0 md:opacity-100 absolute right-0 top-0 h-full w-[413px] bg-[#0d0d0d] "></div>
    </div>
  );
}

export default Page1