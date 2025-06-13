const translations = {
  th: {
    "page-title": "หน้าแรก - UDON SKM",
    "nav-home": "หน้าแรก",
    "nav-about": "เกี่ยวกับเรา",
    "nav-jobs": "งานที่เปิดรับ",
    "nav-process": "ขั้นตอน",
    "nav-contact": "ติดต่อ",
    "hero-title": "บริการจัดหางานไปต่างประเทศอย่างถูกกฎหมาย",
    "hero-desc": "พร้อมดูแลทุกขั้นตอน โดยทีมงานมืออาชีพ",
    "hero-btn": "ดูตำแหน่งงาน",
    "btn-secondary": "เรียนรู้เพิ่มเติม",
    "about-heading": "เกี่ยวกับเรา",
    "about-desc": "UDON SKM ให้บริการจัดหางานอย่างถูกกฎหมาย",
    "jobs-heading": "ตำแหน่งงาน",
    "jobs-desc": "เปิดรับสมัครงานในหลายประเทศ",
    "process-heading": "ขั้นตอนการสมัคร",
    "process-desc": "สมัคร > สัมภาษณ์ > อบรม > เดินทาง",
    "contact-heading": "ติดต่อเรา",
    "contact-desc": "หากมีคำถามติดต่อผ่านฟอร์ม",
    "label-name": "ชื่อของคุณ",
    "label-email": "อีเมล",
    "label-message": "ข้อความ",
    "submit-btn": "ส่งข้อความ",
    "features-heading": "ทำไมต้องเลือก UDON SKM?",
    "feature-1-title": "เครือข่ายระดับโลก",
    "feature-1-desc": "โอกาสทำงานในญี่ปุ่น ไต้หวัน เกาหลี และอื่น ๆ",
    "feature-2-title": "คำแนะนำจากผู้เชี่ยวชาญ",
    "feature-2-desc": "ประสบการณ์กว่า 10 ปีในด้านจัดหางานต่างประเทศ",
    "feature-3-title": "ดูแลครบทุกขั้นตอน",
    "feature-3-desc": "ตั้งแต่สมัครจนเดินทาง เราช่วยคุณทุกขั้นตอน"
  },
  en: {
    "page-title": "Home - UDON SKM",
    "nav-home": "Home",
    "nav-about": "About",
    "nav-jobs": "Jobs",
    "nav-process": "Process",
    "nav-contact": "Contact",
    "hero-title": "Legal Overseas Job Placement Services",
    "hero-desc": "Comprehensive support by professionals",
    "hero-btn": "See Jobs",
    "btn-secondary": "Learn More",
    "about-heading": "About Us",
    "about-desc": "UDON SKM is a legally licensed overseas employment agency",
    "jobs-heading": "Job Positions",
    "jobs-desc": "We offer job opportunities abroad",
    "process-heading": "Application Process",
    "process-desc": "Apply > Interview > Train > Go abroad",
    "contact-heading": "Contact Us",
    "contact-desc": "Have questions? Use the form",
    "label-name": "Your Name",
    "label-email": "Email",
    "label-message": "Message",
    "submit-btn": "Send Message",
    "features-heading": "Why Choose UDON SKM?",
    "feature-1-title": "Global Network",
    "feature-1-desc": "Opportunities across Japan, Taiwan, Korea, and more.",
    "feature-2-title": "Expert Guidance",
    "feature-2-desc": "10+ years of experience in legal overseas job placement.",
    "feature-3-title": "Full Support",
    "feature-3-desc": "From application to arrival, we help every step.",
  }
};

function changeLanguage(lang) {
  localStorage.setItem("lang", lang);
  const dict = translations[lang];
  for (const id in dict) {
    const el = document.getElementById(id);
    if (el) {
      if (id === "page-title") document.title = dict[id];
      else el.textContent = dict[id];
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "th";
  changeLanguage(lang);
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});
