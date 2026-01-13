import "../styles/languages.css";
import useFadeUp from "./fadeUp";

const languages = [
  { id: 1, name: "English", level: "Fluent" },
  { id: 2, name: "Mandarin", level: "Fluent" },
  { id: 3, name: "Malay", level: "Intermediate" },
];

const Languages: React.FC = () => {
  useFadeUp();
  return (
    <section id="languages" className="languages-section element-fade-up" data-animation="fade-up">
      <h1>Languages</h1>
      <ul className="language-list element-fade-up" data-animation="fade-up">
        {languages.map((lang) => (
          <li key={lang.id}>
            <strong>{lang.name}</strong>: {lang.level}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Languages;
