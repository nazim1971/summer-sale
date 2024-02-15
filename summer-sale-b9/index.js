const cards = document.querySelectorAll('.card') ;

let titleCount = 1;
let totalPrice = 0;

for (let i = 0; i < cards.length; i++ ){
    const card = cards[i];
   
    card.addEventListener('click', function(){

     const getTitle = card.querySelector("h3").innerText ;

     const price = parseFloat(card.querySelector('span').innerText.split(' ')[1]);

     const container = document.getElementById('title-container');

     const p = document.createElement('p');
     p.innerText = titleCount+ '. ' + getTitle;

     container.appendChild(p);
     titleCount++;
     
     totalPrice+= price;

     const theTotalPrice = document.getElementById('totalPrice');
     theTotalPrice.innerText = totalPrice.toFixed(2);
    })
}


const btn = document.getElementById("apply-btn").addEventListener("click", function(){
    const inputCuppon = document.getElementById('input-field').value;

    const cupponCode = inputCuppon.split(' ').join('').toUpperCase();

    if(totalPrice >= 200 ){
        if(cupponCode === 'SELL200'){
            const discountPrice = document.getElementById('discountPrice');
        const dis = 0.2 * totalPrice;
        discountPrice.innerText = dis.toFixed(2);

        const afterDiscount = document.getElementById('total');
        afterDiscount.innerText = totalPrice - discountPrice.innerText;

        document.getElementById('input-field').value = "";
        
        }
        else{
            alert('Invalid Coupon Code')
            document.getElementById('input-field').value = "";
        }
        
    }
    else{
        alert("Please Buy more then 200$")
        document.getElementById('input-field').value = "";
    }
})


    const ending = document.getElementById('return-home').addEventListener('click',function(){
        const elements = ['title-container', 'totalPrice', 'discountPrice', 'total'];
        elements.forEach(id => document.getElementById(id).innerText = '');
        
        
    })
    
    