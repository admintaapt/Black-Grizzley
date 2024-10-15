let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    const prevThumbnail = document.querySelector('.prev-thumbnail img');
    const nextThumbnail = document.querySelector('.next-thumbnail img');

    // Ajusta el índice si es necesario
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Actualiza el desplazamiento del slider
    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;

    // Actualiza las miniaturas
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    const nextIndex = (currentSlide + 1) % totalSlides;
    prevThumbnail.src = slides.children[prevIndex].src;
    nextThumbnail.src = slides.children[nextIndex].src;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Inicia el slider en la primera imagen
showSlide(currentSlide);
let currentReview = 0;

function showReview(index) {
    const reviews = document.querySelectorAll('.review');
    const totalReviews = reviews.length;

    // Ajusta el índice si es necesario
    if (index >= totalReviews) {
        currentReview = 0;
    } else if (index < 0) {
        currentReview = totalReviews - 1;
    } else {
        currentReview = index;
    }

    // Oculta todas las reseñas y muestra solo la actual
    reviews.forEach((review, idx) => {
        review.classList.remove('active');
    });
    reviews[currentReview].classList.add('active');
}

function nextReview() {
    showReview(currentReview + 1);
}

function prevReview() {
    showReview(currentReview - 1);
}

// Inicia mostrando la primera reseña
document.addEventListener('DOMContentLoaded', () => {
    showReview(currentReview);
});

const apiKey = 'PBQ3tOSKUj1qc6knIuno9aWBUz8G8kin0hDQP58JTAXtHnz0ngyIXJcu';  // Reemplaza con tu clave API de Pexels
const landingData = JSON.parse(localStorage.getItem('landingData') || '{}');
const businessModel = landingData.businessModel || 'cryptocurrency+fintech+investment';

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    const prevThumbnail = document.querySelector('.prev-thumbnail img');
    const nextThumbnail = document.querySelector('.next-thumbnail img');

    // Ajusta el índice si es necesario
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Actualiza el desplazamiento del slider
    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;

    // Actualiza las miniaturas
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    const nextIndex = (currentSlide + 1) % totalSlides;
    prevThumbnail.src = slides.children[prevIndex].src;
    nextThumbnail.src = slides.children[nextIndex].src;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Inicia el slider en la primera imagen
showSlide(currentSlide);

function showReview(index) {
    const reviews = document.querySelectorAll('.review');
    const totalReviews = reviews.length;

    // Ajusta el índice si es necesario
    if (index >= totalReviews) {
        currentReview = 0;
    } else if (index < 0) {
        currentReview = totalReviews - 1;
    } else {
        currentReview = index;
    }

    // Oculta todas las reseñas y muestra solo la actual
    reviews.forEach((review, idx) => {
        review.classList.remove('active');
    });
    reviews[currentReview].classList.add('active');
}

function nextReview() {
    showReview(currentReview + 1);
}

function prevReview() {
    showReview(currentReview - 1);
}

// Inicia mostrando la primera reseña
document.addEventListener('DOMContentLoaded', () => {
    showReview(currentReview);
});

// Lógica para cargar las imágenes desde Pexels y el landingData

fetch('./landingData.json')
    .then(response => response.json())
    .then(landingData => {

        console.log(landingData);
        // Actualizar el logo de la empresa si está disponible en landingData
        const logoElement = document.getElementById('logo-header');
        if (landingData.logo && logoElement) {
            logoElement.src = landingData.logo;
        }

        // Actualizar los textos principales
        document.getElementById('main-title').textContent = landingData.mainTitle || 'Tu Título Aquí';
        document.getElementById('main-paragraph').textContent = landingData.mainParagraph || 'Tu párrafo aquí';

        // Actualizar testimonios
        document.getElementById('testimonial-1').textContent = landingData.testimonials?.[0] || 'Testimonio 1';
        document.getElementById('testimonial-2').textContent = landingData.testimonials?.[1] || 'Testimonio 2';
        document.getElementById('testimonial-3').textContent = landingData.testimonials?.[2] || 'Testimonio 3';

        // Actualizar los enlaces de botones
        document.getElementById('button-1').onclick = () => { window.location.href = landingData['button-1-link']; };
        document.getElementById('button-2').onclick = () => { window.location.href = landingData['button-2-link']; };

        document.getElementById('button-1').textContent = landingData['button-1-text'] || 'Texto del Botón 1';
        document.getElementById('button-2').textContent = landingData['button-2-text'] || 'Texto del Botón 2';

        // Cargar enlaces de redes sociales
        document.getElementById('facebook-link').setAttribute('href', landingData.socialLinks.facebook);
        document.getElementById('twitter-link').setAttribute('href', landingData.socialLinks.twitter);
        document.getElementById('instagram-link').setAttribute('href', landingData.socialLinks.instagram);
  
    })
    .catch(error => {
        console.error('Error al cargar landingData.json:', error);
    });
// Fetch de las imágenes para los testimonios
fetch(`https://api.pexels.com/v1/search?query=person&per_page=4`, {
    headers: {
        Authorization: apiKey
    }
})
    .then(response => response.json())
    .then(data => {
        if (data.photos.length > 0) {
            // Asignar imágenes a cada testimonio
            document.getElementById('testimonial-image-1').src = data.photos[0].src.large;
            document.getElementById('testimonial-image-2').src = data.photos[1].src.large;
            document.getElementById('testimonial-image-3').src = data.photos[3].src.large;
        }
    })
    .catch(error => console.error('Error al cargar las imágenes de Pexels:', error));

// Función para cargar la imagen de la Hero Section
function loadHeroImage() {
    fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(businessModel)}&per_page=1`, {
        headers: {
            Authorization: apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            // Actualiza la imagen de la sección Hero
            const heroSection = document.querySelector('.hero');
            if (data.photos.length > 0 && heroSection) {
                heroSection.style.backgroundImage = `url(${data.photos[0].src.large})`;
            }
        })
        .catch(error => console.error('Error al cargar la imagen de la Hero Section desde Pexels:', error));
}

// Función para cargar imágenes en la primera galería (Galería de servicios)
function loadGalleryImages(galleryId, thumbnailIds) {
    fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(businessModel)}&per_page=${thumbnailIds.length}`, {
        headers: {
            Authorization: apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);  // Verifica los datos recibidos de Pexels

            // Actualiza las imágenes de la galería
            thumbnailIds.forEach((thumbId, index) => {
                const thumbElement = document.getElementById(thumbId);
                if (thumbElement && data.photos[index]) {
                    thumbElement.src = data.photos[index].src.large;
                    thumbElement.alt = data.photos[index].alt || 'Imagen de la galería';
                }
            });
        })
        .catch(error => console.error('Error al cargar imágenes de la galería desde Pexels:', error));
}

// Función para cargar imágenes de la segunda galería (slider)
function loadSliderImages() {

    fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(businessModel)}&per_page=3`, {
        headers: {
            Authorization: apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);  // Verifica los datos recibidos de Pexels

            if (data.photos.length >= 3) {
                // Actualizamos las imágenes del slider
                document.getElementById('slide1').src = data.photos[0].src.large;
                document.getElementById('slide2').src = data.photos[1].src.large;
                document.getElementById('slide3').src = data.photos[2].src.large;

                // Actualizamos las miniaturas previas y siguientes
                document.getElementById('prev-thumbnail').src = data.photos[2].src.small; // Última imagen como previa
                document.getElementById('next-thumbnail').src = data.photos[1].src.small; // Segunda imagen como siguiente
            } else {
                console.error('No se encontraron suficientes imágenes para el slider.');
            }
        })
        .catch(error => console.error('Error al cargar imágenes para el slider desde Pexels:', error));
}

// Llamada para cargar las imágenes de la segunda galería (slider)
loadSliderImages();

// Cargar la imagen para la Hero Section (Si tienes una función específica para la hero)
loadHeroImage();

// Cargar las imágenes para la primera galería (tarjetas de servicios)
loadGalleryImages('services-gallery', ['pexels-thumb1', 'pexels-thumb2', 'pexels-thumb3']);

// Cargar las imágenes para la segunda galería (otra sección de imágenes)
loadGalleryImages('second-gallery', ['pexels-thumb4', 'pexels-thumb5', 'pexels-thumb6']);


if (landingData) {
    console.log(landingData);

    // Reemplazar los placeholders con los datos reales
    document.querySelectorAll('#company-name-placeholder').forEach(el => el.textContent = landingData.companyName);
    document.querySelectorAll('#business-model-placeholder').forEach(el => el.textContent = landingData.businessModel);
    function loadCharacteristicText() {
        fetch('/generate-landing-content', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                section: 'caracteristics',
                businessModel: landingData.businessModel,
                companyName: landingData.companyName
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.content) {
                    const textElement = document.querySelector('.text-columns .column p');
                    textElement.textContent = data.content;
                } else {
                    console.error('No se generó contenido para la sección de Características.');
                }
            })
            .catch(error => console.error('Error al cargar contenido dinámico desde OpenAI:', error));
    }
    // Actualizar el logo en el header y el footer
    if (landingData.logo) {
        document.getElementById('logo-header').src = landingData.logo;
        document.getElementById('logo-footer').src = landingData.logo;
    }

    // Testimonios dinámicos
    if (landingData.testimonials && landingData.testimonials.length >= 3) {
        document.getElementById('testimonial-1-title').textContent = 'Testimonio 1';
        document.getElementById('testimonial-1-text').textContent = landingData.testimonials[0];

        document.getElementById('testimonial-2-title').textContent = 'Testimonio 2';
        document.getElementById('testimonial-2-text').textContent = landingData.testimonials[2];

        document.getElementById('testimonial-3-title').textContent = 'Testimonio 3';
        document.getElementById('testimonial-3-text').textContent = landingData.testimonials[4];
    } else {
        console.error('No hay suficientes testimonios disponibles en landingData.');
    }
    
}
function loadCharacteristicImage() {
    fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(`fitness`)}&per_page=1`, {
        headers: {
            Authorization: apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.photos.length > 0) {
                const imageElement = document.getElementById('pexels-media-image');
                imageElement.src = data.photos[0].src.large;
                imageElement.alt = data.photos[0].alt || 'Descripción de la imagen';
            } else {
                console.error('No se encontró ninguna imagen en Pexels.');
            }
        })
        .catch(error => console.error('Error al cargar la imagen desde Pexels:', error));
}
function loadCharacteristicText() {
    fetch('/generate-landing-content', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            section: 'caracteristics',
            businessModel: businessModel,
            companyName: companyName
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.content) {
                const textElement = document.querySelector('.text-columns .column p');
                textElement.textContent = data.content;
            } else {
                console.error('No se generó contenido para la sección de Características.');
            }
        })
        .catch(error => console.error('Error al cargar contenido dinámico desde OpenAI:', error));
}
document.addEventListener('DOMContentLoaded', function () {
    // Cargar imagen de la sección de características
    loadCharacteristicImage();

    // Cargar texto de la sección de características
    loadCharacteristicText();
});

// Obtener datos del localStorage
if (landingData) {
    console.log("364:"+landingData);
    // Reemplazar los placeholders con los datos reales
    document.querySelectorAll('#company-name-placeholder').forEach(el => el.textContent = landingData.companyName);
    document.querySelectorAll('#business-model-placeholder').forEach(el => el.textContent = landingData.businessModel);

    // Actualizar el logo en el header y el footer
    if (landingData.logo) {
        document.getElementById('logo-header').src = landingData.logo;
        document.getElementById('logo-footer').src = landingData.logo;
    }
    document.getElementById('main-title').textContent = landingData.mainTitle;
    document.getElementById('main-paragraph').textContent = landingData.mainParagraph;
   
    document.getElementById('testimonial-1').textContent = landingData.testimonials[0];
    document.getElementById('testimonial-2').textContent = landingData.testimonials[2];
    document.getElementById('testimonial-3').textContent = landingData.testimonials[4];

    // Ejemplo al aplicar contenido al HTML en el frontend
    document.getElementById('titulo-1').textContent = landingData.titulo1.replace(/[*"]/g, '').replace(/['"]/g, '');
    document.getElementById('subtitulo-1').textContent = landingData.subtitulo1.replace(/[*"]/g, '').replace(/['"]/g, '');

    document.getElementById('titulo-2').textContent = landingData.titulo2.replace(/[*"]/g, '').replace(/['"]/g, '');
    document.getElementById('subtitulo-2').textContent = landingData.subtitulo2.replace(/[*"]/g, '').replace(/['"]/g, '');

    document.getElementById('titulo-3').textContent = landingData.titulo3.replace(/[*"]/g, '').replace(/['"]/g, '');
    document.getElementById('subtitulo-3').textContent = landingData.subtitulo3.replace(/[*"]/g, '').replace(/['"]/g, '');

    document.getElementById('titulo-4').textContent = landingData.titulo4.replace(/[*"]/g, '').replace(/['"]/g, '');
    document.getElementById('subtitulo-4').textContent = landingData.subtitulo4.replace(/[*"]/g, '').replace(/['"]/g, '');

    // Aplicar los enlaces a los botones
    if (landingData['button-1-link']) {
        document.getElementById('button-1').onclick = () => { window.location.href = landingData['button-1-link']; };
    }
    if (landingData['button-2-link']) {
        document.getElementById('button-2').onclick = () => { window.location.href = landingData['button-2-link']; };
    }
    if (landingData['button-1-text']) {
        document.getElementById('button-1').textContent = landingData['button-1-text'];
      }
      if (landingData['button-2-text']) {
        document.getElementById('button-2').textContent = landingData['button-2-text'];
      }
      
}