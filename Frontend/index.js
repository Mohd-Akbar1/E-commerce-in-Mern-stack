
// Inital load the data from api

document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8000/api/')
        .then(response => response.json())
        .then(data => Displaydata(data))
        .catch(error => console.error('Error fetching data:', error));
});


// result from searchbar inputs
document.getElementById('search-box').addEventListener('input', async function() {
    const query = this.value.trim();  
    console.log(query)
    if (query.length >=3) {
        try {
            const response = await fetch(`http://localhost:8000/api/${query}`);
            const data = await response.json();
            Displaydata(data);
            console.log('search',data)
            if(data.length>0){
                document.getElementById('product-list').scrollIntoView({ behavior: "smooth" });

            }
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    } else if (query.length === 0) {
        // Fetch and display original data if the search box is cleared
        try {
            const response = await fetch('http://localhost:8000/api/');
            const data = await response.json();
            Displaydata(data);
            console.log('in-search',data)
        } catch (error) {
            console.error('Error fetching original data:', error);
        }
    }
});


// function to get data and display results
function Displaydata(data) {
    const productList = document.getElementById('product-list');
    let productHTML = '';

    data.forEach(item => {
        productHTML += `
            <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="card h-100 text-center shadow-sm">
                    <img src="${item.image_url}" class="card-img-top img-fluid" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title text-primary">${item.name}</h5>
                        <p class="card-text">$${item.price}</p>
                        <p class="card-text text-muted">${item.description}</p>
                    </div>
                    <button class='btn btn-primary'>Buy</button>
                </div>
            </div>
        `;
    });

    productList.innerHTML = productHTML;
}
