import { Fiplus, FiX } from "react-icons/fi";

import { Container } from  "./style";

export function NoteItem({isNew, value, onClick, ...rest}) {
    return (
        <Container isNew={isNew}>
            <input 
            type="text"
            value={value}
            readOnly={!isNew} 
        />

        <button
            type="button"
            onClick={onClick}
        >
            { isNew ? <Fiplus /> : <FiX />}
        </button>
        </Container>
    )
}