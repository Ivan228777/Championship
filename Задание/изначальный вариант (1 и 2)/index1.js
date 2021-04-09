async function getdata(){
    const participantsResponse = await fetch("https://60704aa285c3f0001746fcaa.mockapi.io/participants")
    const competenciesResponse = await fetch("https://60704aa285c3f0001746fcaa.mockapi.io/competencies")

    const participantsResponseRead = await participantsResponse.json()
    const competenciesResponseRead = await competenciesResponse.json() 
    return{paricipants: participantsResponseRead, competencies:competenciesResponseRead}
}
  
  function renderParticipants(data) {
      
    
      const result = []
  
      for(let i = 0; i < data.competencies.length; i++) {
          const temp = {}

          temp.competenceName = data.competencies[i].Name
          temp.participants = []

          for (let j = 0; j < data.participants.length; j++) {
              if (data.participants[j].CompID === data.competencies[i].ID) {
                  const participant = `${data.participants[j].FName} ${data.participants[j].LName}, ${data.participants[j].Result}`
                  temp.participants.push(participant)
              }
          }

          result.push(temp)
      }
      
      console.log(result)
    
      for (let i = 0; i < result.length; i++) {
          const element = document.createElement('div')
  
          const competenceNameElement = document.createElement('p')
          competenceNameElement.innerHTML = `<b>${result[i].competenceName}</b>`
  
          const participantsListElement = document.createElement('ol')
          for (let j = 0; j < result[i].participants.length; j++) {
              const participantsListItemElement = document.createElement('li')
              participantsListItemElement.innerText = result[i].participants[j]
  
              participantsListElement.appendChild(participantsListItemElement)
          }
  
          element.appendChild(competenceNameElement)
          element.appendChild(participantsListElement)
  
          document.body.appendChild(element)
      }
  }
  
 getdata().then(data => renderParticipants(data))