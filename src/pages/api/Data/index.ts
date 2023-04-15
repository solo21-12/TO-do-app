import nc from "next-connect";
import {
  getAllData,
  postData,
  updateData,
  deleteData,
} from "../../../../controllers/index";
const handler = nc();

handler.get(getAllData);
handler.post(postData);
handler.put(updateData);
handler.delete(deleteData);
export default handler;
