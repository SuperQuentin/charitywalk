import { Pool } from "pg";

export const conn = new Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5434,
  database: "charitywalk_db",
});

export default async function handler(req, res) {
  const result = await conn.query(req.body);

	res.status(200).json(result.rows)
}
 