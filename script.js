// --- INITIAL DATA (Resep Bawaan) ---
const initialRecipes = [
    {
        id: "rendang-padang",
        title: "Rendang Daging Sapi",
        region: "Padang, Sumatera Barat",
        category: "Makanan Utama",
        time: 180,
        difficulty: "Rumit",
        servings: 4,
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
        description: "Masakan daging bercita rasa pedas khas Minangkabau yang dimasak perlahan dengan santan dan rempah-rempah.",
        ingredients: [
            "500 gram daging sapi paha",
            "1000 ml santan kental",
            "2 lembar daun kunyit",
            "4 lembar daun jeruk",
            "2 batang serai (memarkan)",
            "3 cm lengkuas (memarkan)",
            "10 siung bawang merah",
            "6 siung bawang putih",
            "100 gram cabai merah keriting"
        ],
        steps: [
            "Haluskan bawang merah, bawang putih, cabai merah, dan lengkuas.",
            "Panaskan sedikit minyak, tumis bumbu halus bersama serai, daun jeruk, dan daun kunyit hingga harum.",
            "Masukkan potong daging sapi, aduk rata hingga berubah warna.",
            "Tuangkan santan kental, aduk terus menerus agar santan tidak pecah.",
            "Masak dengan api kecil hingga air menyusut dan minyak keluar.",
            "Lanjutkan memasak sambil diaduk sesekali hingga warna menjadi cokelat gelap kehitaman."
        ]
    },
    {
        id: "soto-ayam",
        title: "Soto Ayam Lamongan",
        region: "Lamongan, Jawa Timur",
        category: "Sup & Soto",
        time: 60,
        difficulty: "Sedang",
        servings: 4,
        image: "https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&w=800&q=80",
        description: "Soto kuning gurih berkuah kaya rempah dengan taburan bubuk koya renyah yang khas.",
        ingredients: [
            "500 gram dada ayam",
            "2000 ml air",
            "3 batang serai",
            "5 lembar daun jeruk",
            "8 siung bawang merah",
            "5 siung bawang putih",
            "4 butir kemiri sangrai",
            "3 cm kunyit bakar",
            "100 gram soun (seduh air hangat)",
            "2 batang daun bawang (iris)"
        ],
        steps: [
            "Rebus ayam dengan air hingga empuk. Angkat ayam, tiriskan lalu suwir-suwir.",
            "Haluskan bawang merah, bawang putih, kemiri, dan kunyit.",
            "Tumis bumbu halus bersama serai dan daun jeruk hingga harum.",
            "Masukkan tumisan bumbu ke dalam air kaldu rebusan ayam.",
            "Tambahkan garam, gula, dan merica. Masak hingga mendidih.",
            "Tata soun dan ayam suwir di mangkuk, siram dengan kuah panas. Sajikan dengan koya."
        ]
    },
    {
        id: "sate-maranggi",
        title: "Sate Maranggi Purwakarta",
        region: "Purwakarta, Jawa Barat",
        category: "Sate & Bakar",
        time: 45,
        difficulty: "Sedang",
        servings: 4,
        image: "https://images.unsplash.com/photo-1529563021893-cc83c1822830?auto=format&fit=crop&w=800&q=80",
        description: "Sate daging sapi berbalut bumbu rempah manis gurih yang meresap sempurna hingga ke dalam.",
        ingredients: [
            "500 gram daging sapi khas dalam",
            "5 siung bawang putih",
            "8 siung bawang merah",
            "2 sendok makan ketumbar sangrai",
            "2 sendok makan air asam jawa",
            "3 sendok makan kecap manis",
            "1 sendok makan gula merah sisir",
            "1 sendok teh garam"
        ],
        steps: [
            "Potong daging sapi bentuk dadu ukuran 2 cm.",
            "Haluskan bawang merah, bawang putih, dan ketumbar.",
            "Campurkan bumbu halus dengan kecap manis, air asam jawa, gula merah, dan garam.",
            "Marinasi daging dengan bumbu selama minimal 30 menit.",
            "Tusuk daging pada tusuk sate.",
            "Bakar sate di atas arang sambil diolesi sisa bumbu hingga matang beraroma harum."
        ]
    },
    {
        id: "es-pisang-ijo",
        title: "Es Pisang Ijo",
        region: "Makassar, Sulawesi Selatan",
        category: "Dessert & Minuman",
        time: 40,
        difficulty: "Mudah",
        servings: 4,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
        description: "Dessert segar berupa pisang terbungkus adonan hijau, disajikan dengan bubur sumsum dan sirup DHT.",
        ingredients: [
            "4 buah pisang raja matang",
            "150 gram tepung beras",
            "50 gram tepung terigu",
            "500 ml santan encer",
            "50 ml air daun pandan / suji",
            "500 ml santan kental (untuk bubur sumsum)",
            "50 gram tepung beras (untuk bubur sumsum)",
            "Sirup cocopandan / DHT secukupnya",
            "Es batu serut secukupnya"
        ],
        steps: [
            "Kukus pisang raja hingga matang, kupas dan sisihkan.",
            "Campur tepung beras, terigu, santan encer, dan air pandan. Masak dengan api kecil hingga menggumpal dan matang.",
            "Bungkus tiap pisang dengan adonan hijau hingga tertutup rata.",
            "Kukus kembali pisang ijo selama 15 menit.",
            "Buat bubur sumsum: campur santan kental dan tepung beras, masak sambil diaduk hingga mengental halus.",
            "Sajikan potongan pisang ijo di atas bubur sumsum, beri es serut dan sirup merah."
        ]
    }
];

// --- APP STATE ---
let recipes = [];
let activeCategory = "All";
let favorites = [];
let currentServings = 4;
let timerInterval = null;
let timerSeconds = 0;

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    loadRecipes();
    loadFavorites();
    renderCategories();
    renderRecipes();
});

// Load recipes from LocalStorage or Fallback
function loadRecipes() {
    const stored = localStorage.getItem('kn_recipes');
    if (stored) {
        recipes = JSON.parse(stored);
    } else {
        recipes = initialRecipes;
        localStorage.setItem('kn_recipes', JSON.stringify(recipes));
    }
}

// Load favorites
function loadFavorites() {
    const stored = localStorage.getItem('kn_favorites');
    favorites = stored ? JSON.parse(stored) : [];
    updateFavBadge();
}

function updateFavBadge() {
    document.getElementById('favCountBadge').innerText = favorites.length;
}

// Toggle Favorite
function toggleFavorite(id, event) {
    if (event) event.stopPropagation();
    const index = favorites.indexOf(id);
    if (index === -1) {
        favorites.push(id);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('kn_favorites', JSON.stringify(favorites));
    updateFavBadge();
    
    // Re-render based on current view
    if (document.getElementById('homeView').classList.contains('hidden')) {
        // If in detail view, update state UI
        const btn = document.getElementById(`favBtn-${id}`);
        if(btn) {
            const isFav = favorites.includes(id);
            btn.className = `w-10 h-10 rounded-full flex items-center justify-center transition-all ${isFav ? 'bg-red-500 text-white' : 'bg-slate-100 text-slate-400 hover:text-red-500'}`;
        }
    } else {
        renderRecipes();
    }
}

// --- RENDER CATEGORIES ---
function renderCategories() {
    const categories = ["All", ...new Set(recipes.map(r => r.category))];
    const container = document.getElementById('categoryFilters');
    
    container.innerHTML = categories.map(cat => `
        <button onclick="filterCategory('${cat}')" 
            class="px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-amber-600 text-white shadow-md shadow-amber-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">
            ${cat === 'All' ? '📌 Semua' : cat}
        </button>
    `).join('');
}

function filterCategory(cat) {
    activeCategory = cat;
    renderCategories();
    renderRecipes();
}

function showFavorites() {
    activeCategory = 'FAVORITES';
    renderCategories();
    renderRecipes();
}

// --- RENDER RECIPES GRID ---
function renderRecipes() {
    const searchVal = document.getElementById('searchInput').value.toLowerCase();
    const grid = document.getElementById('recipeGrid');
    const emptyState = document.getElementById('emptyState');
    const sectionTitle = document.getElementById('sectionTitle').firstElementChild;

    let filtered = recipes;

    if (activeCategory === 'FAVORITES') {
        filtered = filtered.filter(r => favorites.includes(r.id));
        sectionTitle.innerText = "Resep Favorit Saya";
    } else if (activeCategory !== 'All') {
        filtered = filtered.filter(r => r.category === activeCategory);
        sectionTitle.innerText = `Kategori: ${activeCategory}`;
    } else {
        sectionTitle.innerText = "Daftar Resep";
    }

    if (searchVal) {
        filtered = filtered.filter(r => 
            r.title.toLowerCase().includes(searchVal) || 
            r.region.toLowerCase().includes(searchVal) ||
            r.ingredients.some(ing => ing.toLowerCase().includes(searchVal))
        );
    }

    document.getElementById('recipeCount').innerText = filtered.length;

    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');
    grid.innerHTML = filtered.map(recipe => {
        const isFav = favorites.includes(recipe.id);
        return `
            <div onclick="showDetail('${recipe.id}')" class="bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col group">
                <div class="relative h-48 overflow-hidden bg-slate-100">
                    <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <button onclick="toggleFavorite('${recipe.id}', event)" class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors shadow-md">
                        <i class="fa-solid fa-heart ${isFav ? 'text-red-500' : ''}"></i>
                    </button>
                    <span class="absolute bottom-3 left-3 bg-slate-900/70 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-lg">
                        <i class="fa-solid fa-location-dot text-amber-400 mr-1"></i>${recipe.region}
                    </span>
                </div>
                <div class="p-5 flex-grow flex flex-col justify-between">
                    <div>
                        <span class="text-[11px] font-semibold tracking-wide text-amber-600 uppercase mb-1 block">${recipe.category}</span>
                        <h3 class="font-bold text-slate-900 text-lg group-hover:text-amber-600 transition-colors line-clamp-1">${recipe.title}</h3>
                        <p class="text-slate-500 text-xs mt-1.5 line-clamp-2 font-normal">${recipe.description}</p>
                    </div>
                    <div class="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                        <div class="flex items-center gap-1.5">
                            <i class="fa-regular fa-clock text-amber-500"></i>
                            <span>${recipe.time} mnt</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                            <i class="fa-solid fa-gauge-high text-amber-500"></i>
                            <span>${recipe.difficulty}</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                            <i class="fa-solid fa-user-group text-amber-500"></i>
                            <span>${recipe.servings} porsi</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function handleSearch() {
    renderRecipes();
}

// --- VIEW NAVIGATION ---
function showHome() {
    document.getElementById('homeView').classList.remove('hidden');
    document.getElementById('detailView').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- DETAIL VIEW & PORSI CALCULATOR ---
function showDetail(id) {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    currentServings = recipe.servings;
    const isFav = favorites.includes(recipe.id);

    const container = document.getElementById('detailContent');
    container.innerHTML = `
        <div class="bg-white rounded-3xl overflow-hidden border border-amber-100 shadow-lg">
            <!-- Header Image -->
            <div class="relative h-72 md:h-96 w-full bg-slate-900">
                <img src="${recipe.image}" class="w-full h-full object-cover opacity-90">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <div class="absolute bottom-6 left-6 right-6 text-white max-w-3xl">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">${recipe.category}</span>
                        <span class="bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full">
                            <i class="fa-solid fa-location-dot mr-1 text-amber-400"></i>${recipe.region}
                        </span>
                    </div>
                    <h1 class="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">${recipe.title}</h1>
                </div>
                <button id="favBtn-${recipe.id}" onclick="toggleFavorite('${recipe.id}', event)" class="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-red-500 shadow-xl transition-all ${isFav ? 'text-red-500' : ''}">
                    <i class="fa-solid fa-heart text-xl"></i>
                </button>
            </div>

            <!-- Content Grid -->
            <div class="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                
                <!-- Left Column: Ingredients & Servings -->
                <div class="lg:col-span-1 space-y-6">
                    
                    <!-- Quick Info Stats -->
                    <div class="grid grid-cols-3 gap-3 bg-amber-50/50 p-4 rounded-2xl border border-amber-100 text-center">
                        <div>
                            <p class="text-[11px] text-slate-400 uppercase font-semibold">Waktu</p>
                            <p class="text-sm font-bold text-slate-800 mt-0.5"><i class="fa-regular fa-clock text-amber-600 mr-1"></i>${recipe.time}m</p>
                        </div>
                        <div class="border-x border-amber-200/60">
                            <p class="text-[11px] text-slate-400 uppercase font-semibold">Kesulitan</p>
                            <p class="text-sm font-bold text-slate-800 mt-0.5">${recipe.difficulty}</p>
                        </div>
                        <div>
                            <p class="text-[11px] text-slate-400 uppercase font-semibold">Porsi Dasar</p>
                            <p class="text-sm font-bold text-slate-800 mt-0.5">${recipe.servings} orang</p>
                        </div>
                    </div>

                    <!-- Dynamic Servings Calculator -->
                    <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                                <i class="fa-solid fa-calculator text-amber-600"></i>
                                Hitung Porsi
                            </h3>
                            <div class="flex items-center gap-3 bg-slate-100 rounded-xl px-3 py-1.5">
                                <button onclick="updateServings(${recipe.servings}, -1)" class="text-slate-600 hover:text-amber-600 font-bold text-lg">-</button>
                                <span id="servingsDisplay" class="font-bold text-slate-900 text-sm w-6 text-center">${recipe.servings}</span>
                                <button onclick="updateServings(${recipe.servings}, 1)" class="text-slate-600 hover:text-amber-600 font-bold text-lg">+</button>
                            </div>
                        </div>

                        <h4 class="font-semibold text-xs uppercase tracking-wider text-slate-400 mb-3">Bahan-Bahan Needed</h4>
                        <ul id="ingredientsList" class="space-y-2.5 text-sm">
                            ${generateIngredientsList(recipe.ingredients, recipe.servings, recipe.servings)}
                        </ul>
                    </div>

                    <!-- Kitchen Cooking Timer Widget -->
                    <div class="bg-slate-900 text-white p-5 rounded-2xl shadow-md">
                        <h3 class="font-bold text-sm mb-3 flex items-center gap-2 text-amber-400">
                            <i class="fa-solid fa-stopwatch"></i>
                            Cooking Timer Assitant
                        </h3>
                        <div class="text-center py-2">
                            <div id="timerDisplay" class="text-4xl font-mono font-bold tracking-wider mb-3">00:00</div>
                            <div class="flex justify-center gap-2 text-xs font-semibold">
                                <button onclick="startTimer(5)" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700">+5m</button>
                                <button onclick="startTimer(10)" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700">+10m</button>
                                <button onclick="startTimer(15)" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700">+15m</button>
                                <button onclick="resetTimer()" class="px-3 py-1.5 bg-red-500/20 text-red-300 hover:bg-red-500/30 rounded-lg">Reset</button>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Right Column: Instructions -->
                <div class="lg:col-span-2 space-y-6">
                    <div>
                        <h3 class="text-xl font-bold text-slate-900 mb-2">Tentang Hidangan</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">${recipe.description}</p>
                    </div>

                    <div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center justify-between">
                            <span>Langkah-Langkah Memasak</span>
                            <span class="text-xs font-normal text-slate-400">Tandai langkah yang selesai</span>
                        </h3>
                        <div class="space-y-4">
                            ${recipe.steps.map((step, idx) => `
                                <div onclick="toggleStep(this)" class="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-all cursor-pointer flex gap-4 items-start group">
                                    <div class="w-7 h-7 rounded-full bg-amber-100 text-amber-700 font-bold text-xs flex items-center justify-center shrink-0 group-[.done]:bg-emerald-500 group-[.done]:text-white">
                                        ${idx + 1}
                                    </div>
                                    <p class="text-sm text-slate-700 font-medium leading-relaxed group-[.done]:line-through group-[.done]:text-slate-400">
                                        ${step}
                                    </p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `;

    document.getElementById('homeView').classList.add('hidden');
    document.getElementById('detailView').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Calculate ingredients dynamically
function generateIngredientsList(ingredients, baseServings, targetServings) {
    const ratio = targetServings / baseServings;
    return ingredients.map(ing => {
        // Regex to parse number at start
        const match = ing.match(/^(\d+(?:\.\d+)?)\s*(.*)/);
        if (match) {
            const num = parseFloat(match[1]);
            const rest = match[2];
            const newNum = Math.round((num * ratio) * 10) / 10;
            return `
                <li class="flex items-center gap-2 text-slate-700">
                    <i class="fa-solid fa-circle-check text-amber-500 text-xs"></i>
                    <span><strong>${newNum}</strong> ${rest}</span>
                </li>
            `;
        }
        return `
            <li class="flex items-center gap-2 text-slate-700">
                <i class="fa-solid fa-circle-check text-amber-500 text-xs"></i>
                <span>${ing}</span>
            </li>
        `;
    }).join('');
}

function updateServings(baseServings, change) {
    if (currentServings + change < 1) return;
    currentServings += change;
    document.getElementById('servingsDisplay').innerText = currentServings;
    
    // Refresh current detail ingredients
    const activeRecipeId = document.getElementById('detailContent').querySelector('[id^="favBtn-"]').id.replace('favBtn-', '');
    const recipe = recipes.find(r => r.id === activeRecipeId);
    if(recipe) {
        document.getElementById('ingredientsList').innerHTML = generateIngredientsList(recipe.ingredients, baseServings, currentServings);
    }
}

function toggleStep(el) {
    el.classList.toggle('done');
    el.classList.toggle('bg-emerald-50/40');
    el.classList.toggle('border-emerald-200');
}

// --- COOKING TIMER FUNCTIONS ---
function startTimer(minutes) {
    timerSeconds += minutes * 60;
    updateTimerDisplay();
    
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (timerSeconds > 0) {
                timerSeconds--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
                alert('⏰ Waktu memasak selesai!');
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timerSeconds = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const m = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
    const s = (timerSeconds % 60).toString().padStart(2, '0');
    const display = document.getElementById('timerDisplay');
    if (display) display.innerText = `${m}:${s}`;
}

// --- ADD NEW RECIPE MODAL ---
function openAddModal() {
    document.getElementById('addModal').classList.remove('hidden');
}

function closeAddModal() {
    document.getElementById('addModal').classList.add('hidden');
    document.getElementById('addRecipeForm').reset();
}

function saveNewRecipe(e) {
    e.preventDefault();
    
    const title = document.getElementById('newTitle').value;
    const region = document.getElementById('newRegion').value;
    const category = document.getElementById('newCategory').value;
    const time = parseInt(document.getElementById('newTime').value);
    const difficulty = document.getElementById('newDifficulty').value;
    const servings = parseInt(document.getElementById('newServings').value);
    const image = document.getElementById('newImage').value;
    
    const ingredients = document.getElementById('newIngredients').value.split('\n').filter(i => i.trim() !== '');
    const steps = document.getElementById('newSteps').value.split('\n').filter(s => s.trim() !== '');

    const newRecipe = {
        id: 'user-' + Date.now(),
        title,
        region,
        category,
        time,
        difficulty,
        servings,
        image,
        description: `Resep rumahan ${title} khas ${region} yang lezat dan praktis.`,
        ingredients,
        steps
    };

    recipes.unshift(newRecipe);
    localStorage.setItem('kn_recipes', JSON.stringify(recipes));
    
    renderCategories();
    renderRecipes();
    closeAddModal();
    showHome();
}
