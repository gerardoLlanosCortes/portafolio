"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { ChangeEvent, ReactNode, useTransition } from "react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

const LocalSwitcherSelect = ({ children, defaultValue, label }: Props) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      // Cambiar el idioma sin afectar la URL
      router.replace(
        // @ts-expect-error -- TypeScript verificará que solo se usen parámetros válidos
        // con el `pathname` correspondiente. Como siempre coinciden en la ruta actual,
        // podemos omitir la comprobación en tiempo de ejecución.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };

  return (
    <label className="border-2 rounded">
      <p className="sr-only">{label}</p>
      <select
        defaultValue={defaultValue}
        className="bg-transparent py-2 text-white"
        onChange={onSelectChange}
        disabled={isPending}
      >
        {children}
        {/* <option value="es">Español</option>
        <option value="en">English</option> */}
      </select>
    </label>
  );
};

export default LocalSwitcherSelect;
