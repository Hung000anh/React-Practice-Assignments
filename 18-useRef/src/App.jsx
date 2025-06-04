import "./App.css";
import MyComponent from "./MyComponent.jsx";

function App() {
  return (
    <div className="app-container">
      <h1>useState()</h1>
      <p>
        <strong>useState</strong> = Causes the component to re-render when the
        state value changes.
      </p>

      <h1>useRef()</h1>
      <p>
        <strong>useRef</strong> = "Use Reference" does not cause re-render when
        its value changes.
        <br />
        Use it when you want a component to "remember" something without
        triggering a new render.
      </p>
      <p>Typical use cases:</p>
      <ol>
        <li>Accessing/Interacting with DOM elements</li>
        <li>Handling focus, animation, and transitions</li>
        <li>Managing timeouts and intervals</li>
      </ol>

      <MyComponent />
    </div>
  );
}

export default App;
