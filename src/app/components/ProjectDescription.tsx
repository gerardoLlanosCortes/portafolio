import { getLocalizedValue } from "@/utils/utilities";
import DOMPurify from "isomorphic-dompurify";

type Props = {
  subtitle: {
    en: string;
    es: string;
  };
  content: { en: string; es: string };
  image?: string;
};

export default function ProjectDescription({
  description,
  locale,
}: {
  description: Props;
  locale: string;
}) {
  return (
    <>
      <div
        className="flex flex-col gap-3 leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(
            getLocalizedValue(description.content, locale)
          ),
        }}
      />
    </>
  );
}
