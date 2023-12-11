import "./Footer.css";
import Logo from "../../img/Logo.svg";
import twitter_logo from "../../img/Twitter_logo.svg";
import telegram_logo from "../../img/Telegram_logo.svg";
import youtube_logo from "../../img/Youtube_logo.svg";
import discord_logo from "../../img/Discord_logo.svg";
import privacy_icon from "../../img/privacy-Icon.svg";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <footer>
          <div className="row">
            <div className="col-4">
              <a href="/">
                <img src={Logo} />
              </a>
            </div>
            <div className="col-4">
              <div className="links">
                <p>About</p>
                <p>Jobs</p>
                <Dropdown>
                  <Dropdown.Toggle
                    as={NavLink}
                    variant="success"
                    id="dropdown-basic"
                    className="dropdown-basic"
                  >
                    Legal
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu">
                    <Dropdown.Item href="#/action-1">
                      <img src={privacy_icon} />
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <img src={privacy_icon} />
                      Another action
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="col-4">
              <div className="social">
                <a href="#">
                  <img src={twitter_logo} />
                </a>
              </div>
              <div className="social">
                <a href="#">
                  <img src={telegram_logo} />
                </a>
              </div>
              <div className="social">
                <a href="#">
                  <img src={youtube_logo} />
                </a>
              </div>
              <div className="social">
                <a href="#">
                  <img src={discord_logo} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
