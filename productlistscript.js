const products = [
            {
                id: 1,
                name: "Golden Sparklers",
                price: 50,
                category: "sparklers",
                description: "Beautiful golden sparklers perfect for celebrations",
                image: "✨"
            },
            {
                id: 2,
                name: "Sky Rocket",
                price: 120,
                category: "rockets",
                description: "High-flying rockets with colorful bursts",
                image: "🚀"
            },
            {
                id: 3,
                name: "Magic Fountain",
                price: 200,
                category: "fountains",
                description: "Spectacular fountain with multiple colors",
                image: "⛲"
            },
            {
                id: 4,
                name: "Catherine Wheel",
                price: 80,
                category: "wheels",
                description: "Spinning wheel of colorful sparks",
                image: "🎡"
            },
            {
                id: 5,
                name: "Thunder Bomb",
                price: 150,
                category: "bombs",
                description: "Loud crackers for festive celebrations",
                image: "💥"
            },
            {
                id: 6,
                name: "Silver Sparklers",
                price: 45,
                category: "sparklers",
                description: "Classic silver sparklers for all ages",
                image: "✨"
            },
            {
                id: 7,
                name: "Multi-Shot Rocket",
                price: 300,
                category: "rockets",
                description: "Multiple shots with different colors",
                image: "🚀"
            },
            {
                id: 8,
                name: "Rainbow Fountain",
                price: 250,
                category: "fountains",
                description: "Fountain with rainbow color effects",
                image: "🌈"
            },
            {
                id: 9,
                name: "Fire Wheel Deluxe",
                price: 180,
                category: "wheels",
                description: "Premium spinning wheel with extended duration",
                image: "🎡"
            },
            {
                id: 10,
                name: "Celebration Bomb",
                price: 100,
                category: "bombs",
                description: "Perfect for grand celebrations",
                image: "🎉"
            },
            {
                id: 11,
                name: "Mini Sparklers Pack",
                price: 30,
                category: "sparklers",
                description: "Pack of small sparklers for kids",
                image: "✨"
            },
            {
                id: 12,
                name: "Power Rocket",
                price: 180,
                category: "rockets",
                description: "High-powered rocket with loud bang",
                image: "🚀"
            }
        ];

        let cart = [];
        let filteredProducts = [...products];

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            displayProducts(products);
            setupEventListeners();
        });

        // Setup event listeners
        function setupEventListeners() {
            // Search functionality
            document.getElementById('search-input').addEventListener('input', handleSearch);
            
            // Category filters
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.addEventListener('click', handleCategoryFilter);
            });
        }

        // Display products
        function displayProducts(productsToShow) {
            const grid = document.getElementById('products-grid');
            
            if (productsToShow.length === 0) {
                grid.innerHTML = `
                    <div class="empty-state">
                        <h3>No products found</h3>
                        <p>Try adjusting your search or filters</p>
                    </div>
                `;
                return;
            }

            grid.innerHTML = productsToShow.map(product => `
                <div class="product-card" data-category="${product.category}">
                    <div class="product-image">${product.image}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">₹${product.price}</div>
                    <p class="product-description">${product.description}</p>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            `).join('');
        }

        // Search functionality
        function handleSearch(e) {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
            
            // Apply current category filter
            const activeCategory = document.querySelector('.category-btn.active').dataset.category;
            filteredProducts = activeCategory === 'all' ? filtered : filtered.filter(p => p.category === activeCategory);
            
            displayProducts(filteredProducts);
        }

        // Category filter functionality
        function handleCategoryFilter(e) {
            // Update active button
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            const category = e.target.dataset.category;
            const searchTerm = document.getElementById('search-input').value.toLowerCase();
            
            // Filter by category
            let filtered = category === 'all' ? products : products.filter(p => p.category === category);
            
            // Apply search filter if there's a search term
            if (searchTerm) {
                filtered = filtered.filter(product => 
                    product.name.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm)
                );
            }
            
            filteredProducts = filtered;
            displayProducts(filteredProducts);
        }

        // Add to cart functionality
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            updateCartUI();
            
            // Show feedback
            const button = event.target;
            const originalText = button.textContent;
            button.textContent = 'Added!';
            button.style.background = '#28a745';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '#ff6b35';
            }, 1000);
        }

        // Update cart UI
        function updateCartUI() {
            const cartCount = document.getElementById('cart-count');
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            
            // Update cart modal
            updateCartModal();
        }

        // Update cart modal
        function updateCartModal() {
            const cartItems = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Your cart is empty</p>';
                cartTotal.textContent = '0';
                return;
            }
            
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>₹${item.price} each</p>
                    </div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button onclick="removeFromCart(${item.id})" style="margin-left: 10px; background: #dc3545; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Remove</button>
                    </div>
                </div>
            `).join('');
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = total;
        }

        // Update quantity
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCartUI();
                }
            }
        }

        // Remove from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartUI();
        }

        // Toggle cart modal
        function toggleCart() {
            const modal = document.getElementById('cart-modal');
            modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
        }

        // Checkout function
        function checkout() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
            
            alert(`Thank you for your order!\n\nItems: ${itemCount}\nTotal: ₹${total}\n\nYour order will be processed shortly.`);
            
            // Clear cart
            cart = [];
            updateCartUI();
            toggleCart();
        }

        // Close modal when clicking outside
        document.getElementById('cart-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                toggleCart();
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });