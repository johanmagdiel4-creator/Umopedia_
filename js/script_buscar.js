// [v1.3] Rutas de imágenes corregidas de img/ a /recursos/
// [v1.3] Estructura de tarjetas adaptada a uma-card-tech (estilos.css)

const umas = [
    {
        nombre: "Gold Ship",
        estrategia: "Chaser",
        pista: "Césped / Media",
        rareza: "⭐⭐⭐",
        imagen: "/recursos/la golship.png",
        link: "personajes/ficha_gold_ship.html"
    },
    {
        nombre: "Special Week",
        estrategia: "Leader",
        pista: "Césped / Larga",
        rareza: "⭐⭐⭐",
        // [v1.3] Nombre de archivo alineado con /recursos/specialweek.png (index.html)
        imagen: "/recursos/specialweek.png",
        link: "personajes/ficha_special_week.html"
    },
    {
        nombre: "Silence Suzuka",
        estrategia: "Runner",
        pista: "Césped / Media",
        rareza: "⭐⭐⭐",
        imagen: "/recursos/suzuka.png",
        link: "personajes/ficha_silence_suzuka.html"
    },
    {
        nombre: "Tokai Teio",
        estrategia: "Leader",
        pista: "Césped / Media",
        rareza: "⭐⭐⭐",
        imagen: "/recursos/teio.png",
        link: "personajes/ficha_tokai_teio.html"
    },
    {
        nombre: "Mejiro McQueen",
        estrategia: "Leader",
        pista: "Césped / Larga",
        rareza: "⭐⭐⭐",
        imagen: "/recursos/mcqueen.png",
        link: "html/personajes/mejiromcqueen.html"
    },
    {
        nombre: "Rice Shower",
        estrategia: "Betweener",
        pista: "Césped / Larga",
        rareza: "⭐⭐⭐",
        imagen: "/recursos/rice.png",
        link: "html/personajes/riceshower.html"
    },
    {
        nombre: "Oguri Cap",
        estrategia: "Leader",
        pista: "Césped / Milla",
        rareza: "⭐⭐⭐",
        imagen: "/recursos/oguri.png",
        link: "html/personajes/oguricap.html"
    },
    {
        nombre: "Mejiro Ryan",
        estrategia: "Runner",
        pista: "Césped / Larga",
        rareza: "⭐⭐",
        imagen: "/recursos/mejiro ryan.png",
        link: "html/personajes/mejiroryan.html"
    },
    {
        nombre: "Mejiro Bright",
        estrategia: "Runner",
        pista: "Césped / Larga",
        rareza: "⭐⭐⭐",
        imagen: "/recursos/mejiro Bright.png",
        link: "html/personajes/mejirobright.html"
    },
    {
        nombre: "Mejiro Palmer",
        estrategia: "Runner",
        pista: "Césped / Larga",
        rareza: "⭐⭐⭐",
        imagen: "/recursos/mejiro Palmer.png",
        link: "html/personajes/mejiropalmer.html"
    },
    {
        nombre: "Vodka",
        estrategia: "Betweener",
        pista: "Césped / Media",
        rareza: "⭐⭐",
        imagen: "/recursos/vodka.png",
        link: "html/personajes/vodka.html"
    },
    {
        nombre: "Daiwa Scarlet",
        estrategia: "Runner",
        pista: "Césped / Media",
        rareza: "⭐⭐",
        // [v1.3] Normalizado a minúsculas para coincidir con index.html
        imagen: "/recursos/daiwa.png",
        link: "html/personajes/daiwascarlet.html"
    },
    {
        nombre: "Agnes Tachyon",
        estrategia: "Runner",
        pista: "Césped / Media",
        rareza: "⭐⭐",
        imagen: "/recursos/Tachyon.png",
        link: "html/personajes/agnestachyon.html"
    },
    {
        nombre: "Haru Urara",
        estrategia: "Runner",
        pista: "Césped / Larga",
        rareza: "⭐⭐",
        imagen: "/recursos/Haru.png",
        link: "html/personajes/haruurara.html"
    },
    {
        nombre: "Symboli Rudolf",
        estrategia: "Runner",
        pista: "Césped / Media",
        rareza: "⭐⭐⭐",
        imagen: "/recursos/rudoft.png",
        link: "html/personajes/ficha_symboli_rudolf.html"
    },
    {
        nombre: "Super Creek",
        estrategia: "Runner",
        pista: "Césped / Larga",
        rareza: "⭐⭐",
        imagen: "/recursos/Creek.png",
        link: "html/personajes/supercreek.html"
    },
    {
        nombre: "Kitasan Black",
        estrategia: "Runner",
        pista: "Césped / Larga",
        rareza: "⭐⭐⭐",
        imagen: "/recursos/kita.png",
        link: "personajes/ficha_kitasan_black.html"
    },
    {
        nombre: "Satono Diamond",
        estrategia: "Runner",
        pista: "Césped / Larga",
        rareza: "⭐⭐⭐",
        imagen: "/recursos/dia.png",
        link: "html/personajes/satonodiamond.html"
    },
    {
        nombre: "El Condor Pasa",
        estrategia: "Runner",
        pista: "Césped / Larga",
        rareza: "⭐⭐",
        imagen: "/recursos/condor.png",
        link: "html/personajes/elcondorpasa.html"
    },
    {
        nombre: "Agnes Digital",
        estrategia: "Runner",
        pista: "Tierra / Media",
        rareza: "⭐⭐⭐",
        imagen: "/recursos/digitnn.png",
        link: "html/personajes/agnesdigital.html"
    }
];

const contenedor = document.getElementById("contenedor-umas");

// [v1.3] Devuelve la clase CSS de color según la estrategia
function getStrategyClass(estrategia) {
    const clases = {
        "Runner":    "val-runner",
        "Leader":    "val-leader",
        "Chaser":    "val-chaser",
        "Betweener": "val-betweener"
    };
    return clases[estrategia] || "";
}

// [v1.3] Genera tarjetas con estructura uma-card-tech (estilos.css)
function mostrarUmas(lista) {
    contenedor.innerHTML = "";

    if (lista.length === 0) {
        contenedor.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:40px; color:#8892a0;">
                No se encontraron corredoras.
            </div>`;
        return;
    }

    lista.forEach(uma => {
        const card = document.createElement("div");
        card.classList.add("uma-card-tech");

        card.innerHTML = `
            <div class="card-image">
                <img src="${uma.imagen}" alt="${uma.nombre}">
            </div>
            <div class="card-content">
                <h3>${uma.nombre}</h3>
                <table class="mini-data">
                    <tr>
                        <td>Estrategia:</td>
                        <td class="${getStrategyClass(uma.estrategia)}">${uma.estrategia}</td>
                    </tr>
                    <tr><td>Pista:</td><td>${uma.pista}</td></tr>
                    <tr><td>Rareza:</td><td>${uma.rareza}</td></tr>
                </table>
                <a href="${uma.link}" class="btn-view">Ver Detalles</a>
            </div>
        `;

        contenedor.appendChild(card);
    });
}

mostrarUmas(umas);

// Filtrar en tiempo real según lo que escribe el usuario
document.getElementById("buscador").addEventListener("keyup", function () {
    const texto = this.value.toLowerCase();
    const resultado = umas.filter(uma =>
        uma.nombre.toLowerCase().includes(texto)
    );
    mostrarUmas(resultado);
});
