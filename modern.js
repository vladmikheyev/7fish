/**
 * Modern JavaScript for ООО "МИХЕЕВ" Website
 * Рыбная продукция оптом
 */

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Sidebar submenu toggle
function toggleSubmenu(element) {
    const parentItem = element.parentElement;
    if (parentItem) {
        parentItem.classList.toggle('active');
    }
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add fade-in animation on scroll using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.content, .sidebar, .product-card, .category-card').forEach(el => {
        observer.observe(el);
    });

    // Active navigation link based on current page
    updateActiveNavigation();
});

// Update active navigation link
function updateActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'modern_index.html';
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.includes(currentPage.replace('.html', ''))) {
            link.classList.add('active');
        }
    });

    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.includes(currentPage.replace('.html', ''))) {
            link.classList.add('active');
        }
    });
}

// Popup image viewer
function openImagePopup(imgSrc) {
    const overlay = document.createElement('div');
    overlay.className = 'image-popup-overlay';
    overlay.innerHTML = `
        <div class="image-popup-content">
            <span class="image-popup-close" onclick="closeImagePopup()">&times;</span>
            <img src="${imgSrc}" alt="Увеличенное изображение">
        </div>
    `;
    document.body.appendChild(overlay);
    overlay.style.display = 'flex';
}

function closeImagePopup() {
    const overlay = document.querySelector('.image-popup-overlay');
    if (overlay) {
        overlay.remove();
    }
}

// Close popup on overlay click
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('image-popup-overlay')) {
        closeImagePopup();
    }
});

// Form validation helper
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// Add error styling
const style = document.createElement('style');
style.textContent = `
    input.error, textarea.error {
        border: 2px solid #A33D49 !important;
    }
    
    .image-popup-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 9999;
        justify-content: center;
        align-items: center;
    }
    
    .image-popup-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }
    
    .image-popup-content img {
        max-width: 100%;
        max-height: 90vh;
        border-radius: 8px;
    }
    
    .image-popup-close {
        position: absolute;
        top: -40px;
        right: 0;
        font-size: 40px;
        color: white;
        cursor: pointer;
        transition: color 0.3s ease;
    }
    
    .image-popup-close:hover {
        color: #A33D49;
    }
`;
document.head.appendChild(style);

// Console log for debugging
console.log('ООО "МИХЕЕВ" - Modern website scripts loaded successfully');
