/*import "./App.css";
import logo0 from "./assets/ironhack-logo-xs.png";
import logo1 from "./assets/menu-top-xs.png";
import logo2 from "./assets/icon1.png";
import logo3 from "./assets/icon2.png";
import logo4 from "./assets/icon3.png";
import logo5 from "./assets/icon4.png";
import AwesomeButton from "/components/AwesomeButton";
*/
const heading1 = <h1>Say hello to ReactJS</h1>;
const heading2 = <h2>Declarative</h2>;
const heading3 = <h2>Components</h2>;
const heading4 = <h2>Single-Way</h2>;
const heading5 = <h2>Declarative</h2>;
const paragraph1 = (
  <p>
    You will learn how to use the most popular frontend library, and become a
    super Ninja developer.
  </p>
);
const paragraph2 = <p>React makes it painless to create interactive UIs.</p>;
const paragraph3 = (
  <p>Build encapuslated components that manage their state.</p>
);
const paragraph4 = (
  <p>A set of immutable values are passed to the components.</p>
);
const paragraph5 = <p>Statically-typed, designed to run on modern browsers.</p>;

function App() {
  return (
    <>
      <div>
        {logo0}

        {logo1}

        {heading1}

        {logo2}
        {heading2}
        {paragraph2}

        {logo3}
        {heading3}
        {paragraph3}

        {logo4}
        {heading4}
        {paragraph4}

        {logo5}
        {heading5}
        {paragraph5}
      </div>
    </>
  );
}

export default App;
