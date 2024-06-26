import React from "react";
import { Input } from "../../../../@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../@/components/ui/select";
import { Label } from "../../../../@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../@/components/ui/radio-group";
import { Checkbox } from "../../../../@/components/ui/checkbox";

const FormUI = ({ jsonForm }) => {
  return (
    <div className="rounded-lg border p-5 md:w-[600px] lg:w-[900px]">
      <h2 className="font-bold capitalize text-center text-2xl">
        {jsonForm.formTitle}
      </h2>
      <h2 className="text-gray-500 text-sm my-2">{jsonForm.formHeading}</h2>

      <div className="flex flex-col gap-4">
        {jsonForm.fields?.map((item, index) => (
          <div key={index}>
            {item.fieldType === "select" ? (
              <>
                <label className="text-gray-800 text-sm">
                  {item.fieldLabel}
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={item.fieldPlaceholder} />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    {item.options.map((option, index1) => (
                      <SelectItem
                        className="z-10 bg-white p-2"
                        key={index1}
                        value={option.value}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </>
            ) : item.fieldType === "radio" ? (
              <>
                <RadioGroup>
                  {item.options.map((option, index1) => (
                    <div className="flex items-center space-x-2" key={index1}>
                      <RadioGroupItem value={option.value} id={option.label} />
                      <Label htmlFor="option-one">{option.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </>
            ) : item.fieldType === "checkbox" ? (
              <div>
                <label>{item.label}</label>
                {item?.option ? (
                  item.options.map((option, index1) => (
                    <div key={index1} className="flex gap-2">
                      <Checkbox value={option.label} />
                      <h2>{option.label}</h2>
                    </div>
                  ))
                ) : (
                  <div className="flex gap-2">
                    <Checkbox />
                    <h2>{item.label}</h2>
                  </div>
                )}
              </div>
            ) : (
              <>
                <label className="text-gray-800 text-sm">
                  {item.fieldLabel}
                </label>
                <Input
                  type={item?.fieldType}
                  placeholder={item.fieldPlaceholder}
                  name={item.fieldName}
                  required={item.required}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormUI;
