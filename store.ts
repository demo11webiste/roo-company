import { proxy } from "valtio";

type Store = {
  NavbarLogoSwitch: string;
};

export const store = proxy<Store>({
  NavbarLogoSwitch: "search",
});
