
var Btn = document.getElementById('playlist');
var mysong = document.getElementById('bysong');
let isplaying = true;
var playbtn = document.getElementById('play');
var prevbh = document.getElementById('prev');
var nextbh = document.getElementById('next');
var songct =document.getElementById('songbtn');
var indexsong = 0;

var music = [
   './music/chuyencuboqua.mp3',
   './music/heroestonght.mp3',
   './music/tetdongday.mp3',
   './music/ngayxuanlongphung.mp3'

]
nextbh.onclick = function(){
// indexsong ++ ; 
// mysong.setAttribute('src', `${music[indexsong]}`);
// mysong.play();
if (indexsong<music.length-1){
    indexsong++;
    
}else {
    indexsong = 0;
}
console.log(indexsong)
mysong.setAttribute('src', `${music[indexsong]}`);
mysong.play();
}
playbtn.onclick = function succes(){
    if(isplaying ){
mysong.play();
isplaying = false
playbtn.innerHTML = '<i class="fa-solid fa-circle-pause"></i>'
    }else{
        mysong.pause();
    isplaying = true;
    playbtn.innerHTML = '<i class="fa-solid fa-play"></i>'
    }
}






