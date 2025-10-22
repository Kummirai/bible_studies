import React from "react";
import CourseCard from "./CourseCard";

const generalEducation = [
  {
    id: "GENED101",
    title: "Academic Writing for Theological Studies",
    modules: 5,
    desc: "Develop essential writing skills for theological research, including exegetical papers, theological reflection, proper citation of biblical and historical sources, and academic argumentation.",
  },
  {
    id: "GENED102",
    title: "Rhetoric and Preaching",
    modules: 6,
    desc: "Master communication skills for ministry contexts, including sermon preparation, persuasive speaking, biblical exposition, and effective delivery for various audiences.",
  },
  {
    id: "GENED103",
    title: "Critical Thinking in Theological Context",
    modules: 5,
    desc: "Develop logical reasoning skills applied to theological arguments, biblical interpretation, and evaluation of doctrinal positions within Christian tradition.",
  },
  {
    id: "GENED104",
    title: "Christian Philosophy",
    modules: 6,
    desc: "Explore philosophical foundations of Christian thought, including metaphysics, epistemology, and ethics from Augustine to contemporary Christian philosophers.",
  },
  {
    id: "GENED105",
    title: "History of Christian Civilization",
    modules: 7,
    desc: "Survey Western civilization through the lens of Christian influence, examining how Christian thought shaped law, education, arts, and social structures.",
  },
  {
    id: "GENED106",
    title: "Christianity in World History",
    modules: 6,
    desc: "Examine the global spread of Christianity and its interaction with various cultures, civilizations, and historical movements worldwide.",
  },
  {
    id: "GENED107",
    title: "Psychology from a Christian Perspective",
    modules: 6,
    desc: "Study human behavior and mental processes integrated with biblical anthropology, exploring Christian approaches to counseling and soul care.",
  },
  {
    id: "GENED108",
    title: "Sociology of Religion",
    modules: 5,
    desc: "Explore religious institutions, faith communities, and the role of religion in society from a sociological perspective with Christian applications.",
  },
  {
    id: "GENED109",
    title: "Mathematics in Biblical Interpretation",
    modules: 4,
    desc: "Apply mathematical reasoning to biblical studies, including statistical analysis of manuscripts, chronology, and quantitative approaches to scriptural patterns.",
  },
  {
    id: "GENED110",
    title: "Biology and Christian Worldview",
    modules: 5,
    desc: "Study biological sciences through the lens of creation, exploring different Christian perspectives on origins, ecology, and human biology.",
  },
  {
    id: "GENED111",
    title: "Science and Religion",
    modules: 5,
    desc: "Examine the relationship between scientific inquiry and Christian faith, addressing topics like cosmology, evolution, and the dialogue between science and theology.",
  },
  {
    id: "GENED112",
    title: "Christian Environmental Ethics",
    modules: 4,
    desc: "Explore biblical teachings on creation care, environmental stewardship, and Christian responsibility toward ecological sustainability.",
  },
  {
    id: "GENED113",
    title: "Christian Literature and Great Books",
    modules: 6,
    desc: "Study influential Christian writers and literary works that have shaped Western culture, from Dante and Milton to contemporary Christian authors.",
  },
  {
    id: "GENED114",
    title: "Christian Art and Architecture",
    modules: 5,
    desc: "Survey Christian artistic expression through history, including Byzantine icons, Gothic cathedrals, Renaissance masterpieces, and contemporary sacred art.",
  },
  {
    id: "GENED115",
    title: "History of Christian Music",
    modules: 5,
    desc: "Explore the development of Christian music from Gregorian chant to contemporary worship, studying theological themes in hymnody and liturgical music.",
  },
  {
    id: "GENED116",
    title: "Christian Economics and Stewardship",
    modules: 5,
    desc: "Study economic principles from a biblical perspective, addressing topics like justice, poverty, wealth, and Christian approaches to business and finance.",
  },
  {
    id: "GENED117",
    title: "Christian Political Thought",
    modules: 5,
    desc: "Examine Christian perspectives on government, citizenship, political philosophy, and the relationship between church and state throughout history.",
  },
  {
    id: "GENED118",
    title: "Cultural Anthropology for Missions",
    modules: 6,
    desc: "Study human cultures and societies with application to cross-cultural ministry, mission work, and contextualizing the gospel across cultural boundaries.",
  },
  {
    id: "GENED119",
    title: "Technology and Ministry",
    modules: 4,
    desc: "Explore the use of technology in Christian ministry, including digital communication, online outreach, and ethical considerations for technology in church contexts.",
  },
  {
    id: "GENED120",
    title: "Wholistic Health and Christian Living",
    modules: 5,
    desc: "Integrate physical, mental, and spiritual health principles from a biblical perspective, addressing stewardship of the body and holistic wellness.",
  },
];
const Courses = ({ heading }) => {
  return (
    <div className="p-10 mb-10">
      <h2 className="text-slate-900 text-4xl font-semibold text-center mb-10">
        {heading}
      </h2>
      <div className="grid grid-cols-1 gap-5 min-xl:grid-cols-3  min-md:grid-cols-2 sm:grid-cols-1 bg-white">
        {generalEducation?.map((course, index) =>
          index < 6 ? (
            <CourseCard key={index} course={course} heading={heading} />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Courses;
