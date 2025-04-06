const GOOGLE_PLACE_ID = 'ChIJy-zlAzfbQUcReu9gdCmaeUU';

window.initTestimonials = async function() {
  // Új Place példány létrehozása a Place ID segítségével.
  const place = new google.maps.places.Place({
    id: GOOGLE_PLACE_ID
  });

  try {
    // fetchFields hívása a szükséges 'reviews' mezővel.
    await place.fetchFields({
      fields: ['reviews']
    });

    if (place.reviews) {
      // Átalakítjuk az új Review objektumokat, hogy a régi kódban használt kulcsokat tartalmazzák.
      const transformedReviews = place.reviews.map(r => ({
        text: r.text,
        rating: r.rating,
        time: r.time, // Feltételezzük, hogy itt érkezik az értékelés ideje.
        author_name: r.authorAttribution ? r.authorAttribution.displayName : 'Anonymous',
        // A fallback URL mostantól a Google által használt default avatar.
        profile_photo_url: r.authorAttribution && r.authorAttribution.photoURI 
          ? r.authorAttribution.photoURI 
          : 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/user.png'
      }));
      // console.log(JSON.stringify(place.reviews[0], null, 2));

      // Rendezés: a legújabb értékelések kerülnek elölre (csökkenő sorrend a time alapján).
      const sortedReviews = transformedReviews.sort((a, b) => b.time - a.time);
      buildSwiperCarousel(sortedReviews);
      setAverageRating(sortedReviews);
    } else {
      console.error('Nincs értékelés.');
    }
  } catch (error) {
    console.error('Place Details hiba:', error);
  }
};

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
          <img src="${r.profile_photo_url}" alt="${r.author_name}" class="profile-img"/>
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
      clickable: true
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    breakpoints: {
      992: {
        slidesPerView: 2
      }
    }
  });

  // Toggle gomb eseménykezelése: "Tovább"/"Vissza" váltása
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

  // Minden slide váltásakor visszaállítjuk a kommentek rövidített verzióját.
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
