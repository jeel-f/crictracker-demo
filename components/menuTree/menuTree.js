import { useQuery } from "@apollo/client";
import { GET_MENU_TREE } from "../../graphQL/graphql";

export default function MenuTree() {
  const { data, loading, error } = useQuery(GET_MENU_TREE);
  if (loading) {
    return null;
  }

  if (error) {
    return null;
  }
  const menu = data.getMenuTree?.aResults;
  return <div className=" bg-white w-full shadow ">
    <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
      <div className=" flex gap-6 lg:justify-center  py-4 max-w-screen-xl   overflow-auto 	">
        {menu.map(e => {
          return <span className="no-wrap text-xs font-bold" role={'button'} key={e.sTitle}>{e.sTitle.toUpperCase()}</span>
        })}
      </div>
    </div>
  </div>
}