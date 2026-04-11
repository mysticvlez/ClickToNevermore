const characters = [
    { id: 1, name: "Wednesday Addams", actor: "Jenna Ortega", img: "wednesday.jpg" },
    { id: 2, name: "Enid Sinclair", actor: "Emma Myers", img: "enid.jpg" },
    { id: 3, name: "Xavier Thorpe", actor: "Percy Hynes White", img: "xavier.jpg" },
    { id: 4, name: "Tyler Galpin", actor: "Hunter Doohan", img: "tyler.jpg" },
    { id: 5, name: "Bianca Barclay", actor: "Joy Sunday", img: "bianca.jpg" },
    { id: 6, name: "Eugene Otinger", actor: "Moosa Mostafa", img: "eugene.jpg" },
    { id: 7, name: "Larissa Weems", actor: "Gwendoline Christie", img: "weems.jpg" },
    { id: 8, name: "Marilyn Thornhill", actor: "Christina Ricci", img: "thornhill.jpg" },
    { id: 9, name: "Gomez Addams", actor: "Luis Guzmán", img: "gomez.jpg" },
    { id: 10, name: "Morticia Addams", actor: "Catherine Zeta-Jones", img: "morticia.jpg" },
    { id: 11, name: "Uncle Fester", actor: "Fred Armisen", img: "fester.jpg" },
    { id: 12, name: "Thing", actor: "Victor Dorobantu", img: "thing.jpg" },
    { id: 13, name: "Sheriff Galpin", actor: "Jamie McShane", img: "sheriff.jpg" },
    { id: 14, name: "Dr. Kinbott", actor: "Riki Lindhome", img: "kinbott.jpg" },
    { id: 15, name: "Rowan Laslow", actor: "Johnna Dias-Watson", img: "rowan.jpg" },
    { id: 16, name: "Yoko Tanaka", actor: "Naomi J. Ogawa", img: "yoko.jpg" },
    { id: 17, name: "Ajax Petropolus", actor: "Georgie Farmer", img: "ajax.jpg" },
    { id: 18, name: "Agnes DeMille", actor: "Evie Templeton", img: "agnes.jpg" },
    { id: 19, name: "Pugsley Addams", actor: "Isaac Ordóñez", img: "pericles.jpg" }
];

const langData = {
    es: {
        play: "Jugar", langBtn: "Idioma: ES", credits: "Créditos", counter: "Elección:", replay: "Volver a jugar", home: "Menú",
        made: "Hecho por MysticVlez", insp: "Inspirado en Merlina (Netflix)",
        legal: "Este es un proyecto sin fines de lucro creado por fans. Todos los derechos de los personajes e imágenes pertenecen a Netflix. NOTA: EL JUEGO NO TIENE INTENCIONES DE OFENDER O COMPARAR A NADIE.",
        contact: "Dudas o comentarios, contacte al: mysticvlez1@gmail.com",
        questions: [
            "¿Con quién preferirías compartir habitación en Nevermore?",
            "¿A quién le confiarías tu mayor secreto?",
            "¿Con quién preferirías investigar un asesinato?",
            "¿Quién crees que sobreviviría más tiempo en el bosque?",
            "¿A quién elegirías para que te defienda en una pelea?",
            "¿Con quién te irías a tomar un café en Jericó?",
            "¿A quién invitarías al baile Rave'N?",
            "¿Quién tiene el mejor estilo de moda?",
            "¿Con quién harías equipo para un proyecto de ciencias?",
            "¿A quién dejarías a cargo de cuidar a tu mascota?",
            "¿Quién crees que esconde los peores secretos?",
            "¿Con quién te escaparías de la escuela a medianoche?",
            "¿A quién preferirías tener de enemigo?",
            "¿Quién daría los mejores consejos amorosos?",
            "¿Con quién preferirías estar atrapado en una cueva?",
            "¿Quién crees que sería un mejor líder para Nevermore?",
            "¿A quién le pedirías ayuda para ocultar un cadáver?",
            "¿Quién crees que tiene el poder más inútil?",
            "¿Con quién iniciarías una banda de música?",
            "¿Quién crees que sería más exitoso en el mundo real?",
            "¿A quién preferirías tener como profesor?",
            "¿Con quién verías películas de terror en la noche?",
            "¿Quién crees que llora en secreto?",
            "¿A quién le prestarías dinero sabiendo que no te lo devolverá?",
            "¿Quién haría el mejor pastel de cumpleaños?",
            "¿Con quién te irías de viaje por el mundo?",
            "¿Quién es más probable que termine en la cárcel?",
            "¿A quién elegirías para que escriba tu biografía?",
            "¿Quién crees que tiene el mejor gusto musical?",
            "¿Con quién preferirías pelear a espadas?",
            "¿A quién dejarías leer tu diario íntimo?",
            "¿Quién crees que sería el mejor alcalde de Jericó?",
            "¿Con quién te gustaría tener una charla profunda a las 3 AM?",
            "¿Quién sobreviviría a un apocalipsis zombie?",
            "¿A quién preferirías enfrentar en un torneo de esgrima?",
            "¿Quién es más probable que te traicione?",
            "¿Con quién armarías un club secreto?",
            "¿Quién crees que tiene la mente más brillante?",
            "¿A quién le ganarías fácilmente en un juego de ajedrez?",
            "¿Quién crees que tiene el alma más oscura?",
            "¿Con quién te gustaría fundar una empresa?",
            "¿Quién tiene la risa más espeluznante?",
            "¿A quién llevarías a una reunión familiar incómoda?",
            "¿Quién resolvería un misterio más rápido que la policía?",
            "¿Con quién preferirías aprender magia antigua?",
            "¿Quién te caería peor si lo conocieras en persona?",
            "¿A quién elegirías para sabotear la Copa Poe?",
            "¿Quién crees que tiene más miedo al fracaso?",
            "¿Con quién te mudarías a una ciudad nueva?",
            "¿Quién sería el mejor antagonista en la temporada 2?"
        ],

        results: [
            "El sarcasmo es tu escudo y la oscuridad tu zona de confort. Excelentes gustos.",
            "Eres un rayo de sol asfixiante que ve colores donde no los hay. ¡Qué energía!",
            "El arte es tu escape y la lealtad tu mayor tormento. Tienes un alma profunda.",
            "Tienes el encanto de un líder, pero escondes secretos profundos.",
            "La abeja reina que no acepta un 'no' por respuesta. Implacable.",
            "Prefieres a los animales que a las personas. Ellos no mienten.",
            "Tu estilo es impecable, pero tu ambición puede ser peligrosa.",
            "La excentricidad corre por tus venas, igual que la devoción por los tuyos.",
            "Elegancia macabra y una intuición que hiela la sangre.",
            "Mano a mano con el peligro, siempre listo para ayudar sin decir una palabra.",
            "La locura es solo una perspectiva. Claramente te gusta el caos.",
            "La ciencia y la lógica no pueden explicar tu conexión con lo sobrenatural.",
            "Bajo una apariencia normal, tienes una fiereza esperando salir.",
            "La autoridad es tu fachada, pero en el fondo solo quieres proteger a los tuyos.",
            "Una mente analítica que disfruta diseccionando la realidad que le rodea."
        ]
    },
    en: {
        play: "Play", langBtn: "Language: EN", credits: "Credits", counter: "Choice:", replay: "Play Again", home: "Menu",
        made: "Made by MysticVlez", insp: "Inspired by Wednesday (Netflix)",
        legal: "This is a non-profit fan project. All rights to characters and images belong to Netflix. NOTE: THE GAME IS NOT INTENDED TO OFFEND OR COMPARE ANYONE.",
        contact: "Questions or comments, contact: mysticvlez1@gmail.com",
        questions: [
            "Who would you share a room with in Nevermore?",
            "Who would you trust with your biggest secret?",
            "Who would you investigate a murder with?",
            "Who do you think would survive the longest in the woods?",
            "Who would you choose to defend you in a fight?",
            "Who would you go grab coffee with in Jericho?",
            "Who would you invite to the Rave'N dance?",
            "Who has the best fashion sense?",
            "Who would you team up with for a science project?",
            "Who would you leave in charge of watching your pet?",
            "Who do you think hides the worst secrets?",
            "Who would you sneak out of school with at midnight?",
            "Who would you rather have as an enemy?",
            "Who would give the best relationship advice?",
            "Who would you rather be trapped in a cave with?",
            "Who do you think would be a better leader for Nevermore?",
            "Who would you ask for help hiding a body?",
            "Who do you think has the most useless power?",
            "Who would you start a band with?",
            "Who do you think would be more successful in the real world?",
            "Who would you rather have as a teacher?",
            "Who would you watch horror movies with at night?",
            "Who do you think secretly cries?",
            "Who would you lend money to knowing they won't pay it back?",
            "Who would make the best birthday cake?",
            "Who would you go on a trip around the world with?",
            "Who is most likely to end up in jail?",
            "Who would you choose to write your biography?",
            "Who do you think has the best musical taste?",
            "Who would you rather have a sword fight with?",
            "Who would you let read your private diary?",
            "Who do you think would be the best mayor of Jericho?",
            "Who would you like to have a deep 3 AM chat with?",
            "Who would survive a zombie apocalypse?",
            "Who would you rather face in a fencing tournament?",
            "Who is most likely to betray you?",
            "Who would you start a secret club with?",
            "Who do you think has the most brilliant mind?",
            "Who would you easily beat in a game of chess?",
            "Who do you think has the darkest soul?",
            "Who would you like to start a company with?",
            "Who has the creepiest laugh?",
            "Who would you take to an awkward family reunion?",
            "Who would solve a mystery faster than the police?",
            "Who would you rather learn ancient magic with?",
            "Who would you dislike the most if you met them in person?",
            "Who would you choose to sabotage the Poe Cup?",
            "Who do you think has the greatest fear of failure?",
            "Who would you move to a new city with?",
            "Who would be the best antagonist for Season 2?"
        ],

        results: [
            "Sarcasm is your shield and darkness your comfort zone. Excellent taste.",
            "You're a suffocating sunbeam who sees colors where there are none. What energy!",
            "Art is your escape and loyalty your greatest torment. You have a deep soul.",
            "You have the charm of a leader, but you hide deep secrets.",
            "The queen bee who won't take 'no' for an answer. Relentless.",
            "You prefer animals over people. They don't lie.",
            "Your style is impeccable, but your ambition can be dangerous.",
            "Eccentricity runs through your veins, as does devotion to your own.",
            "Macabre elegance and an intuition that curdles the blood.",
            "Hand in hand with danger, always ready to help without saying a word.",
            "Madness is just a perspective. Clearly, you enjoy chaos.",
            "Science and logic cannot explain your connection to the supernatural.",
            "Under a normal appearance, you have a fierceness waiting to break out.",
            "Authority is your facade, but deep down you just want to protect your own.",
            "An analytical mind that enjoys dissecting the reality that surrounds it."
        ]
    }
};

let currentLang = 'es';
let choicesHistory = [];
let currentCount = 0;
let currentOptions = [];

function playSnd(id) {
    const s = document.getElementById(id);
    if (s) { s.currentTime = 0; s.play().catch(() => {}); }
}

function updateUI() {
    const t = langData[currentLang];
    document.getElementById('btn-play').textContent = t.play;
    document.getElementById('btn-lang').textContent = t.langBtn;
    document.getElementById('btn-credits-open').textContent = t.credits;
    document.getElementById('btn-replay').textContent = t.replay;
    document.getElementById('btn-home').textContent = t.home;
    document.getElementById('label-counter').textContent = t.counter;
    document.getElementById('cred-made').textContent = t.made;
    document.getElementById('cred-insp').textContent = t.insp;
    document.getElementById('legal-text').textContent = t.legal;
    document.getElementById('cred-contact').textContent = t.contact;
}

// Listas de espera para evitar repeticiones
let lastQuestions = [];
let lastCharacters = [];

function nextTurn() {
    const qList = langData[currentLang].questions;
    
    // Lógica para Preguntas (Evita repetir en 3 rondas)
    let randomQ;
    do {
        randomQ = qList[Math.floor(Math.random() * qList.length)];
    } while (lastQuestions.includes(randomQ));

    // Guardar la pregunta y mantener la lista en máximo 3
    lastQuestions.push(randomQ);
    if (lastQuestions.length > 3) lastQuestions.shift();
    
    document.getElementById('question-text').textContent = randomQ;

    // Lógica para Personajes (Evita repetir en 3 rondas)
    let c1, c2;
    
    // Buscar el primer personaje que no esté en la lista de espera
    do {
        c1 = characters[Math.floor(Math.random() * characters.length)];
    } while (lastCharacters.includes(c1.id));

    // Buscar el segundo que no esté en espera y no sea igual al primero
    do {
        c2 = characters[Math.floor(Math.random() * characters.length)];
    } while (lastCharacters.includes(c2.id) || c2.id === c1.id);

    // Guardar los IDs en la lista de espera (máximo 6 IDs para cubrir 3 rondas de 2 personajes)
    lastCharacters.push(c1.id, c2.id);
    if (lastCharacters.length > 6) {
        lastCharacters.splice(0, 2);
    }

    currentOptions = [c1, c2];

    // Actualizar visualmente
    document.getElementById('img-1').src = c1.img;
    document.getElementById('name-1').textContent = c1.name;
    document.getElementById('actor-1').textContent = c1.actor;

    document.getElementById('img-2').src = c2.img;
    document.getElementById('name-2').textContent = c2.name;
    document.getElementById('actor-2').textContent = c2.actor;

    document.getElementById('current-count').textContent = currentCount;
}

function selectCard(idx) {
    playSnd('snd-click');
    
    // El flash se maneja solo con clases
    document.body.classList.add('flash-lines');
    setTimeout(() => document.body.classList.remove('flash-lines'), 150);

    choicesHistory.push({ 
        q: document.getElementById('question-text').textContent, 
        char: currentOptions[idx] 
    });
    
    currentCount++;

    if(currentCount >= 15) {
        showResults();
    } else {
        const cont = document.querySelector('.cards-container');
        
        // Usamos una clase "changing" para el parpadeo rápido
        cont.classList.add('changing'); 
        
        setTimeout(() => {
            nextTurn();
            cont.classList.remove('changing');
        }, 80);
    }
}

function showResults() {
    document.getElementById('game-screen').classList.replace('active', 'hidden');
    const res = document.getElementById('result-screen');
    
    res.classList.remove('hidden');
    setTimeout(() => res.classList.add('active'), 50);
    
    const rs = langData[currentLang].results;
    document.getElementById('final-verdict').textContent = rs[Math.floor(Math.random() * rs.length)];
    
    const container = document.getElementById('results-history');
    container.innerHTML = "";
    
    choicesHistory.forEach(item => {
        const div = document.createElement('div');
        div.className = "result-box";
        div.innerHTML = `
            <p class="res-q">${item.q}</p>
            <img src="${item.char.img}">
            <p><strong>${item.char.name}</strong></p>
            <p class="res-actor">${item.char.actor}</p>
        `;
        container.appendChild(div);
    });
}

// Botones y Eventos
document.getElementById('btn-play').onclick = () => {
    playSnd('snd-click');
    document.getElementById('menu-screen').classList.replace('active', 'hidden');
    const g = document.getElementById('game-screen');
    g.classList.remove('hidden'); setTimeout(() => g.classList.add('active'), 50);
    currentCount = 0; choicesHistory = []; nextTurn();
};

document.getElementById('btn-lang').onclick = () => { playSnd('snd-click'); currentLang = currentLang === 'es' ? 'en' : 'es'; updateUI(); };
document.getElementById('btn-credits-open').onclick = () => { playSnd('snd-click'); document.getElementById('modal-credits').classList.remove('hidden'); };
document.getElementById('btn-credits-close').onclick = () => document.getElementById('modal-credits').classList.add('hidden');
document.getElementById('btn-home').onclick = () => { playSnd('snd-click'); location.reload(); };
document.getElementById('btn-replay').onclick = () => {
    playSnd('snd-click');
    document.getElementById('result-screen').classList.replace('active', 'hidden');
    document.getElementById('btn-play').onclick();
};

document.getElementById('card-left').onclick = () => selectCard(0);
document.getElementById('card-right').onclick = () => selectCard(1);

// Sonido "hover"
document.querySelectorAll('button, .character-card').forEach(el => {
    el.onmouseenter = () => playSnd('snd-hover');
});

updateUI();