import { trpc } from "../../utils/trpc";

export default function handler(req, res) { 
	//const data = trpc.user.getAllAccount.useQuery();
	res.status(200).json("tamere")
 }
 