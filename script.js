// ===== Test Type Selector (Academic / General Training) =====
document.addEventListener('DOMContentLoaded', function () {
  const typeButtons = document.querySelectorAll('.type-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  // Default: Academic
  let currentType = 'academic';

  typeButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Remove active class from all buttons
      typeButtons.forEach(function (b) {
        b.classList.remove('active');
      });

      // Add active class to clicked button
      btn.classList.add('active');

      // Update current type
      currentType = btn.getAttribute('data-type');

      // Update card descriptions based on type
      updateCards(currentType);
    });
  });

  // ===== Update Skill Card Descriptions =====
  function updateCards(type) {
    const descriptions = {
      academic: {
        reading: '3 long passages, 40 questions',
        writing: 'Task 1 (Graph/Chart) & Task 2 (Essay)'
      },
      general: {
        reading: '3 sections, everyday texts, 40 questions',
        writing: 'Task 1 (Letter) & Task 2 (Essay)'
      }
    };

    skillCards.forEach(function (card) {
      const heading = card.querySelector('h3').textContent.toLowerCase();

      if (heading === 'reading') {
        card.querySelector('p').textContent = descriptions[type].reading;
      } else if (heading === 'writing') {
        card.querySelector('p').textContent = descriptions[type].writing;
      }
    });

    // Show a subtle notification
    showToast(type === 'academic' ? 'Academic mode selected' : 'General Training mode selected');
  }

  // ===== Toast Notification =====
  function showToast(message) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
      existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // Trigger animation
    setTimeout(function () {
      toast.classList.add('show');
    }, 10);

    // Auto remove after 2 seconds
    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () {
        toast.remove();
      }, 300);
    }, 2000);
  }

  // ===== Start Practice Buttons =====
  const startButtons = document.querySelectorAll('.start-btn');
  startButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const skillName = btn.closest('.skill-card').querySelector('h3').textContent;
      showToast(skillName + ' practice - Coming Soon!');
    });
  });

  // ===== Mock Test Button =====
  const mockBtn = document.querySelector('.mock-btn');
  if (mockBtn) {
    mockBtn.addEventListener('click', function (e) {
      e.preventDefault();
      showToast('Full Mock Test - Coming Soon!');
    });
  }
});
