document.addEventListener('DOMContentLoaded', () => {
    // Categories Data
    const categories = [
        { icon: '🍔', name: 'Burger', active: true },
        { icon: '🍕', name: 'Pizza', active: false },
        { icon: '🍣', name: 'Sushi', active: false },
        { icon: '🍜', name: 'Ramen', active: false },
        { icon: '🥗', name: 'Healthy', active: false },
        { icon: '🍩', name: 'Desserts', active: false }
    ];

    // Meals Data
    const meals = [
        {
            id: 1,
            title: 'Artisan Pepperoni Pizza',
            desc: 'Authentic wood-fired pizza with premium mozzarella and fresh basil.',
            price: '$18.99',
            rating: '4.9',
            image: 'assets/pizza.png'
        },
        {
            id: 2,
            title: 'Premium Sushi Platter',
            desc: 'Fresh assorted nigiri and rolls with our signature soy glaze.',
            price: '$24.50',
            rating: '4.8',
            image: 'assets/sushi.png'
        },
        {
            id: 3,
            title: 'Spicy Miso Ramen',
            desc: 'Rich pork broth with chashu, soft boiled egg, and fresh scallions.',
            price: '$16.00',
            rating: '4.7',
            image: 'assets/ramen.png'
        }
    ];

    // Render Categories
    const categoryGrid = document.getElementById('category-grid');
    if (categoryGrid) {
        categoryGrid.innerHTML = categories.map(cat => `
            <div class="category-card ${cat.active ? 'active' : ''}">
                <div class="category-icon">${cat.icon}</div>
                <h3>${cat.name}</h3>
            </div>
        `).join('');
    }

    // Render Meals
    const menuGrid = document.getElementById('menu-grid');
    if (menuGrid) {
        menuGrid.innerHTML = meals.map(meal => `
            <div class="meal-card glass-card">
                <div class="meal-img-container">
                    <img src="${meal.image}" alt="${meal.title}">
                </div>
                <div class="meal-content">
                    <div class="meal-header">
                        <h3 class="meal-title">${meal.title}</h3>
                        <span class="meal-price">${meal.price}</span>
                    </div>
                    <p class="meal-desc">${meal.desc}</p>
                    <div class="meal-footer">
                        <div class="rating">
                            <span class="star-icon">★</span>
                            <span>${meal.rating}</span>
                        </div>
                        <button class="add-btn" onclick="addToCart(event)">+</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Cart functionality
let cartCount = 0;
const cartCountEl = document.getElementById('cart-count');

window.addToCart = function(e) {
    cartCount++;
    cartCountEl.textContent = cartCount;
    
    // Add small animation to button
    const btn = e.target;
    btn.style.transform = 'scale(0.9)';
    setTimeout(() => {
        btn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 100);
    }, 100);

    // Bounce cart icon
    const cartBtn = document.getElementById('cart-btn');
    cartBtn.style.transform = 'translateY(-5px)';
    setTimeout(() => {
        cartBtn.style.transform = 'translateY(0)';
    }, 200);
};
