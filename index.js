window.addEventListener('DOMContentLoaded', () => {
    const listBoxes = document.querySelectorAll('.list-box')
    
    console.log('this thing on? => ', listBoxes)
    
    listBoxes.forEach(el => {
        console.log(el)
        el.addEventListener('click', (e) => {
            console.log('HERE => ', e)
            const list = el.children[1]
            const height = list.getBoundingClientRect()
            console.log('rect => ', height)
            el.classList.add('open')
            list.classList.add('open')
        })
    })

})



