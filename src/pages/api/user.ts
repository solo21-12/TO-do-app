import nc from "next-connect";
import { createUser, getUser } from "../../../controllers/user";
const handler = nc();
handler.post(createUser);
handler.get(getUser);
export default handler;
