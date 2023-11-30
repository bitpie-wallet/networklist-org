import * as React from "react";
import { useEffect } from "react";
import Header from "../header";
// import { useTranslations } from "next-intl";
import { notTranslation as useTranslations } from "../../utils";
import Logo from "./Logo";
import { useRouter } from "next/router";

const toggleTheme = (e) => {
  e.preventDefault();
  const element = document.body;
  document.getElementById("theme-toggle-dark-icon").classList.toggle("hidden");
  document.getElementById("theme-toggle-light-icon").classList.toggle("hidden");
  const result = element.classList.toggle("dark");
  localStorage.setItem("theme", result ? "dark" : "light");
};

const initTheme = () => {
  const element = document.body;
};

export default function Layout({ children, lang }) {
  useEffect(() => {
    initTheme();
  }, []);

  const t = useTranslations("Common", lang);

  const router = useRouter();

  const { search } = router.query;

  const chainName = typeof search === "string" ? search : "";

  return (
    <div
      className="grid grid-cols-1"
      style={{
        margin: "0 auto",
        width: "80vw",
      }}
    >
      <div className="dark:bg-[#181818] bg-[#f3f3f3] p-5 relative flex flex-col gap-5">
        <Header lang={lang} chainName={chainName} key={chainName + "header"} />

        {children}
      </div>
    </div>
  );
}
