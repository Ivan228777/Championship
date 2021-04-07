/**
 * Асинхронно получает список функций с сервера
 * @param {object} obj
 */
 async function getJokes() {
    const jokes1Response = await fetch("https://official-joke-api.appspot.com/random_ten")
    const jokes2Response = await fetch("https://official-joke-api.appspot.com/random_ten")

    const jokes1ResponseRead = await jokes1Response.json()
    const jokes2ResponseRead = await jokes2Response.json()

    const result = []

    for (let i = 0; i < 10; i++) {
        result.push(jokes1ResponseRead[0])
        result.push(jokes2ResponseRead[0])
    }

    return result
}

function renderJokes(jokes) {

    /**
     * Принимает шутку и отдает красиво-сверстанную шутку
     * @param {object} obj
     */
    function createJokeElement(obj) {
        const element = document.createElement('div')
        element.innerHTML = `
            <p><b>Шутка номер: ${obj.id}</b></p>
            <p>${obj.setup}</p>
            <p>${obj.punchline}</p>
            `
        return element
    }

    for(let i = 0; i < jokes.length; i++) {
        jokeElement = createJokeElement(jokes[i])
        document.body.appendChild(jokeElement)
    }
}

getJokes().then(jokes => renderJokes(jokes))