// import { NextApiRequest } from "next";
// import { NextResponse } from "next/server";
// import conectdb from "@/utils/db";
// import { isticmaale } from "@/models/User";
// import mongoose from "mongoose";
// export const DELETE = async (
//   request: NextApiRequest,
//   { params }: { params: { Id: string } }
// ) => {
//   const { Id } = params;

//   try {
//     if (mongoose.Types.ObjectId.isValid(Id)) {
//       await conectdb();
//       const response = await isticmaale.findByIdAndDelete(Id);
//       return new NextResponse(
//         JSON.stringify({ Massage: "Waa La Masaxay Gurigan" })
//       );
//     }
//   } catch (Fariin) {
//     return new NextResponse(JSON.stringify({ Fariin: "Lama Masaxin" }));
//   }
// };
