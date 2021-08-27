
const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu,
    };
};


const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED',
    };
};

const menuError = (err) => {
    return {
        type: 'MENU_ERROR',
        errorStatus: err, 
    }
}


export {
    menuLoaded,
    menuRequested,
    menuError,
};