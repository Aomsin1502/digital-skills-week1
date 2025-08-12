// ปีใน footer
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle (จำสถานะไว้)
const themeToggle = document.getElementById("themeToggle");
const applyTheme = (mode) => {
  document.documentElement.classList.toggle("dark", mode === "dark");
  if(mode === "dark"){
    // ใช้ .dark เป็นโหมดมืด (ค่าดีฟอลต์ไฟล์นี้เป็น Dark → เพื่อโชว์พื้นหลังสวย)
    document.documentElement.classList.add("dark");
  }
};
const saved = localStorage.getItem("theme") || "light";
applyTheme(saved);
themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.contains("dark");
  const next = isDark ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

// Reveal on scroll
const els = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("is-visible");
      io.unobserve(e.target);
    }
  })
},{threshold:0.15});
els.forEach(el=>io.observe(el));
