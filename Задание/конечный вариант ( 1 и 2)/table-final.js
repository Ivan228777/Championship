async function getdata(){
    const participantsResponse = await fetch("https://60704aa285c3f0001746fcaa.mockapi.io/participants")
    const competenciesResponse = await fetch("https://60704aa285c3f0001746fcaa.mockapi.io/competencies")

    const participantsResponseRead = await participantsResponse.json()
    const competenciesResponseRead = await competenciesResponse.json() 
    return{participants: participantsResponseRead, competencies:competenciesResponseRead}
}
  
  function renderParticipants(data) {
      
      const result = []
  
      for(let i = 0; i < data.competencies.length; i++) {
          const temp = {}

          temp.competenceName = data.competencies[i].Name
          temp.participants = []

          for (let j = 0; j < data.participants.length; j++) {

              if (data.participants[j].CompID?.toString() === data.competencies[i].ID?.toString()) {
                  const participant = {name: `${data.participants[j].FName} ${data.participants[j].LName}`, result: data.participants[j].Result}
                  temp.participants.push(participant)
              }
          }

          temp.participants = temp.participants.sort((a,b) => {
              if (a.result > b.result) {
                  return -1
              } else if (a.result < b.result) {
                  return 1
              } else {
                  return 0
              }
          })
          console.log(temp.participants)
          temp.participants = temp.participants.slice(0, 3)
          result.push(temp)
      }

      console.log(result)
      
      const element = document.createElement('table')

      const firstRow = document.createElement("tr")
      firstRow.innerHTML = `<td><b>Компетенция</b></td> <td><b>1</b></td> <td><b>2</b></td> <td><b>3</b></td>`

      element.appendChild(firstRow)


      for (let i = 0; i < result.length; i++) {
          const participantsListElement = document.createElement("tr")

          const compName = document.createElement('td')
          compName.innerHTML = `<b>${result[i].competenceName}</b>`

          participantsListElement.appendChild(compName)
          for (let j = 0; j < result[i].participants.length; j++) {
              const participantsListItemElement = document.createElement('td')
              participantsListItemElement.innerHTML = result[i].participants[j].name + ' ' + '<i>' + result[i].participants[j].result + '</i>'
  
              participantsListElement.appendChild(participantsListItemElement)
          }
  
          element.appendChild(participantsListElement)
  
          document.body.appendChild(element)
      }
  }
  
 getdata().then(data => renderParticipants(data))