import Head from "next/head";
import { Quicksand } from "next/font/google";

import { Navigation } from '@/components/Navigation'
import Banner from '@/components/Banner';
import pageTitles from '@/const/pageTitles'

import GameTypesView from "@/components/GameTypesView";
import SingTypeView from "@/components/SingTypeView";
import SingGames from '@/components/SingGames'

import { gamesType, horoscop } from '@/const/gamesType'
import CardGames from '@/components/CardGames'
import Contact from '@/pageComponent/Contact'
import OmenPage from '@/pageComponent/OmenPage'
import BlogPage from '@/pageComponent/BlogPage'

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
            path,
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
    if (activePath === '' || activePath === undefined) {
        activePath = 'index';
    }

    const urlToCards = gamesType[lang].map((el: any) => '/' + el.url.split('/')[2])
    const urlToSing = horoscop[lang].map((el: any) => el.url)

    const urlContact = ['/contact', '/kontakt'];
    const urlBlog = ['/blog'];

    const staticUrl = [
        "/wrozba",
        "/divination",
        "/wahrsagung",
        "/voyance",
        "/adivinacion",
        "/waarzeggerij",
        "/divinazione",
      ];

      const urlForSing  = activePath?.split('/')[1];


      console.log(urlForSing, 'urlForSing')

      let urlTitle = ''

      if(lang === 'fr'){
        urlTitle = urlForSing ? '/'+urlForSing.split('-').slice(0, 4).join('-') : activePath;
      }else{
        urlTitle = urlForSing ? '/'+urlForSing.split('-').slice(0, 3).join('-') : activePath;
      }
      

    return (
        <>
            <Head>
                <title>{pageTitles[lang]?.[urlTitle]?.title}</title>
                <meta name="description" content={pageTitles[lang]?.[urlForSing ? '/'+urlForSing.split('-').slice(0, 3).join('-') : activePath]?.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${QuicksandFont.className}`} >
                {lang && (<><Navigation lang={lang} />

                    {!staticUrl.includes(activePath) && ( <Banner locale={lang} />)}

                    {activePath === 'index' && (<><GameTypesView locale={lang} /><SingTypeView locale={lang} /></>)}
                    {urlToCards?.includes(activePath) && (
                        <CardGames locale={lang} path={activePath} />
                    )}
                    {urlForSing && urlToSing.includes(urlForSing.split('-').slice(0, 3).join('-')) && (
                        <SingGames locale={lang} path={activePath} />
                    )}
                    {urlContact.includes(activePath) && (
                        <Contact locale={lang} path={activePath} />
                    )}
                    {urlBlog.includes(activePath) && (
                        <BlogPage />
                    )}
                    {staticUrl.includes(activePath) && (
                        <OmenPage locale={lang} path={activePath}  />
                    )}

                </>)}
            </main>
        </>
    );
}
