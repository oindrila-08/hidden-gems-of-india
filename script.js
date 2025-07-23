// --- Carousel Logic ---
const carouselImgs = document.querySelectorAll('.carousel-img');
let carouselIndex = 0;

function showCarouselImg(idx) {
    carouselImgs.forEach((img, i) => {
        img.classList.toggle('active', i === idx);
    });
}
function nextCarousel() {
    carouselIndex = (carouselIndex + 1) % carouselImgs.length;
    showCarouselImg(carouselIndex);
}
function prevCarousel() {
    carouselIndex = (carouselIndex - 1 + carouselImgs.length) % carouselImgs.length;
    showCarouselImg(carouselIndex);
}
document.querySelector('.carousel-btn.next').onclick = nextCarousel;
document.querySelector('.carousel-btn.prev').onclick = prevCarousel;
setInterval(nextCarousel, 4000);

// --- Seasonal Destinations Data ---
const seasonsData = {
    spring: [
        {
            name: "Majuli Island, Assam",
            img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
            desc: "World’s largest river island, famed for its satras, mask-making, and serene wetlands.",
            spots: ["Auniati Satra", "Kamalabari Satra", "Mishing Villages", "Bengenaati Satra"]
        },
        {
            name: "Chettinad, Tamil Nadu",
            img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
            desc: "A heritage region known for its palatial mansions, unique cuisine, and antique markets.",
            spots: ["Chettinad Mansions", "Athangudi Tiles", "Karaikudi Market", "Pillaiyarpatti Temple"]
        },
        {
            name: "Kaas Plateau, Maharashtra",
            img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
            desc: "UNESCO World Heritage site, renowned for its seasonal wildflower bloom.",
            spots: ["Kaas Lake", "Thoseghar Waterfall", "Sajjangad Fort"]
        }
    ],
    summer: [
        {
            name: "Gurez Valley, Jammu & Kashmir",
            img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
            desc: "A Himalayan secret with Dardic culture, wooden houses, and breathtaking mountain vistas.",
            spots: ["Habba Khatoon Peak", "Kishanganga River", "Tulail Valley"]
        },
        {
            name: "Tawang, Arunachal Pradesh",
            img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
            desc: "Spiritual hub with a 17th-century monastery, glacial lakes, and Monpa tribal culture.",
            spots: ["Tawang Monastery", "Sela Pass", "Madhuri Lake", "Gorichen Peak"]
        },
        {
            name: "Chopta, Uttarakhand",
            img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
            desc: "Known as the 'Mini Switzerland of India', it offers lush meadows and trekking trails.",
            spots: ["Tungnath Temple", "Chandrashila Peak", "Deoria Tal"]
        }
    ],
    monsoon: [
        {
            name: "Dholavira, Gujarat",
            img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
            desc: "A 5,000-year-old Harappan city in the Rann of Kutch, famed for ancient ruins and stepwells.",
            spots: ["Dholavira Ruins", "Fossil Park", "Rann of Kutch"]
        },
        {
            name: "Agumbe, Karnataka",
            img: "https://cdn.shopify.com/s/files/1/0737/2216/7573/files/Things_to_do_in_Agumbe.png?v=1699100026",
            desc: "‘Cherrapunji of the South’ with lush rainforests, waterfalls, and sunset viewpoints.",
            spots: ["Barkana Falls", "Onake Abbi Falls", "Sunset Point"]
        },
        {
            name: "Alleppey, Kerala",
            img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
            desc: "Venice of the East, famous for tranquil backwaters and houseboat cruises.",
            spots: ["Alappuzha Beach", "Vembanad Lake", "Ambalappuzha Temple"]
        }
    ],
    winter: [
        {
            name: "Ziro Valley, Arunachal Pradesh",
            img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
            desc: "Apatani tribal homeland, known for pine hills, rice fields, and the Ziro Music Festival.",
            spots: ["Tarin Fish Farm", "Meghna Cave Temple", "Pine Grove"]
        },
        {
            name: "Rann of Kutch, Gujarat",
            img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
            desc: "White salt desert, best during Rann Utsav for folk culture and surreal landscapes.",
            spots: ["White Desert", "Kala Dungar", "Kutch Museum"]
        },
        {
            name: "Hampi, Karnataka",
            img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
            desc: "UNESCO World Heritage site, famed for ancient ruins, boulders, and temples.",
            spots: ["Virupaksha Temple", "Vijaya Vittala Temple", "Matanga Hill"]
        }
    ]
};

// --- Inject Destinations on Hover ---
const seasonCards = document.querySelectorAll('.season-card');
const seasonDestDiv = document.getElementById('season-destinations');
function showSeasonDestinations(season) {
    const places = seasonsData[season];
    seasonDestDiv.innerHTML = '';
    places.forEach(place => {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.innerHTML = `
            <img src="${place.img}" alt="${place.name}">
            <h3>${place.name}</h3>
            <p>${place.desc}</p>
            <div class="related-spots">
                ${place.spots.map(spot => `<span>${spot}</span>`).join('')}
            </div>
        `;
        seasonDestDiv.appendChild(card);
    });
}
seasonCards.forEach(card => {
    card.addEventListener('mouseenter', () => showSeasonDestinations(card.dataset.season));
});
// Show spring by default
showSeasonDestinations('spring');

// --- Reviews Data ---
const reviews = [
    {
        stars: 5,
        text: "Majuli was a dream! The satras and the local culture were unforgettable. The arrangements were perfect.",
        reviewer: "Ashwin Modi"
    },
    {
        stars: 5,
        text: "Our Gurez Valley trek was breathtaking. The team ensured our safety and comfort at every step.",
        reviewer: "Gururaj Bannikoppa"
    },
    {
        stars: 4.5,
        text: "Chettinad's mansions and food tours were a highlight of our South India trip. Highly recommended!",
        reviewer: "Manish Phulare"
    },
    {
        stars: 5,
        text: "We loved our trip to Tawang. The monastery and the lakes were magical. Excellent planning.",
        reviewer: "Ankushharnma Sharma"
    },
    {
        stars: 4.8,
        text: "Alleppey houseboat cruise was serene. The hospitality and food were top-notch.",
        reviewer: "Parkavi Kavi"
    },
    {
        stars: 5,
        text: "Dholavira’s ruins are awe-inspiring. Our guide was knowledgeable and friendly.",
        reviewer: "Kate"
    },
    {
        stars: 4.9,
        text: "Kaas Plateau in spring is a riot of colors. The arrangements were smooth and affordable.",
        reviewer: "Mark Tomlinson"
    },
    {
        stars: 5,
        text: "Our Ziro Valley experience was authentic and immersive. Loved the music festival!",
        reviewer: "Juliana Amiri"
    },
    {
        stars: 4.7,
        text: "Rann of Kutch during the Utsav is a must-see. The folk dances and salt desert are mesmerizing.",
        reviewer: "Andrew Sutcliffe"
    },
    {
        stars: 5,
        text: "The Hampi ruins tour was well-organized and fascinating. Great value for money.",
        reviewer: "Victoria Dyer"
    }
];
const reviewsContainer = document.querySelector('.reviews-container');
reviews.forEach(r => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
        <div class="stars">${'★'.repeat(Math.floor(r.stars))}${r.stars % 1 ? '½' : ''}</div>
        <div class="review-text">${r.text}</div>
        <div class="reviewer">- ${r.reviewer}</div>
    `;
    reviewsContainer.appendChild(card);
});

// --- Booking Packages Data ---
const packages = [
    {
        name: "Majuli Island & Assam Culture",
        price: "₹16,500",
        duration: "5 Days / 4 Nights"
    },
    {
        name: "Gurez Valley Himalayan Escape",
        price: "₹22,000",
        duration: "7 Days / 6 Nights"
    },
    {
        name: "Chettinad Heritage Trail",
        price: "₹14,000",
        duration: "4 Days / 3 Nights"
    },
    {
        name: "Tawang & Monpa Tribe Experience",
        price: "₹28,000",
        duration: "8 Days / 7 Nights"
    },
    {
        name: "Dholavira & Rann of Kutch",
        price: "₹18,500",
        duration: "6 Days / 5 Nights"
    },
    {
        name: "Alleppey Backwaters Retreat",
        price: "₹13,000",
        duration: "3 Days / 2 Nights"
    },
    {
        name: "Ziro Valley Music & Culture",
        price: "₹17,500",
        duration: "5 Days / 4 Nights"
    },
    {
        name: "Kaas Plateau Wildflower Tour",
        price: "₹12,000",
        duration: "3 Days / 2 Nights"
    },
    {
        name: "Hampi Ancient Ruins Discovery",
        price: "₹15,500",
        duration: "4 Days / 3 Nights"
    },
    {
        name: "Chopta & Tungnath Trek",
        price: "₹13,500",
        duration: "3 Days / 2 Nights"
    }
];
const packageSelect = document.getElementById('package');
packages.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.name;
    opt.textContent = `${p.name} (${p.duration}, ${p.price})`;
    packageSelect.appendChild(opt);
});

// --- Booking Form Logic ---
const bookingForm = document.getElementById('booking-form');
const bookingSuccess = document.getElementById('booking-success');
bookingForm.onsubmit = function(e) {
    e.preventDefault();
    bookingForm.classList.add('hidden');
    bookingSuccess.classList.remove('hidden');
    setTimeout(() => {
        bookingForm.reset();
        bookingForm.classList.remove('hidden');
        bookingSuccess.classList.add('hidden');
    }, 2500);
};
