import * as constants from "../../../store/constants";
import axios from 'axios';
import { fromJS } from 'immutable'

const changeListData = (data) => ({
    type: constants.CHANGE_DATA,
    value:fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export const searchFoucs = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

export const handleMouseIn = () => ({
    type: constants.HANDLE_MOUSE_IN
});

export const handleMouseOut = () => ({
    type: constants.HANDLE_MOUSE_OUT
});

export const handleChangePage = (value) => ({
    type: constants.CHANGE_PAGE,
    value:value
})


export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json')
            .then((res)=> {
                const data = res.data;
                dispatch(changeListData(data.data))
            })
    }
}