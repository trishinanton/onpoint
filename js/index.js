const url = 'https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses'
const ulArray = document.getElementsByClassName('box__list');
const titleArray = document.getElementsByClassName('services__title');
const btn = document.getElementsByClassName('box__button');

async function fetchHandler(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        let descr = data.data;
        console.log(descr);
      
     let arrIndex = 0;
        for(let ul in ulArray){
          for(let li in ulArray[ul].children){
              ulArray[ul].children[li].innerHTML=descr[arrIndex].specializedSubjects[li];
            }
            arrIndex+=4 ;
          }
          let j =0;
          for(let i in titleArray){
                titleArray[i].innerHTML=descr[j].title;
                j+=4; 
          }
    }catch (error){
        console.log(error);
    }
}
fetchHandler();

for (let number=0; number<btn.length; number++){
  btn[number].onclick = function (){
    this.classList.toggle('box__button_active');
    this.children[0].classList.toggle('box__span_active');
    this.nextElementSibling.children[0].classList.toggle('box__list_show');
  }
}