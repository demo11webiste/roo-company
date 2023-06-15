import { useRouter } from "next/router";
import Footer from "../Footer/Footer";
import s from "./industries.module.scss";

const SearchIndustries = () => {
  const { push } = useRouter();
  return (
    <>
      <section className={s.main}>
        <div className={s.container}>
          <h5>industry expertise</h5>
          <div className={s.grid}>
            <div data-close className={s.cover}>
              <div className={s.box}>
                <h1>60+</h1>
                <p>amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                <h5>private equity</h5>
              </div>
              <div data-change className={s.box}>
                <h1>60+</h1>
                <p>amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                <h5>SaaS</h5>
              </div>
            </div>
            <div data-active className={s.box}>
              <h1>60+</h1>
              <p>amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
              <h5>digital health</h5>
              <h4>
                Roo Search’s process of identifying and evaluating highly
                skilled and experienced executives who can lead and manage
                digital health organizations or initiatives to stay ahead of the
                curve and drive innovation in healthcare.
              </h4>
              <button
                onClick={() => push("/roo-search-industries/digital-health")}
              >
                Read More
              </button>
            </div>
            <div className={s.cover}>
              <div className={s.box}>
                <h1>60+</h1>
                <p>amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                <h5>financial services</h5>
              </div>
              <div data-change className={s.box}>
                <h1>60+</h1>
                <p>amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                <h5>venture capital</h5>
              </div>
              <div data-close className={s.box}>
                <h1>60+</h1>
                <p>amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                <h5>professional services</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer isCapital={false} />
    </>
  );
};

export default SearchIndustries;
