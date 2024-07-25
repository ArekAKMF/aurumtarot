import { gamesType, horoscop } from '@/const/gamesType'

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
            [el.url.split('/')[2]]: {
                title: el.name,
                description: el.descshort
            }
        })
    })
});


console.log(pagestitle['en'], 'pagestitle')

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
        ...pagestitle['pl'].flat() 
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
        ...pagestitle['en']
       
    },
    de: {
        index: {
            title: 'Aurum Tarot EN',
            description: 'Aurum description En'

        },
        ...pagestitle['de']
    },
    fr: {
        index: {
            title: 'Aurum Tarot EN',
            description: 'Aurum description En'

        },
        ...pagestitle['fr']

    },
    es: {
        index: {
            title: 'Aurum Tarot EN',
            description: 'Aurum description En'

        },
        ...pagestitle['es']

    },
    nl: {
        index: {
            title: 'Aurum Tarot EN',
            description: 'Aurum description En'

        },
        ...pagestitle['nl']

    },
    it: {
        index: {
            title: 'Aurum Tarot EN',
            description: 'Aurum description En'

        },
        ...pagestitle['it']

    },
};


console.log(pageTitles, 'SSSSSSSS');

export default pageTitles;
