import Head from "next/head";
import MenuTree from "../menuTree/menuTree";
import Footer from "./footer";
import Header from "./Header";

export default function Layout({ children, tilte }) {
  return (
    <>
      <div>
        <Head>
          <title>{tilte ? tilte : "Cricktracker clone"}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/logo.svg" />
        </Head>
      </div>
      <Header />
      <MenuTree></MenuTree>
      <main className="bg-gray-100 ">
        <div className="container mx-auto pb-6 h-full px-0 sm:px-0 md:px-6 max-w-screen-xl desc">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
