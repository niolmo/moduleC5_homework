const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {// const result = document.querySelector('#result');
    const vone = document.getElementsByTagName('input')[0].value
    const vtwo = document.getElementsByTagName('input')[1] .value
    let url = 'https://picsum.photos/'+ `${vone}` + '/' + `${vtwo}`;
   
    async function sendReq() {
    
        const response = await fetch(url)
        const results =  await response.blob()
        let uri = URL.createObjectURL(results)
        let img = new Image()
        img.src = uri
        document.body.appendChild(img);
    }

    if(+vone >= 100 && +vone <= 300 && +vtwo >= 100 && +vtwo <= 300) {
        sendReq()
        
    }else {
        result.innerHTML ='Ошибка! Одно или несколько чисел вне диапозона!'
    }
  
})

