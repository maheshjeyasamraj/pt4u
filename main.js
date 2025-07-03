// ScrollSpy Activation
document.addEventListener("DOMContentLoaded", () => {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navbar',
      offset: 100
    });
  
    // Smooth scroll fallback (in case `scroll-behavior` doesn't work on older browsers)
    document.querySelectorAll('a.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
        if (this.hash !== "") {
          e.preventDefault();
          const hash = this.hash;
          document.querySelector(hash).scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Highlight nav item on manual scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
  
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    });
  
    // Contact form submit (demo only)
    document.getElementById("contact-form").addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! We'll be in touch shortly.");
      this.reset();
    });
  });
  <script>
  document.getElementById('trialForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // You can integrate with Google Sheets, email, etc., here.
    alert('Thank you for booking a free trial!');
    const modal = bootstrap.Modal.getInstance(document.getElementById('joinPopup'));
    modal.hide();
    this.reset();
  });
</script>
