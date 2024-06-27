import {
  DeleteIcon,
  EditIcon,
  Pencil,
  RemoveFormattingIcon,
  X,
} from "lucide-react";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../@/components/ui/popover";
import { Input } from "../../../../@/components/ui/input";
import { Button } from "../../../../components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../../@/components/ui/alert-dialog";

const FieldEdit = ({ defaultValue, onUpdate,deleteField }) => {
  const [label, setLabel] = useState(defaultValue.fieldLabel);
  const [placeholder, setPlaceholder] = useState(defaultValue.fieldPlaceholder);
  return (
    <div className="flex gap-2 my-2 justify-end">
      <Popover className="bg-white z-[10]">
        <PopoverTrigger>
          <Pencil className="h-8 w-6 cursor-pointer hover:scale-90 transition-all duration-300 text-gray-500" />
        </PopoverTrigger>
        <PopoverContent className="flex flex-col gap-5 bg-white">
          <div className="">
            <h2>Edit Field Label</h2>
            <Input
              type="text"
              defaultValue={defaultValue.fieldLabel}
              onChange={(e) => setLabel(e.target.value)}
            />
          </div>
          <div>
            <h2>Edit Field Placeholder</h2>
            <Input
              type="text"
              defaultValue={defaultValue.fieldPlaceholder}
              onChange={(e) => setPlaceholder(e.target.value)}
            />
          </div>
          <Button
            size="sm"
            className="mt-2 hover:bg-orange-400 transition-all duration-300"
            onClick={() =>
              onUpdate({
                label: label,
                placeholder: placeholder,
              })
            }
          >
            Update
          </Button>
        </PopoverContent>
      </Popover>
      <AlertDialog>
        <AlertDialogTrigger>
          <X className="h-8 w-7 cursor-pointer hover:scale-90 transition-all duration-300 text-red-600" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              field and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={()=>deleteField()}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default FieldEdit;
