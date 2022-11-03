const pushNotificationController = require("../controllers/push-notification.controllers");

const express = require("express");
const router = express.Router();

router.get("/SendDevotionNotification", pushNotificationController.SendDevotionNotification);
router.post("/SendCustomNotification", pushNotificationController.SendCustomNotification);

module.exports = router;