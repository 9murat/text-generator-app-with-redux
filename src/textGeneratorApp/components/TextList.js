import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataWithHtml } from '../app/slices/textSlice';
import Error from './Error';
import Loading from './Loading';


export default function TextList() {
    const paras = useSelector(state => state.text.paras);
    const modal = useSelector(state => state.text.modal);
    const items = useSelector(state => state.text.items);
    const status = useSelector(state => state.text.status);
    const error = useSelector(state => state.text.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataWithHtml({ paras, modal }))
    }, [dispatch, paras, modal]);

    if (status === 'failed') {
        return <div><Error message={error} /></div>
    }
    return (
        <>
            {status === 'loading' && <Loading />}
            <div>
                <div >
                    {items}
                </div>
            </div>
        </>
    )
}
