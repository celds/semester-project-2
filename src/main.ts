import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./scss/main.scss";

import { createNavbar } from "./js/navbar";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
${createNavbar()}
 <main class="container py-5">
 <h1>Student Auction</h1>
 <p class="lead">Welcome to the student auction platform.</p>

    <button class="btn btn-primary">
    Browse listings
    </button>
  </main>
`;
