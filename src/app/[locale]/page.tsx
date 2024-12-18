import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.homeTitle;

  return {
    title,
  };
}

export default function HomePage() {
  const t = useTranslations("IndexPage");
  return (
    <div>
      <h1 className="text-yellow-500 dark:text-red-50">{t("name")}</h1>
    </div>
  );
}
