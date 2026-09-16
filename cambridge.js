// ============================================================
// Cambridge IELTS Practice Tests 10-21
// ============================================================
// HOW TO ADD YOUR FILES:
// 1. Put your PDF/audio files in a folder called "cambridge/"
//    Example: cambridge/c10-academic.pdf
// 2. Update the "link" values below with your file paths
// 3. If a file is not ready, leave link as "" (empty)
//    and the button will show "Coming Soon"
// ============================================================

const cambridgeBooks = [
  {
    number: 10,
    academic: { link: "", ready: false },
    general:  { link: "", ready: false }
  },
  {
    number: 11,
    academic: { link: "", ready: false },
    general:  { link: "", ready: false }
  },
  {
    number: 12,
    academic: { link: "", ready: false },
    general:  { link: "", ready: false }
  },
  {
    number: 13,
    academic: { link: "", ready: false },
    general:  { link: "", ready: false }
  },
  {
    number: 14,
    academic: { link: "", ready: false },
    general:  { link: "", ready: false }
  },
  {
    number: 15,
    academic: { link: "", ready: false },
    general:  { link: "", ready: false }
  },
  {
    number: 16,
    academic: { link: "", ready: false },
    general:  { link: "", ready: false }
  },
  {
    number: 17,
    academic: { link: "", ready: false },
    general:  { link: "", ready: false }
  },
  {
    number: 18,
    academic: { link: "", ready: false },
    general:  { link: "", ready: false }
  },
  {
    number: 19,
    academic: { link: "", ready: false },
    general:  { link: "", ready: false }
  },
  {
    number: 20,
    academic: { link: "", ready: false },
    general:  { link: "", ready: false }
  },
  {
    number: 21,
    academic: { link: "", ready: false },
    general:  { link: "", ready: false }
  }
];

// ===== Render Book Cards =====
document.addEventListener('DOMContentLoaded', function () {
  const grid = document.getElementById('cambridgeGrid');
  if (!grid) return;

  cambridgeBooks.forEach(function (book) {
    const card = document.createElement('div');
    card.className = 'book-card';

    const academicBtn = book.academic.ready && book.academic.link
      ? `<a href="${book.academic.link}" target="_blank" class="book-btn academic">Academic</a>`
      : `<span class="book-btn disabled">Academic (Soon)</span>`;

    const generalBtn = book.general.ready && book.general.link
      ? `<a href="${book.general.link}" target="_blank" class="book-btn general">General Training</a>`
      : `<span class="book-btn disabled">General (Soon)</span>`;

    card.innerHTML = `
      <div class="book-number">${book.number}</div>
      <h3>Cambridge IELTS ${book.number}</h3>
      <div class="book-buttons">
        ${academicBtn}
        ${generalBtn}
      </div>
    `;

    grid.appendChild(card);
  });
});
