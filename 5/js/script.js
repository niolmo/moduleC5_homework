const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  const res = document.querySelector("#result");
  const vone = document.getElementsByTagName("input")[0].value;
  const vtwo = document.getElementsByTagName("input")[1].value;
  let url ="https://picsum.photos/v2/list?page=" + `${vone}` + "&limit=" + `${vtwo}`;

  async function sendReq() {
    const response = await fetch(url)
    const results = await response.json()
    let cards = '';
    
    for(result of results) {
      const cardBlock = `
        <div class="card">
          <img
            src="${result.download_url}"
            class="card-image"
          />
          <p>${result.author}</p>
        </div>
      `;
      cards = cards + cardBlock;
    }
      
    res.innerHTML = cards;
    
    
  }
  if(!(+vone >=1 && +vone <= 10)){
    res.innerHTML = 'Номер страницы вне диапазона от 1 до 10'
  }else if(!(+vtwo >=1 && +vtwo <= 10)){
    res.innerHTML = 'Лимит страницы вне диапазона от 1 до 10'
  }else {
    sendReq();
  }

})
