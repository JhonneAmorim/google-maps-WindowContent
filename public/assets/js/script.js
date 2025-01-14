let map;
let scriptLoaded = false;

async function loadGoogleMapsApi() {
    if (scriptLoaded) return;
    scriptLoaded = true;

    try {
        const response = await fetch("/api-key");
        const data = await response.json();
        const apiKey = data.apiKey;

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
        script.async = true;
        document.head.appendChild(script);
    } catch (error) {
        console.error("Erro ao carregar a API do Google Maps:", error);
    }
}

function initMap() {
    if (map) return;

    const location = { lat: -23.5505, lng: -46.6333 };

    map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 12,
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "São Paulo - SP",
    });

    const infoWindowContent = `
        <div style="max-width: 300px;">
            <h3>Imóvel em São Paulo</h3>
            <div class="carousel">
                <img src="./assets/imgs/fachada.jpg" alt="Imagem 2" style="width: 100%; border-radius: 8px;">
                <img src="./assets/imgs/dentro.jpg" alt="Imagem 1" style="width: 100%; border-radius: 8px;">
                <img src="./assets/imgs/varanda.jpg" alt="Imagem 3" style="width: 100%; border-radius: 8px;">
            </div>
            <p>Descrição do imóvel: Belo apartamento no centro de São Paulo.</p>
            <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                <span style="font-size: 14px; color: gray;">Preço: R$ 500.000</span>
                <button style="padding: 5px 10px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
                    Ver Mais
                </button>
            </div>
        </div>
    `;

    const infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent,
    });

    google.maps.event.addListener(infoWindow, "domready", () => {
        const carouselElement = document.querySelector(".carousel");
        if (carouselElement) {
            $(".carousel").slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
            });
        } else {
            console.error("Elemento do carrossel não encontrado no DOM.");
        }
    });

    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });

    map.addListener("click", () => {
        infoWindow.close();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadGoogleMapsApi();
});
