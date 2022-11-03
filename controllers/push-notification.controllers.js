const { ONE_SIGNAL_CONFIG } = require("../config/app.config");
const pushNotificationService = require("../services/push-notification.services");

exports.SendDevotionNotification = (req, res, next) => {
    var message = {
        app_id: ONE_SIGNAL_CONFIG.APP_ID,
        headings: { en: "Spiritual BreakFast 📖🥪" },
        contents: { en: "Read Today's Devotion" },
        buttons: [{ id: "id1",text: "Read"}],
        included_segments: ["All"],
        content_available: true,
        ttl: 36000,
        
        small_icon: "ic_notification_icon",
        included_segments: "Subscribed Users"
            // PushTitle: "Custom Notification",
        
    };

    pushNotificationService.SendNotification(message, (error,results) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({
            message: "success",
            data: results,
        });
    });
};

exports.SendCustomNotification = (req, res, next) => {
    var message = {
        app_id: ONE_SIGNAL_CONFIG.APP_ID,
        contents: { en: req.body.description },
        included_segments: ["all"],
        headings: { en: req.body.heading },
        ttl: 36000,
        content_available: true,
        small_icon: "ic_notification_icon",
        included_segments: "Subscribed Users",
        buttons: [{ id: "id1",text: "Open"}],


        data: {
            PushTitle: "Jesus is LORD",
            message: "Hello"
        },
    };

    pushNotificationService.SendNotification(message, (error,results) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({
            message: "success",
            data: results,
        });
    });
};