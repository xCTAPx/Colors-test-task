function data(state = [], action) {
    switch (action.type) {
        case 'DATA_FETCH':
            let res = [];
            for (let prop in action.payload) {
                res.push({
                    name: prop,
                    info: action.payload[prop]
                });
            }
            return res;
        default:
            return state;
    }
}

export default data;