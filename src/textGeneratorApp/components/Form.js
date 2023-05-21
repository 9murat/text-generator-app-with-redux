import React from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateModal, updateParas } from '../app/slices/textSlice';


export default function Form() {
    const paras = useSelector(state => state.text.paras);
    const modal = useSelector(state => state.text.modal);
    const dispatch = useDispatch();

    const handleChangeParas = (e) => {
        e.preventDefault();
        dispatch(updateParas(e.target.value))
    };
    const handleModal = (e) => {
        e.preventDefault();
        dispatch(updateModal(e.target.value))
    };

    return (
        <div className='form'>
            <div >
                <div >
                    <label htmlFor='paragraph' >
                        Paragraph
                    </label>
                    <input id="paragraph" type='number' value={paras} onChange={handleChangeParas} />
                </div>
                <div >
                    <label htmlFor='paragraph' >
                        İnclude Html
                    </label>
                    <select value={modal} name="moda" id='modal' onChange={handleModal}  >
                        <option className='' value="html"> Yes </option>
                        <option value="text" >No </option>
                    </select>
                </div>
            </div>
        </div >
    )
}
