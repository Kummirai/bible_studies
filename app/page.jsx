import Courses from "@/components/Courses";
import Electives from "@/components/Electives";
import Hero from "@/components/Hero";
import Jumbotron from "@/components/Jumbotron";
import GeneralEducation from "@/components/GeneralEducation";

export default function Home() {
  return (
    <div className="flex items-center flex-col  ">
      <Hero />
      <Courses heading="Courses" />
      <Jumbotron />
      <GeneralEducation heading={"General Education"} />
      <Electives heading="Electives" />
    </div>
  );
}
