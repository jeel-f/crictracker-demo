import client from "../apollo-client";
import { GET_HOME_PAGE_ARTICAL } from '../graphQL/graphql';
import Layout from '../components/layout/layout.jsx';
import Article from '../components/artical/article';

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_HOME_PAGE_ARTICAL
  }, {
    variables: {
      "getHomePageArticleInput2": {
        "nLimit": 10,
        "nSkip": 0
      }
    }
  });
  return {
    props: {
      article: data.getHomePageArticle.aResults,
      totalRecord: data.getHomePageArticle.nTotal
    },
  };
}

export default function Home({ article }) {
  return (
    <Layout>
      <div className='bg-gray-100 pt-6'>
        <div className='grid grid-cols-1 sm:grid-col-1 lg:grid-cols-12  gap-4 items-center justify-center pt-6'>
          <div className='col-span-2 sm:col-span-12 lg:col-span-2 hidden sm:hidden md:block'></div>
          <div className='col-span-8 sm:col-span-12 lg:col-span-8'>
            <Article article={article}></Article>
          </div>
          <div className='col-span-2 sm:col-span-12 lg:col-span-2 hidden sm:hidden md:block'> </div>
        </div>
      </div>

    </Layout>
  )
}
