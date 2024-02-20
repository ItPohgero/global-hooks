import { useRef, useState, useEffect } from 'react';

interface InfinityProps {
    offsetThreshold?: number;
}

/**
 * A custom hook for handling infinite scrolling behavior.
 * It tracks scrolling, determines whether to display a button to scroll to top,
 * and detects if the scroll position is near the bottom of the scrollable container.
 * @param {InfinityProps} props - The options for the useInfinity hook.
 * @returns {{
 *   ref: React.MutableRefObject<any>;
 *   handleScroll: (e: React.UIEvent<HTMLElement>) => void;
 *   showHandleToTop: boolean;
 *   handleToTop: () => void;
 *   bottomPosition: boolean;
 * }}
 */
const useInfinity = ({ offsetThreshold = 100 }: InfinityProps = {}): {
    ref: React.MutableRefObject<any>;
    handleScroll: (e: React.UIEvent<HTMLElement>) => void;
    showHandleToTop: boolean;
    handleToTop: () => void;
    bottomPosition: boolean;
} => {
    // Ref to track previous scroll position
    const refY = useRef<number>(0);
    // Ref for the scrollable container
    const ref = useRef<any>(null);

    // State to control visibility of scroll to top button
    const [showHandleToTop, setShowHandleToTop] = useState<boolean>(false);
    // State to track whether the scroll position is near the bottom
    const [bottomPosition, setBottomPosition] = useState<boolean>(false);

    /**
     * Handles the scroll event.
     * @param {React.UIEvent<HTMLElement>} e - The scroll event.
     */
    const handleScroll = (e: React.UIEvent<HTMLElement> | any) => {
        const currentScrollY = e?.target?.scrollTop;
        // Show scroll to top button when scrolling down
        if (currentScrollY > refY.current) {
            setShowHandleToTop(true);
        } else if (currentScrollY < offsetThreshold) {
            setShowHandleToTop(false);
        }
        // Update refY to current scroll position
        refY.current = currentScrollY;
        // Check if the scroll position is near the bottom
        const isNearBottom = e?.target?.scrollHeight - e?.target?.scrollTop <= e?.target?.clientHeight + offsetThreshold;
        setBottomPosition(isNearBottom);
    };

    // Clean up function for useEffect (no cleanup required)
    useEffect(() => {
        return () => { };
    }, []);

    /**
     * Scrolls the container to the top when the button is clicked.
     */
    const handleToTop = () => {
        setShowHandleToTop(false);
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return {
        ref,
        handleScroll,
        showHandleToTop,
        handleToTop,
        bottomPosition
    };
};

export default useInfinity;
