import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const locales = ["es", "en"];

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale: "es",
  localePrefix: "never",
  pathnames: {
    // If all locales use the same pathname, a single
    // external path can be used for all locales
    "/": "/",

    // If locales use different paths, you can
    // specify each external path per locale

    // Dynamic params are supported via square brackets
    // "/test/[slug]": {
    //   es: "/test/[slug]",
    //   en: "/testing/[slug]",
    // },

    // Static pathnames that overlap with dynamic segments
    // will be prioritized over the dynamic segment
    // '/news/just-in': {
    //   en: '/news/just-in',
    //   es: '/neuigkeiten/aktuell'
    // },

    // Also (optional) catch-all segments are supported
    // '/categories/[...slug]': {
    //   en: '/categories/[...slug]',
    //   es: '/kategorien/[...slug]'
    // }
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
