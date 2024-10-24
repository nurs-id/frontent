
// Загрузка JSON-файла
function open_log(){
    document.getElementById('log_sector').style.display = 'block';
}
function close_log(){
    document.getElementById('log_sector').style.display = 'none';
    document.getElementById('user_reg').style.display = 'none';
    document.getElementById('user_log').style.display = 'none';
}
function open_reg(){
    open_log();
    document.getElementById('user_log').style.display = 'block';
}
function open_login(){
    open_log();
    document.getElementById('user_reg').style.display = 'block';
}
function menu_food (arg1){
    console.log(arg1);
    document.getElementById("buyitem").innerHTML = "";
    fetch('https://raw.githubusercontent.com/nurs-id/my_web_project/refs/heads/main/date.json')
   .then(response => response.json())  // Преобразование в JSON-объект
   .then(data => {
    let cn = data[arg1];
    for(x = 0; x < data.burger.length; x++){
        // console.log(data.burger[x].src);
        let cas = document.getElementById("buyitem");
        let di = document.createElement('div');     
        di.className = "item";
        di.innerHTML = `<div class="item_image"><img src="`+cn[x].src+`" alt=""></div> <div class="item_name">`+cn[x].name+`</div><div onclick="add('`+cn[x].name+`','`+cn[x].price+`','`+cn[x].info+`','`+cn[x].src+`')"  class="item_price">`+cn[x].price+`</div>  <div class="item_info">`+cn[x].info+`</div>`;
        cas.appendChild(di);}  })
}
fetch('https://raw.githubusercontent.com/nurs-id/my_web_project/refs/heads/main/date.json')
  .then(response => response.json()) // Преобразуем ответ в JSON
  .then(data => {
    // Перебираем все ключи динамически
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        // console.log(`Ключ: ${key}`);
        let xz = document.createElement('div');
        xz.onclick = menu_food( key);
        
        xz.innerHTML = `<div class="menu_ff" onclick="menu_food('`+key+`')">`+key+`</div>`;
        let f = document.getElementById('menu');
        f.appendChild(xz);
        // console.log(`Значение: ${data[key]}`);
      }
    }
  })
  .catch(error => console.error('Ошибка загрузки JSON:', error));
// onclick="add('Милкшейк Honey moon','1350','500г','https://eda.yandex/images/3420935/d8facbba0b6b41fd84b6aa1eef8702aa-400x400nocrop.jpeg')"
//onclick="add('+cn[x].name+','+cn[x].price+','+cn[x].info+','+cn[x].src+')"
let secter_name = '';
let secter_num = '1';
let secter_img = '';
let secter_price = '';
let allnum = localStorage.getItem('allnum');
let alltext =localStorage.getItem('alltext');
let secter_write = document.getElementById('secter_write')
let num = '1';
let price ;

function check(){
    buy_close()
    if(secter_name !== ''){
        alltext = alltext + `<div class="sec_items"><div><img src="${secter_img}" alt=""> <h3> ${secter_name} </h3> <h4>${secter_price}</h4>  <div class="sector_num"><span>Количество:</span> ${secter_num}</div></div></div>`
        
        allnum = + allnum + + secter_price
        write()
    }
}
function write(){
   
    localStorage.setItem('alltext', alltext);
    localStorage.setItem('allnum', allnum);
    if(allnum !== ''){
        secter_write.innerHTML = alltext
        document.getElementById('sector_all_price').innerHTML =  `Итог: ${allnum}`
    }
 
}
// write();
function clea(){
    alltext = '';
    allnum = '';
    secter_write.innerHTML = '';
    document.getElementById('sector_all_price').innerHTML = '';
    localStorage.setItem('alltext', alltext);
    localStorage.setItem('allnum', allnum);
}
function secter_close(){
    let secter = document.getElementById('secter')
    secter.style.display  = 'none'
}
function open_secter(){
    let secter = document.getElementById('secter')
    secter.style.display  = 'block'
}
let foot = document.getElementById('foot')
// foot.addEventListener('click', open_foot)
function open_foot(){
    window.location.href = "text.html"
}
function plus(arg){

    if(num < 9){
        num++;
    }
    
    // let lolpl = 
    // document.getElementById('buy').innerHTML = lolpl
    let text = price *  num
    document.getElementById('buy').innerHTML = text
    document.getElementById('number').value= num
    secter_num = num
    secter_price = text
    // alert(arg)
}
function minus(arg){
    if(num > 1){
        num --;
        let text = price *num/9
        document.getElementById('buy').innerHTML = text
        document.getElementById('number').value= num
        secter_num = num
        secter_price = text
    }
 
}
function add(arg1, arg2, arg3, arg4){
    let t = arg2 * 9;
    let text = '<div onclick="plus('+ arg2 +')" id="plus">+</div>';
    let textb = '<div onclick="minus('+ t +')" class="minus">_</div>';
    document.getElementById('buy_name').innerHTML = arg1;
    secter_name = arg1;
    document.getElementById('buy').innerHTML = arg2;
    secter_price = arg2;
    price = arg2;
    secter_img = arg4;
    num = '1'
    document.getElementById('a').innerHTML = text;
    document.getElementById('b').innerHTML = textb;
    document.getElementById('dis').innerHTML =arg3;
    buy_open()
// plus(arg2)
    // alert(n2)
}
function buy_open(){
    document.getElementById('buy_box').style.display = 'flex'
}
function buy_close(){
    document.getElementById('buy_box').style.display = 'none'
    document.getElementById('number').value= 1
}



   
// menu_food(1);

let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
let secter = document.getElementById('secter')
window.addEventListener('scroll' , secter_stop)
function secter_stop(){
   width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
//    console.log(width)
   if(width > 900){
    let height = window.pageYOffset
    if(height > 1300){
    secter.style.position = 'absolute'
    let min = secter.style.height
    // console.log(min)
    secter.style.top = 1300 + 'px'
    }  
    if(height < 1300){
        secter.style.position = 'fixed'
        secter.style.top = '20px'
    }
    if(height < 120){
        secter.style.position = 'absolute'
        secter.style.top = '140px'
    }
   }

    // console.log(height)
}
