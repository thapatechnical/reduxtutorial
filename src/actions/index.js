// export const incNumber = () => {
//     return {
//         type: 'INCREMENT',
//         payload: 2
//     }
// };

export const incNumber = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}

export const decNumber = () => {
    return {
        type: 'DECREMENT'
    }
};