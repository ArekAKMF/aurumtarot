import Head from "next/head";
import pageTitles from "@/const/pageTitles";
import ReloadView from "@/components/ReloadView";

export const getServerSideProps = async (context: any) => {
  const { req } = context;
  const acceptLanguage = req.headers["accept-language"];
  const browserLanguage = acceptLanguage ? acceptLanguage.split(",")[0] : "en";

  return {
    props: {
      language: browserLanguage,
    },
  };
};

export default function Home({ language }: any) {
  const lang = language.split("-")[0];
  return (
    <>
      <Head>
        <title>{pageTitles[lang]?.index?.title}</title>
        <meta
          name="description"
          content={pageTitles[lang]?.index?.description}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {lang && (
        <>
          <ReloadView locale={lang} />
        </>
      )}
    </>
  );
}
