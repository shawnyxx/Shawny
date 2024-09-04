// Disclaimer!! If you don't understand these functions, do not touch them, they are advanced algorithms made to save memory and reduce load on the server...

const notification_container = document.body.appendChild(document.createElement('div'));
notification_container.style.cssText = 'z-index:50;position:absolute;bottom:15px;right:15px;width:300px;height:auto;pointer-events:none';

const doNotification = (text, color = 'white', border = 'white') => {
    const notification = document.createElement('div');
    notification.style.cssText = `width:300px;min-height:50px;margin-top:5px;background:rgba(24,24,24,0.5);
                                  border-left:4px solid ${border};padding:4px;display:flex;
                                  justify-content:center;align-items:center;color:${color};z-index:100;
                                  transition:opacity 0.5s`;
    notification.textContent = text;
    audioPlay("/_files/audio/notification-sound.mp3")
    notification_container.appendChild(notification);
    setTimeout(() => (notification.style.opacity = 0, setTimeout(() => notification.remove(), 500)), 5000);
};
