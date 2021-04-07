const jokes = [
    {
       "id":350,
       "type":"general",
       "setup":"Why did the tree go to the dentist?",
       "punchline":"It needed a root canal."
    },
    {
       "id":228,
       "type":"general",
       "setup":"What do you call a troublesome Canadian high schooler?",
       "punchline":"A poutine."
    },
    {
       "id":46,
       "type":"general",
       "setup":"Finally realized why my plant sits around doing nothing all day...",
       "punchline":"He loves his pot."
    },
    {
       "id":22,
       "type":"general",
       "setup":"What does C.S. Lewis keep at the back of his wardrobe?",
       "punchline":"Narnia business!"
    },
    {
       "id":267,
       "type":"general",
       "setup":"What kind of dog lives in a particle accelerator?",
       "punchline":"A Fermilabrador Retriever."
    },
    {
       "id":352,
       "type":"general",
       "setup":"Why didn't the number 4 get into the nightclub?",
       "punchline":"Because he is 2 square."
    },
    {
       "id":149,
       "type":"general",
       "setup":"Is the pool safe for diving?",
       "punchline":"It deep ends."
    },
    {
       "id":193,
       "type":"general",
       "setup":"What did the Red light say to the Green light?",
       "punchline":"Don't look at me I'm changing!"
    },
    {
       "id":234,
       "type":"general",
       "setup":"What do you call cheese by itself?",
       "punchline":"Provolone."
    },
    {
       "id":133,
       "type":"general",
       "setup":"How do you tell the difference between a crocodile and an alligator?",
       "punchline":"You will see one later and one in a while."
    }
 ]
 function createjokeElement(obj = Object) {
    const element = document.createElement(tagName = "div")
    element.innerHTML = `
    <p><b>Шутка Номер: ${obj.id}</b></p>
    <p>${obj.setup}</p>
    <p>${obj.punchline}</p>`

    return element
 }



for(let i = 0; i < jokes.length; i++){
   let jokeelement = createjokeElement(jokes[i])
   document.body.appendChild(jokeelement)
}



