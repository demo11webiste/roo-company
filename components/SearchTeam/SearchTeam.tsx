import Image from "next/image";
import s from "./team.module.scss";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";

type Props = {
  bgChange?: boolean;
};

const SearchTeam: React.FC<Props> = ({ bgChange = false }) => {
  const { push } = useRouter();

  return (
    <>
      <section data-bg={bgChange} className={s.main}>
        <div className={s.container}>
          <h5>the roo SEARCH team</h5>
          <div className={s.grid}>
            <div className={s.cover}>
              <div data-change className={s.card}>
                <div className={s.card_img}>
                  <Image src="/team/partner-1.png" alt="'partner" fill />
                </div>
                <p>Firstname Lastname</p>
              </div>
              <div className={s.card}>
                <div className={s.card_img}>
                  <Image src="/team/partner-2.png" alt="'partner" fill />
                </div>
                <p>Firstname Lastname</p>
              </div>
            </div>
            <div
              onClick={() =>
                bgChange
                  ? push("/roo-capital-team/first-name")
                  : push("/roo-search-team/first-name")
              }
              data-close
              className={s.active}
            >
              <div className={s.active_img}>
                <Image src="/team/partner.png" alt="'partner" fill />
              </div>
              <div>
                <p data-change>Firstname Lastname</p>
                <p>Title</p>
                <p>+1 555-555-1212</p>
                <p>Email</p>
              </div>
            </div>
            <div data-close className={s.cover}>
              <div data-close className={s.card}>
                <div className={s.card_img}>
                  <Image src="/team/partner-3.png" alt="'partner" fill />
                </div>
                <p>Firstname Lastname</p>
              </div>
              <div data-change className={s.card}>
                <div className={s.card_img}>
                  <Image src="/team/partner-4.png" alt="'partner" fill />
                </div>
                <p>Firstname Lastname</p>
              </div>
              <div className={s.card}>
                <div className={s.card_img}>
                  <Image src="/team/partner-5.png" alt="'partner" fill />
                </div>
                <p>Firstname Lastname</p>
              </div>
              <div data-close-bottom className={s.card}>
                <div className={s.card_img}>
                  <Image src="/team/partner-6.png" alt="'partner" fill />
                </div>
                <p>Firstname Lastname</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SearchTeam;
