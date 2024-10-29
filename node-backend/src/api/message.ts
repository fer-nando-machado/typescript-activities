import { Request, Response } from "express";
import { getMessage } from "../core/message";

export const messageController = (req: Request, res: Response) => {
  res.json(getMessage());
};
