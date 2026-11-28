export function createListingCard(): string {
    return `
    <div class="col-12 col-sm-6 col-lg-4">
    <div class="listing-card">
    <img src="placeholder" alt="auction item"
    class="listing-card-image"
    />
    
    <div class="listing-card-content">
    <h3>Item title</h3>
    <p>Current bid: 100 billion</p>
    <a href="#" class="btn btn-primary">View listing</a>
    </div>
    </div>
    </div>
    `;
}