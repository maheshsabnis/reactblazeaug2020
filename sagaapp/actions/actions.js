// the action type with the action 
// creator (action-logic)
export const getStudents = () => ({
    type: 'GET_STUDENTS'
});

export const postStudents = (student) => ({
    type: 'POST_STUDENTS'
});