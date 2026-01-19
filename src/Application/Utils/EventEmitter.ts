type Callback = (...args: any[]) => void;

export default class EventEmitter {
    callbacks: { [name: string]: Callback[] };

    constructor() {
        this.callbacks = {};
    }

    on(name: string, callback: Callback) {
        if (!this.callbacks[name]) {
            this.callbacks[name] = [];
        }
        this.callbacks[name].push(callback);
        return this;
    }

    off(name: string) {
        // Simple off: removes all callbacks for this event name
        // This matches the primary usage pattern observed in the app
        delete this.callbacks[name];
        return this;
    }

    trigger(name: string, args: any[] = []) {
        if (this.callbacks[name]) {
            this.callbacks[name].forEach((callback) => {
                // Use spread to pass arguments as individual parameters
                callback(...args);
            });
        }
    }
}
