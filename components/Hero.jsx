const Hero = () => {
  return (
    <main className=" flex flex-col items-center justify-center w-[100%] mx-auto text-center gap-6 px-4 bg-slate-100 h-[80vh]">
      <h2 className="text-5xl  text-slate-900 font-semibold">
        The Home Of Bible Study
      </h2>
      <p className="text-slate-600 text-sm md:text-xl font-light pt-3 pb-6 max-w-2xl">
        We explore the mysteries of divine existence. Our rational inquiry into
        theology examines faith, philosophy, and scripture to illuminate
        profound truths about God and our place in the universe.
      </p>
      <div className="flex items-center gap-4 text-white">
        <button className="border border-slate-500 px-5 py-[0.2rem] text-slate-900 rounded-md hover:bg-black hover:text-white hover:cursor-pointer">
          Start A Course
        </button>
        <button className="bg-slate-900 border px-5 py-[0.2rem] rounded-md hover:cursor-pointer hover:bg-transparent hover:border hover:border-slate-500 hover:text-slate-900">
          Explore Courses
        </button>
      </div>
    </main>
  );
};

export default Hero;
