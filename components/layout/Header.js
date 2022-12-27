import Image from "next/image";
export default function Header() {
  return <div className="bg-primary-700">
    <nav  className="container mx-auto px-4 md:px-6 max-w-screen-xl border-gray-200 dark:bg-gray-900 py-[14px]" >
      <div className="grid grid-cols-2 justify-between items-center   ">
        <div className=" flex items-center gap-4">
          <a >
            <Image src="/logo.svg" alt="Logo" width={150} height={25} />
          </a>

          <div className="relative group border-l border-gray-100 ml-[6px]">
            <span className="pl-5  inline-flex items-center text-sm font-semibold text-center text-white  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" role="button">Eng <svg className="ml-2 w-3 h-3" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></span>
            <div className="absolute w-[130px] hidden z-10  bg-white rounded-xl divide-y divide-gray-100 overflow-hidden group-hover:block  shadow-lg dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" >
                <li>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">हिंदी | Hindi</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">বাংলা | Bengali</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" flex items-center gap-4  justify-end">
          <div role={'button'} className="text-primary-700 bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold  rounded-full text-sm px-2 shadow py-1 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Sign In
          </div>
          <div className="flex gap-4">
            <div role={'button'} >
              <svg width="31px" height="31px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="search-icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><path d="M20.0183209,18.8589878 L16.9593919,15.8224889 C19.4248508,12.7460903 19.0575803,8.27767443 16.1229438,5.6457981 C13.1883073,3.01392177 8.70988044,3.13656061 5.92345337,5.92510459 C3.1370263,8.71364857 3.01448056,13.1954778 5.64435892,16.1323438 C8.27423727,19.0692098 12.739261,19.4367593 15.8133241,16.9694273 L18.8475179,20.0059263 C19.0023332,20.1621349 19.2130743,20.25 19.4329194,20.25 C19.6527645,20.25 19.8635057,20.1621349 20.0183209,20.0059263 C20.3272264,19.6861065 20.3272264,19.1788076 20.0183209,18.8589878 L20.0183209,18.8589878 Z M11.1878276,16.9694273 C8.00028066,16.9694273 5.41626331,14.3834469 5.41626331,11.1934783 C5.41626331,8.00350969 8.00028066,5.41752921 11.1878276,5.41752921 C14.3753745,5.41752921 16.9593919,8.00350969 16.9593919,11.1934783 C16.9593919,14.3834469 14.3753745,16.9694273 11.1878276,16.9694273 L11.1878276,16.9694273 Z" id="Icon-Shape" fill="#FFFFFF" fillRule="nonzero"></path></g></svg>
            </div>
            <div role={'button'} className="hidden sm:hidden md:block border-l  pl-3 border-gray-100" >
              <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="menu-icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ic_search" fillRule="nonzero"><rect id="ViewBox" x="0" y="0" width="32" height="32"></rect></g><g id="Group"><rect id="Rectangle" fillOpacity="0" fill="#D8D8D8" x="0" y="0" width="32" height="32"></rect><path d="M27,20.8 L25.7150442,24 L5,24 L6.28495575,20.8 L27,20.8 Z M27,14.4 L27,17.6 L5,17.6 L5,14.4 L27,14.4 Z M27,8 L25.7150442,11.2 L5,11.2 L6.28495575,8 L27,8 Z" id="Shape" fill="#FFFFFF"></path></g></g></svg>
            </div>
          </div>
        </div>
      </div>
    </nav >
  </div>
}