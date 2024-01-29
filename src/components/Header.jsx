import { BiHide } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { LuRefreshCw } from "react-icons/lu";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { BiSolidShoppingBags } from "react-icons/bi";
import { SiMoneygram } from "react-icons/si";
import { MdOutlineSendToMobile } from "react-icons/md";
import loanjpeg from "../assets/loan.jpg";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
import ubalogo from "../assets/ubalogo.png";

export default function Header() {
  return (
    <div>
      <div>
        <div className="header--container">
          <HiOutlineUserCircle className="header--icon" size="2.4rem" />
          <p className="header--text"> Hello, SAMMY KING ZANE</p>
          <IoNotificationsOutline
            className="header--notification"
            size="2.4rem"
          />
          <img src={ubalogo} className="header--logo" />
        </div>
      </div>
      <div className="box--container">
        <div className="box boxA--container">
          <p className="account--number">
            Account: <span className="acc--no">2144424234</span>
          </p>
          <div className="balance">
            <h1 className="account--balance"> NGN 433,722.98</h1>

            <BiHide size="1.6em" className="balance--icon" />
          </div>
          <div>
            <p>savings account</p>
          </div>
          <div className="balance--update">
            <FaPlus className="update--icon left" color="green" size="1.2rem" />
            <p className="update--text">Balance last updated on 18:33pm</p>
            <LuRefreshCw
              className="update--icon right"
              color="ree"
              size="1.2rem"
            />
          </div>
        </div>

        <div className="box boxB--container">
          <h1>Services</h1>
          <div className="service--container">
            <div className="service--box">
              <SiMoneygram
                color="#d90429"
                size="2.2rem"
                className="send--icon"
              />
              <p className="send--text">Send Money</p>
            </div>
            <div className="service--box">
              <RxCounterClockwiseClock
                color="#d90429"
                size="2.2rem"
                className="history--icon"
              />
              <p className="history--text">Transaction History</p>
            </div>
            <div className="service--box">
              <MdOutlineSendToMobile
                color="#d90429"
                size="2.2rem"
                className="paybills--icon"
              />
              <p className="pay--text">Pay Bills</p>
            </div>
            <div className="service--box">
              <BiSolidShoppingBags
                color="#d90429"
                size="2.2rem"
                className="lifestyle--icon"
              />
              <p className="lifestyle--text">Lifestyle</p>
            </div>
          </div>
        </div>

        <div className=" box boxC--container">
          <h3>Loans</h3>
          <img src={loanjpeg} className="loan--jpeg" />
          <p>Quick Loans</p>
        </div>
      </div>
    </div>
  );
}
