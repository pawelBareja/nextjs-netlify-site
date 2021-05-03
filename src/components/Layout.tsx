import Head from "next/head";
import Navigation from "./Navigation";
import { useState, useEffect } from "react";
import { SocialList } from "./footer/SocialList";
import Copyright from "./footer/Copyright";
import Footer from "./footer/Footer";


type Props = {
  children: React.ReactNode;
};



export default function Layout ({ children }: Props) {

  const [navFixed, setNavFixed] = useState(true);

  const toggleMenu = () => {
    let distanceFromTop = window.pageYOffset

    return function () {
      let newDistanceFromTop = window.pageYOffset
      if (newDistanceFromTop < 50 || distanceFromTop >= newDistanceFromTop) {
        setNavFixed(true)
      } else {
        setNavFixed(false)
      }
      distanceFromTop = newDistanceFromTop
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleMenu())
    return window.removeEventListener("scroll", toggleMenu())
  }, [])

  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav className={navFixed ? "nav" : "nav hide"}>
        <img src="/images/logo.svg" width={100} height={50} alt={"logo bareja studio"} />
        <Navigation />
      </nav>
      <main>{children}</main>
      <Footer />
      <style jsx>
        {`
          .nav {
            z-index: 10;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 60px;
            margin: 0 auto;
            padding: 0 10px;
            background: #fff;
            box-shadow: 0 3px 10px 0 rgba(93, 110, 139, 0.2);
            transition: 1s;
          }
          .hide {
            transform: translateY(-60px);
          }
          main {
            margin-top:80px;
            }
          }
        `}
      </style>
      <style global jsx>
        {`
          ul{
            padding-left:0;
            list-style-type:none;
          }
        `}
      </style>
    </div>
  );
}
