import { forwardRef, useImperativeHandle } from 'react';

import { createPortal } from 'react-dom'

const Model = forwardRef(function Modal({ Children , buttonCaption } , ref) {

    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }

    })

	return createPortal(
		<dialog ref={dialog}>{Children}
        <form method='dialog'>
            <button> {buttonCaption}</button>
        </form>
        </dialog>,
		document.getElementById('modal-root')
	);
});

export default Model;