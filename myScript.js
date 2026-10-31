function renderSkills() {
    const skills = [
        { name: "HTML5", icon: "./images/html5.svg" },
        { name: "CSS3", icon: "./images/css.svg" },
        { name: "JavaScript", icon: "./images/javascript.svg" },
        { name: "React", icon: "./images/react.svg" },
        { name: "Node.js", icon: "./images/nodedotjs.svg" },
        { name: "Python", icon: "./images/python.svg" },
        { name: "Rockwell Automation", icon: "./images/rockwellautomation.svg" },
        { name: "Schneider Electric", icon: "./images/schneiderelectric.svg" },
        { name: "Git", icon: "./images/git.svg" },
        { name: "GitHub", icon: "./images/github.svg" }
    ];

    // Seleziona il contenitore HTML specifico
    const container = document.getElementById("skills-container");

    // Debug: verifica se il contenitore è stato trovato
    // Se per caso nella pagina corrente non c'è questo div, esce per evitare errori
    if (!container) return;

    // Pulisce il contenitore prima di riempirlo (buona pratica)
    container.innerHTML = "";

    skills.forEach(skill => {
        const figure = document.createElement("figure");
        figure.className = "flex flex-col items-center";

        const img = document.createElement("img");
        img.className = "w-12 h-12 object-contain transition-transform hover:scale-110";
        img.src = skill.icon;
        img.alt = skill.name;

        const figcaption = document.createElement("figcaption");
        figcaption.className = "mt-2 text-sm text-gray-300 text-center font-medium";
        figcaption.textContent = skill.name;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        container.appendChild(figure);
    });
}

function toggleMobileMenu() {
    
    const mobilemenu = document.getElementById("mobile-menu");
    if (mobilemenu.classList.contains("hidden")) {
        mobilemenu.classList.remove("hidden");
    } else {
        mobilemenu.classList.add("hidden");
    }





}

document.addEventListener("DOMContentLoaded", () => {
    renderSkills();
});

window.addEventListener("resize", () => {
    const btn = document.getElementById("menu-button");
    const mobilemenu = document.getElementById("mobile-menu");
    if (window.innerWidth >= 768){
         mobilemenu.classList.add("hidden");
         }
})