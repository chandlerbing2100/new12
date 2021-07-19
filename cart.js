var data_div = document.getElementById('container')
var totalprice =0;
var totalitems = 0;
function addloc(el){
    // for(var i =0;i<items.length;i++){
        totalitems++;
        var div = document.createElement('div');
    
        var p_brand =document.createElement('p');
        p_brand.innerHTML = el.name;
        var p_price = document.createElement('p');
        p_price.innerHTML = el.price
        totalprice += Number(el.price)
        var img = document.createElement('img');
        img.src = el.img;
       
        
        div.append(p_brand,p_price,img)
        data_div.append(div);
    
        // }
}
function showloc(d){
    var items = d;
    data_div.innerHTML='';
    items.forEach(function(el){
        addloc(el);
    })
}
showloc(JSON.parse(localStorage.getItem('newcart')));
// console.log(totalprice,totalitems);
var itcount = document.getElementById('itemcount');
itcount.innerHTML = totalitems;

var itprice = document.getElementById('price');
itprice.innerHTML = totalprice;


var btn1 = document.getElementById('promo');
btn1.addEventListener('click',function(){
    var p = document.getElementById('code').value;
    if(p=='masai30'){
        totalprice= totalprice - (totalprice*0.3);
        itprice.innerHTML = totalprice;
    }
})

function movetocheckout(){
    window.location.href = 'checkout.html'
}

