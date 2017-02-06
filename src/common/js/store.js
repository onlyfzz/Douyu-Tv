export function store(key, value) {
    var obj = {
        set: function(key, value) {
            value = JSON.stringify(value);
            localStorage.setItem(key, value);
        },
        get: function(key) {
            value = JSON.parse(localStorage.getItem(key));
            return value;
        }
    };
    return obj;
}