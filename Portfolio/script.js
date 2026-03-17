
const projectsData = [
    {
        title: "E-Commerce Website",
        description: "A fully responsive online store with cart functionality, product filtering, and clean checkout flow.",
        image: "Project_Image/CSharpProject.jpeg",
        link: "https://github.com/Application-Net-Framework/Shop-Management-System.git",
        category: "Web Design"
    }
];

function initThemeToggle() {
    const button = document.getElementById("themeToggle");
    const page = document.documentElement; 
    
    
    let currentTheme = localStorage.getItem("theme");
    if (currentTheme === null) {
        currentTheme = "dark";
    }
    
    page.setAttribute("data-theme", currentTheme);
    button.addEventListener("click", function () {
        if (currentTheme === "dark") {
            currentTheme = "light";
        } else {
            currentTheme = "dark";
        }
        page.setAttribute("data-theme", currentTheme);
        localStorage.setItem("theme", currentTheme);
    });
}

const skillsData = [
    { 
        name: "HTML5", 
        icon: "🌐", 
        level: 95 
    },
    
    { 
        name: "CSS3", 
        icon: "🎨",
        level: 90 
    },
    
    { 
        name: "JavaScript", 
        icon: "⚡", 
        level: 85 
    },
    
    { 
        name: "Networking", 
        icon: "🛜", 
        level: 85 
    },
       { 
        name: "C++", 
        icon: "C", 
        level: 85 
    },
    { 
        name: "Java", 
        icon: "☕", 
        level: 85 
    },

    { 
        name: "Php", 
        icon: "🐘", 
        level: 85 
    },
    { 
        name: "AI", 
        icon: "🤖", 
        level: 85 
    },
    { 
        name: "Software Engineering", 
        icon: "💻", 
        level: 85 
    },
    
    { 
        name: "Figma", 
        icon: "🖌️", 
        level: 88 
    },
    
    
    { 
        name: "Git", 
        icon: "📁", 
        level: 80 
    },
    
    { 
        name: "Python", 
        icon: "🐍", 
        level: 65 
    }
];
function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    grid.innerHTML = "";

    skillsData.forEach((skill) => {
        const card = document.createElement("div");
        card.classList.add("skill-card");

        card.innerHTML = `
            <span class="skill-icon">${skill.icon}</span>
            <span class="skill-name">${skill.name}</span>
            <div class="skill-bar-wrapper">
                <div class="skill-bar" data-level="${skill.level}"></div>
            </div>
        `;

        grid.appendChild(card);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll(".skill-bar");
                bars.forEach((bar) => {
                    bar.style.width = bar.dataset.level + "%";
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(grid);
}

function initTypingAnimation() {
    const el = document.getElementById("typingName");
    const words = ["A Designer", "A Developer", "A Creator ", "Problem Solver", "A Learner"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    el.appendChild(cursor);

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            el.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            el.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        el.appendChild(cursor);

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            speed = 2000; 
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 400;
        }

        setTimeout(type, speed);
    }

    type();
}


function getCategories() {
    const cats = ["All"];
    projectsData.forEach((p) => {
        if (!cats.includes(p.category)) cats.push(p.category);
    });
    return cats;
}

function renderProjectFilters() {
    const container = document.getElementById("projectFilters");
    container.innerHTML = "";

    getCategories().forEach((cat, i) => {
        const btn = document.createElement("button");
        btn.classList.add("filter-btn");
        if (i === 0) btn.classList.add("active");
        btn.textContent = cat;
        btn.addEventListener("click", () => {
            container.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            renderProjects(cat);
        });
        container.appendChild(btn);
    });
}

function renderProjects(filter = "All") {
    const grid = document.getElementById("projectsGrid");
    grid.innerHTML = "";

    const filtered = filter === "All"
        ? projectsData
        : projectsData.filter((p) => p.category === filter);

    filtered.forEach((project, i) => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.style.animationDelay = `${i * 0.1}s`;

        card.innerHTML = `
            <img class="project-img" src="${project.image}" alt="${project.title}" loading="lazy"
                 onerror="this.style.background='var(--accent-gradient)';this.style.height='200px';">
            <div class="project-info">
                <span class="project-category">${project.category}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" class="project-link">View Project</a>
            </div>
        `;

        grid.appendChild(card);
    });
}

function initContactForm() {
    const form = document.getElementById("contactForm");

    function showError(inputId, message) {
        const input = document.getElementById(inputId);
        const errorEl = document.getElementById(inputId + "Error");
        input.classList.add("invalid");
        errorEl.textContent = message;
    }

    function clearError(inputId) {
        const input = document.getElementById(inputId);
        const errorEl = document.getElementById(inputId + "Error");
        input.classList.remove("invalid");
        errorEl.textContent = "";
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    ["name", "email", "subject", "message"].forEach((id) => {
        document.getElementById(id).addEventListener("input", () => clearError(id));
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name) { showError("name", "Name is required"); isValid = false; }
        else { clearError("name"); }

        if (!email) { showError("email", "Email is required"); isValid = false; }
        else if (!isValidEmail(email)) { showError("email", "Please enter a valid email"); isValid = false; }
        else { clearError("email"); }

        if (!subject) { showError("subject", "Subject is required"); isValid = false; }
        else { clearError("subject"); }

        if (!message) { showError("message", "Message is required"); isValid = false; }
        else { clearError("message"); }

        if (isValid) {
            document.getElementById("formSuccess").classList.add("show");
            form.reset();
            setTimeout(() => {
                document.getElementById("formSuccess").classList.remove("show");
            }, 4000);
        }
    });
}


function initScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    function onScroll() {
        const scrollY = window.scrollY + 100;

        sections.forEach((section) => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");

            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === "#" + id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", onScroll);
}


function initScrollToTop() {
    const btn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            btn.classList.add("visible");
        } else {
            btn.classList.remove("visible");
        }
    });

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initTypingAnimation();
    
    renderSkills();
    
    renderProjectFilters();
    
    renderProjects();
    
    initContactForm();
    
    initThemeToggle();
    
    initScrollSpy();
    
    initScrollToTop();
});