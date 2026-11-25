export function createNavbar(): string {
  return `
    <nav class="navbar">
    <div class="container">
    <a class="navbar-brand" href="#">Auction</a>
    
    <ul class="navbar-nav ms-auto flex-row gap-4">
    <li class=nav-item">
    <a class="nav-link" href="#">Home</a>
    </li>

    <li class="nav-item">
    <a class="nav-link" href="#">Browse listings</a>
    </li>

     <li class="nav-item">
    <a class="nav-link" href="#">login</a>
    </li>
    </ul>
    </div>
    </nav>
    `;
}
