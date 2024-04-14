import {MutableRefObject, RefObject, useEffect, useMemo, useRef, useState} from "react";

function useHover<T>(): [MutableRefObject<T>, boolean] {
    const [value, setValue] = useState<boolean>(false);

    const ref: any = useRef<T | null>(null);

    const handleMouseOver = (): void => setValue(true);
    const handleMouseOut = (): void => setValue(false);

    useEffect(
        () => {
            const node: any = ref.current;
            if (node) {
                node.addEventListener("mouseover", handleMouseOver);
                node.addEventListener("mouseout", handleMouseOut);

                return () => {
                    node.removeEventListener("mouseover", handleMouseOver);
                    node.removeEventListener("mouseout", handleMouseOut);
                };
            }
        },
        []
    );

    return [ref, value];
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default function useOnScreen(ref: RefObject<HTMLElement>) {

    const [isIntersecting, setIntersecting] = useState(false)

    const observer = useMemo(() => new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    ), [])


    useEffect(() => {
        if (!ref.current) return
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [observer, ref])

    return isIntersecting
}


export {useHover, useWindowDimensions,useOnScreen};