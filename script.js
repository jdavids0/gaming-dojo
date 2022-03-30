/* function addCart(){
    var element = document.getElementById('shop-items')
    var value = element.innerHTML;

    ++value

    console.log(value)
    document.getElementById('shop-items').innerHTML=value;
} */

var bannerImage = document.querySelector('#placeholder');

function switchPic(){
    bannerImage.src='./images/cyberpunk_2077_box_art.jpg';
}

function switchBack(){
    bannerImage.src='./images/placeholder_ad.jpg';
}

function buy(){
    var element = document.getElementById('shop-items')
    var value = element.innerHTML;

    ++value

    document.getElementById('shop-items').innerHTML=value;
}