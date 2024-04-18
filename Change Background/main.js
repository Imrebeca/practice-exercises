function changeBackgroundColor () {
    let colors = ['red', 'green', 'yellow', 'orange', 'pink', 'purple']
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = randomColor

}