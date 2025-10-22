import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import Jumbotron from "@/components/Jumbotron";

export default function Home() {
  return (
    <div className="flex items-center flex-col  ">
      <Hero />
      <Courses />
      <Jumbotron />
    </div>
  );
}
