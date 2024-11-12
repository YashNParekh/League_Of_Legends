


function open_nav(){
    nav_temp = document.getElementById('main_nav_bar_container');
    
    // gsap.timeline().to

    gsap.timeline()
    .to('.back_music_control',{
        opacity:0,
        ease:'power3.in',
        duration:0.01
    })
    .to('.back_music_control',{right:'2.5%'})
    .to('.back_music_control',{
        opacity:1,
        ease:'power3.in',
        duration:0.3

    });

    nav_temp.style.display = 'block';
}


function close_nav(){
    nav_temp = document.getElementById('main_nav_bar_container');
    

    gsap.timeline().to('.back_music_control',{
        opacity:0,
        ease:'power3.in',
        duration:0.1
    })
    .to('.back_music_control',{right:'2%'})
    .to('.back_music_control',{
        opacity:1,
        ease:'power3.in',
        duration:0.3

    });
    
    nav_temp.style.display = 'none';
}



function char_write_animation(text_to_effect){
        
    // this line means we want to get the value in data set 
    // that we store 
    // with data-value 
    document.getElementById('hover_sound').play();
    

    // here  we cant give value for some intervale resune
    // chars_of_word = text_to_effect.dataset.value.split('');
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'



    let interval_count = 0;


    const text_interval = setInterval(() => {
        // this is for 
        chars_of_word = text_to_effect.dataset.value.split('');
        text_to_effect.innerText =  text_to_effect.dataset.value.split('')
        .map((letter,index) =>{
            // here in map function index is defualt parameter 
            // we can't change by ani other name if we want index 
            // this refers which index we are currently 
        
        //if not animate the space 
        // if(chars_of_word[index]==' '){return ' '}

        if(index<interval_count){
                return chars_of_word[index];
            }
        return letters[(Math.floor(Math.random()*26))]}).join("") ;
        // every time add 1/3 in count 
        // and check for interval are equal to word length or not 
        if(interval_count>= chars_of_word.length){
            clearInterval(text_interval);
        }
        interval_count +=1/2;
        
    },25);  

}



function button_fill(){
 
    lines = document.querySelectorAll('.line>div')
    // it is must leser then the unfill function duration
    // for not stuck line 
    durations = [0.2,0.3,0.35]
    lines.forEach((element,index) => {
        gsap.to(element,{ duration:durations[index],ease:"power4.in",left:'0%'})
    });
    
   

}


function button_unfill(){
 
    lines = document.querySelectorAll('.line>div')
    
    // here the duration is greater then all duration of upper for not 
    // freez any line 
    lines.forEach(element => {
        gsap.to(element,{ duration:0.4  ,ease:"expo.in",left:'100%'})
    });

    
}


var music = document.getElementById('back_music');

function music_play(){

    const animations = [
        'music_bar 2s ease-in infinite alternate',
        'music_bar 2s ease-in infinite -1.5s alternate ',
        'music_bar 2s ease-in infinite -3.8s alternate ',
        'music_bar 2s ease-in infinite -1.2s alternate '
    ]
    var lines = document.querySelectorAll('.music_toggle_button>span');
    


    var audiolist = document.querySelectorAll('.audio_effects');

    audiolist.forEach((element)=>{
        element.muted = !element.muted;
    });
    

    if (music.paused){
        lines.forEach((element,index) => {
            element.style.animation = animations[index]; 
        });
        music.currentTime=1.5;
        music.play();
        

        
    }
    else{
        lines.forEach(element => {
            element.style.animation = 'none';
        });
        music.pause();
    }

}



music_play()