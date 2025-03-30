const GOOGLE_PLACE_ID = 'ChIJy-zlAzfbQUcReu9gdCmaeUU';

function initTestimonials() {
  const service = new google.maps.places.PlacesService(document.createElement('div'));
  service.getDetails({
    placeId: GOOGLE_PLACE_ID,
    fields: ['reviews']
  }, (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && place.reviews) {
      buildSwiperCarousel(place.reviews);
      setAverageRating(place.reviews);
    } else {
      console.error('Place Details hiba:', status);
    }
  });
}

function buildSwiperCarousel(reviews) {
  const wrapper = document.getElementById('testimonial-cards');
  wrapper.innerHTML = '';

  reviews.forEach(r => {
    const maxLen = 150;
    const isLong = r.text.length > maxLen;
    const shortText = isLong ? r.text.slice(0, maxLen) + '…' : r.text;

    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

    slide.innerHTML = `
      <div class="testimonial-item">
        <div class="profile">
          <img src="${r.profile_photo_url || 'assets/img/default-avatar.png'}" alt="${r.author_name}" class="profile-img"/>
          <h3 class="author-name">${r.author_name}</h3>
        </div>
        <div class="stars">${generateStars(r.rating)}</div>
        <p class="comment" data-short="${shortText}" data-full="${r.text}">
          ${shortText}
          ${isLong ? `<button class="toggle-btn">Tovább</button>` : ''}
        </p>
      </div>
    `;
    wrapper.appendChild(slide);
  });

  const swiper = new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
      }
    }
  });

  // Eseménykezelés a toggle-btn ("Tovább"/"Vissza") gombokra
  document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('toggle-btn')) {
      const commentElem = e.target.closest('.comment');
      const shortVersion = commentElem.dataset.short.trim();
      const fullVersion = commentElem.dataset.full.trim();
      if (e.target.innerText.trim() === 'Tovább') {
        commentElem.innerHTML = `${fullVersion} <button class="toggle-btn">Vissza</button>`;
      } else {
        commentElem.innerHTML = `${shortVersion} <button class="toggle-btn">Tovább</button>`;
      }
    }
  });

  // Reset minden slide kommentjeit minden slide váltáskor
  swiper.on('slideChangeTransitionStart', function() {
    document.querySelectorAll('.swiper-slide .comment').forEach(p => {
      const shortText = p.dataset.short ? p.dataset.short.trim() : '';
      const fullText = p.dataset.full ? p.dataset.full.trim() : '';
      if (fullText.length > shortText.length) {
        p.innerHTML = `${shortText} <button class="toggle-btn">Tovább</button>`;
      }
    });
  });
}

function setAverageRating(reviews) {
  const avg = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  document.getElementById('average-rating').innerText = avg;
}

function generateStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += i <= rating
      ? '<i class="bi bi-star-fill"></i>'
      : '<i class="bi bi-star"></i>';
  }
  return html;
}
