import * as express from "express";
import {findAllEvents} from '../models/MoodObservationEvent';

export const pingController = express.Router();

pingController.get('/events', (_, res) => {
  findAllEvents((err, events) => {
    if (err) {
      console.log(err)
      res.status(409)
    }
    res.status(200).json(events);
  });
});