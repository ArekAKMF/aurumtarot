import { gamesType, horoscop } from '@/const/gamesType'

export type StaticText = {
    [key: string]: {
        [key: string]: {
            [key: string]: string;
        };
    };
};


const langs = ['pl', 'en', 'de', 'fr', 'es', 'nl', 'it']

const singTitles:any = {
    pl : {
        title: 'Horoskop dla znaku zodiaku'
    },
    en: {
        title: 'Horoscope for zodiac sing'
    },
    de: {
        title: 'Horoscope for zodiac sing'
    },
    fr: {
        title: 'Horoscope for zodiac sing'
    },
    es: {
        title: 'Horoscope for zodiac sing'
    },
    nl: {
        title: 'Horoscope for zodiac sing'
    },
    it: {
        title: 'Horoscope for zodiac sing'
    },
}

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
            title: 'Aurum Tarot',
            description: 'Aurum description'
        },
        '/blog': {
            title: 'Aurum Tarot',
            description: 'Aurum description'
        },
    },
    en: {
        index: {
            title: 'Aurum Tarot',
            description: 'Aurum description'

        },
        '/contact': {
            title: 'Contact Aurum Tarot',
            description: 'Aurum description'
        },
    },
    de: {
        index: {
            title: 'Aurum Tarot EN',
            description: 'Aurum description En'

        },
    },
    fr: {
        index: {
            title: 'Aurum Tarot EN',
            description: 'Aurum description En'

        },
    },
    es: {
        index: {
            title: 'Aurum Tarot EN',
            description: 'Aurum description En'

        },
    },
    nl: {
        index: {
            title: 'Aurum Tarot EN',
            description: 'Aurum description En'

        },
    },
    it: {
        index: {
            title: 'Aurum Tarot EN',
            description: 'Aurum description En'

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
