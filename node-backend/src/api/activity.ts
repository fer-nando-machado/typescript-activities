import { Router, Request, Response } from "express";
import { getActivities } from "../core/activity";
import { Activity } from "../../../types/activity";

const activityRouter = Router();
activityRouter.get("/activities", async (req: Request, res: Response) => {
  try {
    const filter: Partial<Activity> = {};
    if (req.query.title) {
      filter.title = req.query.title as string;
    }
    const activities = getActivities(filter);
    res.status(200).json(activities);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
});

export default activityRouter;
