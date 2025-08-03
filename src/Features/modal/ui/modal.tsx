import type { ModalProps } from '@/Types';

export function Modal({ overlayRef, modalRef, setShowModal }: ModalProps) {
    return (
        <>
            {/* Затемняющий оверлей */}
            <div ref={overlayRef} className="modal-overlay"></div>

            {/* Модальное окно */}
            <div ref={modalRef} className="notSignIn">
                <p>!!FIRST LOG IN!!</p>
                <div>
                    <button
                        type="button"
                        className="modalClose"
                        onClick={() => {
                            alert('Server not ready yet!');
                            setShowModal(false);
                        }}
                    >
                        Log In
                    </button>
                    <button
                        type="button"
                        className="modalClose"
                        onClick={() => setShowModal(false)}
                    >
                        close
                    </button>
                </div>
            </div>
        </>
    );
}
