import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import { useQuery } from "@apollo/client";
import { GET_ARTICAL_BY_ID } from "../../graphQL/graphql";
import Image from "next/image";

export default function ArticalById() {
  const router = useRouter();
  const { artical, id } = router.query;
  const { data } = useQuery(GET_ARTICAL_BY_ID,
    {
      "variables": {
        input: {
          "_id": id
        }
      }
    });
  const articalFront = data?.getArticleFront
  console.log("ArticalById ~ articalFront", articalFront)
  return <Layout title={artical?.split("-")?.join(" ")}>
    <div className='bg-gray-100 pt-6 '>
      <div className="bg-white rounded-none sm:rounded-none md:rounded-lg">
        <div>
          <div className="p-3">
            <h1 className="capitalize text-3xl font-bold break-all">{articalFront?.sTitle}</h1>
            <span className="capitalize text-md  text-gray-800 break-all">{articalFront?.sSubtitle}</span>
          </div>
          <Image className="md:p-3 " src='https://picsum.photos/200/100' alt={articalFront?.sTitle} height={200} width={100} style={{ width: '100%', maxWidth: '100%' }}></Image>
          <div dangerouslySetInnerHTML={{ __html: articalFront?.sAmpContent }}></div>
        </div>
      </div>
      <div className="mt-6 flex justify-center items-center">
        <div dangerouslySetInnerHTML={{ __html: articalFront?.sInsContent }}></div>
      </div>
    </div>
  </Layout>
}