import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "David",
  lastName: "Njoroge",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Africa/Nairobi", 
  languages: ["English"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to my Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Ndegwadavid",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/davidnjoroge6869/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:ndegwa.david@outlook.com",
  },
];

const home = {
  label: "Home",
  title: "David Njoroge's Portfolio",
  description: "Portfolio website showcasing my work as a Software Developer",
  headline: <>Software Developer</>,
  subline: (
    <>
      I'm David Njoroge, a Software Developer at <InlineCode>OptiPlus</InlineCode> and currently working  
      <br /> at a MedTech startup at <InlineCode>Stetha</InlineCode>, where I craft intuitive user experiences.
    </>
  ),
};
const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a passionate Software Developer specializing in building scalable and 
        efficient applications. Currently working at a MedTech startup and OptiPlus, 
        focusing on innovative solutions that enhance user experiences.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Stetha",
        timeframe: "2022 - Haulted",
        role: "Startup Founder | Software Developer",
        achievements: [
          <>Built Stetha, a telehealth platform connecting patients with licensed doctors for virtual consultations.</>,
          <>Developed a secure API-driven backend with JWT authentication, ensuring HIPAA-compliant patient data protection.</>,
          <>Launched an intuitive doctor-patient dashboard for seamless appointment scheduling and real-time video consultations.</>,
          <>Partnered with insurance providers to integrate telehealth coverage, increasing accessibility.</>,
          <>Implemented AI-driven symptom analysis, reducing misdiagnosis rates by 30%.</>,
          <>Scaled platform adoption across multiple regions, facilitating thousands of consultations.</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Optiplus",
        timeframe: "2024 - Present",
        role: "Software Developer & Digital Marketer",
        achievements: [
          <>Developing and optimized the e-commerce platform, increasing online sales by 35%.</>,
          <>Implemented an automated inventory management system, reducing stock mismatches by 40%.</>,
          <>Led digital marketing campaigns across Google Ads, Facebook, and Instagram, boosting customer engagement by 50%.</>,
          <>Integrated AI-powered product recommendations, increasing repeat purchases by 25%.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Nairobi",
        description: (
          <>
            Studied Project Planning and Management, focusing on:
            <ul>
              <li>Strategic planning and execution of large-scale projects.</li>
              <li>Risk assessment, mitigation strategies, and quality assurance.</li>
              <li>Efficient resource allocation and workflow optimization.</li>
              <li>Leadership in cross-functional team management.</li>
            </ul>
          </>
        ),
      },
      {
        name: "Holberton University | ALX",
        description: (
          <>
            Specialized in FullStack Software Engineering with expertise in:
            <ul>
              <li>Scalable architecture and high-performance applications.</li>
              <li>Database management, SQL, and NoSQL solutions.</li>
              <li>DevOps practices, CI/CD, and cloud computing.</li>
              <li>Building and deploying secure web applications.</li>
            </ul>
          </>
        ),
      },
      {
        name: "APISEC University",
        description: (
          <>
            Completed an advanced course on API Penetration Testing, covering:
            <ul>
              <li>Identification and mitigation of API security vulnerabilities.</li>
              <li>Ethical hacking methodologies and security auditing.</li>
              <li>Implementing robust authentication and authorization mechanisms.</li>
              <li>Hands-on experience in securing RESTful and GraphQL APIs.</li>
            </ul>
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Proficient in UI/UX design using Figma, capable of creating high-fidelity prototypes and wireframes at an exceptional speed. Experienced in designing intuitive user interfaces, collaborating with teams, and optimizing designs for seamless user experiences.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "API Penetration Testing",
        description: <>
          Specialized in conducting comprehensive API security assessments and penetration testing to identify vulnerabilities and security weaknesses. 
          Experienced in testing REST, SOAP, and GraphQL APIs using industry-standard tools like Burp Suite, Postman, and custom scripts. 
          Proficient in analyzing authentication mechanisms, authorization flows, data validation, and API endpoint security. 
          Skilled in identifying common API vulnerabilities including OWASP API Top 10, injection flaws, broken authentication, and improper access controls. 
          Expertise in providing detailed remediation guidance and implementing secure API development practices.
        </>,
        images: [],
      },
      {
        title: "Software Development",
        description: <>Comprehensive expertise in full-stack software development, proficient in modern programming languages such as JavaScript, Python, and TypeScript. 
        Experienced in developing and deploying scalable web applications, working with front-end frameworks like React.js, Vue.js, and backend technologies such as Django, Node.js, and Express.js. Strong problem-solving skills, adherence to best coding practices, and agile development methodologies.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
