// Función utilitaria para acceder a una propiedad de un objeto basado en una clave segura
export function getLocalizedValue<T extends Record<string, string>>(
  localizedObject: T,
  locale: string
): string {
  return localizedObject[locale as keyof T];
}
