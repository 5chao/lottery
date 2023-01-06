import prisma from "../../lib/prisma";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return handleGET(req, res);
      break;
    case "POST":
      return handlePOST(req, res);
      break;
    case "OPTIONS":
      return res.status(200).end("ok");
      break;
    default:
      return res.status(405).end();
  }
}

async function handleGET(req, res) {
  try {
    const comments = await prisma.comment.findMany();
    res.json(comments);
    res.status(200).end();
  } catch (err) {
    res.status(err).json();
  }
}
