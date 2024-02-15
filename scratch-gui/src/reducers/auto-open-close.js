const CLOSE_MODAL = 'scratch-gui/auto-open-close/CLOSE_MODAL';

const initialState = {
    visible: true
}

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
        case CLOSE_MODAL:
            return Object.assign({}, state, {
                visible: false
            });
        default:
            return state;
    }
}

const closeModal = function () {
    return {type: CLOSE_MODAL};
};

export {
    reducer as default,
    initialState as autoOpenCloseInitialState,
    closeModal
};