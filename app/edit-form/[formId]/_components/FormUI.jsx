import React, { useRef, useState } from "react";
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
import FieldEdit from "./FieldEdit";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userResponse } from "../../../../configs/schema";
import { SignInButton, useUser } from "@clerk/nextjs";
import { Button } from "../../../../components/ui/button";
import { db } from "../../../../configs";
import moment from "moment";
const FormUI = ({
  jsonForm,
  onFieldUpdate,
  deleteField,
  selectedTheme,
  editable = true,
  formId = 0,
  enabledSignIn = false,
}) => {
  // console.log("at formUI,", selectedTheme);
  const [formData, setformData] = useState();
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  let formRef = useRef();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name, value) => {
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const result = await db.insert(userResponse).values({
      jsonResp: formData,
      createdAt: moment().format("DD/MM/YYYY"),
      formRef: formId,
    });
    if (result) {
      formRef.reset();
      toast("Response Submitted Successfully");
    } else {
      toast("Error while saving your form!");
    }
    router.push("/");
  };

  const handleCheckBox = (fieldName, itemName, value) => {
    const list = formData?.[fieldName] ? formData?.[fieldName] : [];

    if (value) {
      list.push({
        label: itemName,
        value: value,
      });

      setformData({
        ...formData,
        [fieldName]: list,
      });
    } else {
      const result = list.filter((item) => item.label == itemName);
      setformData({
        ...formData,
        [fieldName]: result,
      });
    }
  };

  return (
    <form
      ref={(e) => (formRef = e)}
      onSubmit={onFormSubmit}
      data-theme={selectedTheme}
      className={`rounded-lg border p-5 md:w-[600px] lg:w-[900px]`}
    >
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
                <Select
                  required={item.required}
                  onValueChange={(v) => handleSelectChange(item.fieldName, v)}
                >
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
                <RadioGroup required={item.required}>
                  {item.options.map((option, index1) => (
                    <div className="flex items-center space-x-2" key={index1}>
                      <RadioGroupItem
                        onClick={() =>
                          handleSelectChange(option.label, option.value)
                        }
                        value={option.value}
                        id={option.label}
                      />
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
                      <Checkbox
                        onCheckChange={(v) =>
                          handleCheckBox(item.label, option.label, v)
                        }
                        required={item.required}
                        value={option.label}
                      />
                      <h2>{option.label}</h2>
                    </div>
                  ))
                ) : (
                  <div className="flex gap-2">
                    <Checkbox
                      onCheckChange={(v) =>
                        handleCheckBox(item.label, option.label, v)
                      }
                      required={item.required}
                    />
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
                  className="bg-transparent"
                  type={item?.fieldType}
                  placeholder={item.fieldPlaceholder}
                  name={item.fieldName}
                  required={item.required}
                  onChange={(e) => handleInputChange(e)}
                />
              </>
            )}

            {editable && (
              <div>
                <FieldEdit
                  deleteField={(index) => deleteField(index)}
                  defaultValue={item}
                  onUpdate={(value) => onFieldUpdate(value, index)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full">
        {!enabledSignIn ? (
          <button type="submit" className="btn btn-primary mt-4 ">
            Submit
          </button>
        ) : isSignedIn ? (
          <button type="submit" className="btn btn-primary mt-4 ">
            Submit
          </button>
        ) : (
          <Button className="hover:bg-orange-400 transition-all duration-300 mt-4 ">
            <SignInButton mode="modal">To Submit, SignIn first</SignInButton>
          </Button>
        )}
      </div>
    </form>
  );
};

export default FormUI;
