const files = './js/data/data.json'

const capitalizeFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

fetch(files)
  .then((response) => {
    return response.json();
  })
  .then((data) => displayData(data)
  );

  const displayData = (data) => {
    // let fights = ''

    const myData = Object.keys(data).map(key => {
      return data[key];
    })
    // console.log(myData[0].record[0])
    let fights = ``
    myData.forEach(el => {
      // console.log(el.record[0])
      let fight = `
        <div class="boxer">
          <h3>${capitalizeFirst(el.name)}</h3>
          <p><b>Born:</b> ${el.born}</p>
          <p><b>Most Recent Opponent:</b> ${el.record[0].opponent}</p>
        </div>
      `
      fights = fights.concat(fight)
    })
    const html = `${fights}`
    const output = document.querySelector('.record')
    output.innerHTML = html
  }

