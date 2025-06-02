    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.remove('-translate-x-full');
      body.classList.add('menu-open');
    });

    // Close mobile menu
    closeMenuButton.addEventListener('click', () => {
      mobileMenu.classList.add('-translate-x-full');
      body.classList.remove('menu-open');
    });

    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
        body.classList.remove('menu-open');
      });
    });

    // Update active link (for demonstration)
    const navLinks = document.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all links
        navLinks.forEach(l => {
          l.classList.remove('text-white', 'font-medium', 'border-l-4', 'border-blue-500', 'pl-4');
          l.classList.add('text-gray-400');
        });

        // Add active class to clicked link
        link.classList.remove('text-gray-400');
        link.classList.add('text-white', 'font-medium');

        // For mobile menu
        if (window.innerWidth < 768) {
          link.classList.add('border-l-4', 'border-blue-500', 'pl-4');
        }
      });
    });
  






const cardData = [
  {
    title: "Operational Efficiency",
    icon: "./images/c1.png",
    hoverImage: "./images/i1.png",
    lines: [
      "Workforce Training using immersiveAR modules",
      "AI Personal Assistant in AR for real-time task support and info retrieval",
    ],
    hasBlueShadow: true, // Flag for blue shadow
  },
  {
    title: "Industrial or Manufacturing",
    icon: "./images/manufect-card-icon.svg",
    hoverImage: "./images/i2.png",
    lines: [
      "Safety Protocol Simulations in AR",
      "Digital User Manuals and Maintenance Docs in 3D",
      "Factory Navigation with real-time spatial guidance",
    ],
    hasBlueShadow: false,
  },
  {
    title: "Education",
    icon: "./images/education-card-icon.svg",
    hoverImage: "./images/i3.jpg",
    lines: [
      "Alphabuddy: AR Book Companion for Students",
      "3D Math Visualizer for better conceptual learning",
    ],
    hasBlueShadow: true,
  },
  {
    title: "Gaming",
    icon: "./images/c4.png",
    hoverImage: "./images/i4.png",
    lines: [
      "SpellClash: AR-based Magical Duel Game",
      "Battle Arena: Multiplayer Competitive Spatial Gaming",
    ],
    hasBlueShadow: true,
  },
  {
    title: "Consumer-Tech",
    icon: "./images/c5.png",
    hoverImage: "./images/i5.jpg",
    lines: [
      "AI-Powered Map Scanner",
      "AR Guided Tours for Historic Sites and Attractions",
      "Expert On-Call AR Assistance (e.g., Mechanic in AR)",
      "AR Shopping Interface (try before you buy)",
    ],
    hasBlueShadow: false,
  },
  {
    title: "Architecture & Construction",
    icon: "./images/c6.png",
    hoverImage: "./images/i6.png",
    lines: [
      "Interactive Interior Design Tool (Furniture & Layout Simulation)",
      "3D CAD Systems Enhanced with Spatial Computing",
    ],
    hasBlueShadow: false,
  },
];

const cardsContainer = document.getElementById("cards-container");

cardData.forEach((card) => {
  const cardEl = document.createElement("div");
  cardEl.className =
    "flex-shrink-0 w-full h-90 relative group overflow-hidden bg-black border border-[#333333] shadow-md transition-all duration-300";

  cardEl.innerHTML = `
        <!-- Hover Image Background -->
        <div class="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-0" style="background-image: url('${
          card.hoverImage
        }')"></div>

        <!-- Content Area -->
        <div class="relative z-10 h-full w-full flex flex-col justify-start p-4 text-black group-hover:text-white transition-all duration-500">
            <!-- Top Icon & Title -->
            <div class="flex flex-col space-y-2">
                <div class=" rounded-full flex items-center justify-start">
                    <img src="${card.icon}" alt="${
    card.title
  } icon" class="w-20" />
                </div>
                <h3 class="text-lg font-semibold text-white group-hover:text-white group-hover:bg-black/80 px-3 py-1.5 w-fit rounded-full leading-tight">
                    ${card.title}
                </h3>
            </div>
            
            <!-- Bottom Tags -->
            <div class="mt-2 ">
                ${card.lines
                  .map(
                    (line) => `
<p class="text-sm text-gray-400 mb-2 rounded-full px-3 py-1.5 w-fit 
           bg-[#303030] group-hover:bg-white/80 group-hover:text-black transition-all duration-300">
                    ${line}
                </p>`
                  )
                  .join("")}
            </div>
        </div>
    `;

  cardsContainer.appendChild(cardEl);
});

























document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu elements
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const closeMenuButton = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  // Initialize all functionality
  function init() {
    setupMobileMenu();
    setupDropdowns();
    setupNavigation();
    setupContactButtons();
  }

  // Mobile menu functionality
  function setupMobileMenu() {
    if (!mobileMenuButton || !closeMenuButton || !mobileMenu) return;

    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.remove('-translate-x-full');
      mobileMenu.classList.add('translate-x-0');
      document.body.style.overflow = 'hidden';
    });

    closeMenuButton.addEventListener('click', function() {
      closeMobileMenu();
    });
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('-translate-x-full');
    document.body.style.overflow = '';
  }

  // Dropdown functionality
  function setupDropdowns() {
    // Desktop dropdown hover functionality
    const desktopDropdowns = document.querySelectorAll('.relative.group');
    desktopDropdowns.forEach(dropdown => {
      const button = dropdown.querySelector('button');
      const menu = dropdown.querySelector('.absolute');

      if (button && menu) {
        // Handle click on dropdown items
        dropdown.querySelectorAll('a.nav-link').forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').replace('#', '');
            scrollToSection(targetId);
          });
        });
      }
    });

    // Mobile dropdown toggle functionality
    document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
      const button = dropdown.querySelector('button');
      const menu = dropdown.querySelector('.mobile-dropdown-content');

      if (button && menu) {
        button.addEventListener('click', function(e) {
          e.stopPropagation();
          const isActive = dropdown.classList.contains('active');
          
          // Close all other dropdowns first
          document.querySelectorAll('.mobile-dropdown').forEach(d => {
            if (d !== dropdown) d.classList.remove('active');
          });
          
          // Toggle current dropdown
          dropdown.classList.toggle('active');
          
          // Rotate arrow icon
          const icon = button.querySelector('svg');
          if (icon) {
            icon.style.transform = isActive ? '' : 'rotate(180deg)';
          }
        });

        // Handle click on mobile dropdown items
        dropdown.querySelectorAll('a.nav-link').forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').replace('#', '');
            scrollToSection(targetId);
            closeMobileMenu();
            dropdown.classList.remove('active');
            const icon = button.querySelector('svg');
            if (icon) icon.style.transform = '';
          });
        });
      }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.group') && !e.target.closest('.mobile-dropdown')) {
        document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
          dropdown.classList.remove('active');
          const icon = dropdown.querySelector('svg');
          if (icon) icon.style.transform = '';
        });
      }
    });
  }

  // Navigation functionality
  function setupNavigation() {
    const allNavLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    if (allNavLinks.length === 0 || sections.length === 0) return;

    // Click handler for all nav links (including dropdown items)
    allNavLinks.forEach(link => {
      // Skip if it's a dropdown parent button
      if (link.tagName === 'BUTTON' && (link.closest('.relative.group') || link.closest('.mobile-dropdown'))) return;
      
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.replace('#', '') || 
                        this.getAttribute('data-section');
        if (targetId) {
          scrollToSection(targetId);
          closeMobileMenu();
        }
      });
    });

    // Update active link based on scroll position
    function updateActiveLink() {
      let currentSection = '';
      const scrollPosition = window.pageYOffset + 200;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });

      allNavLinks.forEach(link => {
        // Skip dropdown parent buttons
        if (link.tagName === 'BUTTON' && (link.closest('.relative.group') || link.closest('.mobile-dropdown'))) return;

        // Reset all link styles first
        link.classList.remove('active', 'text-white', 'font-medium', 'border-l-4', 'border-blue-500');
        link.classList.add('text-gray-400');

        const linkSection = link.getAttribute('data-section') || 
                          link.getAttribute('href')?.replace('#', '');

        if (linkSection === currentSection) {
          link.classList.add('active');
          
          // Special handling for mobile menu items (including dropdown items)
          if (link.closest('#mobile-menu')) {
            link.classList.add('text-white');
            
            // Only add border-left for top-level items
            if (!link.closest('.mobile-dropdown-content')) {
              link.classList.add('border-l-4', 'border-blue-500');
            }
          } else {
            // Desktop styles
            link.classList.add('text-white', 'font-medium');
          }
        }
      });

      // Special handling for mobile dropdown parent button
      if (currentSection === 'SpatialNav' || currentSection === 'Alphabuddy') {
        const productsButton = document.querySelector('.mobile-dropdown button.nav-link');
        if (productsButton) {
          productsButton.classList.add('text-white');
        }
      }
    }

    updateActiveLink();

    let scrollTimeout;
    window.addEventListener('scroll', function() {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateActiveLink, 100);
    }, { passive: true });
  }

  // Scroll to section function
  function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) return;

    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    history.pushState(null, null, `#${sectionId}`);
  }

  // Contact buttons functionality
  function setupContactButtons() {
    const contactButtons = document.querySelectorAll('[data-section="arTransformation"]');
    
    contactButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToSection('arTransformation');
        closeMobileMenu();
      });
    });
  }

  // Initialize everything
  init();

  // Fallback for smooth scrolling in older browsers
  if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScroll = function(element) {
      const target = document.querySelector(element.getAttribute('href'));
      if (target) {
        const targetPosition = target.offsetTop - 100;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 500;
        let start = null;

        const animation = function(currentTime) {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        const ease = function(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
      }
    };

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll(this);
      });
    });
  }
});