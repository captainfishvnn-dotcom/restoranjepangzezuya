// --- INITIAL DATA (Resep Kuliner Jepang dengan Gambar Lokal) ---
const initialRecipes = [
    {
        id: "shoyu-ramen",
        title: "Authentic Shoyu Ramen",
        region: "Tokyo, Jepang",
        category: "Makanan Utama",
        time: 45,
        difficulty: "Sedang",
        servings: 2,
        image: "ramen.jpg",
        description: "Ramen hangat berkuah kaldu shoyu yang gurih disempurnakan dengan mie kenyal, chashu, dan telur ajitsuke.",
        ingredients: [
            "2 porsi mie ramen segar",
            "800 ml kaldu ayam/dashi",
            "4 sendok makan kecap asin Jepang (shoyu)",
            "2 siung bawang putih (haluskan)",
            "1 ruas jahe (iris tipis)",
            "2 buah telur rebus setengah matang (ajitsuke tamago)",
            "2 lembar nori",
            "Daun bawang secukupnya (iris tipis)"
        ],
        steps: [
            "Rebus kaldu ayam bersama bawang putih, jahe, dan shoyu hingga mendidih dan harum.",
            "Di panci terpisah, rebus mie ramen selama 2-3 menit hingga tingkat kematangan kenyal (al dente).",
            "Tiriskan mie dan masukkan ke dalam mangkuk saji yang sudah diberi sedikit minyak bumbu.",
            "Siram dengan kuah kaldu panas yang kaya rasa.",
            "Tata chashu, telur setengah matang, nori, dan irisan daun bawang di atasnya. Sajikan selagi hangat."
        ]
    },
    {
        id: "salmon-sushi-roll",
        title: "Salmon Nigiri & Roll Sushi",
        region: "Osaka, Jepang",
        category: "Makanan Utama",
        time: 50,
        difficulty: "Rumit",
        servings: 3,
        image: "sushi.jpg",
        description: "Sushi gulung segar dengan potongan daging ikan salmon pilihan dan nasi berbalut cuka beras khas Jepang.",
        ingredients: [
            "300 gram beras Jepang (koshihikari)",
            "4 sendok makan cuka beras (rice vinegar)",
            "200 gram salmon segar sashimi grade",
            "2 buah alpukat (iris tipis)",
            "Lembar nori rumput laut secukupnya",
            "Wasabi dan kecap asin (shoyu) pelengkap"
        ],
        steps: [
            "Cuci bersih beras Jepang, lalu masak dengan takaran air pas hingga pulen.",
            "Selagi hangat, campurkan cuka beras dan aduk perlahan secara merata, lalu biarkan dingin.",
            "Ambil selembar nori di atas tikar penggulung (makisu), ratakan nasi di atasnya.",
            "Berikan irisan salmon dan alpukat di bagian tengah.",
            "Gulung dengan padat, lalu potong-potong menggunakan pisau tajam yang dibasahi air.",
            "Sajikan bersama wasabi dan shoyu."
        ]
    },
    {
        id: "osaka-takoyaki",
        title: "Takoyaki Klasik Osaka",
        region: "Osaka, Jepang",
        category: "Street Food",
        time: 30,
        difficulty: "Sedang",
        servings: 4,
        image: "takoyaki.jpg",
        description: "Camilan berbentuk bola-bola kecil berisi potongan gurita kenyal dengan saus takoyaki manis gurih dan katsuobushi.",
        ingredients: [
            "200 gram tepung terigu",
            "1 butir telur",
            "500 ml kaldu dashi dingin",
            "100 gram daging gurita (rebus dan potong dadu)",
            "Daun bawang dan tenkasu (remah tempura) secukupnya",
            "Saus takoyaki, mayonnaise, dan katsuobushi (serutan ikan cakalang)"
        ],
        steps: [
            "Campurkan tepung terigu, telur, dan kaldu dashi aduk hingga menjadi adonan cair halus.",
            "Panaskan cetakan takoyaki dan olesi dengan minyak tipis-tipis.",
            "Tuang adonan ke dalam lubang cetakan hingga penuh meluber.",
            "Masukkan potongan gurita, taburi daun bawang dan tenkasu.",
            "Balikkan adonan secara perlahan menggunakan tusuk sate hingga membentuk bola sempurna dan matang kecokelatan.",
            "Sajikan dengan olesan saus takoyaki, mayonnaise, dan taburan katsuobushi."
        ]
    },
    {
        id: "kitsune-udon",
        title: "Kitsune Udon",
        region: "Kyoto, Jepang",
        category: "Sup & Soto",
        time: 25,
        difficulty: "Mudah",
        servings: 2,
        image: "udon.jpg",
        description: "Mie udon tebal yang kenyal disajikan dalam kuah dashi bening hangat dengan topping abura-age (kulit tahu manis).",
        ingredients: [
            "2 bungkus mie udon siap pakai",
            "600 ml dashi kaldu ikan",
            "2 sendok makan kecap asin jepang",
            "2 lembar abura-age (kulit tahu Jepang manis)",
            "Kamaboko (fish cake Jepang) secukupnya",
            "Daun bawang iris"
        ],
        steps: [
            "Rebus mie udon sebentar di air mendidih, lalu tiriskan.",
            "Panaskan kaldu dashi bersama kecap asin hingga mendidih ringan.",
            "Rebus sebentar kulit tahu (abura-age) di kuah manis terpisah jika belum berbumbu.",
            "Tata udon di mangkuk, tuang kuah dashi panas.",
            "Letakkan abura-age, kamaboko, dan taburan daun bawang di atasnya."
        ]
    },
    {
        id: "matcha-latte",
        title: "Uji Matcha Latte",
        region: "Kyoto, Jepang",
        category: "Dessert & Minuman",
        time: 10,
        difficulty: "Mudah",
        servings: 1,
        image: "matcha.jpg",
        description: "Minuman teh hijau Jepang premium yang kaya antioksidan berpadu dengan kelembutan susu segar.",
        ingredients: [
            "2 sendok teh bubuk matcha berkualitas",
            "30 ml air hangat",
            "200 ml susu cair segar",
            "1 sendok makan sirup gula / madu",
            "Es batu secukupnya"
        ],
        steps: [
            "Seduh bubuk matcha dengan air hangat, lalu kocok menggunakan chasen (pengocok bambu) hingga berbusa halus.",
            "Siapkan gelas berisi es batu dan tuangkan susu cair segar.",
            "Tuang cairan matcha secara perlahan di atas susu untuk memberikan efek gradasi warna yang cantik.",
            "Aduk rata sebelum dinikmati."
        ]
    },
    {
        id: "hojicha-latte",
        title: "Roasted Hojicha Latte",
        region: "Kyoto, Jepang",
        category: "Dessert & Minuman",
        time: 10,
        difficulty: "Mudah",
        servings: 1,
        image: "hojicha.jpg",
        description: "Teh hijau hijau panggang khas Jepang yang memberikan aroma smokey unik berpadu susu creamy.",
        ingredients: [
            "2 sendok teh bubuk hojicha",
            "40 ml air panas",
            "200 ml susu segar",
            "Pemanis sesuai selera"
        ],
        steps: [
            "Larutkan bubuk hojicha dengan air panas hingga tidak menggumpal.",
            "Panaskan atau dinginkan susu sesuai selera (bisa disajikan panas atau es).",
            "Campurkan larutan hojicha dengan susu dan pemanis.",
            "Aduk merata dan siap disajikan."
        ]
    },
    {
        id: "mugicha-tea",
        title: "Mugicha (Japanese Barley Tea)",
        region: "Tokyo, Jepang",
        category: "Dessert & Minuman",
        time: 15,
        difficulty: "Mudah",
        servings: 4,
        image: "mugicha.jpg",
        description: "Teh jelai panggang dingin yang sangat menyegarkan dan bebas kafein, populer diminum saat musim panas di Jepang.",
        ingredients: [
            "4 sendok makan biji/teh barley panggang (mugicha)",
            "1000 ml air",
            "Es batu secukupnya"
        ],
        steps: [
            "Didihkan air di dalam panci.",
            "Masukkan teh barley panggang, lalu kecilkan api dan rebus selama 5-10 menit.",
            "Matikan api dan diamkan hingga suhu ruang, lalu saring.",
            "Simpan di dalam kulkas dan sajikan dingin dengan es batu."
        ]
    },
    {
        id: "miso-soup",
        title: "Traditional Sup Miso",
        region: "Tokyo, Jepang",
        category: "Sup & Soto",
        time: 15,
        difficulty: "Mudah",
        servings: 3,
        image: "sup-miso.jpg",
        description: "Sup tradisional Jepang berbasis kaldu dashi dengan pasta kedelai fermentasi (miso), tofu lembut, dan rumput laut wakame.",
        ingredients: [
            "600 ml kaldu dashi",
            "3 sendok makan pasta miso",
            "1 kotak tahu silken (potong dadu kecil)",
            "2 sendok makan rumput laut wakame kering (rendam air)",
            "1 batang daun bawang (iris halus)"
        ],
        steps: [
            "Didihkan kaldu dashi di dalam panci.",
            "Masukkan rumput laut wakame dan potongan tahu silken.",
            "Ambil sedikit kuah panas ke mangkuk kecil, larutkan pasta miso di dalamnya agar tidak menggumpal.",
            "Kecilkan api kompor sekecil mungkin, lalu tuang larutan miso ke dalam panci utama (jangan sampai mendidih setelah miso masuk agar nutrisinya terjaga).",
            "Taburkan irisan daun bawang sesaat sebelum disajikan."
        ]
    }
];

// --- APP STATE ---
let recipes = [];
let activeCategory = "All";
let favorites = [];
let currentServings = 2;
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
    const stored = localStorage.getItem('zen_recipes');
    if (stored) {
        recipes = JSON.parse(stored);
    } else {
        recipes = initialRecipes;
        localStorage.setItem('zen_recipes', JSON.stringify(recipes));
    }
}

// Load favorites
function loadFavorites() {
    const stored = localStorage.getItem('zen_favorites');
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
    localStorage.setItem('zen_favorites', JSON.stringify(favorites));
    updateFavBadge();
    
    if (document.getElementById('homeView').classList.contains('hidden')) {
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
        sectionTitle.innerText = "Menu Favorit Saya";
    } else if (activeCategory !== 'All') {
        filtered = filtered.filter(r => r.category === activeCategory);
        sectionTitle.innerText = `Kategori: ${activeCategory}`;
    } else {
        sectionTitle.innerText = "Daftar Menu Jepang";
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

            <div class="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div class="lg:col-span-1 space-y-6">
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
                            <p class="text-[11px] text-slate-400 uppercase font-semibold">Porsi</p>
                            <p class="text-sm font-bold text-slate-800 mt-0.5">${recipe.servings} orang</p>
                        </div>
                    </div>

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

                        <h4 class="font-semibold text-xs uppercase tracking-wider text-slate-400 mb-3">Daftar Bahan</h4>
                        <ul id="ingredientsList" class="space-y-2.5 text-sm">
                            ${generateIngredientsList(recipe.ingredients, recipe.servings, recipe.servings)}
                        </ul>
                    </div>

                    <div class="bg-slate-900 text-white p-5 rounded-2xl shadow-md">
                        <h3 class="font-bold text-sm mb-3 flex items-center gap-2 text-amber-400">
                            <i class="fa-solid fa-stopwatch"></i>
                            Cooking Timer Assistant
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

                <div class="lg:col-span-2 space-y-6">
                    <div>
                        <h3 class="text-xl font-bold text-slate-900 mb-2">Tentang Menu</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">${recipe.description}</p>
                    </div>

                    <div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center justify-between">
                            <span>Langkah-Langkah Memasak</span>
                            <span class="text-xs font-normal text-slate-400">Tandai langkah selesai</span>
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

function generateIngredientsList(ingredients, baseServings, targetServings) {
    const ratio = targetServings / baseServings;
    return ingredients.map(ing => {
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
        description: `Resep kuliner ${title} khas ${region} yang lezat dan praktis dibuat di rumah.`,
        ingredients,
        steps
    };

    recipes.unshift(newRecipe);
    localStorage.setItem('zen_recipes', JSON.stringify(recipes));
    
    renderCategories();
    renderRecipes();
    closeAddModal();
    showHome();
}
