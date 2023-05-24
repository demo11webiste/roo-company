import Image from "next/image";
import s from "./portfolio.module.scss";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";

const CapitalPortfolio = () => {
  const { push } = useRouter();
  return (
    <>
      <section className={s.main}>
        <div className={s.container}>
          <h5>OUR PORTFOLIO</h5>
          <div className={s.grid}>
            <div data-close className={s.cover}>
              <div className={s.box}>
                <div className={s.box_img}>
                  <Image src="/tempmee-logo.png" fill alt="logo" />
                </div>
                <h5>tempmee</h5>
              </div>
              <div data-change className={s.box}>
                <div className={s.box_img}>
                  <Image src="/fetcher-logo.png" fill alt="logo" />
                </div>
                <h5>fetcher</h5>
              </div>
            </div>
            <div data-active className={s.box}>
              <div className={s.box_img}>
                <Image src="/florence-logo.png" fill alt="logo" />
              </div>
              <h5>florence</h5>
              <div className={s.box_detail}>
                <p>STAGE: Venture Capital </p>
                <p>LOCATION: London</p>
                <p>STATUS: Current</p>
              </div>
              <h4>
                Florence’s free app connects nurses with open shifts, cutting
                out agency middlemen so shifts are filled directly with the
                right temporary staff.
              </h4>
              <button onClick={() => push("/roo-capital-portfolio/florence")}>
                Read More
              </button>
            </div>

            <div className={s.cover}>
              <div className={s.box}>
                <div className={s.box_img}>
                  <Image src="/tempmee-logo.png" fill alt="logo" />
                </div>
                <h5>tempmee</h5>
              </div>

              <div data-change className={s.box}>
                <div className={s.box_img}>
                  <Image src="/firebolt-logo.png" fill alt="logo" />
                </div>
                <h5>firebolt</h5>
              </div>

              <div data-close className={s.box}>
                <div data-close className={s.box_img}>
                  <Image src="/onchain-logo.png" fill alt="logo" />
                </div>
                <h5>onchain</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CapitalPortfolio;
