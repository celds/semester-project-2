import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./scss/main.scss";
import heroImage from "./assets/hero1.png";
import { createNavbar } from "./js/navbar";
import { createListingCard} from "./js/listing-card";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
${createNavbar()}

 <main>
 <section class="hero container py-5">
 <div class="row align-items-center g-5">

 <div class="col-lg-6 hero-content">

 <h1>Find something you want to bid on</h1>

 <p class="hero-description">
 Discover different items listed,
 place your bids and find your next favorite
 </p>

 <a href="#listings" class="btn btn-primary">
 Explore auctions
 </a>
 </div>

 <div class="col-lg-6">
 <img src="${heroImage}" 
 alt="hero image of items" 
 class="img-fluid hero-image"/>
 </div>
 </div>
 </section>

<section id="listings" class="container py-5">
<div id="listing-container" class="row g-4">
</div>
</section>
 </main>
 `;

 const listingContainer = document.querySelector<HTMLDivElement>("#listing-container");
 
 if (listingContainer) {
    listingContainer.innerHTML = createListingCard();
 }