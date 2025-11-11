// =====================================
// SportsConnect Universal Script
// =====================================

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.classList.add("solid");
    navbar.classList.remove("transparent");
  } else {
    navbar.classList.add("transparent");
    navbar.classList.remove("solid");
  }
});

// SCROLL FADE-IN ANIMATION
const fadeEls = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  fadeEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields!");
      return;
    }

    alert(`Thanks ${name}! Your message has been sent successfully.`);
    contactForm.reset();
  });
}

// ====================================
// FOOTBALL PLAYER CONNECTION SYSTEM
// ====================================
const footballPlayers = [
  {
    name: "Aarav Sharma",
    position: "Striker",
    club: "Jaipur United FC",
    rating: 4.7,
https://images.unsplash.com/photo-1615784306079-6f6e52d986d4?auto=format&fit=crop&w=800&q=80
  },
  {
    name: "Priya Nair",
    position: "Goalkeeper",
    club: "Kerala Phoenix",
    rating: 4.5,
    https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80
  },
  {
    name: "Rohit Das",
    position: "Center Back",
    club: "Kolkata Titans",
    rating: 4.8,
   https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=800&q=80
  },
  {
    name: "Sanya Mehta",
    position: "Midfielder",
    club: "Delhi Strikers",
    rating: 4.6,
   https://images.unsplash.com/photo-1589987607627-616cac99f9a5?auto=format&fit=crop&w=800&q=80
  },
  {
    name: "Kabir Singh",
    position: "Winger",
    club: "Mumbai Lightning",
    rating: 4.9,
  https://images.unsplash.com/photo-1604537466573-1ec2e6e50e5d?auto=format&fit=crop&w=800&q=80
  }
];

const playerGrid = document.getElementById("playerGrid");
const modal = document.getElementById("connectModal");
const modalTitle = document.getElementById("modalTitle");
const modalMessage = document.getElementById("modalMessage");

// Render players dynamically
function renderFootballPlayers() {
  if (!playerGrid) return;
  playerGrid.innerHTML = "";
  footballPlayers.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("player-card");
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p><strong>Position:</strong> ${p.position}</p>
      <p><strong>Club:</strong> ${p.club}</p>
      <p><strong>Rating:</strong> ⭐ ${p.rating}</p>
      <button class="connect-btn" onclick="openModal('${p.name}', '${p.position}', '${p.club}')">Connect</button>
    `;
    playerGrid.appendChild(card);
  });
}

function openModal(name, position, club) {
  if (!modal) return;
  modal.style.display = "flex";
  modalTitle.textContent = `Connection Sent to ${name} ✅`;
  modalMessage.textContent = `You’ve successfully reached out to ${name}, ${position} at ${club}. They’ll be notified in the SportsConnect app.`;
}

function closeModal() {
  if (modal) modal.style.display = "none";
}

// Initialize only if on the features page
if (playerGrid) renderFootballPlayers();
