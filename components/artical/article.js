import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
export default function Artical({ article }) {
  return <div className="w-full">
    <div>{article.map(e => {
      return render(e);
    })}</div>
  </div>
}

function render(e) {
  return <div key={e.sName}>
    <div className="flex justify-center">
      <h3 className="border border-[3px] border-black rounded-full font-bold px-4 py-1 text-xl mb-3">{e.sName.toUpperCase()}</h3>
    </div>
    <div className="flex flex-col items-center mx-auto justify-center max-w-[600px]">

      {e.aArticle.map((artical, index) => {
        if (artical.sType === 'nBig') {
          return BigArticalCard(artical, index)
        }
        if (artical.sType === "nSmall") {
          return horizontalView(artical, index)
        }
      })}</div>
  </div>
}

const getFormatDate = (timestamp) => {
  return moment(timestamp).format("DD MMM YYYY");
}

function BigArticalCard(artical, key) {
  return <Link href={`/${artical.sTitle.split(" ").join("-")}/${artical._id}`}  className="bg-white rounded-lg p-3 shadow-primary-700 hover:shadow-lg " key={key + artical.sTitle} >
    <Image className="rounded-lg img-fluid " height={400} width={600}  alt={artical?.sTitle} src={'https://picsum.photos/600/400?random=' + key}></Image>
    <h1 className="py-3 font-bold text-lg capitalize">{artical.sTitle}</h1>
    <div className="text-gray-500 font-semibold  text-[12px]">
      <span>{getFormatDate(artical.dPublishDate)}</span>
    </div>
  </Link>;
}

function horizontalView(artical, key) {
  return <Link href={`/${artical.sTitle.split(" ").join("-")}/${artical._id}`} className="bg-white w-full rounded-lg p-3 shadow-primary-700 hover:shadow-lg flex flex-row gap-3 mt-3" key={key + artical.sTitle}>
    <Image className="rounded-lg " height={120} width={160} alt={artical?.sTitle} src={'https://picsum.photos/200/100?random=' + key}></Image>
    <div className='flex flex-col justify-between'>
      <h1 className="py-3 font-bold text-sm capitalize">{artical.sTitle}</h1>
      <div className="text-gray-500 font-semibold text-[12px]">
        <span>{getFormatDate(artical.dPublishDate)}</span>
      </div>
    </div>
  </Link>;
}
