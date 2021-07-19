var data_div = document.getElementById('cont')


// function mainProd(d){
// var items = d;
// console.log(items)
// data_div.innerHTML='';
// for(var i =0;i<items.length;i++){
//     var div = document.createElement('div');

//     var p_brand =document.createElement('p');
//     p_brand.innerHTML = items[i].name;
//     var p_price = document.createElement('p');
//     p_price.innerHTML = items[i].price
//     var img = document.createElement('img');
//     img.src = items[i].img;
//     var btn = document.createElement('button');
//     btn.textContent = 'addtocart';
//     btn.addEventListener('click',function(){
//         addtocart(i);
//     })
    
    
//     div.append(p_brand,p_price,img,btn)
//     data_div.append(div);

//     }

// }

// mainProd(JSON.parse(localStorage.getItem('products')))

function filterprice(){
    var temp =JSON.parse(localStorage.getItem('products'))
    temp = temp.sort(function(a,b){
        return a.price - b.price;
    })
    showloc(temp);

}

function movetocart(){
    window.location.href = 'cart.html'
}
function addtocart(obj){
    let arr;
    arr = localStorage.getItem('newcart');
    if(arr == null){
        arr = []
    }else{
        arr = JSON.parse(localStorage.getItem('newcart'))
    }
    arr.push(obj);
    localStorage.setItem('newcart',JSON.stringify(arr));

}

function addloc(el){
    // for(var i =0;i<items.length;i++){
        var div = document.createElement('div');
    
        var p_brand =document.createElement('p');
        p_brand.innerHTML = el.name;
        var p_price = document.createElement('p');
        p_price.innerHTML = el.price
        var img = document.createElement('img');
        img.src = el.img;
        var btn = document.createElement('button');
        btn.textContent = 'addtocart';
        btn.addEventListener('click',function(){
            addtocart(el);
        })
        
        
        div.append(p_brand,p_price,img,btn)
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
showloc(JSON.parse(localStorage.getItem('products')));