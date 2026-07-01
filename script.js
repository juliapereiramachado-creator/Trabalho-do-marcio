/* ============================================================
   VELOURA FASHION – script.js
   Funcionalidades: Produtos dinâmicos, Carrinho, Favoritos,
   Pesquisa em tempo real, Filtros, Ordenação, Slider,
   Scroll Reveal, LocalStorage, Formulário de contato
   ============================================================ */

'use strict';

/* ===================================================
   1. BASE DE DADOS DOS PRODUTOS
   =================================================== */
const PRODUCTS = [
  {
    id: 1,
    name: 'Vestido Longo Nude',
    category: 'vestidos',
    price: 189.90,
    oldPrice: 259.90,
    image: 'vestido-longo-nude.jpg',
    badge: 'novo',
    rating: 4.8,
    reviews: 142,
    description: 'Vestido longo fluido em tom nude, perfeito para ocasiões especiais.',
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 2,
    name: 'Vestido Curto Butter',
    category: 'vestidos',
    price: 149.90,
    oldPrice: 199.90,
    image: 'vestido-curto-butter.jpg',
    badge: 'oferta',
    rating: 4.7,
    reviews: 98,
    description: 'Vestido curto na cor butter, estruturado e elegante.',
    isNew: true,
    isBestSeller: true,
  },
  {
    id: 3,
    name: 'Calça Jeans Wide Leg',
    category: 'calcas',
    price: 169.90,
    oldPrice: 219.90,
    image: 'calca-jeans-wide-leg.jpg',
    badge: 'vendido',
    rating: 4.9,
    reviews: 215,
    description: 'Calça jeans wide leg de cintura alta, confortável e estilosa.',
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 4,
    name: 'Calça Jeans Destroyed',
    category: 'calcas',
    price: 139.90,
    oldPrice: 179.90,
    image: 'calca-jeans-destroyed.jpg',
    badge: 'novo',
    rating: 4.6,
    reviews: 87,
    description: 'Calça jeans destroyed com detalhes rasgados, estilo urbano.',
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 5,
    name: 'Calça Jeans Cargo Grafite',
    category: 'calcas',
    price: 159.90,
    oldPrice: 209.90,
    image: 'calca-cargo-grafite.jpg',
    badge: 'novo',
    rating: 4.7,
    reviews: 63,
    description: 'Calça cargo grafite com múltiplos bolsos e design utilitário.',
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 6,
    name: 'Saia Jeans Vintage',
    category: 'saias',
    price: 119.90,
    oldPrice: 159.90,
    image: 'saia-jeans-vintage.jpg',
    badge: 'oferta',
    rating: 4.5,
    reviews: 74,
    description: 'Saia jeans vintage de cintura alta, estilo retrô moderno.',
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 7,
    name: 'Jaqueta de Couro Premium',
    category: 'jaquetas',
    price: 349.90,
    oldPrice: 449.90,
    image: 'jaqueta-couro-premium.jpg',
    badge: 'vendido',
    rating: 4.9,
    reviews: 189,
    description: 'Jaqueta de couro premium com zíperes metálicos, atemporal.',
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 8,
    name: 'Saia Couro Plissada Preta',
    category: 'saias',
    price: 199.90,
    oldPrice: 269.90,
    image: 'saia-couro-plissada.jpg',
    badge: 'novo',
    rating: 4.8,
    reviews: 56,
    description: 'Saia midi de couro plissada preta, elegante e sofisticada.',
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 9,
    name: 'Saia Cargo Bege',
    category: 'saias',
    price: 109.90,
    oldPrice: 149.90,
    image: 'saia-cargo-bege.jpg',
    badge: 'oferta',
    rating: 4.4,
    reviews: 41,
    description: 'Saia cargo bege com bolsos utilitários, casual chic.',
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 10,
    name: 'Camiseta New York',
    category: 'camisetas',
    price: 79.90,
    oldPrice: 99.90,
    image: 'camiseta-new-york.jpg',
    badge: 'vendido',
    rating: 4.7,
    reviews: 312,
    description: 'Camiseta oversized com estampa New York, básica premium.',
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 11,
    name: 'Top Tomara que Caia Branco',
    category: 'tops',
    price: 89.90,
    oldPrice: 119.90,
    image: 'top-tomara-caia-branco.jpg',
    badge: 'novo',
    rating: 4.6,
    reviews: 93,
    description: 'Top tomara que caia branco assimétrico, moderno e delicado.',
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 12,
    name: 'Blusa Butter Charm',
    category: 'blusas',
    price: 129.90,
    oldPrice: 169.90,
    image: 'blusa-butter-charm.jpg',
    badge: 'novo',
    rating: 4.8,
    reviews: 67,
    description: 'Blusa butter com drapeado elegante, feminina e sofisticada.',
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 13,
    name: 'Top Vinho Elegance',
    category: 'tops',
    price: 99.90,
    oldPrice: 129.90,
    image: 'top-vinho-elegance.jpg',
    badge: 'oferta',
    rating: 4.7,
    reviews: 82,
    description: 'Top vinho elegante sem alças, perfeito para looks noturnos.',
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 14,
    name: 'Top Azul Royal',
    category: 'tops',
    price: 89.90,
    oldPrice: 119.90,
    image: 'top-azul-royal.jpg',
    badge: 'novo',
    rating: 4.5,
    reviews: 48,
    description: 'Top azul royal vibrante, moderno e cheio de personalidade.',
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 15,
    name: 'Calça Jogger Hidkat',
    category: 'calcas',
    price: 129.90,
    oldPrice: 169.90,
    image: 'calca-jogger-hidkat.jpg',
    badge: 'oferta',
    rating: 4.6,
    reviews: 105,
    description: 'Calça jogger verde oliva confortável, casual e estilosa.',
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 16,
    name: 'Calça Wide Leg Estrelas',
    category: 'calcas',
    price: 179.90,
    oldPrice: 229.90,
    image: 'calca-wide-leg-estrelas.jpg',
    badge: 'novo',
    rating: 4.9,
    reviews: 134,
    description: 'Calça wide leg azul marinho com estampa de estrelas douradas.',
    isNew: true,
    isBestSeller: true,
  },
  {
    id: 17,
    name: 'Conjunto Elegante Listrado',
    category: 'conjuntos',
    price: 299.90,
    oldPrice: 389.90,
    image: 'conjunto-elegante-listrado.jpg',
    badge: 'vendido',
    rating: 4.9,
    reviews: 201,
    description: 'Conjunto blazer e calça listrado preto e branco, sofisticado.',
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 18,
    name: 'Conjunto Butter Amarelo',
    category: 'conjuntos',
    price: 249.90,
    oldPrice: 319.90,
    image: 'conjunto-butter-amarelo.jpg',
    badge: 'novo',
    rating: 4.8,
    reviews: 78,
    description: 'Conjunto top e calça butter amarelo, leve e elegante.',
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 19,
    name: 'Conjunto Casual Rosa',
    category: 'conjuntos',
    price: 219.90,
    oldPrice: 289.90,
    image: 'conjunto-casual-rosa.jpg',
    badge: 'oferta',
    rating: 4.7,
    reviews: 91,
    description: 'Conjunto camisa e calça rosa blush, casual e feminino.',
    isNew: false,
    isBestSeller: false,
  },
];

/* ===================================================
   2. ESTADO GLOBAL DA APLICAÇÃO
   =================================================== */
let cart = JSON.parse(localStorage.getItem('veloura_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('veloura_favorites')) || [];
let currentCategory = 'todos';
let currentSort = 'novos';
let searchQuery = '';

/* ===================================================
   3. UTILITÁRIOS
   =================================================== */

/** Formata valor em BRL */
function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

/** Calcula desconto percentual */
function calcDiscount(price, oldPrice) {
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}

/** Gera estrelas HTML */
function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/** Salva carrinho no LocalStorage */
function saveCart() {
  localStorage.setItem('veloura_cart', JSON.stringify(cart));
}

/** Salva favoritos no LocalStorage */
function saveFavorites() {
  localStorage.setItem('veloura_favorites', JSON.stringify(favorites));
}

/* ===================================================
   4. RENDERIZAÇÃO DE PRODUTOS
   =================================================== */

/** Cria o HTML de um card de produto */
function createProductCard(product) {
  const isFav = favorites.includes(product.id);
  const discount = calcDiscount(product.price, product.oldPrice);

  const badgeMap = {
    novo:    { cls: 'badge-novo',    label: 'Novo' },
    oferta:  { cls: 'badge-oferta',  label: 'Oferta' },
    vendido: { cls: 'badge-vendido', label: 'Mais Vendido' },
  };
  const badge = badgeMap[product.badge] || null;

  return `
    <article class="product-card reveal" data-id="${product.id}" data-category="${product.category}">
      <div class="product-img-wrapper">
        ${badge ? `<span class="product-badge ${badge.cls}">${badge.label}</span>` : ''}
        <button class="product-fav ${isFav ? 'active' : ''}" data-id="${product.id}" aria-label="Favoritar ${product.name}">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? '#e53935' : 'none'}" stroke="${isFav ? '#e53935' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
        <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy" />
        <div class="product-actions">
          <button class="btn btn-primary add-to-cart-btn" data-id="${product.id}">+ Carrinho</button>
          <button class="btn btn-outline btn-details" data-id="${product.id}" style="background:rgba(0,0,0,0.6);border-color:#fff;color:#fff;">Detalhes</button>
        </div>
      </div>
      <div class="product-info">
        <h3 class="product-name" title="${product.name}">${product.name}</h3>
        <div class="product-prices">
          <span class="product-price">${formatPrice(product.price)}</span>
          <span class="product-price-old">${formatPrice(product.oldPrice)}</span>
          <span class="product-discount">-${discount}%</span>
        </div>
        <div class="product-rating">
          <span class="stars">${renderStars(product.rating)}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
      </div>
    </article>
  `;
}

/** Renderiza lista de produtos em um grid */
function renderProducts(container, products) {
  if (!container) return;
  container.innerHTML = products.map(createProductCard).join('');
  attachProductEvents(container);
  observeReveal();
}

/** Filtra e ordena produtos */
function getFilteredProducts() {
  let list = [...PRODUCTS];

  // Filtro por categoria
  if (currentCategory !== 'todos') {
    list = list.filter(p => p.category === currentCategory);
  }

  // Filtro por pesquisa
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // Ordenação
  switch (currentSort) {
    case 'menor':   list.sort((a, b) => a.price - b.price); break;
    case 'maior':   list.sort((a, b) => b.price - a.price); break;
    case 'vendidos': list.sort((a, b) => b.reviews - a.reviews); break;
    case 'novos':
    default:
      list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  }

  return list;
}

/** Atualiza o grid de produtos na página de produtos */
function updateProductsPage() {
  const grid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  const countEl = document.getElementById('resultsCount');

  if (!grid) return;

  const filtered = getFilteredProducts();

  if (countEl) {
    countEl.textContent = `Exibindo ${filtered.length} produto${filtered.length !== 1 ? 's' : ''}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
  } else {
    if (noResults) noResults.style.display = 'none';
    renderProducts(grid, filtered);
  }
}

/* ===================================================
   5. EVENTOS DOS CARDS DE PRODUTO
   =================================================== */

/** Vincula eventos de clique nos cards de produto */
function attachProductEvents(container) {
  // Botão adicionar ao carrinho
  container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      addToCart(id);
    });
  });

  // Botão favoritar
  container.querySelectorAll('.product-fav').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      toggleFavorite(id, btn);
    });
  });

  // Botão detalhes (abre modal simples)
  container.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      showProductDetail(id);
    });
  });
}

/* ===================================================
   6. CARRINHO
   =================================================== */

/** Adiciona produto ao carrinho */
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }

  saveCart();
  updateCartUI();
  openCart();
  showToast(`"${product.name}" adicionado ao carrinho!`);
}

/** Remove item do carrinho */
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
}

/** Altera quantidade de um item */
function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart();
  updateCartUI();
}

/** Calcula subtotal */
function calcSubtotal() {
  return cart.reduce((sum, item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}

/** Atualiza toda a UI do carrinho */
function updateCartUI() {
  const cartCountEl = document.getElementById('cartCount');
  const cartItemsEl = document.getElementById('cartItems');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartShippingEl = document.getElementById('cartShipping');
  const cartFooterEl = document.getElementById('cartFooter');

  // Contagem total
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartCountEl) cartCountEl.textContent = totalQty;

  if (!cartItemsEl) return;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="cart-empty">Seu carrinho está vazio.</p>';
    if (cartFooterEl) cartFooterEl.style.display = 'none';
    return;
  }

  if (cartFooterEl) cartFooterEl.style.display = 'block';

  // Renderiza itens
  cartItemsEl.innerHTML = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return '';
    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}" />
        <div class="cart-item-info">
          <p class="cart-item-name">${product.name}</p>
          <p class="cart-item-price">${formatPrice(product.price)}</p>
          <div class="cart-item-qty">
            <button class="qty-btn" data-id="${product.id}" data-delta="-1">−</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn" data-id="${product.id}" data-delta="1">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-id="${product.id}" aria-label="Remover">&times;</button>
      </div>
    `;
  }).join('');

  // Eventos dos botões de quantidade e remoção
  cartItemsEl.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      changeQty(parseInt(btn.dataset.id), parseInt(btn.dataset.delta));
    });
  });

  cartItemsEl.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      removeFromCart(parseInt(btn.dataset.id));
    });
  });

  // Subtotal
  const subtotal = calcSubtotal();
  if (cartSubtotalEl) cartSubtotalEl.textContent = formatPrice(subtotal);

  // Frete grátis
  if (cartShippingEl) {
    if (subtotal >= 199.90) {
      cartShippingEl.className = 'cart-shipping free';
      cartShippingEl.textContent = '🚚 Você ganhou frete grátis!';
    } else {
      const remaining = 199.90 - subtotal;
      cartShippingEl.className = 'cart-shipping progress';
      cartShippingEl.textContent = `Faltam ${formatPrice(remaining)} para frete grátis`;
    }
  }
}

/** Abre o carrinho lateral */
function openCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  if (sidebar) sidebar.classList.add('open');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/** Fecha o carrinho lateral */
function closeCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

/* ===================================================
   7. FAVORITOS
   =================================================== */

/** Alterna favorito de um produto */
function toggleFavorite(productId, btn) {
  const idx = favorites.indexOf(productId);
  if (idx === -1) {
    favorites.push(productId);
    if (btn) {
      btn.classList.add('active');
      btn.querySelector('svg').setAttribute('fill', '#e53935');
      btn.querySelector('svg').setAttribute('stroke', '#e53935');
    }
    showToast('Adicionado aos favoritos ❤️');
  } else {
    favorites.splice(idx, 1);
    if (btn) {
      btn.classList.remove('active');
      btn.querySelector('svg').setAttribute('fill', 'none');
      btn.querySelector('svg').setAttribute('stroke', 'currentColor');
    }
    showToast('Removido dos favoritos');
  }
  saveFavorites();
  updateFavCount();
}

/** Atualiza contador de favoritos */
function updateFavCount() {
  const favCountEl = document.getElementById('favCount');
  if (favCountEl) favCountEl.textContent = favorites.length;
}

/* ===================================================
   8. PESQUISA EM TEMPO REAL
   =================================================== */

function initSearch() {
  const input = document.getElementById('searchInput');
  const resultsBox = document.getElementById('searchResults');
  if (!input || !resultsBox) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    searchQuery = q;

    if (!q) {
      resultsBox.classList.remove('active');
      resultsBox.innerHTML = '';
      // Atualiza página de produtos se estiver nela
      updateProductsPage();
      return;
    }

    const matches = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    ).slice(0, 6);

    if (matches.length === 0) {
      resultsBox.innerHTML = '<p style="padding:14px;color:#888;font-size:0.8rem;">Nenhum resultado encontrado.</p>';
    } else {
      resultsBox.innerHTML = matches.map(p => `
        <div class="search-result-item" data-id="${p.id}">
          <img src="${p.image}" alt="${p.name}" />
          <div class="search-result-info">
            <strong>${p.name}</strong>
            <span>${formatPrice(p.price)}</span>
          </div>
        </div>
      `).join('');

      resultsBox.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
          const id = parseInt(item.dataset.id);
          showProductDetail(id);
          resultsBox.classList.remove('active');
          input.value = '';
        });
      });
    }

    resultsBox.classList.add('active');

    // Atualiza página de produtos se estiver nela
    updateProductsPage();
  });

  // Fecha ao clicar fora
  document.addEventListener('click', (e) => {
    if (!input.closest('.search-wrapper').contains(e.target)) {
      resultsBox.classList.remove('active');
    }
  });

  // Pesquisa ao pressionar Enter
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      window.location.href = `produtos.html`;
    }
  });
}

/* ===================================================
   9. FILTROS E ORDENAÇÃO (Página de Produtos)
   =================================================== */

function initFilters() {
  // Botões de categoria
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.cat;
      updateProductsPage();
    });
  });

  // Select de ordenação
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      currentSort = sortSelect.value;
      updateProductsPage();
    });
  }
}

/** Limpa filtros de pesquisa */
function clearSearch() {
  searchQuery = '';
  currentCategory = 'todos';
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  const allBtn = document.querySelector('.cat-btn[data-cat="todos"]');
  if (allBtn) allBtn.classList.add('active');
  updateProductsPage();
}

// Expõe clearSearch globalmente (usada no HTML)
window.clearSearch = clearSearch;

/* ===================================================
   10. SLIDER AUTOMÁTICO
   =================================================== */

function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');

  if (!slides.length) return;

  let current = 0;
  let autoInterval;

  // Cria dots
  if (dotsContainer) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });
  }

  function goToSlide(index) {
    slides[current].classList.remove('active');
    updateDot(current, false);
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    updateDot(current, true);
  }

  function updateDot(index, active) {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll('.slider-dot');
    if (dots[index]) dots[index].classList.toggle('active', active);
  }

  function startAuto() {
    autoInterval = setInterval(() => goToSlide(current + 1), 5000);
  }

  function stopAuto() {
    clearInterval(autoInterval);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      stopAuto();
      goToSlide(current - 1);
      startAuto();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stopAuto();
      goToSlide(current + 1);
      startAuto();
    });
  }

  // Touch/swipe no slider
  const hero = document.getElementById('hero');
  if (hero) {
    let touchStartX = 0;
    hero.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    hero.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        stopAuto();
        goToSlide(diff > 0 ? current + 1 : current - 1);
        startAuto();
      }
    }, { passive: true });
  }

  startAuto();
}

/* ===================================================
   11. SCROLL REVEAL
   =================================================== */

function observeReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

/* ===================================================
   12. HEADER SCROLL
   =================================================== */

function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

/* ===================================================
   13. MENU MOBILE
   =================================================== */

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });

  // Fecha ao clicar em link
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
    });
  });
}

/* ===================================================
   14. MODAL DE DETALHES DO PRODUTO
   =================================================== */

function showProductDetail(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  // Remove modal anterior se existir
  const existing = document.getElementById('productModal');
  if (existing) existing.remove();

  const isFav = favorites.includes(product.id);
  const discount = calcDiscount(product.price, product.oldPrice);

  const modal = document.createElement('div');
  modal.id = 'productModal';
  modal.style.cssText = `
    position:fixed;inset:0;z-index:3000;display:flex;align-items:center;
    justify-content:center;background:rgba(0,0,0,0.6);padding:20px;
    animation:fadeIn 0.3s ease;
  `;

  modal.innerHTML = `
    <div style="background:#fff;border-radius:16px;max-width:700px;width:100%;
      max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,0.3);
      animation:fadeInUp 0.4s ease;">
      <div style="display:grid;grid-template-columns:1fr 1fr;min-height:400px;">
        <div style="position:relative;overflow:hidden;border-radius:16px 0 0 16px;">
          <img src="${product.image}" alt="${product.name}"
            style="width:100%;height:100%;object-fit:cover;" />
        </div>
        <div style="padding:32px 28px;display:flex;flex-direction:column;gap:16px;">
          <button id="modalClose" style="align-self:flex-end;font-size:1.6rem;
            color:#888;background:none;border:none;cursor:pointer;line-height:1;">&times;</button>
          <div>
            <span style="font-size:0.7rem;font-weight:600;letter-spacing:2px;
              text-transform:uppercase;color:#D4AF37;">${product.category.toUpperCase()}</span>
            <h2 style="font-size:1.3rem;font-weight:700;margin-top:6px;">${product.name}</h2>
          </div>
          <p style="font-size:0.85rem;color:#666;line-height:1.7;">${product.description}</p>
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:1.4rem;font-weight:700;">${formatPrice(product.price)}</span>
            <span style="font-size:0.85rem;color:#aaa;text-decoration:line-through;">${formatPrice(product.oldPrice)}</span>
            <span style="font-size:0.75rem;font-weight:700;color:#e53935;
              background:#fdecea;padding:3px 8px;border-radius:4px;">-${discount}%</span>
          </div>
          <div style="display:flex;align-items:center;gap:6px;font-size:0.8rem;">
            <span style="color:#D4AF37;">${renderStars(product.rating)}</span>
            <span style="color:#888;">${product.rating} (${product.reviews} avaliações)</span>
          </div>
          <div style="display:flex;gap:10px;margin-top:auto;">
            <button id="modalAddCart" style="flex:1;padding:12px;background:#000;color:#fff;
              border:2px solid #000;border-radius:8px;font-family:Poppins,sans-serif;
              font-size:0.8rem;font-weight:600;letter-spacing:1px;cursor:pointer;
              transition:all 0.3s;">ADICIONAR AO CARRINHO</button>
            <button id="modalFav" style="width:44px;height:44px;border:2px solid #ddd;
              border-radius:8px;display:flex;align-items:center;justify-content:center;
              cursor:pointer;background:none;transition:all 0.3s;color:${isFav ? '#e53935' : '#ccc'};">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                fill="${isFav ? '#e53935' : 'none'}" stroke="${isFav ? '#e53935' : 'currentColor'}"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  // Fechar modal
  const closeModal = () => {
    modal.remove();
    document.body.style.overflow = '';
  };

  document.getElementById('modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

  // Adicionar ao carrinho via modal
  document.getElementById('modalAddCart').addEventListener('click', () => {
    addToCart(product.id);
    closeModal();
  });

  // Favoritar via modal
  document.getElementById('modalFav').addEventListener('click', (e) => {
    toggleFavorite(product.id, null);
    const btn = document.getElementById('modalFav');
    const isFavNow = favorites.includes(product.id);
    btn.style.color = isFavNow ? '#e53935' : '#ccc';
    btn.querySelector('svg').setAttribute('fill', isFavNow ? '#e53935' : 'none');
    btn.querySelector('svg').setAttribute('stroke', isFavNow ? '#e53935' : 'currentColor');
  });

  // Hover no botão adicionar
  const addBtn = document.getElementById('modalAddCart');
  addBtn.addEventListener('mouseenter', () => {
    addBtn.style.background = '#D4AF37';
    addBtn.style.borderColor = '#D4AF37';
    addBtn.style.color = '#000';
  });
  addBtn.addEventListener('mouseleave', () => {
    addBtn.style.background = '#000';
    addBtn.style.borderColor = '#000';
    addBtn.style.color = '#fff';
  });
}

/* ===================================================
   15. TOAST NOTIFICATION
   =================================================== */

function showToast(message) {
  // Remove toast anterior
  const existing = document.getElementById('toastNotif');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'toastNotif';
  toast.textContent = message;
  toast.style.cssText = `
    position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);
    background:#333;color:#fff;padding:12px 24px;border-radius:50px;
    font-family:Poppins,sans-serif;font-size:0.85rem;font-weight:500;
    z-index:9999;opacity:0;transition:all 0.3s ease;
    box-shadow:0 4px 20px rgba(0,0,0,0.2);white-space:nowrap;
  `;

  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

/* ===================================================
   16. FORMULÁRIO DE CONTATO
   =================================================== */

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = document.getElementById('contactName');
    const email   = document.getElementById('contactEmail');
    const message = document.getElementById('contactMessage');
    let valid = true;

    // Limpa erros
    ['nameError','emailError','messageError'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '';
    });
    [name, email, message].forEach(el => el && el.classList.remove('error'));

    // Validação
    if (!name || !name.value.trim()) {
      const err = document.getElementById('nameError');
      if (err) err.textContent = 'Por favor, informe seu nome.';
      if (name) name.classList.add('error');
      valid = false;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      const err = document.getElementById('emailError');
      if (err) err.textContent = 'Por favor, informe um e-mail válido.';
      if (email) email.classList.add('error');
      valid = false;
    }

    if (!message || !message.value.trim()) {
      const err = document.getElementById('messageError');
      if (err) err.textContent = 'Por favor, escreva sua mensagem.';
      if (message) message.classList.add('error');
      valid = false;
    }

    if (!valid) return;

    // Simula envio
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;
    }

    setTimeout(() => {
      form.reset();
      if (submitBtn) {
        submitBtn.innerHTML = '<span>Enviar Mensagem</span>';
        submitBtn.disabled = false;
      }
      const success = document.getElementById('formSuccess');
      if (success) {
        success.style.display = 'block';
        setTimeout(() => { success.style.display = 'none'; }, 5000);
      }
      showToast('Mensagem enviada com sucesso! ✅');
    }, 1500);
  });
}

/* ===================================================
   17. INICIALIZAÇÃO DA PÁGINA INICIAL (index.html)
   =================================================== */

function initHomePage() {
  // Grid de novidades (primeiros 8 produtos novos)
  const novGrid = document.getElementById('productsGrid');
  if (novGrid) {
    const newProducts = PRODUCTS.filter(p => p.isNew).slice(0, 8);
    renderProducts(novGrid, newProducts);
  }

  // Grid de mais vendidos
  const bestGrid = document.getElementById('bestSellersGrid');
  if (bestGrid) {
    const bestSellers = PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);
    renderProducts(bestGrid, bestSellers);
  }

  // Filtros de categoria na home (filtram o grid de novidades)
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;

      if (!novGrid) return;
      let list = cat === 'todos' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
      list = list.slice(0, 8);
      renderProducts(novGrid, list);
    });
  });
}

/* ===================================================
   18. INICIALIZAÇÃO GLOBAL
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Detecta página atual
  const path = window.location.pathname;
  const isProdutos = path.includes('produtos');
  const isContato  = path.includes('contato');
  const isHome     = !isProdutos && !isContato && !path.includes('sobre');

  // Funcionalidades comuns a todas as páginas
  initHeaderScroll();
  initMobileMenu();
  initSearch();
  updateCartUI();
  updateFavCount();

  // Carrinho
  const cartToggle = document.getElementById('cartToggle');
  const cartClose  = document.getElementById('cartClose');
  const cartOverlay = document.getElementById('cartOverlay');

  if (cartToggle) cartToggle.addEventListener('click', openCart);
  if (cartClose)  cartClose.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // Fechar carrinho com ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeCart();
  });

  // Inicializa por página
  if (isHome) {
    initSlider();
    initHomePage();
  }

  if (isProdutos) {
    initFilters();
    updateProductsPage();
  }

  if (isContato) {
    initContactForm();
  }

  // Scroll reveal global
  observeReveal();

  // Adiciona classe reveal a elementos que precisam
  document.querySelectorAll(
    '.benefit-item, .mvv-card, .number-item, .value-item, .contact-item'
  ).forEach(el => {
    el.classList.add('reveal');
  });

  observeReveal();
});
