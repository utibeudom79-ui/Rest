// ===========================
//  EMBER & SPICE — MENU JS
// ===========================

const foods = [
  // RICE DISHES
  { id: 1, name: "Party Jollof Rice", price: 2500, category: "rice", desc: "Our signature smoky party jollof, slow-cooked over firewood with a rich tomato base, seasoned to perfection. The taste of every Nigerian celebration.", img: "jollof.jpg", protein: "Served with choice of protein", serves: "1 person", prep: "15 mins" },
  { id: 2, name: "Fried Rice", price: 2500, category: "rice", desc: "Light, flavourful fried rice tossed with mixed vegetables, liver, and seasoned chicken stock. A classic favourite.", img: "friedrice.jpg", protein: "With vegetables & liver", serves: "1 person", prep: "15 mins" },
  { id: 3, name: "White Rice & Stew", price: 3000, category: "rice", desc: "Perfectly cooked long-grain white rice paired with our house-made tomato and pepper stew, slow-simmered with assorted meat.", img: "stewfish.jpg", protein: "With assorted meat stew", serves: "1 person", prep: "10 mins" },
  { id: 4, name: "Coconut Rice", price: 2800, category: "rice", desc: "Aromatic rice cooked in fresh coconut milk, subtly sweet and beautifully fragrant. A coastal delicacy.", img: "coconut.jpg", protein: "Served with fried plantain", serves: "1 person", prep: "20 mins" },
  { id: 5, name: "Ofada Rice & Sauce", price: 3000, category: "rice", desc: "Unprocessed local Ofada rice served with a spicy ayamase sauce loaded with assorted offal and peppers. A true Nigerian delicacy.", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80&fit=crop", protein: "With ayamase sauce", serves: "1 person", prep: "20 mins" },
  { id: 6, name: "Rice and Fish", price: 3000, category: "rice", desc: "White rice served alongside our perfectly seasoned fried or grilled fish, with a side of fresh pepper sauce.", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80&fit=crop", protein: "With fried or grilled fish", serves: "1 person", prep: "15 mins" },

  // SOUPS
  { id: 7, name: "Egusi Soup", price: 2500, category: "soups", desc: "Freshly ground melon seeds slow-cooked with palm oil, assorted meats, and a blend of native spices. Rich, hearty, and deeply satisfying.", img: "melon.jpg", protein: "With assorted meat & stockfish", serves: "1 person", prep: "20 mins" },
  { id: 8, name: "Ogbono Soup", price: 3500, category: "soups", desc: "Wild mango seed soup with a natural draw that coats every bite. Cooked with palm oil, peppers, and a generous helping of assorted meat.", img: "ogbono.jpg", protein: "With assorted meat & dry fish", serves: "1 person", prep: "20 mins" },
  { id: 9, name: "Afang Soup", price: 4000, category: "soups", desc: "A prized Akwa Ibom delicacy made with wild spinach (afang leaves) and waterleaf, rich with periwinkle, palm oil, and assorted proteins.", img: "afang.jpg", protein: "With periwinkle & assorted meat", serves: "1 person", prep: "25 mins" },
  { id: 10, name: "Okra Soup", price: 4000, category: "soups", desc: "Fresh okra soup with a thick, satisfying draw. Packed with assorted meat, dry fish, and crayfish for an authentic taste.", img: "okra.jpg", protein: "With assorted meat & crayfish", serves: "1 person", prep: "20 mins" },
  { id: 11, name: "White Soup (Afia Efere)", price: 5000, category: "soups", desc: "The pride of Akwa Ibom cuisine. A delicate, pale soup made with fresh goat meat, periwinkle, and native spices. Elegant and unforgettable.", img: "afia.jpg", protein: "With fresh goat meat & periwinkle", serves: "1 person", prep: "30 mins" },
  { id: 12, name: "Edikan Ikong Soup", price: 4500, category: "soups", desc: "A nutritious, flavour-packed soup made with pumpkin leaves and waterleaf, loaded with assorted meats, seafood, and rich palm oil.", img: "images6.jpg", protein: "With assorted seafood & meat", serves: "1 person", prep: "25 mins" },

  // PROTEINS
  { id: 13, name: "Grilled Chicken", price: 3500, category: "proteins", desc: "Whole chicken pieces marinated overnight in our secret spice blend, then grilled to juicy perfection with a smoky char.", img: "https://images.unsplash.com/photo-1610057098265-05f2bcbedd55?w=600&q=80&fit=crop", protein: "Full or half portion", serves: "1-2 persons", prep: "25 mins" },
  { id: 14, name: "Chicken Sauce", price: 2000, category: "proteins", desc: "Tender chicken pieces in a rich, spiced tomato and pepper sauce. Perfect as a side with any rice dish.", img: "sauce.jpg", protein: "2-3 pieces per serving", serves: "1 person", prep: "15 mins" },
  { id: 15, name: "Fried Fish", price: 2500, category: "proteins", desc: "Freshly seasoned whole fish, deep-fried to a perfect golden crisp on the outside while staying moist and tender inside.", img: "images577.jpeg", protein: "One whole medium fish", serves: "1 person", prep: "15 mins" },

  //  SIDES
  { id: 16, name: "Plantain & Egg Sauce", price: 1800, category: "swallows", desc: "Sweet ripe plantain, fried golden and paired with a spicy tomato and egg sauce. A beloved Nigerian comfort meal.", img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80&fit=crop", protein: "With 2 eggs & peppers", serves: "1 person", prep: "15 mins" },
  { id: 17, name: "Chops (Puff Puff / Chin Chin)", price: 800, category: "swallows", desc: "Light, airy puff puff or crunchy chin chin — made fresh daily. Perfect as a snack or starter.", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80&fit=crop", protein: "Portion for 1", serves: "1 person", prep: "10 mins" },

  // FAST FOOD
  { id: 18, name: "Pizza", price: 2500, category: "fastfood", desc: "Freshly baked pizza with a crispy base, rich tomato sauce, melted cheese, and your choice of toppings.", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&fit=crop", protein: "Choice of toppings", serves: "1 person", prep: "20 mins" },
  { id: 19, name: "Shawarma", price: 2000, category: "fastfood", desc: "Soft tortilla wrap filled with seasoned chicken or beef, fresh vegetables, coleslaw, and our signature garlic sauce.", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80&fit=crop", protein: "Chicken or beef", serves: "1 person", prep: "10 mins" },
  { id: 20, name: "Cookies", price: 400, category: "fastfood", desc: "Freshly baked soft cookies with chocolate chips. A sweet ending or a quick treat.", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80&fit=crop", protein: "Pack of 3", serves: "1 person", prep: "5 mins" },

  // DRINKS
  { id: 21, name: "Coca Cola", price: 400, category: "drinks", desc: "Ice-cold Coca-Cola, the classic refresher.", img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600&q=80&fit=crop", protein: "35cl can", serves: "1 person", prep: "Ready" },
  { id: 22, name: "Sprite", price: 400, category: "drinks", desc: "Crisp and refreshing lemon-lime Sprite, served ice cold.", img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=600&q=80&fit=crop", protein: "35cl can", serves: "1 person", prep: "Ready" },
  { id: 23, name: "Strawberry Yoghurt", price: 600, category: "drinks", desc: "Creamy strawberry-flavoured yoghurt drink, smooth and naturally refreshing.", img: "imagesyh.jpg", protein: "300ml bottle", serves: "1 person", prep: "Ready" },
  { id: 24, name: "Eva Water (50cl)", price: 200, category: "drinks", desc: "Pure, clean bottled water — the perfect accompaniment to any meal.", img: "download.jpg", protein: "50cl bottle", serves: "1 person", prep: "Ready" },

  // COMBOS
  { id: 25, name: "Special Combo", price: 4500, category: "combos", desc: "Our best-value combo: Jollof Rice + Grilled Chicken + a soft drink of your choice. Everything you need in one satisfying order.", img: "imagessp.jpg", protein: "Rice + chicken + drink", serves: "1 person", prep: "20 mins" },
];

const categories = [
  { id: "all", label: "All", icon: "🍽️" },
  { id: "rice", label: "Rice Dishes", icon: "🍚" },
  { id: "soups", label: "Soups", icon: "🥘" },
  { id: "proteins", label: "Proteins", icon: "🍗" },
  { id: "swallows", label: "Sides", icon: "🌯" },
  { id: "fastfood", label: "Fast Food", icon: "🍕" },
  { id: "drinks", label: "Drinks", icon: "🥤" },
  { id: "combos", label: "Combos", icon: "⭐" },
];

const catLabels = {
  rice: "🍚 Rice Dishes",
  soups: "🥘 Soups",
  proteins: "🍗 Proteins",
  swallows: "🌯 Sides & Swallows",
  fastfood: "🍕 Fast Food",
  drinks: "🥤 Drinks",
  combos: "⭐ Special Combos",
};

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('emberCart')) || [];

function saveCart() {
  localStorage.setItem('emberCart', JSON.stringify(cart));
}

function updateCartUI() {
  const el = document.getElementById('cartCount');
  if (el) el.textContent = cart.length;
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function addToCart(id) {
  const food = foods.find(f => f.id === id);
  if (!food) return;
  cart.push(food);
  saveCart();
  updateCartUI();
  showToast(food.name + ' added to cart! 🛒');
}

function orderNow(id) {
  const inCart = cart.find(f => f.id === id);
  if (!inCart) {
    showToast('Please add to cart first.');
    return;
  }
  const food = foods.find(f => f.id === id);
  const msg = encodeURIComponent(`Hi Ember & Spice! 🍽️\nI'd like to order: ${food.name} — ₦${food.price.toLocaleString()}`);
  window.open(`https://wa.me/2347075256299?text=${msg}`, '_blank');
}

// Render category tabs
function renderTabs(activeId) {
  const wrap = document.getElementById('catTabs');
  if (!wrap) return;
  wrap.innerHTML = '';
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-tab' + (cat.id === activeId ? ' active' : '');
    btn.textContent = cat.icon + ' ' + cat.label;
    btn.onclick = () => {
      renderMenu(cat.id);
      renderTabs(cat.id);
      scrollToMenu();
    };
    wrap.appendChild(btn);
  });
}

function scrollToMenu() {
  const el = document.getElementById('menuBody');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Render food grid
function renderMenu(filterCat, searchVal) {
  const wrap = document.getElementById('menuBody');
  if (!wrap) return;
  wrap.innerHTML = '';

  let filtered = foods;
  if (filterCat && filterCat !== 'all') filtered = foods.filter(f => f.category === filterCat);
  if (searchVal) filtered = filtered.filter(f => f.name.toLowerCase().includes(searchVal.toLowerCase()));

  if (filtered.length === 0) {
    wrap.innerHTML = '<p style="text-align:center;padding:60px 0;color:var(--text-muted);">No dishes found matching your search.</p>';
    return;
  }

  // Group by category
  const grouped = {};
  filtered.forEach(f => {
    if (!grouped[f.category]) grouped[f.category] = [];
    grouped[f.category].push(f);
  });

  Object.entries(grouped).forEach(([cat, items]) => {
    const section = document.createElement('div');
    section.className = 'cat-section';
    section.innerHTML = `<h2 class="cat-heading">${catLabels[cat]} <span>${items.length} item${items.length > 1 ? 's' : ''}</span></h2>`;
    const grid = document.createElement('div');
    grid.className = 'food-grid';
    items.forEach(food => {
      grid.innerHTML += `
        <div class="food-card" onclick="goToDetail(${food.id})">
          <div class="food-card-img">
            <img src="${food.img}" alt="${food.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=60'">
          </div>
          <div class="food-card-body">
            <p class="food-name">${food.name}</p>
            <p class="food-price">₦${food.price.toLocaleString()}.00</p>
            <div class="food-btns">
              <button class="btn-cart" onclick="event.stopPropagation(); addToCart(${food.id})">+ Add to Cart</button>
              <button class="btn-order" onclick="event.stopPropagation(); orderNow(${food.id})">Order Now</button>
            </div>
          </div>
        </div>
      `;
    });
    section.appendChild(grid);
    wrap.appendChild(section);
  });
}

function goToDetail(id) {
  window.location.href = `food-detail.html?id=${id}`;
}

// INIT MENU PAGE
function initMenuPage() {
  renderTabs('all');
  renderMenu('all');
  updateCartUI();

  const search = document.getElementById('searchBar');
  if (search) {
    search.addEventListener('input', function() {
      renderMenu('all', this.value);
      renderTabs('all');
    });
  }
}

// ===========================
//  FOOD DETAIL PAGE
// ===========================
function initDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const food = foods.find(f => f.id === id);

  if (!food) {
    document.body.innerHTML = '<p style="padding:100px 20px;text-align:center;">Food not found. <a href="menu.html">Back to menu</a></p>';
    return;
  }

  document.title = food.name + ' — Ember & Spice';

  document.getElementById('detailImg').src = food.img;
  document.getElementById('detailImg').alt = food.name;
  document.getElementById('detailName').textContent = food.name;
  document.getElementById('detailPrice').textContent = '₦' + food.price.toLocaleString() + '.00';
  document.getElementById('detailDesc').textContent = food.desc;
  document.getElementById('specProtein').textContent = food.protein;
  document.getElementById('specServes').textContent = food.serves;
  document.getElementById('specPrep').textContent = food.prep;

  const catName = catLabels[food.category] || food.category;
  document.getElementById('specCat').textContent = catName.replace(/^[^ ]+ /, '');

  document.getElementById('detailAddBtn').onclick = () => {
    addToCart(id);
    showToast(food.name + ' added to cart! 🛒');
  };

  document.getElementById('detailOrderBtn').onclick = () => {
    const inCart = cart.find(f => f.id === id);
    if (!inCart) {
      addToCart(id);
    }
    const msg = encodeURIComponent(`Hi Ember & Spice! 🍽️\nI'd like to order: ${food.name} — ₦${food.price.toLocaleString()}`);
    window.open(`https://wa.me/2347075256299?text=${msg}`, '_blank');
  };

  updateCartUI();
}
