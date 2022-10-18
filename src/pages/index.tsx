import Head from "next/head";
import { getContent } from "../lib/md";

export default function Home({ data }: { data: any }) {
  return (
    <div className="">
      <Head>
        <title>NY DCON 2022</title>
        <meta name="description" content="NY DCON 2022 Schedule and Program" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container prose prose-p:my-4 prose-h2:mt-8 prose-h2:text-2xl prose-h2:font-normal">
        <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const data = await getContent();

  return {
    props: {
      data,
    },
  };
}
