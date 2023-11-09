import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const themeOptions = [
    { value: "system", label: "System" },
    { value: "dark", label: "Dark" },
    { value: "light", label: "Light" },
  ];

  return (
    <div className="flex justify-center mt-4 space-x-4">
      {themeOptions.map((option) => (
        <button
          key={option.value}
          className={`p-2 ${
            theme === option.value
              ? "bg-theme-accent rounded-md text-white"
              : "text-theme-inverted"
          }`}
          onClick={() => setTheme(option.value)}
          data-test-id="theme-selector"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
