import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import './Custom.css'

createRoot(document.getElementById("root")).render(
  <div>
    <Container>
      <HelloWorld />
    </Container>
  </div>
);
