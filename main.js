// create the image array
const images = [{
        id: 1,
        src: 'https://source.unsplash.com/600x400?occean'
    },
    {
        id: 2,
        src: 'https://source.unsplash.com/600x400?wallpaper'
    },
    {
        id: 3,
        src: 'https://source.unsplash.com/600x400?landscape'
    },
    {
        id: 4,
        src: 'https://source.unsplash.com/600x400?cute'
    },
    {
        id: 5,
        src: 'https://source.unsplash.com/600x400?success'
    },
    {
        id: 6,
        src: 'https://source.unsplash.com/600x400?happy'
    },
]



// select elements
const imgContainer = document.querySelector('.imgs-container')
const lightbox = document.querySelector('#lightbox')
const lightboxImg = document.querySelector('#lightbox-img')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
let counter = 0
imgContainer.innerHTML = ''


const gallery = () => {
    const imgs = images.map(image => {
        return `
                <div class="img-wrapper">
                    <img src="${image.src}" alt="">
                </div>`
    }).join(' ')

    imgContainer.innerHTML = imgs

    const imgsEl = imgContainer.querySelectorAll('.imgs-container img')

    imgsEl.forEach((img, i) => img.addEventListener('click', e => {
        counter = i
        images.forEach((item, j) => {
            if (i === j) {
                lightboxImg.src = item.src
                lightbox.classList.add('active')
            }
        })
    }))
}

// next button
nextBtn.addEventListener('click', () => {
    counter++
    if (counter > images.length - 1) {
        counter = 0
    }

    lightboxImg.src = images[counter].src
})


// prev button
prevBtn.addEventListener('click', () => {
    counter--
    if (counter < 0) {
        counter = images.length - 1
    }

    lightboxImg.src = images[counter].src
})


lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
    // counter = 0
})



window.addEventListener('DOMContentLoaded', gallery)