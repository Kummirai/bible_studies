import React from "react";
import CourseCard from "./CourseCard";

const electives = [
  {
    id: "ELEC1101",
    title: "Theology of C.S. Lewis",
    modules: 4,
    desc: "Explore the theological insights and Christian apologetics of C.S. Lewis through his works including Mere Christianity, The Chronicles of Narnia, and The Screwtape Letters.",
  },
  {
    id: "ELEC1102",
    title: "Biblical Archaeology",
    modules: 5,
    desc: "Examine archaeological discoveries that illuminate the biblical world, exploring ancient sites, artifacts, and their significance for understanding Scripture and ancient Near Eastern context.",
  },
  {
    id: "ELEC1103",
    title: "Christian Spiritual Formation",
    modules: 6,
    desc: "Study the historical practices and contemporary approaches to spiritual growth, including prayer, meditation, fasting, and other disciplines in the Christian tradition.",
  },
  {
    id: "ELEC1104",
    title: "Theology of Worship",
    modules: 4,
    desc: "Investigate the biblical and theological foundations of Christian worship, exploring liturgy, sacraments, music, and the role of worship in spiritual life and community.",
  },
  {
    id: "ELEC1105",
    title: "Urban Ministry",
    modules: 5,
    desc: "Focus on ministry approaches and theological perspectives relevant to urban contexts, addressing issues of justice, community development, and church planting in cities.",
  },
  {
    id: "ELEC1106",
    title: "Theology and Science",
    modules: 5,
    desc: "Explore the relationship between Christian faith and scientific inquiry, addressing topics like creation, evolution, neuroscience, and the dialogue between theology and modern science.",
  },
  {
    id: "ELEC1107",
    title: "Women in Church History",
    modules: 4,
    desc: "Study the contributions and roles of women throughout Christian history, from early church martyrs to reformers, mystics, and modern theological leaders.",
  },
  {
    id: "ELEC1108",
    title: "Theology of Suffering",
    modules: 4,
    desc: "Examine biblical and theological perspectives on suffering, pain, and evil, exploring how Christian theology addresses the problem of pain and offers hope and meaning.",
  },
  {
    id: "ELEC1109",
    title: "Global Christianity",
    modules: 5,
    desc: "Survey the growth and diversity of Christianity in the Global South, exploring non-Western theological perspectives and the changing demographics of world Christianity.",
  },
  {
    id: "ELEC1110",
    title: "Theology and the Arts",
    modules: 4,
    desc: "Explore the intersection of Christian faith and artistic expression, studying how theology informs and is expressed through visual arts, music, literature, and film.",
  },
  {
    id: "ELEC1111",
    title: "Environmental Theology",
    modules: 4,
    desc: "Investigate Christian perspectives on creation care, environmental ethics, and ecological responsibility from biblical, theological, and practical viewpoints.",
  },
  {
    id: "ELEC1112",
    title: "Early Church Fathers",
    modules: 5,
    desc: "Study the writings and theology of key early Christian thinkers including Augustine, Athanasius, Gregory of Nyssa, and others who shaped foundational Christian doctrine.",
  },
];

const Electives = ({ heading }) => {
  return (
    <div className="p-10 mb-10">
      <h2 className="text-gray-900 text-4xl font-semibold text-center mb-10">
        {heading}
      </h2>
      <div className="grid grid-cols-3 gap-5 bg-white">
        {electives?.map((elective, index) =>
          index < 6 ? (
            <CourseCard key={index} course={elective} heading={heading} />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Electives;
