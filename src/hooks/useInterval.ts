import { useRef, useEffect } from "react"

export default (callback: () => void, ms: number) => {
    const ref = useRef<typeof callback>(() => { });

    useEffect(() => {
        ref.current = callback;
    }, [callback])


    useEffect(() => {
        const interval = setInterval(() => {
            ref.current();
        }, ms)

        return () => clearInterval(interval)
    })
}