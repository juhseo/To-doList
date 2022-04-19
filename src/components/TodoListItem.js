import './TodoListItem.scss';
import cn from 'classnames';
export default function TodoListItem({ todo, onRemove, onToggle }){
    const { id, text, checked } = todo;
    return(
        <div className="TodoListItem">
            <div className={cn('checkbox',{ checked })} onClick={()=>{ onToggle(id) }}>
                <div className="text">{ text }</div>
            </div>
            <div className="remove" onClick={()=>onRemove(id)}>
                삭제
            </div>
        </div>
    )
}