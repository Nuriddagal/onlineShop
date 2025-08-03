// src/hooks/useInfiniteScroll.ts
import { useCallback, useRef, useEffect } from 'react';

export function useInfiniteScroll(callback: () => void, loading: boolean) {
    const observerRef = useRef<IntersectionObserver | null>(null);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    const initObserver = useCallback(() => {
        if (observerRef.current) observerRef.current.disconnect();

        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !loading) {
                    callback();
                }
            },
            { threshold: 0.1 },
        );

        if (loadMoreRef.current) {
            observerRef.current.observe(loadMoreRef.current);
        }
    }, [callback, loading]);

    useEffect(() => {
        initObserver();
        return () => observerRef.current?.disconnect();
    }, [initObserver]);

    return { loadMoreRef };
}
