# AHADALIFILMS — GitHub Pages üçün hazır paket

V12 əsasındadır. Görünüş, rənglər, şəkillər, AZ/RU dilləri, WhatsApp forması,
“Çəkilişlərimiz” yazıları, seçilmiş üç TikTok qapağı və Instagram düzəlişləri saxlanılıb.
Netlify hesabına və Netlify bağlantısına ehtiyac yoxdur.

## Saytı necə açmaq olar

1. GitHub-da yeni **Public** repository yaradın. Adını, məsələn, `ahadalifilms` qoyun.
2. ZIP-i kompüterdə açın. İçindəki fayl və qovluqları repository-nin kökünə yükləyin.
   `index.html` birbaşa kökdə olmalıdır. **ZIP faylının özünü yükləməyin.**
3. `.github` qovluğunun, `.nojekyll` faylının və `scripts` qovluğunun da yükləndiyinə baxın.
   `.github/workflows/pages.yml` görünməlidir. Windows-da lazım olsa gizli faylları göstərin.
4. Repository-də **Settings → Pages → Build and deployment → Source → GitHub Actions** seçin.
5. **Actions → Publish AHADALIFILMS to GitHub Pages → Run workflow** seçin.
   İlk yükləmə Pages aktiv edilməmiş baş veribsə, uğursuz olan iş üçün **Re-run all jobs** seçmək də olar.
6. İş yaşıl olanda saytın ünvanı **Settings → Pages** bölməsində görünəcək.

Repo kök qovluğunun özünü əlavə qat kimi yükləməyin: index.html, assets, css, js,
ru, scripts və .github bir yerdə olmalıdır.

## Ünvanlar avtomatik uyğunlaşır

Repository saytında (`istifadəçi.github.io/ahadalifilms/`), əsas GitHub saytında
(`istifadəçi.github.io/`) və Pages-də qurulmuş öz domenində işləmək üçün hazırlanıb.
GitHub Actions real ünvanı oxuyur; canonical, sosial paylaşım ünvanları,
AZ/RU hreflang, JSON-LD, robots və sitemap həmin ünvana uyğun yaranır.
İstifadəçi adını fayllarda əllə yazmaq lazım deyil.

Yayımlama üçün **GitHub Actions** istifadə edin. `Deploy from a branch` bu paketin
avtomatik ünvan hazırlığı addımını işə salmır. Mənbə fayllarındakı
`__PAGES_BASE_URL__` işarəsi yayımlananda avtomatik dəyişdirilir.

## Saxlanılan məhdudiyyətlər

Instagram Dde-IaFN0hZ və DY8nCD4qwlO videoları lokal MP4 ilə saytda oynayır.
DdkLq0iN7pA üçün real qapaq və orijinal paylaşım keçidi saxlanılıb: əvvəlki kimi,
Instagram onun açıq video faylını vermir. Bu paket həmin məhdudiyyəti dəyişdirmir.
TikTok-un xarici pleyeri yenə TikTok-un server və məxfilik qaydalarından asılıdır.

GitHub Pages Netlify-nin xüsusi HTTP başlıqlarını qəbul etmir. Dəstəklənən CSP
və referrer siyasətləri HTML vasitəsilə tətbiq olunur. Server səviyyəsindəki
frame-ancestors, X-Frame-Options, nosniff, Permissions-Policy və xüsusi cache
başlıqlarını GitHub Pages paketdən təyin etmək olmur; onların tətbiq edildiyi iddia edilmir.

Hazırkı Netlify saytı və əvvəlki ZIP-lər dəyişdirilməyib. Bu paket ayrıca yayımlamaq üçündür.

Rəsmi quraşdırma izahı: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
