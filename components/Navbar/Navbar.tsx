import Image from "next/image";
import s from "./navbar.module.scss";
import { useState } from "react";
import { useRef } from "react";
import useGsapContext from "@/hooks/useGsapContext";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useSnapshot } from "valtio";
import { store } from "@/store";
import Link from "next/link";

const Navbar = () => {
  const { NavbarLogoSwitch } = useSnapshot(store);

  const root = useRef<HTMLElement>(null);

  const ctx = useGsapContext(root);

  const [isMenuShow, setIsMenuShow] = useState<boolean>(false);
  const [isAllActive, setIsAllActive] = useState<boolean>(true);
  const [isActive, setIsActive] = useState<number>(0);
  const [scrollValue, setScrollValue] = useState<number>(0);

  const [tl, setTl] = useState<GSAPTimeline>();
  const [capitalTl, setCapitalTl] = useState<GSAPTimeline>();

  const handleClick = () => {
    setIsMenuShow((prev) => !prev);
    if (isMenuShow) {
      if (scrollY > 250) setScrollValue(400);
    } else {
      setScrollValue(0);
    }
  };

  const handleClose = () => {
    setIsMenuShow(false);
  };

  const handlePointerEnter = (id: number) => {
    setIsAllActive(false);
    setIsActive(id);
  };

  useEffect(() => {
    const getScrollValue = () => {
      if (scrollY <= 300) setScrollValue(scrollY);
    };

    window.addEventListener("scroll", getScrollValue);

    ctx.add(() => {
      const tlPartner = gsap
        .timeline({
          reversed: true,
        })
        .set(".partner-menu", { zIndex: 5 })
        .from(".partner-menu", { opacity: 0 })
        .from(".roologo", { xPercent: -250 })
        .to(".cover", { left: "100%" }, "<0.1")
        .from(".shadow", { scale: 0 }, "<");
      setTl(tlPartner);

      const tlCapital = gsap
        .timeline({
          reversed: true,
        })
        .set(".menu-capital", { zIndex: 5 })
        .from(".menu-capital", { opacity: 0 })
        .from(".capital-logo", { xPercent: -250 })
        .from(".capital-link", { clipPath: "inset(0 100% 0 0)" }, "<0.2")
        .set(".capital-link", { transition: "0.3s all ease" });
      setCapitalTl(tlCapital);
    });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", getScrollValue);
    };
  }, [ctx]);

  useEffect(() => {
    if (NavbarLogoSwitch === "partner") {
      tl?.reversed(!isMenuShow);
    } else {
      capitalTl?.reversed(!isMenuShow);
    }
  }, [isMenuShow, tl, capitalTl, NavbarLogoSwitch]);

  return (
    <header ref={root}>
      <nav className={s.main}>
        <div
          data-logo={scrollValue > 250}
          data-active={isMenuShow}
          className={s.logo}
        >
          {NavbarLogoSwitch === "partner" ? (
            <Link onClick={handleClose} href="/">
              <Image src="/roo-partners-logo.png" alt="roo-capital" fill />
            </Link>
          ) : NavbarLogoSwitch === "search" ? (
            <Link onClick={handleClose} href={isMenuShow ? "/" : "/roo-search"}>
              <Image src="/roo-search-logo.png" alt="roo-search" fill />
            </Link>
          ) : (
            <Link
              onClick={handleClose}
              href={isMenuShow ? "/" : "/roo-capital"}
            >
              <Image src="/roo-capital-logo.png" alt="roo-capital" fill />
            </Link>
          )}
        </div>
        <button
          data-active={isMenuShow}
          onClick={handleClick}
          className={s.button}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        data-change={NavbarLogoSwitch === "search"}
        className={`${s.menuCapital}  menu-capital`}
      >
        <div className={`${s.menuCapital_logo} capital-logo`} />
        <div className={s.menuCapital_cover}>
          <Link
            onPointerEnter={() => handlePointerEnter(0)}
            onPointerLeave={() => setIsAllActive(true)}
            onClick={handleClose}
            data-active={isAllActive ? true : isActive === 0}
            className="capital-link"
            href={
              NavbarLogoSwitch === "search"
                ? "/roo-search-about"
                : "/roo-capital-about"
            }
          >
            About
          </Link>
          <Link
            onPointerEnter={() => handlePointerEnter(1)}
            onPointerLeave={() => setIsAllActive(true)}
            onClick={handleClose}
            data-active={isAllActive ? true : isActive === 1}
            className="capital-link"
            href={
              NavbarLogoSwitch === "search"
                ? "/roo-search-industries"
                : "/roo-capital-portfolio"
            }
          >
            {NavbarLogoSwitch === "search" ? "Industries" : "Portfolio"}
          </Link>
          <Link
            onPointerEnter={() => handlePointerEnter(2)}
            onPointerLeave={() => setIsAllActive(true)}
            onClick={handleClose}
            data-active={isAllActive ? true : isActive === 2}
            className="capital-link"
            href={
              NavbarLogoSwitch === "search"
                ? "/roo-search-team"
                : "/roo-capital-team"
            }
          >
            Team
          </Link>
          <Link
            onPointerEnter={() => handlePointerEnter(3)}
            onPointerLeave={() => setIsAllActive(true)}
            onClick={handleClose}
            data-active={isAllActive ? true : isActive === 3}
            className="capital-link"
            href={
              NavbarLogoSwitch === "search"
                ? "/roo-search-contact"
                : "/roo-capital-contact"
            }
          >
            Contact
          </Link>
        </div>
      </div>

      <div className={`${s.rooPartnerMenu} partner-menu`}>
        <div className={s.box}>
          <div className={`cover ${s.box_cover}`} />
          <h3>
            Roo Partners is a unique venture capital and executive search firm
            bridging talent and capital.
          </h3>
          <Link data-color onClick={handleClose} href="/roo-capital">
            Roo Capital
          </Link>
          <p>
            VENTURE CAPITAL: Roo Capital supports key initiatives of early-stage
            businesses, by providing the capital for pre-seed, seed, Series A
            and Series B stage growth.
          </p>
          <Link onClick={handleClose} href="/roo-search">
            Roo Search
          </Link>
          <p>
            EXECUTIVE SEARCH: Roo Search understands that the right candidate
            should not only have the right experience, but should fit the firm’s
            culture and vision.
          </p>
        </div>
        <div data-width className={s.box}>
          <div className={`${s.rooLogo} roologo`}>
            <Image src="/logo.png" fill alt="roo-logo" />
          </div>
          <div className={`shadow ${s.shadow}`} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
