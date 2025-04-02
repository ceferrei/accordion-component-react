# React Accordion Component

A simple, reusable Accordion component built with React. It demonstrates:

- Splitting UI into smaller, reusable components.
- Managing state with the `useState` hook.
- Passing content through the `children` prop.
- Handling user interactions to expand and collapse items.

## Demo

Replace this placeholder with a link or embedded video showcasing the Accordion's functionality.

[![Demo Video](https://via.placeholder.com/640x360.png?text=Demo+Video)](#)

## Installation

1. Clone this repository:

```bash
git clone https://github.com/ceferrei/accordion-component-react.git
```

2. Navigate to the project directory:

```
cd accordion-component
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

Usage
Use or modify the existing Accordion and AccordionItem components to suit your needs. Customize the faqs array or add additional items as desired.

```javascript
import Accordion from "./Accordion"; // Adjust the path as necessary

const faqs = [
  {
    title: "What is React State?",
    text: "State in React allows components to manage and update their own data, triggering re-renders when changes occur. It's crucial for dynamic UIs.",
  },
  // ... more items
];

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
```

## License

This project is licensed under the MIT License.
