import { useTheme } from "@/entities/theme/lib/useTheme";
import { Button } from "@/shared/ui/button";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>{theme}</Button>
  );
}