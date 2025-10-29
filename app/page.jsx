import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Jumbotron from "@/components/Jumbotron";
import Newsletter from "@/components/Newsletter";
import clientPromise from "@/lib/mongodb";

export async function getCourses() {
  const res = await fetch(`${process.env.NEXT_URL}/api/courses`);
  const courses = await res.json();
  return courses;
}

export async function getElectives(params) {
  const res = await fetch(`${process.env.NEXT_URL}/api/electives`);
  const electives = await res.json();
  return electives;
}

export async function getGeneralEducation(params) {
  const res = await fetch(`${process.env.NEXT_URL}/api/generalEducation`);
  const generalEducation = await res.json();
  return generalEducation;
}

export default async function Home() {
  const courses = await getCourses();
  const electives = await getElectives();
  const generalEducation = await getGeneralEducation();

  return (
    <div className="flex items-center flex-col  ">
      <Hero />
      <Courses heading="Courses" courses={courses} />
      <Jumbotron />
      <Courses heading="General Education" courses={generalEducation} />
      <Courses heading="Electives" courses={electives} />
      <Newsletter />
      <Footer
        courses={courses}
        electives={electives}
        generalEducation={generalEducation}
      />
    </div>
  );
}
