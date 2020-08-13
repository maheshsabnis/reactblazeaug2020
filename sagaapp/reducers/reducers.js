// reducer update the store based on actions
// watch the actions dispatched and based on that
// it will update state in store

const reducer = (state = {}, action) => {
    console.log('reducer called');
    switch (action.type) {
        case 'GET_STUDENTS':
            console.log(`GET STUDENTS Action ${JSON.stringify(state)}`);
            return {...state, loading: true };
        case 'STUDENTS_RECEIVED_SUCCESS':
            console.log(`Students Received Successfully
             ${JSON.stringify(action.students)}`);
            return {...state, students: action.students, loading: false }
        default:
            return state;
    }
}

export default reducer;