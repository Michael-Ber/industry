export const setMarkPos = () => {
    try {
        const park = document.querySelector('.park');
        const mark = document.querySelector('.park__mark');
        window.addEventListener('resize', (e) => {
            mark.style.left = 937 - (1440 - park.clientWidth) / 2 + 'px';
            if (window.matchMedia("(max-width: 575px)").matches) {
                mark.style.display = 'none';
            }
        })
    } catch (error) {
        console.log(error)
    }
}