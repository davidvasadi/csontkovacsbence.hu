**csontkovacsbence.hu** is a custom-built website developed from scratch using modern web technologies. The design was created in Figma, and the implementation is done with HTML, CSS, JavaScript, and Bootstrap. The site is uniquely crafted to showcase chiropractic treatments and related services with a bespoke design, strong SEO optimization, high performance, and robust security measures.

### Key Features

- **Custom Design:**  
  The entire website is uniquely designed in Figma, ensuring a consistent and attractive visual identity.

- **Responsive Development:**  
  Built with HTML, CSS, JavaScript, and Bootstrap to provide a fully responsive and user-friendly experience across all devices.

- **SEO-Friendly URLs:**  
  The website uses canonical, extension-less URLs (e.g., `/kezdolap`, `/szolgaltatasok`, `/kezelesem`, `/bemutatkozas`) via .htaccess rewrite rules, which improves search engine indexing.

- **Security Enhancements:**  
  HTTPS/WWW canonicalization and HSTS are enforced, ensuring that all connections are secure.

- **Performance Optimization:**  
  Gzip compression and proper caching headers for images, CSS, and JavaScript ensure fast loading times for returning visitors.

- **Sitemap Integration:**  
  The sitemap.xml is updated to reflect the canonical URL structure and includes image data to help search engines index the site properly.

### How to Use

1. **Apache Configuration:**
   - Place the provided `.htaccess` file in the root directory of your website.
   - Ensure that `mod_rewrite`, `mod_headers`, `mod_expires`, and `mod_deflate` are enabled on your Apache server.

2. **Sitemap Update:**
   - Update your sitemap.xml file with the new canonical URLs.
   - Remove duplicate or legacy URLs (e.g., URLs ending with `.html`).
   - Submit the updated sitemap to Google Search Console.

3. **Google Search Console Settings:**
   - Verify that your property is set to the canonical domain (e.g., `https://csontkovacsbence.hu`).
   - Use the URL Inspection Tool for key pages and request reindexing if necessary.
   - Monitor the Coverage and Performance reports to ensure a smooth transition.

4. **Navigation Consistency:**
   - Ensure that all internal links (including logo and navigation links) point to the canonical URLs to prevent duplicate content issues.

---

## Magyar Verzió

**csontkovacsbence.hu** egy egyedi, saját fejlesztésű weboldal, amelyet modern webes technológiák felhasználásával készítettek el. A dizájnt Figma-ban tervezték meg, a fejlesztés pedig HTML, CSS, JavaScript és Bootstrap segítségével valósult meg. Az oldal célja, hogy egyedi megjelenéssel mutassa be a csontkovácsolási és kapcsolódó kezelési szolgáltatásokat, magas szintű SEO optimalizációval, kiváló teljesítménnyel és erős biztonsági intézkedésekkel.

### Főbb Jellemzők

- **Egyedi Dizájn:**  
  Az egész weboldal egyedileg lett megtervezve Figma-ban, így biztosítva az egységes és vonzó vizuális megjelenést.

- **Reszponzív Fejlesztés:**  
  HTML, CSS, JavaScript és Bootstrap segítségével épült, így garantált a felhasználóbarát, reszponzív élmény minden eszközön.

- **SEO-barát URL-ek:**  
  A weboldal kanonikus, kiterjesztés nélküli URL-eket használ (pl. `/kezdolap`, `/szolgaltatasok`, `/kezelesem`, `/bemutatkozas`), melyeket .htaccess átírási szabályokkal hoztak létre, ezáltal javítva a keresőmotorok indexelését.

- **Biztonsági Fejlesztések:**  
  A HTTPS/WWW canonicalizáció és a HSTS beállításai biztosítják, hogy minden kapcsolat biztonságos legyen.

- **Teljesítmény Optimalizáció:**  
  Az oldal Gzip tömörítést és megfelelő cache fejléceket használ (képek, CSS, JavaScript), így gyors betöltést biztosít visszatérő látogatók számára.

- **Sitemap Integráció:**  
  Az új sitemap.xml a kanonikus URL struktúrát tükrözi, és tartalmazza az oldal képeit is, segítve a keresőmotoroknak a pontos indexelést.

### Használati Útmutató

1. **Apache Konfiguráció:**
   - Helyezd el a mellékelt `.htaccess` fájlt a weboldalad gyökérkönyvtárában.
   - Győződj meg arról, hogy a szerveren engedélyezve vannak a `mod_rewrite`, `mod_headers`, `mod_expires` és `mod_deflate` modulok.

2. **Sitemap Frissítése:**
   - Frissítsd a sitemap.xml fájlt az új, kanonikus URL-ekkel.
   - Távolítsd el a duplikált vagy régi URL-eket (például a `.html` végződéseket).
   - Nyújtsd be az új sitemap-et a Google Search Console-ban.

3. **Google Search Console Beállítások:**
   - Ellenőrizd, hogy a Search Console-ban a tulajdon a kanonikus domain (pl. `https://csontkovacsbence.hu`) legyen.
   - Használd az URL Inspection eszközt a kulcsfontosságú oldalak ellenőrzésére, és kérd az indexelést, ha szükséges.
   - Kövesd nyomon a Coverage és a Performance jelentéseket az esetleges hibák elhárítása érdekében.

4. **Navigáció Konzisztenciája:**
   - Győződj meg arról, hogy az összes belső link (beleértve a logóra kattintást is) a kanonikus URL-ekre mutat, ezáltal elkerülve a duplikált tartalom problémáját.

---

This README.md file documents the configuration, design approach, and usage instructions for the csontkovacsbence.hu website in both English and Hungarian. For further assistance or questions, please refer to the project documentation or contact the developer.
