import s from "./contact.module.scss";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import Image from "next/image";
import Footer from "../Footer/Footer";

type Props = {
  condition: boolean;
};

const CapitalContact: React.FC<Props> = ({ condition }) => {
  return (
    <>
      <section data-condition={condition} className={s.main}>
        <div className={s.container}>
          <div className={s.head}>
            <h5>contact us</h5>
            <h1>
              {condition
                ? "We build businesses by finding great leaders and industry experts."
                : "We build businesses by providing capital and industry expertise."}
            </h1>
            <p>
              <HiOutlineMail />
              hello@roocapital.com
            </p>
          </div>
          <iframe
            className={s.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.332179421559!2d-122.01154692456693!3d37.334643772099575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2s!4v1684749125817!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className={s.detail}>
            <div className={s.detail_box}>
              <ImLocation />
              <div>
                <h5>locations</h5>
                <p>3250 Mary Street</p>
                <p>Suite 500A</p>
                <p>Coconut Grove, FL 33133</p>
              </div>
            </div>
            <div className={s.detail_box}>
              <FaPhoneSquareAlt />
              <div>
                <h5>call us</h5>
                <p>+1 786-322-4859</p>
              </div>
            </div>
          </div>
          <form className={s.form}>
            <h2>Want more information?</h2>
            <div className={s.formGrid}>
              <input type="text" placeholder="Name*" />
              <input type="text" placeholder="Company" />
              <input type="text" placeholder="Email*" />
              <input type="text" placeholder="Phone*" />
              <textarea rows={8} placeholder="Message*" />
            </div>
            <button>Send Message</button>
          </form>
        </div>
        <div data-condition={condition} className={s.bottom}>
          <div className={s.bottom_box}>
            <h5>Roo Capital is a division of Roo Partners, LLC</h5>
            <div className={s.bottom_img}>
              {condition ? (
                <Image
                  src="/roo-partner-white-logo.png"
                  fill
                  alt="roo-partner-logo"
                />
              ) : (
                <Image
                  src="/roo-search-white-logo.png"
                  fill
                  alt="roo-search-logo"
                />
              )}
            </div>
            <h1>Capital + Growth + Talent</h1>
            <p>
              The right capital and growth strategy can inspire, accelerate,and
              keep your organization moving forward.
            </p>
          </div>
        </div>
      </section>
      <Footer isCapital={condition ? false : true} />
    </>
  );
};

export default CapitalContact;
