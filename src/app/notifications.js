import Platform from './platform';

const create = options => {
    const {
        title = 'RMNDRZ',
        message,
        requireInteraction = true,
        icon = 'data:image/png;base64,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',
    } = options;

    if (Platform.is('chrome/extension')) {
        window.chrome.notifications.create(title, {
            type: 'basic',
            title,
            message,
            requireInteraction,
            iconUrl: icon,
        });
    } else {
        new Notification(title, {
            type: 'basic',
            title,
            body: message,
            requireInteraction,
            icon,
        });
    }
};

const Notifications = {
    create,
};

export default Notifications;
