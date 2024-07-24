export type StaticText = {
    [key: string]: {
        [key: string]: {
            [key: string]: string;
        };
    };
};

export const pageTitles: StaticText = {
    pl: {
        index: {
            title: 'Mistic Tarot',
            description: 'Mistic description'

        },
        '/blog': {
            title: 'Mistic Tarot',
            description: 'Mistic description'
        },
        '/uklad-3-kart': {
            title: 'Układ 3 kart',
            description: 'Mistic description'
        }
    },
    en: {
        index: {
            title: 'Mistic Tarot EN',
            description: 'Mistic description En'

        }
    },
    de: {
        index: {
            title: 'Mistic Tarot EN',
            description: 'Mistic description En'

        }
    },
    fr: {
        index: {
            title: 'Mistic Tarot EN',
            description: 'Mistic description En'

        }

    },
    es: {
        index: {
            title: 'Mistic Tarot EN',
            description: 'Mistic description En'

        }

    },
    nl: {
        index: {
            title: 'Mistic Tarot EN',
            description: 'Mistic description En'

        }

    },
    it: {
        index: {
            title: 'Mistic Tarot EN',
            description: 'Mistic description En'

        }

    },
};

export default pageTitles;
