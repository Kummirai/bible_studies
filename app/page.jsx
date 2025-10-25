import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Jumbotron from "@/components/Jumbotron";
import Newsletter from "@/components/Newsletter";
import clientPromise from "@/lib/mongodb";

// // const courses = [
// //   {
// //     id: "THEO101",
// //     title: "Introduction to Theology",
// //     modules: 6,
// //     desc: "An introductory theology course provides a foundational overview of Christian belief, often covering key topics like the nature of God, creation, humanity, sin, Christ, the Holy Spirit, salvation, and the church.",
// //   },
// //   {
// //     id: "THEO201",
// //     title: "Systematic Theology",
// //     modules: 8,
// //     desc: "A comprehensive study of Christian doctrines organized by thematic categories, exploring topics like revelation, God, creation, sin, Christology, salvation, church, and eschatology in a structuslate framework.",
// //   },
// //   {
// //     id: "BIBL301",
// //     title: "Biblical Hermeneutics",
// //     modules: 5,
// //     desc: "Learn the principles and methods of biblical interpretation, covering historical context, literary genres, grammatical analysis, and application of Scripture to contemporary life.",
// //   },
// //   {
// //     id: "HIST401",
// //     title: "Church History",
// //     modules: 7,
// //     desc: "Trace the development of Christianity from the early church through the Reformation to modern times, examining key figures, movements, and theological developments that shaped Christian tradition.",
// //   },
// //   {
// //     id: "ETHC501",
// //     title: "Ethics and Moral Theology",
// //     modules: 6,
// //     desc: "Explore Christian approaches to ethical decision-making, covering biblical foundations, virtue ethics, and contemporary moral issues from a theological perspective.",
// //   },
// //   {
// //     id: "RELG601",
// //     title: "World Religions",
// //     modules: 5,
// //     desc: "A comparative study of major world religions including Islam, Judaism, Hinduism, Buddhism, and others, examining their beliefs, practices, and relationship to Christianity.",
// //   },
// //   {
// //     id: "APOL701",
// //     title: "Apologetics",
// //     modules: 4,
// //     desc: "Develop skills in defending the Christian faith through rational arguments, historical evidence, and philosophical reasoning addressing common objections and questions.",
// //   },
// //   {
// //     id: "PAST801",
// //     title: "Pastoral Theology",
// //     modules: 6,
// //     desc: "Focus on the practical aspects of ministry, including preaching, counseling, leadership, worship planning, and pastoral care in congregational settings.",
// //   },
// //   {
// //     id: "OTST901",
// //     title: "Old Testament Studies",
// //     modules: 7,
// //     desc: "An in-depth examination of the Hebrew Scriptures, covering the Pentateuch, historical books, wisdom literature, and prophets with attention to historical context and theological themes.",
// //   },
// //   {
// //     id: "NTST1001",
// //     title: "New Testament Studies",
// //     modules: 7,
// //     desc: "Comprehensive study of the New Testament writings, including the Gospels, Pauline epistles, and other letters, exploring their historical setting and theological significance.",
// //   },
// // ];

// const electives = [
//   {
//     id: "ELEC1101",
//     title: "Theology of C.S. Lewis",
//     modules: 4,
//     desc: "Explore the theological insights and Christian apologetics of C.S. Lewis through his works including Mere Christianity, The Chronicles of Narnia, and The Screwtape Letters.",
//   },
//   {
//     id: "ELEC1102",
//     title: "Biblical Archaeology",
//     modules: 5,
//     desc: "Examine archaeological discoveries that illuminate the biblical world, exploring ancient sites, artifacts, and their significance for understanding Scripture and ancient Near Eastern context.",
//   },
//   {
//     id: "ELEC1103",
//     title: "Christian Spiritual Formation",
//     modules: 6,
//     desc: "Study the historical practices and contemporary approaches to spiritual growth, including prayer, meditation, fasting, and other disciplines in the Christian tradition.",
//   },
//   {
//     id: "ELEC1104",
//     title: "Theology of Worship",
//     modules: 4,
//     desc: "Investigate the biblical and theological foundations of Christian worship, exploring liturgy, sacraments, music, and the role of worship in spiritual life and community.",
//   },
//   {
//     id: "ELEC1105",
//     title: "Urban Ministry",
//     modules: 5,
//     desc: "Focus on ministry approaches and theological perspectives relevant to urban contexts, addressing issues of justice, community development, and church planting in cities.",
//   },
//   {
//     id: "ELEC1106",
//     title: "Theology and Science",
//     modules: 5,
//     desc: "Explore the relationship between Christian faith and scientific inquiry, addressing topics like creation, evolution, neuroscience, and the dialogue between theology and modern science.",
//   },
//   {
//     id: "ELEC1107",
//     title: "Women in Church History",
//     modules: 4,
//     desc: "Study the contributions and roles of women throughout Christian history, from early church martyrs to reformers, mystics, and modern theological leaders.",
//   },
//   {
//     id: "ELEC1108",
//     title: "Theology of Suffering",
//     modules: 4,
//     desc: "Examine biblical and theological perspectives on suffering, pain, and evil, exploring how Christian theology addresses the problem of pain and offers hope and meaning.",
//   },
//   {
//     id: "ELEC1109",
//     title: "Global Christianity",
//     modules: 5,
//     desc: "Survey the growth and diversity of Christianity in the Global South, exploring non-Western theological perspectives and the changing demographics of world Christianity.",
//   },
//   {
//     id: "ELEC1110",
//     title: "Theology and the Arts",
//     modules: 4,
//     desc: "Explore the intersection of Christian faith and artistic expression, studying how theology informs and is expressed through visual arts, music, literature, and film.",
//   },
//   {
//     id: "ELEC1111",
//     title: "Environmental Theology",
//     modules: 4,
//     desc: "Investigate Christian perspectives on creation care, environmental ethics, and ecological responsibility from biblical, theological, and practical viewpoints.",
//   },
//   {
//     id: "ELEC1112",
//     title: "Early Church Fathers",
//     modules: 5,
//     desc: "Study the writings and theology of key early Christian thinkers including Augustine, Athanasius, Gregory of Nyssa, and others who shaped foundational Christian doctrine.",
//   },
// ];

// const generalEducation = [
//   {
//     id: "GENED101",
//     title: "Academic Writing for Theological Studies",
//     modules: 5,
//     desc: "Develop essential writing skills for theological research, including exegetical papers, theological reflection, proper citation of biblical and historical sources, and academic argumentation.",
//   },
//   {
//     id: "GENED102",
//     title: "Rhetoric and Preaching",
//     modules: 6,
//     desc: "Master communication skills for ministry contexts, including sermon preparation, persuasive speaking, biblical exposition, and effective delivery for various audiences.",
//   },
//   {
//     id: "GENED103",
//     title: "Critical Thinking in Theological Context",
//     modules: 5,
//     desc: "Develop logical reasoning skills applied to theological arguments, biblical interpretation, and evaluation of doctrinal positions within Christian tradition.",
//   },
//   {
//     id: "GENED104",
//     title: "Christian Philosophy",
//     modules: 6,
//     desc: "Explore philosophical foundations of Christian thought, including metaphysics, epistemology, and ethics from Augustine to contemporary Christian philosophers.",
//   },
//   {
//     id: "GENED105",
//     title: "History of Christian Civilization",
//     modules: 7,
//     desc: "Survey Western civilization through the lens of Christian influence, examining how Christian thought shaped law, education, arts, and social structures.",
//   },
//   {
//     id: "GENED106",
//     title: "Christianity in World History",
//     modules: 6,
//     desc: "Examine the global spread of Christianity and its interaction with various cultures, civilizations, and historical movements worldwide.",
//   },
//   {
//     id: "GENED107",
//     title: "Psychology from a Christian Perspective",
//     modules: 6,
//     desc: "Study human behavior and mental processes integrated with biblical anthropology, exploring Christian approaches to counseling and soul care.",
//   },
//   {
//     id: "GENED108",
//     title: "Sociology of Religion",
//     modules: 5,
//     desc: "Explore religious institutions, faith communities, and the role of religion in society from a sociological perspective with Christian applications.",
//   },
//   {
//     id: "GENED109",
//     title: "Mathematics in Biblical Interpretation",
//     modules: 4,
//     desc: "Apply mathematical reasoning to biblical studies, including statistical analysis of manuscripts, chronology, and quantitative approaches to scriptural patterns.",
//   },
//   {
//     id: "GENED110",
//     title: "Biology and Christian Worldview",
//     modules: 5,
//     desc: "Study biological sciences through the lens of creation, exploring different Christian perspectives on origins, ecology, and human biology.",
//   },
//   {
//     id: "GENED111",
//     title: "Science and Religion",
//     modules: 5,
//     desc: "Examine the relationship between scientific inquiry and Christian faith, addressing topics like cosmology, evolution, and the dialogue between science and theology.",
//   },
//   {
//     id: "GENED112",
//     title: "Christian Environmental Ethics",
//     modules: 4,
//     desc: "Explore biblical teachings on creation care, environmental stewardship, and Christian responsibility toward ecological sustainability.",
//   },
//   {
//     id: "GENED113",
//     title: "Christian Literature and Great Books",
//     modules: 6,
//     desc: "Study influential Christian writers and literary works that have shaped Western culture, from Dante and Milton to contemporary Christian authors.",
//   },
//   {
//     id: "GENED114",
//     title: "Christian Art and Architecture",
//     modules: 5,
//     desc: "Survey Christian artistic expression through history, including Byzantine icons, Gothic cathedrals, Renaissance masterpieces, and contemporary sacred art.",
//   },
//   {
//     id: "GENED115",
//     title: "History of Christian Music",
//     modules: 5,
//     desc: "Explore the development of Christian music from Gregorian chant to contemporary worship, studying theological themes in hymnody and liturgical music.",
//   },
//   {
//     id: "GENED116",
//     title: "Christian Economics and Stewardship",
//     modules: 5,
//     desc: "Study economic principles from a biblical perspective, addressing topics like justice, poverty, wealth, and Christian approaches to business and finance.",
//   },
//   {
//     id: "GENED117",
//     title: "Christian Political Thought",
//     modules: 5,
//     desc: "Examine Christian perspectives on government, citizenship, political philosophy, and the relationship between church and state throughout history.",
//   },
//   {
//     id: "GENED118",
//     title: "Cultural Anthropology for Missions",
//     modules: 6,
//     desc: "Study human cultures and societies with application to cross-cultural ministry, mission work, and contextualizing the gospel across cultural boundaries.",
//   },
//   {
//     id: "GENED119",
//     title: "Technology and Ministry",
//     modules: 4,
//     desc: "Explore the use of technology in Christian ministry, including digital communication, online outreach, and ethical considerations for technology in church contexts.",
//   },
//   {
//     id: "GENED120",
//     title: "Wholistic Health and Christian Living",
//     modules: 5,
//     desc: "Integrate physical, mental, and spiritual health principles from a biblical perspective, addressing stewardship of the body and holistic wellness.",
//   },
// ];

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
