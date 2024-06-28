import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../@/components/ui/select";
import GradientBg from "../../../_themes/GradientBg";
import Themes from "../../../_themes/Themes";
import { Checkbox } from "../../../../@/components/ui/checkbox";
const Controller = ({ selectedTheme, selectedBackground,setsigninEnabled }) => {

  return (
    <div>
      <h2 className="my-1 font-bold">Themes</h2>
      <Select onValueChange={(value) => selectedTheme(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent className="w-[230px] h-[200px]">
          {/* Add Themes */}
          {Themes.map((theme, index) => (
            <SelectItem
              key={index}
              className="bg-white p-4 capitalize"
              value={theme.name}
            >
              {theme.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <h2 className="mt-8 my-1 font-bold">Background</h2>
      <div>
        <Select onValueChange={(value) => selectedBackground(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Background Theme" />
          </SelectTrigger>
          <SelectContent className="w-[230px] h-[200px]">
            {GradientBg.map((bg, index) => (
              <SelectItem
                className="capitalize p-3"
                key={index}
                value={bg.colors ? bg.colors : "white"}
              >
                {bg.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* <h2 className="mt-8 my-1 ddfont-bold">Text Color</h2>
      <div>Coming Soon</div> */}

      <div className="flex gap-2 mt-6 items-center">
        <Checkbox onCheckedChange={(e) => setsigninEnabled(e)} />{" "}
        <h2 className="text-xs ">Enable Authentication before submit</h2>
      </div>
    </div>
  );
};

export default Controller;
