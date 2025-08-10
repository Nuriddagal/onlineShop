import type { ModalProps } from '@/Types';
import styles from '@/Features/notAuthModal/NotAuthModal.module.css';
export function NotAuthModal({ overlayRef, modalRef, setShowModal }: ModalProps) {
    return (
        <>
            {/* Затемняющий оверлей */}
            <div ref={overlayRef} className={styles.modalOverlay}></div>

            {/* Модальное окно */}
            <div ref={modalRef} className={styles.notSignIn}>
                <p>!!FIRST LOG IN!!</p>
                <div>
                    <button
                        type="button"
                        className={styles.modalBtn}
                        onClick={() => {
                            alert('Server not ready yet!');
                            setShowModal(false);
                        }}
                    >
                        Log In
                    </button>

                    <button
                        type="button"
                        className={styles.modalBtn}
                        onClick={() => setShowModal(false)}
                    >
                        close
                    </button>
                </div>
            </div>
        </>
    );
}
