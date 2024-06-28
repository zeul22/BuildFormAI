import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { db } from "../../../../configs";
import { userResponse } from "../../../../configs/schema";
import { eq } from "drizzle-orm";
import { Loader } from "lucide-react";
import * as XLSX from "xlsx";
import { toast } from "sonner";

const ResponseListItem = ({ item }) => {
  const data = JSON.parse(item.jsonform);
  const [loading, setloading] = useState(false);
  const ExportData = async () => {
    setloading(true);
    const result = await db
      .select()
      .from(userResponse)
      .where(eq(userResponse.formRef, item.id));

    if (result) {
      let jsonData = [];
      console.log(result);
      if (result.length > 0) {
        result.forEach((item) => {
          const jsonItem = JSON.parse(item.jsonResp);
          jsonData.push(jsonItem);
        });
        exporttoExcel(jsonData);
        toast("Exported Successfully!")
      }
      else{
        toast("No Responses!")
      }
      setloading(false);
    }
  };
  const exporttoExcel = (jsonData) => {
    const worksheet = XLSX.utils.json_to_sheet(jsonData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${jsonform.formTitle}.xlsx`);
  };
  return (
    <div className="ounded-lg shadow-md border  p-5  rounded-lg capitalize flex flex-col ">
      <div className=" mb-2">{data.formTitle}</div>
      <hr />
      <div className="flex justify-between align-middle items-center mt-6">
        <h2 className="font-light text-sm">
          <strong>{45}</strong> Responses
        </h2>
        <Button
          disabled={loading}
          onClick={() => ExportData()}
          className="hover:bg-orange-400 transition-all duration-300"
        >
          {loading ? <Loader className="animate-spin" /> : "Export"}
        </Button>
      </div>
    </div>
  );
};

export default ResponseListItem;
