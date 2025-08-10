import { useEffect, useRef, useState } from 'react';

export function UseModal() {
    const [showModal, setShowModal] = useState(false);

    const modalRef = useRef<HTMLDivElement>(null);
    const scrollPosition = useRef<number>(0);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const b = document.body;
        if (!(modalRef.current && overlayRef.current)) return;
        if (showModal) {
            // Сохраняем позицию скролла
            scrollPosition.current = window.scrollY;
            // Блокируем скролл
            b.style.overflowY = 'scroll';
            b.style.position = 'fixed';
            b.style.top = `-${scrollPosition.current}px`;
            b.style.width = '100%';

            overlayRef.current.style.opacity = '1';
            modalRef.current.style.display = 'flex';
        } else {
            // Разблокируем скролл и восстанавливаем позицию
            b.style.overflow = '';
            b.style.position = '';
            b.style.top = '';
            b.style.width = '';
            window.scrollTo(0, scrollPosition.current);

            overlayRef.current.style.opacity = '0';
            modalRef.current.style.display = 'none';
        }
    }, [showModal]);

    return { showModal, setShowModal, modalRef, overlayRef };
}
