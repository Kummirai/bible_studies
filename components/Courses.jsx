import React from "react";
import CourseCard from "./CourseCard";

const courses = [
  {
    id: "THEO101",
    title: "Introduction to Theology",
    modules: 6,
    desc: "An introductory theology course provides a foundational overview of Christian belief, often covering key topics like the nature of God, creation, humanity, sin, Christ, the Holy Spirit, salvation, and the church.",
  },
  {
    id: "THEO201",
    title: "Systematic Theology",
    modules: 8,
    desc: "A comprehensive study of Christian doctrines organized by thematic categories, exploring topics like revelation, God, creation, sin, Christology, salvation, church, and eschatology in a structured framework.",
  },
  {
    id: "BIBL301",
    title: "Biblical Hermeneutics",
    modules: 5,
    desc: "Learn the principles and methods of biblical interpretation, covering historical context, literary genres, grammatical analysis, and application of Scripture to contemporary life.",
  },
  {
    id: "HIST401",
    title: "Church History",
    modules: 7,
    desc: "Trace the development of Christianity from the early church through the Reformation to modern times, examining key figures, movements, and theological developments that shaped Christian tradition.",
  },
  {
    id: "ETHC501",
    title: "Ethics and Moral Theology",
    modules: 6,
    desc: "Explore Christian approaches to ethical decision-making, covering biblical foundations, virtue ethics, and contemporary moral issues from a theological perspective.",
  },
  {
    id: "RELG601",
    title: "World Religions",
    modules: 5,
    desc: "A comparative study of major world religions including Islam, Judaism, Hinduism, Buddhism, and others, examining their beliefs, practices, and relationship to Christianity.",
  },
  {
    id: "APOL701",
    title: "Apologetics",
    modules: 4,
    desc: "Develop skills in defending the Christian faith through rational arguments, historical evidence, and philosophical reasoning addressing common objections and questions.",
  },
  {
    id: "PAST801",
    title: "Pastoral Theology",
    modules: 6,
    desc: "Focus on the practical aspects of ministry, including preaching, counseling, leadership, worship planning, and pastoral care in congregational settings.",
  },
  {
    id: "OTST901",
    title: "Old Testament Studies",
    modules: 7,
    desc: "An in-depth examination of the Hebrew Scriptures, covering the Pentateuch, historical books, wisdom literature, and prophets with attention to historical context and theological themes.",
  },
  {
    id: "NTST1001",
    title: "New Testament Studies",
    modules: 7,
    desc: "Comprehensive study of the New Testament writings, including the Gospels, Pauline epistles, and other letters, exploring their historical setting and theological significance.",
  },
];

const Courses = ({ heading }) => {
  return (
    <div className="p-10 mb-10">
      <h2 className="text-gray-900 text-4xl font-semibold text-center mb-10">
        {heading}
      </h2>
      <div className="grid grid-cols-3 gap-5 bg-white">
        {courses?.map((course, index) =>
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
