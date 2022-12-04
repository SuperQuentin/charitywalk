import { Pool } from "pg";

export const conn = new Pool({
  connectionString: process.env.DATABASE_URL
});

export default async function handler(req, res) {
  const result = await conn.query(req.body);

  res.status(200).json(result.rows)
}
