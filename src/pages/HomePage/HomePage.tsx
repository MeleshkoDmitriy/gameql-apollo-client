import { Link } from "react-router-dom";
import { Layout } from "../../components/layout/Layout/Layout";
import styles from './HomePage.module.styl'

export default function HomePage() {
  return (
    <Layout>
      <section className={styles.wrapper}>
        <h1 className={styles.wrapperTitle}>GameQL</h1>
        <p className={styles.wrapperText}>
          GameQL is a dynamic platform designed for video game enthusiasts to share reviews and ratings of their favorite games.
          The project is built using a modern technology stack, including <strong>TypeScript</strong> for type safety, and <strong>React</strong> for a responsive and interactive user interface.
        </p>
        <p className={styles.wrapperText}>
          The application leverages <strong>Apollo Client</strong> for efficient state management and seamless communication with our GraphQL API, allowing users to fetch and mutate data effortlessly.
          GraphQL provides a powerful query language that makes data retrieval more flexible and performant compared to traditional REST APIs.
        </p>
        <p className={styles.wrapperText}>
          The backend of the application is developed using <strong>JavaScript</strong> with <strong>Apollo Server</strong>, <strong>Node.js</strong>, and <strong>Express</strong>. This setup ensures a robust and scalable server architecture that can handle multiple requests efficiently.
          The server exposes a GraphQL API that allows for precise data querying, enabling the client to retrieve only the data it needs.
        </p>
        <p className={styles.wrapperText}>
          The aim of GameQL is to create a user-centric experience that not only facilitates game discovery but also fosters community interaction through user reviews and ratings.
          With an emphasis on performance and usability, the project aspires to support gamers in making informed decisions by providing a platform for shared experiences.
        </p>
        <p className={styles.wrapperText}>
          The user interface is crafted with flexibility in mind, utilizing <strong>Stylus</strong> for modular and maintainable styling.
          Users can easily navigate through the application, view detailed game information, and contribute their insights with ease.
        </p>
        <p className={styles.wrapperText}>
          If you're interested in exploring the backend of the project, it can be found on my GitHub at the following link:{' '} 
          <Link className={styles.wrapperTextLink} to="https://github.com/MeleshkoDmitriy/gameql-apollo-server" target="_blank" rel="noopener noreferrer">
            GameQL Apollo Server
          </Link>.
        </p>
      </section>
    </Layout>
  );
}
