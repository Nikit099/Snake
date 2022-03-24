const board = document.querySelector('#board')
const boardVan = document.querySelector('#boardVanish')
const SQUARES = 800
let arr = ['s1']
let apples = []
let count = 0
const up = []
const down = []

let right = []
let left = []
for (let i = 1; i <= 20; i += 1) {
    up.push(i)
}
for (let i = 781; i <= 800; i += 1) {
    down.push(i)
}
for (let i = 20; i <= 800; i += 20) {
    right.push(i)
}
for (let i = 1; i <= 800; i += 20) {
    left.push(i)
}
const score = document.querySelector('.score')
score.style.color = 'white'
for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add(`square`)
    square.id = `s${i + 1}`
    board.append(square)
}
for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add(`VanishSquare`)
    square.id = `v${i + 1}`
    boardVan.append(square)
}
const squares = document.querySelectorAll('.square')
const Vsquares = document.querySelectorAll('.VanishSquare')
let intervalID = 0
document.addEventListener('keyup', (e) => {
    const { key } = e
    if (!intervalID) {
        exit(key)
    } else {
        clearInterval(intervalID)
        exit(key)
    }

})
let apple = -1
let miniFood = 0
    // mini()

function exit(key) {
    intervalID = setInterval(() => {

        if (key === 's' || key === 'ы') {
            massivDown()
            squares.forEach(i => {
                i.style.background = '#1d1d1d'
            })

            for (let y = 0; y < arr.length; y++) {
                for (let i = 0; i < squares.length; i++) {
                    if (arr[0] === arr[y]) {
                        if (squares[i].id === arr[y]) {
                            squares[i].style.background = '#128ead'
                            squares[i].style.zIndex = '2'

                        }
                    } else {
                        if (squares[i].id === arr[y]) {
                            squares[i].style.background = '#0a942d'
                            squares[i].style.zIndex = '2'

                        }
                    }

                }
            }

        } else if (key === 'd' || key === 'в') {

            massivRight()
            squares.forEach(i => {
                i.style.background = '#1d1d1d'
            })

            for (let y = 0; y < arr.length; y++) {
                for (let i = 0; i < squares.length; i++) {
                    if (arr[0] === arr[y]) {
                        if (squares[i].id === arr[y]) {
                            squares[i].style.background = '#128ead'
                            squares[i].style.zIndex = '2'

                        }
                    } else {
                        if (squares[i].id === arr[y]) {
                            squares[i].style.background = '#0a942d'
                            squares[i].style.zIndex = '2'

                        }
                    }
                }
            }


            // console.log(arr);

        } else if (key === 'a' || key === 'ф') {
            massivLeft()
            squares.forEach(i => {
                i.style.background = '#1d1d1d'
            })

            for (let y = 0; y < arr.length; y++) {
                for (let i = 0; i < squares.length; i++) {
                    if (arr[0] === arr[y]) {
                        if (squares[i].id === arr[y]) {
                            squares[i].style.background = '#128ead'
                            squares[i].style.zIndex = '2'

                        }
                    } else {
                        if (squares[i].id === arr[y]) {
                            squares[i].style.background = '#0a942d'
                            squares[i].style.zIndex = '2'

                        }
                    }
                }
            }

        } else if (key === 'w' || key === 'ц') {
            massivUp()
            squares.forEach(i => {
                i.style.background = '#1d1d1d'
            })

            for (let y = 0; y < arr.length; y++) {
                for (let i = 0; i < squares.length; i++) {
                    if (arr[0] === arr[y]) {
                        if (squares[i].id === arr[y]) {
                            squares[i].style.background = '#128ead'
                            squares[i].style.zIndex = '2'

                        }
                    } else {
                        if (squares[i].id === arr[y]) {
                            squares[i].style.background = '#0a942d'
                            squares[i].style.zIndex = '2'

                        }
                    }
                }
            }

        }
        score.innerHTML = `${all.length}`

    }, 100)
}





let all = []
setInterval(() => {
    apple = Math.floor(Math.random() * 800)
        // apples[0] = `v${apple}`
    all.push(apple)
    console.log(all);

    Vsquares.forEach(i => {
        all.map(y => {
            if (i.id === `v${y}`) {
                i.classList.add('grey')

            }
        })
    })

}, 2000)






function massivLeft() {
    // if (count === Granat) {
    //     Vsquares.forEach(i => {
    //         i.style.background = 'rgba(0, 0, 0, 0)'
    //     })
    //     arr.push(`s${count + 1}`)
    //     arr.push(`s${count + 2}`)
    //     arr.push(`s${count + 3}`)

    // }

    for (let y = 0; y < all.length; y++) {
        if (all[y] === count) {
            Vsquares.forEach(i => {
                if (i.id === `v${all[y]}`) {
                    i.classList.remove('grey')
                    all = all.filter(i => {
                        return i !== all[y]
                    })
                }
            })
            arr.push(`s${count}`)

        }
    }
    // if (count === apple) {

    //     Vsquares.forEach(i => {
    //         i.style.background = 'rgba(0, 0, 0, 0)'
    //     })
    //     arr.push(`s${count}`)

    // }
    if (count === 0) {
        count = 20
    }
    for (let i = 0; i < right.length; i++) {
        if (count === left[i]) {
            count = right[i]
            arr.pop()
            return arr.unshift(`s${count}`)
        }
    }

    count -= 1
    arr.unshift(`s${count}`)
    arr.pop()
    if (arr.length > 1) {
        for (let i = 1; i < arr.length; i++) {

            if (arr[0] === arr[i]) {
                arr = ['s1']
                count = 0
            }
        }
    }


}

function massivDown() {
    for (let y = 0; y < all.length; y++) {
        if (all[y] === count) {
            Vsquares.forEach(i => {
                if (i.id === `v${all[y]}`) {
                    i.classList.remove('grey')

                    all = all.filter(i => {
                        return i !== all[y]
                    })
                }
            })
            arr.push(`s${count}`)

        }
    }
    // if (count === Granat) {
    //     Vsquares.forEach(i => {
    //         i.style.background = 'rgba(0, 0, 0, 0)'
    //     })
    //     arr.push(`s${count - 20}`)
    //     arr.push(`s${count - 40}`)
    //     arr.push(`s${count - 60}`)


    // }
    // if (count === apple) {

    //     Vsquares.forEach(i => {
    //         i.style.background = 'rgba(0, 0, 0, 0)'
    //     })
    //     arr.push(`s${count}`)

    // }

    if (count === 0) {
        count = -19
    }
    for (let i = 0; i < up.length; i++) {
        if (count === down[i]) {
            count = up[i]
            arr.pop()
            return arr.unshift(`s${count}`)

        }
    }
    count += 20
    arr.unshift(`s${count}`)
    arr.pop()
    if (arr.length > 1) {
        for (let i = 1; i < arr.length; i++) {

            if (arr[0] === arr[i]) {
                arr = ['s1']
                count = 0


            }
        }
    }
}




function massivUp() {
    for (let y = 0; y < all.length; y++) {
        if (all[y] === count) {
            Vsquares.forEach(i => {
                if (i.id === `v${all[y]}`) {
                    i.classList.remove('grey')

                    all = all.filter(i => {
                        return i !== all[y]
                    })
                }
            })
            arr.push(`s${count}`)

        }
    }
    // if (count === Granat) {
    //     Vsquares.forEach(i => {
    //         i.style.background = 'rgba(0, 0, 0, 0)'
    //     })
    //     arr.push(`s${count + 20}`)
    //     arr.push(`s${count + 40}`)
    //     arr.push(`s${count + 60}`)


    // }
    // if (count === apple) {

    //     Vsquares.forEach(i => {
    //         i.style.background = 'rgba(0, 0, 0, 0)'
    //     })
    //     arr.push(`s${count}`)

    // }

    if (count === 0) {
        count = 801
    }
    for (let i = 0; i < up.length; i++) {
        if (count === up[i]) {
            count = down[i]
            arr.pop()
            return arr.unshift(`s${count}`)

        }
    }
    count -= 20
    arr.unshift(`s${count}`)
    arr.pop()
    if (arr.length > 1) {
        for (let i = 1; i < arr.length; i++) {

            if (arr[0] === arr[i]) {
                arr = ['s1']
                count = 0


            }
        }
    }
}


function massivRight() {
    for (let y = 0; y < all.length; y++) {
        if (all[y] === count) {
            Vsquares.forEach(i => {
                if (i.id === `v${all[y]}`) {
                    i.classList.remove('grey')

                    all = all.filter(i => {
                        return i !== all[y]
                    })
                }
            })
            arr.push(`s${count}`)

        }
    }
    // if (count === Granat) {
    //     Vsquares.forEach(i => {
    //         i.style.background = 'rgba(0, 0, 0, 0)'
    //     })
    //     arr.push(`s${count - 1}`)
    //     arr.push(`s${count - 2}`)
    //     arr.push(`s${count - 3}`)


    // }

    // if (count === apple) {
    //     Vsquares.forEach(i => {
    //         i.style.background = 'rgba(0, 0, 0, 0)'
    //     })
    //     arr.push(`s${count}`)
    // }

    for (let i = 0; i < right.length; i++) {
        if (count === right[i]) {

            count = left[i]
            arr.pop()
            return arr.unshift(`s${count}`)
        }
    }
    count++
    arr.unshift(`s${count}`)
    arr.pop()
    if (arr.length > 1) {
        for (let i = 1; i < arr.length; i++) {

            if (arr[0] === arr[i]) {
                arr = ['s1']
                count = 0


            }
        }
    }
}