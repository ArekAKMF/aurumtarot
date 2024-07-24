import Head from "next/head";
import { Inter, Quicksand } from "next/font/google";

import { Navigation } from '@/components/Navigation'
import Banner from '@/components/Banner';
import pageTitles from '@/const/pageTitles'
import { useGameType } from "@/hooks/useGameType";

import GameTypesView from "@/components/GameTypesView";
import SingTypeView from "@/components/SingTypeView";
import ReloadView from "@/components/ReloadView";
import SingGames from '@/components/SingGames'

import { gamesType, horoscop } from '@/const/gamesType'
import CardGames from '@/components/CardGames'
import Contact from '@/components/Contact'

import { useRouter } from 'next/router';
const QuicksandFont = Quicksand({
    subsets: ["latin"],
    weight: ['300', '400', '700'],
    style: ['normal'],
    variable: '--fontQuick',
});

export const getServerSideProps = async (context: any) => {
    const { req } = context;
    const acceptLanguage = req.headers['accept-language'];
    const browserLanguage = acceptLanguage ? acceptLanguage.split(',')[0] : 'en';

    const host = context.req.headers.host;
    const path = context.req.url;

    return {
        props: {
            language: browserLanguage,
            path
        },
    };
};

export default function Home({ language, path }: any) {
    const router = useRouter();
    const { query } = router;
    const lang = language.split('-')[0]
    let activePath = path.split(
        '/' + lang
    )[1]

    if (activePath === '') {
        activePath = 'index';
    }

    const urlToCards = gamesType[lang].map((el: any) => '/' + el.url.split('/')[2])
    const urlToSing = horoscop[lang].map((el: any) => el.url.split('-')[0])

    const urlContact = ['/contact', '/kontakt'];
    const urlBlog = ['/blog'];

    console.log('co mam', activePath?.includes(urlToSing), '000', activePath, 'urlToSing', urlToSing)

    return (
        <>
            <Head>
                <title>{pageTitles[lang]?.[activePath]?.title}</title>
                <meta name="description" content={pageTitles[lang]?.[activePath]?.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${QuicksandFont.className}`} >
                {lang && (<><Navigation lang={lang} />

                    <Banner locale={lang} />

                    {activePath === 'index' && (<><GameTypesView locale={lang} /><SingTypeView locale={lang} /></>)}
                    {urlToCards?.includes(activePath) && (
                        <CardGames locale={lang} path={activePath} />
                    )}
                    {activePath.includes(urlToSing) && (
                        <SingGames locale={lang} path={activePath} />
                    )}
                    {urlContact.includes(activePath) && (
                        <Contact locale={lang} path={activePath} />
                    )}
                    {urlBlog.includes(activePath) && (
                        // <Contact locale={lang} path={activePath}  />
                        <div>BLOG</div>
                    )}

                </>)}
            </main>
        </>
    );
}
