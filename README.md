# React Accordion Component

A simple, reusable Accordion component built with React. It demonstrates:

- Splitting UI into smaller, reusable components.
- Managing state with the `useState` hook.
- Passing content through the `children` prop.
- Handling user interactions to expand and collapse items.

## Demo

Replace this placeholder with a link or embedded video showcasing the Accordion's functionality.

<div align="center">
  <video src="https://github.com/user-attachments/assets/1ebcf0da-97d7-40f5-95b6-9a453b73c62b" controls width="600">
    Seu navegador não suporta o elemento de vídeo.
  </video>
</div>

## Installation

1. Clone this repository:

```bash
git clone [repository-url]
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
