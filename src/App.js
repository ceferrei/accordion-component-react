import "./App.css";
import { useState } from "react";

const faqs = [
  {
    title: "What is React State?",
    text: "State in React allows components to manage and update their own data, triggering re-renders when changes occur. It's crucial for dynamic UIs.",
  },
  {
    title: "What are React Props?",
    text: "Props (short for properties) are used to pass data from a parent component to a child component. They are read-only and immutable.",
  },
  {
    title: "What is Component Composition?",
    text: "Component composition is a pattern where you build complex UIs by combining simpler components, promoting reusability and maintainability.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setIsCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setIsCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setIsCurOpen}
        title="Understanding Lifting State Up"
        num={22}
        key="test 1"
      >
        <p>Lifting state up allows React developers to:</p>
        <ul>
          <li>Share state between sibling components.</li>
          <li>Manage state in a common ancestor.</li>
          <li>Improve component communication.</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ curOpen, onOpen, num, title, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
