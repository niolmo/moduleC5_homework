const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
let value = document.getElementsByTagName('input')[0];


function xhrRequset(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Ответ: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! ', xhr.status);
    };
    
    if(+value.value <= 10) {
        xhr.send();
    } else {
      result.innerHTML = 'Число только от 1 до 10!'
    }
}

function displayResult(apiData) {
  let cards = '';
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
   
  result.innerHTML = cards;
}

btn.addEventListener("click", function (e) {
  xhrRequset('https://picsum.photos/v2/list?limit=' + `${value.value}`, displayResult)

  
});