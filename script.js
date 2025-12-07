 
function changeGreeting() {
  const text = document.getElementById("dynamic-text");
  text.textContent = "🔥 Keep pushing forward, your journey in web development has just begun!";
  text.style.color = "#ffcc00";
  text.style.fontWeight = "bold";
  text.style.fontSize = "1.5rem";
}
 
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      if (link.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
          .scrollIntoView({ behavior: "smooth" });
      }
    });
  });
 
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Your message has been sent successfully!");
    });
  }

  const tagline = document.querySelector(".fade-in-delay2");
  if (tagline) {
    const text = tagline.textContent;
    tagline.textContent = "";
    let i = 0;
    const typing = setInterval(() => {
      tagline.textContent += text[i];
      i++;
      if (i === text.length) clearInterval(typing);
    }, 80);  
  }
});