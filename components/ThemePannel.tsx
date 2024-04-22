import { Button } from "@nextui-org/react";
import { useColor, useTheme } from "hooks/useTheme";
import { useState } from "react";

export function ThemePannel() {
  // const modes = ["dark", "light", "system"];

  const colors = ["green", "red", "blue"];
  const modes = ["light", "dark"];

  const [theme, setTheme] = useTheme();
  const [color, setColor] = useColor();

  return (
    <section className="bg-primary-50 min-h-screen flex justify-center rounded-3xl items-center border-4 border-onPrimaryBg p-2 m-2">
      {modes.map((mode) => (
        <Button
          className={`theme-${mode} text-onNeutralBg border-2 border-onNeutralBg bg-neutralBg`}
          onClick={() => setTheme(`theme-${mode}`)}
          key={mode}
        >
          {mode}
        </Button>
      ))}

      {colors.map((myColor) => (
        <Button
          className={`${theme} ${color} bg-primaryBg text-onNeutralBg`}
          onClick={() => setColor(`theme-${myColor}`)}
          key={myColor}
        >
          {myColor}
        </Button>
      ))}
    </section>
  );
}
