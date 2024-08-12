import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
function index() {
  const [data, setData] = useState([
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ]);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px] text-white text-xl">Date</TableHead>
            <TableHead className="w-[400px] text-xl text-white">
              Total HVAC
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="bg-black/20">
            <TableCell className="font-medium text-[#181818]  text-lg">
              2018-02-2022 01:00:00
            </TableCell>
            <TableCell className="font-medium text-[#181818] text-lg">
              30.672033803
            </TableCell>
          </TableRow>
          <TableRow className="bg-black/20">
            <TableCell className="font-medium text-[#181818]  text-lg">
              2018-02-2022 02:00:00
            </TableCell>
            <TableCell className="font-medium text-[#181818] text-lg">
              33.672033803
            </TableCell>
          </TableRow>
          <TableRow className="bg-black/20">
            <TableCell className="font-medium text-[#181818]  text-lg">
              2018-02-2022 03:00:00
            </TableCell>
            <TableCell className="font-medium text-[#181818] text-lg">
              43.672033803
            </TableCell>
          </TableRow>
          <TableRow className="bg-black/20">
            <TableCell className="font-medium text-[#181818]  text-lg">
              2018-02-2022 04:00:00
            </TableCell>
            <TableCell className="font-medium text-[#181818] text-lg">
              200.672033803
            </TableCell>
          </TableRow>
          <TableRow className="bg-black/20">
            <TableCell className="font-medium text-[#181818]  text-lg">
              2018-02-2022 05:00:00
            </TableCell>
            <TableCell className="font-medium text-[#181818] text-lg">
              123.672033803
            </TableCell>
          </TableRow>
          <TableRow className="bg-black/20">
            <TableCell className="font-medium text-[#181818]  text-lg">
              2018-02-2022 06:00:00
            </TableCell>
            <TableCell className="font-medium text-[#181818] text-lg">
              32.672033803
            </TableCell>
          </TableRow>
          <TableRow className="bg-black/20">
            <TableCell className="font-medium text-[#181818]  text-lg">
              2018-02-2022 07:00:00
            </TableCell>
            <TableCell className="font-medium text-[#181818] text-lg">
              123.672033803
            </TableCell>
          </TableRow>
          <TableRow className="bg-black/20">
            <TableCell className="font-medium text-[#181818]  text-lg">
              2018-02-2022 08:00:00
            </TableCell>
            <TableCell className="font-medium text-[#181818] text-lg">
              33.672033803
            </TableCell>
          </TableRow>
          <TableRow className="bg-black/20">
            <TableCell className="font-medium text-[#181818]  text-lg">
              2018-02-2022 09:00:00
            </TableCell>
            <TableCell className="font-medium text-[#181818] text-lg">
              43.672033803
            </TableCell>
          </TableRow>
          <TableRow className="bg-black/20">
            <TableCell className="font-medium text-[#181818]  text-lg">
              2018-02-2022 10:00:00
            </TableCell>
            <TableCell className="font-medium text-[#181818] text-lg">
              36.672033803
            </TableCell>
          </TableRow>
          <TableRow className="bg-black/20">
            <TableCell className="font-medium text-[#181818]  text-lg">
              2018-02-2022 11:00:00
            </TableCell>
            <TableCell className="font-medium text-[#181818] text-lg">
              93.672033803
            </TableCell>
          </TableRow>
          <TableRow className="bg-black/20">
            <TableCell className="font-medium text-[#181818]  text-lg">
              2018-02-2022 12:00:00
            </TableCell>
            <TableCell className="font-medium text-[#181818] text-lg">
              63.672033803
            </TableCell>
          </TableRow>
          <TableRow className="bg-black/20">
            <TableCell className="font-medium text-[#181818]  text-lg">
              2018-02-2022 13:00:00
            </TableCell>
            <TableCell className="font-medium text-[#181818] text-lg">
              223.672033803
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex w-full items-center justify-center">
        <button className="p-4 px-12 border bg-green-400 my-6 rounded-md text-white">
          Download
        </button>
      </div>
    </div>
  );
}

export default index;
