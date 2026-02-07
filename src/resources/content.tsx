import { About, Home, Newsletter, Person, Social } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Evren",
  lastName: "Vural",
  name: `Evren Vural`,
  role: "Software Engineer",
  avatar: "/images/pp-business.jpeg",
  email: "evrenvural4@gmail.com",
  location: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Turkish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/evrenvural",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/evrenvural/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Medium",
    icon: "medium",
    link: "https://medium.com/@evrenvural",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const about: About = {
  path: "/",
  label: "About",
  title: `${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <div>
        Innovative Software Developer with extensive experience in building
        scalable, high-performance web and mobile applications within the
        <strong>&nbsp;Fintech and SaaS&nbsp;</strong>sectors. I specialize in
        the<strong>&nbsp;JavaScript/TypeScript&nbsp;</strong>ecosystem, with a
        deep focus on architectural modernization and state management. <br />{" "}
        <br /> Currently, I am focused on engineering next-generation trading
        platforms, bridging the gap between legacy reliability and modern
        performance.
      </div>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Trive Credit",
        timeframe: "Nov 2024 - Present",
        role: "Senior Frontend Developer",
        achievements: [
          <>
            Modernized the legacy application architecture by integrating
            <strong>&nbsp;TanStack Query (React Query)</strong>, reducing
            boilerplate code while handling complex side effects and financial
            transactions with<strong>&nbsp;Redux-Saga</strong>.
          </>,
          <>
            Engineered real-time data streaming features using
            <strong>&nbsp;WebSockets</strong>, ensuring millisecond-level
            accuracy for live market updates and trading transactions.
          </>,
          <>
            Revamped the user interface with
            <strong>&nbsp;Tailwind CSS&nbsp;</strong>
            to build a scalable, highly responsive design system, improving both
            development velocity and load performance.
          </>,
          <>
            Optimized the hybrid state management architecture, leveraging
            <strong>&nbsp;Redux&nbsp;</strong>
            for global app state and<strong>&nbsp;React Query&nbsp;</strong>
            for server state to enhance application stability.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          /*           {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          }, */
        ],
      },
      {
        company: "Defter",
        timeframe: "Mar 2023 - Nov 2024",
        role: "Full Stack Developer",
        achievements: [
          <>
            Designed and implemented responsive, modern user interfaces using
            <strong>&nbsp;React&nbsp;</strong>and
            <strong>&nbsp;Tailwind CSS</strong>, optimizing global state
            management with the<strong>&nbsp;Context API</strong>.
          </>,
          <>
            Architected a robust, end-to-end type-safe codebase using
            <strong>&nbsp;TypeScript&nbsp;</strong>and
            <strong>&nbsp;tRPC</strong>, significantly reducing runtime errors
            and accelerating feature delivery between frontend and backend.
          </>,
          <>
            Designed and managed complex database schemas using
            <strong>&nbsp;TypeORM</strong>, ensuring data integrity and
            efficient query performance for data-heavy applications.
          </>,
          <>
            Developed core features for the digital bookkeeping platform,
            enabling secure financial data management and streamlining user
            workflows for account tracking.
          </>,
        ],
        images: [],
      },
      {
        company: "Altogic",
        timeframe: "Jul 2022 - Mar 2023",
        role: "Full Stack Developer",
        achievements: [
          <>
            Architected and developed scalable, type-safe web applications using
            <strong>&nbsp;Next.js</strong>,<strong>&nbsp;React&nbsp;</strong>and
            <strong>&nbsp;TypeScript</strong>, ensuring high code quality and
            maintainability.
          </>,
          <>
            Orchestrated complex global state management and asynchronous data
            flows using<strong>&nbsp;Redux&nbsp;</strong>and
            <strong>&nbsp;Redux-Saga&nbsp;</strong>to handle heavy API
            interactions.
          </>,
          <>
            Delivered multiple end-to-end applications as a Full Stack
            Developer, utilizing Altogic to visually architect backend services,
            databases, and business logic via drag-and-drop workflows.
          </>,
        ],
        images: [],
      },
      {
        company: "Trive Credit",
        timeframe: "Aug 2021 - Jul 2022",
        role: "Frontend Developer",
        achievements: [
          <>
            Built responsive, high-performance trading interfaces and financial
            dashboards using<strong>&nbsp;React&nbsp;</strong>and
            <strong>&nbsp;Redux</strong>, ensuring a seamless user experience
            for investors.
          </>,
          <>
            Managed complex asynchronous state flows and API integrations using
            <strong>&nbsp;Redux-Saga&nbsp;</strong>and
            <strong>&nbsp;Axios&nbsp;</strong>to handle secure transactions and
            data retrieval.
          </>,
        ],
        images: [],
      },
      {
        company: "DogGO",
        timeframe: "Jul 2019 - Aug 2021",
        role: "Frontend Web & Mobile Developer (Part-Time)",
        achievements: [
          <>
            Developed cross-platform mobile applications (iOS/Android) and
            responsive web interfaces using
            <strong>&nbsp;React Native&nbsp;</strong>and
            <strong>&nbsp;React.js</strong>, managing complex application state
            with<strong>&nbsp;Redux&nbsp;</strong>.
          </>,
          <>
            Built high-performance, SEO-friendly web pages and internal
            dashboards using<strong>&nbsp;Next.js&nbsp;</strong>and
            <strong>&nbsp;TypeScript</strong>, ensuring strict type safety and
            code maintainability.
          </>,
          <>
            Implemented real-time GPS tracking and interactive map features,
            enabling pet owners to monitor walks live and receive location-based
            updates.
          </>,
          <>
            Engineered the on-demand booking system and instant notification
            flows (activity logs, photo sharing) to facilitate seamless
            interaction between pet owners and walkers.
          </>,
        ],
        images: [],
      },
      {
        company: "Ford",
        timeframe: "Oct 2020 - Jul 2021",
        role: "Full Stack Developer",
        achievements: [
          <>
            Developed and maintained scalable enterprise web applications using
            the<strong>&nbsp;ASP.NET MVC&nbsp;</strong>framework, ensuring high
            performance and reliability.
          </>,
          <>
            Designed and optimized complex database structures, stored
            procedures, and queries using
            <strong>&nbsp;Oracle Database&nbsp;</strong>and
            <strong>&nbsp;PL/SQL&nbsp;</strong>to support data-driven
            applications.
          </>,
          <>
            Managed software development lifecycles, version control, and
            <strong>&nbsp;CI/CD&nbsp;</strong>pipelines utilizing
            <strong>&nbsp;Azure DevOps&nbsp;</strong>tools to streamline
            deployment processes.
          </>,
          <>
            Collaborated actively within cross-functional teams, participating
            in daily stand-ups and sprint planning sessions under Scrum and
            Agile methodologies.
          </>,
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
        name: "Sakarya University",
        description: (
          <>
            <br />
            Focus: Software Engineering, Algorithms, Data Structures, Database
            Management Systems.
            <br />
            <br />
            Gained a strong theoretical foundation in computer science
            principles while actively applying them in professional
            environments.
            <br />
            <br />
            Successfully balanced a rigorous engineering curriculum with
            full-time employment as a Software Developer, demonstrating
            exceptional time management and dedication.
            <br />
            <br />
            Completed hands-on projects focused on web technologies,
            object-oriented programming (OOP), and software architecture.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Projects",
    skills: [
      {
        title: "Mrs. Firdevs - Aşk-ı Memnu (Mobile Game) | iOS",
        description: (
          <>
            Designed and developed an interactive strategy card game based on
            the popular "Aşk-ı Memnu" series, launching it successfully on the
            App Store.
            <br />
            <br />
            Engineered a complex "swipe-to-choose" game mechanic (similar to
            Reigns), utilizing advanced state management to handle branching
            narratives and character relationships.
            <br />
            <br />
            Optimized the game algorithms to manage multiple game variables
            (secrets, reputation, trust levels) simultaneously, ensuring a
            balanced and bug-free gameplay loop.
            <br />
            <br />
            Managed the entire product lifecycle, including UI/UX design,
            performance improvements, and App Store Optimization (ASO)
            strategies to maximize organic reach.
            <br />
            <br />
            <a
              href="https://apps.apple.com/tr/app/mrs-firdevs-a%C5%9Fk-%C4%B1-memnu/id6736517856"
              target="_blank"
            >
              View on App Store
            </a>
          </>
        ),
        tags: [
          {
            name: "Expo",
            icon: "expo",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Guess On! Forehead Words (Mobile Game) | iOS",
        description: (
          <>
            Developed an engaging social party game utilizing Core Motion
            (Gyroscope & Accelerometer) to implement intuitive gesture-based
            controls (tilt-to-pass/correct) for seamless gameplay.
            <br />
            <br />
            Integrated a robust monetization system using StoreKit, successfully
            implementing auto-renewable subscriptions and non-consumable In-App
            Purchases (IAP) for premium themed decks.
            <br />
            <br />
            Engineered a scalable content architecture to manage 40+ dynamic
            categories and thousands of word assets, ensuring high performance
            and instant load times.
            <br />
            <br />
            <a
              href="https://apps.apple.com/tr/app/guess-on-forehead-words/id6451336570"
              target="_blank"
            >
              View on App Store
            </a>
          </>
        ),
        tags: [
          {
            name: "Expo",
            icon: "expo",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Redux",
            icon: "redux",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

export { person, social, newsletter, about };
