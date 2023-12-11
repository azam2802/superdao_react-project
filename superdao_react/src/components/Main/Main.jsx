import React from "react";
import "./Main.css";
import Stars from "../../img/stars.svg";
import Stars2 from "../../img/stars2.svg";
import Stars3 from "../../img/stars3.svg";
import Stars4 from "../../img/stars4.svg";
import Section2__img from "../../img/section-2__img.png";
import Section4__img from "../../img/section-4__img.png";
import Section8__img from "../../img/section-8__img.png";
import play_btn from "../../img/play_btn.svg";
import icon_ethereum from "../../img/Icon_ethereum.svg";
import icon_polygon from "../../img/Icon_polygon.svg";
import icon_gnosis from "../../img/Icon_gnosis.svg";
import icon_snapshot from "../../img/Icon_snapshot.svg";
import icon_ens from "../../img/Icon_ens.svg";
import icon_opensea from "../../img/Icon_opensea.svg";
import photo1 from "../../img/photo_1.png";
import photo2 from "../../img/photo_2.png";
import photo3 from "../../img/photo_3.png";
import photo4 from "../../img/photo_4.png";
import photo5 from "../../img/photo_5.png";
import Decrypt_logo from "../../img/decrypt-logo.png";
import Blockworks_logo from "../../img/blockworks-logo.png";
import TechCrunch_logo from "../../img/TechCrunch-logo.png";
import Arrow from "../../img/arrow.svg";
import Arrow_white from "../../img/arrow_white.svg";
import section10_img1 from "../../img/section-10_img1.png";
import section10_img2 from "../../img/section-10_img2.png";
import section10_img3 from "../../img/section-10_img3.png";
import icon_telegram from "../../img/Icon_telegram.svg";
import icon_email from "../../img/Icon_email.svg";

const Main = () => {
  return (
    <div className="Main">
      <section className="section-1">
        <div className="container">
          <h1>The easiest way to start a DAO</h1>
          <p>
            An all-in-one platform to start, manage and grow a decentralized
            autonomous organization
          </p>
          <button>Get started</button>
        </div>
      </section>
      <section className="section-2">
        <div className="container" style={{textAlign: "center"}}>
          <div className="block">
            <img src={Stars} id="stars" />
            <h1>Ready for every project</h1>
          </div>
          <div className="buttons">
            <button id="btn__first">Investment DAO</button>
            <button id="btn__second">Startup DAO</button>
            <button id="btn__third">Service DAO</button>
            <button id="btn__fourth">Community DAO</button>
            <button id="btn__fifth">Impact DAO</button>
            <button id="btn__sixth">DeFi DAO</button>
            <button id="btn__seventh">+ More</button>
          </div>
          <img src={Section2__img} style={{width: '100%'}}/>
        </div>
      </section>
      <section className="section-3">
        <div className="container">
          <div className="block">
            <h1>Designed for the full journey</h1>
            <img src={Stars2} />
          </div>
          <h2>Organisation design</h2>
          <h2>Smart contract development</h2>
          <h2>Fundraising</h2>
          <h2>Launch marketing</h2>
          <h2>Member onboarding</h2>
          <h2>Contributor management</h2>
          <h2>DAO operations</h2>
        </div>
      </section>
      <section className="section-4">
        <img src={Stars3} id="section-4_stars" />
        <div className="container">
          <div className="block">
            <h1>All the tools in one app</h1>
          </div>
          <div className="links">
            <a href="#">NFT membership</a>
            <a href="#">Member directory</a>
            <a href="#">Treasury</a>
            <a href="#">Feed</a>
            <a href="#">Governance</a>
            <a href="#">App store</a>
          </div>
          <img src={Section4__img} id="section_4-img"   style={{width: '100%'}}/>
          <button>
            <img src={play_btn} />
            Watch video
          </button>
        </div>
      </section>
      <section className="section-5">
        <div className="container">
          <div className="block">
            <img src={Stars4} />
            <h1>Works With</h1>
          </div>
          <div className="row">
            <div className="card">
              <img src={icon_ethereum} />
              <p>Ethereum</p>
            </div>
            <div className="card">
              <img src={icon_polygon} />
              <p>Polygon</p>
            </div>
            <div className="card">
              <img src={icon_gnosis} />
              <p>Gnosis Safe</p>
            </div>
            <div className="card">
              <img src={icon_snapshot} />
              <p>Snapshot</p>
            </div>
            <div className="card">
              <img src={icon_ens} />
              <p>ENS</p>
            </div>
            <div className="card">
              <img src={icon_opensea} />
              <p>OpenSea</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-6">
        <div className="container">
          <h1>Help at every step</h1>
          <div className="photos">
            <img src={photo1} className="photo" />
            <img src={photo2} className="photo" />
            <img src={photo3} className="photo" />
            <img src={photo4} className="photo" />
            <img src={photo5} className="photo" />
          </div>
          <p>
            Success managers
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2L17.78 9.51397C18.1475 13.0542 20.9458 15.8525 24.486 16.22L32 17L24.486 17.78C20.9458 18.1475 18.1475 20.9458 17.78 24.486L17 32L16.22 24.486C15.8525 20.9458 13.0542 18.1475 9.51397 17.78L2 17L9.51397 16.22C13.0542 15.8525 15.8525 13.0542 16.22 9.51397L17 2Z"
                fill="#4BE1F4"
              />
              <path
                d="M17 2L17.78 9.51397C18.1475 13.0542 20.9458 15.8525 24.486 16.22L32 17L24.486 17.78C20.9458 18.1475 18.1475 20.9458 17.78 24.486L17 32L16.22 24.486C15.8525 20.9458 13.0542 18.1475 9.51397 17.78L2 17L9.51397 16.22C13.0542 15.8525 15.8525 13.0542 16.22 9.51397L17 2Z"
                stroke="#4BE1F4"
                stroke-width="2.3097"
                stroke-linejoin="round"
              />
            </svg>
            Knowledge base
            <br />
            Chat support
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2L17.78 9.51397C18.1475 13.0542 20.9458 15.8525 24.486 16.22L32 17L24.486 17.78C20.9458 18.1475 18.1475 20.9458 17.78 24.486L17 32L16.22 24.486C15.8525 20.9458 13.0542 18.1475 9.51397 17.78L2 17L9.51397 16.22C13.0542 15.8525 15.8525 13.0542 16.22 9.51397L17 2Z"
                fill="#A36FFE"
              />
              <path
                d="M17 2L17.78 9.51397C18.1475 13.0542 20.9458 15.8525 24.486 16.22L32 17L24.486 17.78C20.9458 18.1475 18.1475 20.9458 17.78 24.486L17 32L16.22 24.486C15.8525 20.9458 13.0542 18.1475 9.51397 17.78L2 17L9.51397 16.22C13.0542 15.8525 15.8525 13.0542 16.22 9.51397L17 2Z"
                stroke="#A36FFE"
                stroke-width="2.3097"
                stroke-linejoin="round"
              />
            </svg>
            Tutorials
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2L17.78 9.51397C18.1475 13.0542 20.9458 15.8525 24.486 16.22L32 17L24.486 17.78C20.9458 18.1475 18.1475 20.9458 17.78 24.486L17 32L16.22 24.486C15.8525 20.9458 13.0542 18.1475 9.51397 17.78L2 17L9.51397 16.22C13.0542 15.8525 15.8525 13.0542 16.22 9.51397L17 2Z"
                fill="#C8D316"
              />
              <path
                d="M17 2L17.78 9.51397C18.1475 13.0542 20.9458 15.8525 24.486 16.22L32 17L24.486 17.78C20.9458 18.1475 18.1475 20.9458 17.78 24.486L17 32L16.22 24.486C15.8525 20.9458 13.0542 18.1475 9.51397 17.78L2 17L9.51397 16.22C13.0542 15.8525 15.8525 13.0542 16.22 9.51397L17 2Z"
                stroke="#C8D316"
                stroke-width="2.3097"
                stroke-linejoin="round"
              />
            </svg>
            Templates
            <br />
            Smart Contract development
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2L17.78 9.51397C18.1475 13.0542 20.9458 15.8525 24.486 16.22L32 17L24.486 17.78C20.9458 18.1475 18.1475 20.9458 17.78 24.486L17 32L16.22 24.486C15.8525 20.9458 13.0542 18.1475 9.51397 17.78L2 17L9.51397 16.22C13.0542 15.8525 15.8525 13.0542 16.22 9.51397L17 2Z"
                fill="#FF8135"
              />
              <path
                d="M17 2L17.78 9.51397C18.1475 13.0542 20.9458 15.8525 24.486 16.22L32 17L24.486 17.78C20.9458 18.1475 18.1475 20.9458 17.78 24.486L17 32L16.22 24.486C15.8525 20.9458 13.0542 18.1475 9.51397 17.78L2 17L9.51397 16.22C13.0542 15.8525 15.8525 13.0542 16.22 9.51397L17 2Z"
                stroke="#FF8135"
                stroke-width="2.3097"
                stroke-linejoin="round"
              />
            </svg>
            Events
            <br />
            Education
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2L17.78 9.51397C18.1475 13.0542 20.9458 15.8525 24.486 16.22L32 17L24.486 17.78C20.9458 18.1475 18.1475 20.9458 17.78 24.486L17 32L16.22 24.486C15.8525 20.9458 13.0542 18.1475 9.51397 17.78L2 17L9.51397 16.22C13.0542 15.8525 15.8525 13.0542 16.22 9.51397L17 2Z"
                fill="#FFFBA8"
              />
              <path
                d="M17 2L17.78 9.51397C18.1475 13.0542 20.9458 15.8525 24.486 16.22L32 17L24.486 17.78C20.9458 18.1475 18.1475 20.9458 17.78 24.486L17 32L16.22 24.486C15.8525 20.9458 13.0542 18.1475 9.51397 17.78L2 17L9.51397 16.22C13.0542 15.8525 15.8525 13.0542 16.22 9.51397L17 2Z"
                stroke="#FFFBA8"
                stroke-width="2.3097"
                stroke-linejoin="round"
              />
            </svg>
            Guides
          </p>
        </div>
      </section>
      <section className="section-7">
        <div className="container">
          <div className="form_block">
            <h1>Weekly digest</h1>
            <p>Latest news in DAOs and Web3</p>
            <form>
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
      <section className="section-8">
        <div className="block">
          <h1>Backed by</h1>
          <img src={Stars3} />
        </div>
        <img src={Section8__img} width={"100%"} id="section-8__img" />
      </section>
      <section className="section-9">
        <div className="container">
          <div className="block">
            <h1>Press</h1>
            <img src={Stars2} />
          </div>
          <div className="row">
            <div className="col-4 col-4_blue">
              <img src={Decrypt_logo} />
              <h1>
                Superdao Raises $10.5 Million to Build an 'All-in-One' DAO
                Platform
              </h1>
              <p>
                Superdao aims to make it easier for online communities to build
                and launch DAOs
              </p>
              <a href="#">
                Read <img src={Arrow} />
              </a>
            </div>
            <div className="col-4 col-4_pink">
              <img src={Blockworks_logo} />
              <h1>
                The Y Combinator of Web3 Attracts Record Number of DAO Startups
              </h1>
              <p>
                DAOs and related startups made up an “overwhelming number of
                applicants” for a Web3 accelerator’s cohort this year
              </p>
              <a href="#">
                Read <img src={Arrow} />
              </a>
            </div>
            <div className="col-4 col-4_green">
              <img src={TechCrunch_logo} />
              <h1>
                VC-backed DAO startups are racing to define what DAOs actually
                are
              </h1>
              <p>
                Not all 'decentralized autonomous organizations' are
                autonomous... or decentralized
              </p>
              <a href="#">
                Read <img src={Arrow} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section-10">
        <div className="container">
          <div className="block">
            <img src={Stars2} />
            <h1>Podcasts</h1>
          </div>
          <div className="row">
            <div className="col-4">
              <img src={section10_img1} />
              <div className="text">
                <h1>Understanding DAOs with Yury Lifshits</h1>
                <p>The Pomp Podcast</p>
                <p>by Anthony Pompliano</p>
              </div>
              <a href="#">
                Listen <img src={Arrow_white} />
              </a>
            </div>
            <div className="col-4">
              <img src={section10_img2} />
              <div className="text">
                <h1>
                  Everything You Need to Know About DAOs with Yury Lifshits from
                  Superdao
                </h1>
                <p>The Unstoppable Podcast</p>
                <p>by Josh Gordon</p>
              </div>
              <a href="#">
                Watch <img src={Arrow_white} />
              </a>
            </div>
            <div className="col-4">
              <img src={section10_img3} />
              <div className="text">
                <h1>Yury Lifshits - Superdao: The “Shopify” for DAOs</h1>
                <p>Zima Red</p>
                <p>by Andrew Stainwold</p>
              </div>
              <a href="#">
                Listen <img src={Arrow_white} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section-11">
        <div className="container">
          <img src={Stars} />
          <h1>What's your DAO idea?</h1>
          <h2>Let’s chat and see how we can help</h2>
          <div className="buttons">
            <a href="#">
              <button className="btn_yellow">
                <div className="icon_bg">
                  <img src={icon_telegram} />
                </div>
                <div className="row">
                  <div className="col-6">Telegram</div>
                  <div className="col-6">@superdao_team</div>
                </div>
              </button>
            </a>
            <a href="#">
              <button className="btn_blue">
                <div className="icon_bg">
                  <img src={icon_email} />
                </div>
                <div className="row">
                  <div className="col-6">Email</div>
                  <div className="col-6">hello@superdao.com</div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
