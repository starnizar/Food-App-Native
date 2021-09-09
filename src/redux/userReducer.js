
const initialState = {
    user: {
        id: '1',
        name: 'noname',
        email: 'default_email@gamil.com',
    }
}

export const userReducer = (state=initialState, action) => {
    switch (action.type) {

        default: return  state
    }
}
