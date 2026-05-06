"use client";

import { createContext, useContext, useEffect, useState } from "react";
import en from "@/locales/en.json";
import ar from "@/locales/ar.json";
import es from "@/locales/es.json";
import fr from "@/locales/fr.json";
import de from "@/locales/de.json";
import pt from "@/locales/pt.json";
import hi from "@/locales/hi.json";
import zh from "@/locales/zh.json";
import ja from "@/locales/ja.json";

export type LangCode = "EN" | "ES" | "FR" | "DE" | "PT" | "AR" | "HI" | "ZH" | "JA";

const translations: Record<LangCode, typeof en> = { EN: en, ES: es, FR: fr, DE: de, PT: pt, AR: ar, HI: hi, ZH: zh, JA: ja };

interface LanguageContextValue {
  lang: LangCode;
  setLang: (code: LangCode) => void;
  t: typeof en;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "EN",
  setLang: () => {},
  t: en,
  isRTL: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("EN");

  const setLang = (code: LangCode) => {
    setLangState(code);
    // Apply RTL direction and Arabic font class to <html>
    const html = document.documentElement;
    const langAttrMap: Record<LangCode, string> = {
      EN: "en", ES: "es", FR: "fr", DE: "de", PT: "pt",
      AR: "ar", HI: "hi", ZH: "zh", JA: "ja",
    };
    if (code === "AR") {
      html.setAttribute("dir", "rtl");
      html.setAttribute("lang", "ar");
      html.classList.add("lang-ar");
    } else {
      html.setAttribute("dir", "ltr");
      html.setAttribute("lang", langAttrMap[code]);
      html.classList.remove("lang-ar");
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: translations[lang],
        isRTL: lang === "AR",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
