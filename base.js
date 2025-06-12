
fetch('https://api.example.com/featured-articles')
    .then(response => response.json())
    .then(data => {
        const featuredArticlesSection = document.getElementById('featured-articles');
        featuredArticlesSection.querySelector('ul').innerHTML = data.map(article => `<li><a href="${article.url}">${article.title}</a></li>`).join('');
    });

    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Handle button click event here
            console.log('Book added to cart!');
        });
    });


