document.getElementById('faq-toggle').addEventListener('click', function() {
  const faqContent = document.getElementById('faq-content');
  const toggleIcon = this;
  
  faqContent.classList.toggle('hidden');
  
  toggleIcon.classList.toggle('scale-y-[-1]');
});
