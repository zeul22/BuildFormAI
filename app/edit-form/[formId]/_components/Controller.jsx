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
const Controller = ({ selectedTheme,selectedBackground }) => {
  return (
    <div>
      <h2 className="my-1 font-bold">Themes</h2>
      <Select onValueChange={(value) => selectedTheme(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent className="w-[230px] h-[200px]">
          {/* Add Themes */}
          {Themes.map((theme,index)=>(
              <SelectItem className="bg-white p-4 capitalize" value={theme.name}>{theme.name}</SelectItem>

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
                <SelectItem className="capitalize p-3" key={index} value={bg.colors ? bg.colors: "white"}>{bg.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* <h2 className="mt-8 my-1 font-bold">Text Color</h2>
      <div>Coming Soon</div> */}
    </div>
  );
};

export default Controller;


