import { useLocale, useTranslations } from "next-intl";
import LocalSwitcherSelect from "./LocalSwitcherSelect";
import { locales } from "@/i18n/routing";

const LocalSwitcher = () => {
  const t = useTranslations("LocaleSwitcher");
  const localActive = useLocale();

  return (
    <LocalSwitcherSelect defaultValue={localActive} label={t("label")}>
      {locales.map((curr) => (
        <option key={curr} value={curr} className="bg-black">
          {t("locale", { locale: curr })}
        </option>
      ))}
    </LocalSwitcherSelect>
  );
};

export default LocalSwitcher;
