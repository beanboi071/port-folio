import React, { useEffect } from 'react'

export default function ObservableComponent({ children }: any) {

    const onScrollAnimation = () => {
        const hiddenElements = document.querySelectorAll('.hide');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            })
        })
        hiddenElements.forEach((el) => observer.observe(el));
    }
    useEffect(() => {
        onScrollAnimation();
    }, [])
    return (
        <div className=' absolute hide'>
            {children}
        </div>
    )
}
