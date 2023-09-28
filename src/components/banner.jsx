import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState(true);
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("en");
  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
          <div className="bg-slate-800 text-white text-sm p-3 md:rounded shadow-lg flex justify-between">
            <div className="text-white inline-flex">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setCurrentLanguage(currentLanguage === "en" ? "vi" : "en");
                  i18n.changeLanguage(currentLanguage === "en" ? "vi" : "en");
                }}
              >
                Change language EN - VI
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
