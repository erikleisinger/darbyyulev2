
export const useNotification = () => {
   const notifications = useState('notifications', () => []);

    const generateId = () => {
        const S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
         };
         return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())
    }

    const addNotification = (text) => {
        if (notifications.value.some(notification => notification.text === text)) return;

        const notification = {
            id: generateId(),
            text
        }
        notifications.value.push(notification);
    };

    const removeNotification = (id) => {
        notifications.value = notifications.value.filter(notification => notification.id !== id);
    }



    return {notifications, addNotification, removeNotification}
}