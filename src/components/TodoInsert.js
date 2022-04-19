import './TodoInsert.scss';
import { useState } from 'react';

export default function TodoInsert({ onInsert }){
    const [ value, setValue ] = useState('');
    function onChange(e){
        setValue(e.target.value);
    }
    function onSubmit(e){
        e.preventDefault();
        onInsert(value);
        setValue('');
    }
    return(
        <form className='TodoInsert' onSubmit={ onSubmit }>
            <input type="text" placeholder="할일을 입력하세요" value={value} onChange={onChange}/>
            <button type="submit">입력</button>
        </form>
    )
}