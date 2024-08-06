import { gamesType, horoscop } from '@/const/gamesType'

import singTitles from '@/staticText/text'

export type StaticText = {
    [key: string]: {
        [key: string]: {
            [key: string]: string;
        };
    };
};

const langs = ['pl', 'en', 'de', 'fr', 'es', 'nl', 'it']

const pagestitle: any = []
langs.forEach(lang => {
    gamesType[lang].map((el: any) => {
        if (!pagestitle[lang]) {
            pagestitle[lang] = [];
        }
        pagestitle[lang].push({
            ['/' + el.url.split('/')[2]]: {
                title: el.name,
                description: el.descshort
            }
        })
    })
    horoscop[lang].map((el: any) => {
        if (!pagestitle[lang]) {
            pagestitle[lang] = [];
        }
        pagestitle[lang].push({
            ['/' + el.url]: {
                title: singTitles[lang]?.title + " " + el.name,
                description: el.desc
            }
        })
    })
});


const addDataToObject = (obj: any, data: any) => {
    data.forEach((item: any) => {
        Object.keys(item).forEach(key => {
            obj[key] = item[key];
        });
    });
}



export const pageTitles: StaticText = {
    pl: {
        index: {
            title: 'Aurum Tarot - Profesjonalne Odczytywanie Kart Tarota i Prywatne Sesje Wróżbiarskie',
            description: 'Profesjonalne odczytywanie kart tarota i prywatne sesje wróżbiarskie. Znajdź odpowiedzi na nurtujące pytania i odkryj swoją przyszłość z pomocą doświadczonych tarocistów.'
        },
        '/blog': {
            title: 'Aurum Tarot Blog - Wgląd w Magię Kart Tarota i Porady Wróżbiarski',
            description: 'Blog Aurum Tarot - Odkrywaj sekrety kart tarota i korzystaj z porad naszych doświadczonych tarocistów. Świat tarota na wyciągnięcie ręki!'
        },

        '/kontakt': {
            title: 'Aurum Tarot - Skontaktuj się z Nami',
            description: 'Skontaktuj się z Aurum Tarot. Oferujemy profesjonalne odczytywanie kart tarota i prywatne sesje wróżbiarskie. Jesteśmy tutaj, aby odpowiedzieć na wszystkie Twoje pytania.'
        },
        '/wrozba': {
            title: 'Aurum Tarot - Zamów Prywatne Czytanie Kart Tarota',
            description: 'Zamów prywatne czytanie kart tarota w Aurum Tarot. Skorzystaj z naszych profesjonalnych usług wróżbiarskich, aby uzyskać odpowiedzi na swoje pytania i odkryć swoją przyszłość.'
        },

    },
    en: {
        index: {
            title: 'Aurum Tarot - Professional Tarot Readings and Private Fortune-Telling Sessions',
            description: 'Professional tarot readings and private fortune-telling sessions. Find answers to pressing questions and discover your future with the help of experienced tarot readers.'

        },
        '/blog': {
            title: 'Aurum Tarot Blog - Insights into the Magic of Tarot Cards and Fortune-Telling Tips',
            description: 'Aurum Tarot Blog - Discover the secrets of tarot cards and benefit from tips by our experienced tarot readers. The world of tarot at your fingertips!'
        },
        '/contact': {
            title: 'Aurum Tarot - Contact Us',
            description: 'Contact Aurum Tarot. We offer professional tarot readings and private fortune-telling sessions. We are here to answer all your questions.'
        },
        '/divination': {
            title: 'Aurum Tarot - Order a Private Tarot Reading',
            description: 'Order a private tarot reading from Aurum Tarot. Benefit from our professional fortune-telling services to get answers to your questions and discover your future.'
        },
    },
    de: {
        index: {
            title: 'Aurum Tarot - Professionelle Tarot-Lesungen und Private Wahrsagungssitzungen',
            description: 'Professionelle Tarot-Lesungen und private Wahrsagungssitzungen. Finden Sie Antworten auf dringende Fragen und entdecken Sie Ihre Zukunft mit Hilfe erfahrener Tarotleser.'

        },
        '/blog': {
            title: 'Aurum Tarot Blog - Einblicke in die Magie der Tarotkarten und Wahrsagungstipps',
            description: 'Aurum Tarot Blog - Entdecken Sie die Geheimnisse der Tarotkarten und nutzen Sie die Tipps unserer erfahrenen Tarotleser. Die Welt des Tarots in greifbarer Nähe!'
        },
        '/kontaktieren': {
            title: 'Aurum Tarot - Kontaktieren Sie uns',
            description: 'Kontaktieren Sie Aurum Tarot. Wir bieten professionelle Tarot-Lesungen und private Wahrsagungssitzungen an. Wir sind hier, um all Ihre Fragen zu beantworten.'
        },
        '/wahrsagung': {
            title: 'Aurum Tarot - Bestellen Sie eine Private Tarot-Lesung',
            description: 'Bestellen Sie eine private Tarot-Lesung bei Aurum Tarot. Nutzen Sie unsere professionellen Wahrsagedienste, um Antworten auf Ihre Fragen zu erhalten und Ihre Zukunft zu entdecken.'
        },
    },
    fr: {
        index: {
            title: 'Aurum Tarot - Lectures de Tarot Professionnelles et Séances Privées de Voyance',
            description: "Lectures de tarot professionnelles et séances privées de voyance. Trouvez des réponses à vos questions pressantes et découvrez votre avenir avec l'aide de tarologues expérimentés."

        },
        '/blog': {
            title: 'Blog Aurum Tarot - Aperçus de la Magie des Cartes de Tarot et Conseils de Voyance',
            description: 'Blog Aurum Tarot - Découvrez les secrets des cartes de tarot et profitez des conseils de nos tarologues expérimentés. Le monde du tarot à portée de main!'
        },
        '/contactez': {
            title: 'Aurum Tarot - Contactez-nous',
            description: 'Contactez Aurum Tarot. Nous offrons des lectures de tarot professionnelles et des séances de voyance privées. Nous sommes ici pour répondre à toutes vos questions.'
        },
        '/voyance': {
            title: 'Aurum Tarot - Commandez une Lecture de Tarot Privée',
            description: 'Commandez une lecture de tarot privée chez Aurum Tarot. Profitez de nos services professionnels de voyance pour obtenir des réponses à vos questions et découvrir votre avenir.'
        },
    },
    es: {
        index: {
            title: 'Aurum Tarot - Lecturas de Tarot Profesionales y Sesiones Privadas de Adivinación',
            description: 'Lecturas de tarot profesionales y sesiones privadas de adivinación. Encuentra respuestas a preguntas urgentes y descubre tu futuro con la ayuda de lectores de tarot experimentados.'

        },
        '/blog': {
            title: 'Blog Aurum Tarot - Perspectivas sobre la Magia de las Cartas del Tarot y Consejos de Adivinación',
            description: 'Blog Aurum Tarot - Descubre los secretos de las cartas del tarot y aprovecha los consejos de nuestros lectores de tarot experimentados. ¡El mundo del tarot al alcance de tu mano!'
        },
        '/contactanos': {
            title: 'AAurum Tarot - Contáctanos',
            description: 'Contacta con Aurum Tarot. Ofrecemos lecturas de tarot profesionales y sesiones privadas de adivinación. Estamos aquí para responder todas tus preguntas.'
        },
        '/adivinacion': {
            title: 'Aurum Tarot - Ordena una Lectura de Tarot Privada',
            description: 'Ordena una lectura de tarot privada en Aurum Tarot. Aprovecha nuestros servicios profesionales de adivinación para obtener respuestas a tus preguntas y descubrir tu futuro.'
        },
    },
    nl: {
        index: {
            title: 'Aurum Tarot - Professionele Tarotlezingen en Privévoorspellingen',
            description: 'Professionele tarotlezingen en privévoorspellingen. Vind antwoorden op dringende vragen en ontdek je toekomst met de hulp van ervaren tarotlezers.'

        },
        '/blog': {
            title: 'Aurum Tarot Blog - Inzichten in de Magie van Tarotkaarten en Waarzeggerijtips',
            description: 'Aurum Tarot Blog - Ontdek de geheimen van tarotkaarten en profiteer van de tips van onze ervaren tarotlezers. De wereld van tarot binnen handbereik!'
        },
        '/contact': {
            title: 'Aurum Tarot - Neem Contact met Ons Op',
            description: 'Neem contact op met Aurum Tarot. Wij bieden professionele tarotlezingen en privévoorspellingen aan. We zijn hier om al je vragen te beantwoorden.'
        },
        '/waarzeggerij': {
            title: 'Aurum Tarot - Bestel een Privé Tarotlezing',
            description: 'Bestel een privé tarotlezing bij Aurum Tarot. Profiteer van onze professionele waarzeggerijdiensten om antwoorden op je vragen te krijgen en je toekomst te ontdekken.'
        },
    },
    it: {
        index: {
            title: 'Aurum Tarot - Letture di Tarocchi Professionali e Sessioni Private di Divinazione',
            description: "Letture di tarocchi professionali e sessioni private di divinazione. Trova risposte a domande urgenti e scopri il tuo futuro con l'aiuto di esperti lettori di tarocchi."

        },
        '/blog': {
            title: 'Blog Aurum Tarot - Approfondimenti sulla Magia delle Carte dei Tarocchi e Consigli di Divinazione',
            description: 'Blog Aurum Tarot - Scopri i segreti delle carte dei tarocchi e approfitta dei consigli dei nostri esperti lettori di tarocchi. Il mondo dei tarocchi a portata di mano!'
        },
        '/contattaci': {
            title: 'Aurum Tarot - Contattaci',
            description: 'Contatta Aurum Tarot. Offriamo letture di tarocchi professionali e sessioni private di divinazione. Siamo qui per rispondere a tutte le tue domande."'
        },
        '/divinazione': {
            title: 'Aurum Tarot - Ordina una Lettura dei Tarocchi Privata',
            description: 'Ordina una lettura dei tarocchi privata da Aurum Tarot. Approfitta dei nostri servizi professionali di divinazione per ottenere risposte alle tue domande e scoprire il tuo futuro.'
        },
    },
};


addDataToObject(pageTitles['pl'], pagestitle['pl']);
addDataToObject(pageTitles['en'], pagestitle['en']);
addDataToObject(pageTitles['de'], pagestitle['de']);
addDataToObject(pageTitles['fr'], pagestitle['fr']);
addDataToObject(pageTitles['es'], pagestitle['es']);
addDataToObject(pageTitles['nl'], pagestitle['nl']);
addDataToObject(pageTitles['it'], pagestitle['it']);

export default pageTitles;
