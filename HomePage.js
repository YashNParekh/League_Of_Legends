
// JavaScript for lazy loading
const lazyVideos = document.querySelectorAll('.lazy');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const video = entry.target;
      video.src = video.dataset.src;
      video.classList.remove('lazy');
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      observer.unobserve(video);
    }
  });
});

lazyVideos.forEach((video) => {
  observer.observe(video);
});


function updateScaling_svg(id_for_resizing,which_svg){
    
  let svg_temp = document.getElementById(id_for_resizing);
  console.log(svg_temp)
   let svg_temp_path = svg_temp.children[0];
   let path_temp = svg_temp_path.getAttribute('d');
    
   let height_window =Math.floor(svg_temp.getBoundingClientRect().height);
   let width_window = Math.floor(svg_temp.getBoundingClientRect().width);


    console.log(width_window)
    console.log(height_window)

    path_temp  = path_temp.split(' ').map((letter,index) =>{

    if(index==2){
            return letter.split('L').map((value,index1)=>{
              
               if(index1==0){
                if(id_for_resizing==2){return String(width_window*0.8 -0); }
                 return String(width_window -40);
               } 
               if(index1==1){
                if(id_for_resizing==2){return String(width_window*0.8 ); }
                return String(width_window);
               }
            }).join('L');}
    if(index==4){
              if(id_for_resizing==2){
                return (height_window/1.5-0.8+'H');
              }
             return (height_window-0.8+'H');
    }        
        return letter;
    

    }).join(' ');

    // console.log(path_temp)
    svg_temp_path.setAttribute('d', path_temp);

    

}



window.addEventListener('resize',()=> {updateScaling_svg('svg_border','1'),updateScaling_svg('svg_border1',2)});
updateScaling_svg('svg_border','1')
updateScaling_svg('svg_border1',2)






// make a interval for evry time 
const cg_cur_champ = setInterval(function() {

  let current_data_index = parseInt(document.getElementsByClassName('show_champion_info_inner')[0].dataset.currunt_champ_index) +1;
  let max_data_index = document.getElementsByClassName('show_champion_info_inner')[0].dataset.max_index ;

  if (current_data_index==max_data_index){
    current_data_index = 0; 
  }  

  // console.log(typeof current_data_index)

  change_currnt_champ(current_data_index,false)
  
}, 4900);







function change_currnt_champ(temp_champion,stop_for_interval=true){
  console.log()

      if (stop_for_interval){
        document.getElementsByClassName('circle2')[0].style.setProperty('animation','svg_border_animation_2 3s  ease-in infinite')
        clearInterval(cg_cur_champ);
      }
    
      
    
      let current_data_index = document.getElementsByClassName('show_champion_info_inner')[0].dataset.currunt_champ_index ;
    
      // console.log(current_data_index)
    
      new_data_index = temp_champion;
    
      // console.log(new_data_index)  

      if (current_data_index == new_data_index){return}

      botttom_circle_left_values = [6.3 ,23, 39.7, 56.6, 73.2, 90];


      new_active_class = ['active_champ_button','active_champ_vedio','active_image','active_char_info'];
    
    

    
      // for button
      button_change_object = document.getElementsByClassName('nav_items_conainter')[0];

      button_change_object.style.setProperty('--left_for_bottom_champ_cir', `${botttom_circle_left_values[new_data_index]}%`)


      // button_change_object.style.
      // console.log(`${botttom_circle_left_values[new_data_index]}%`)

      button_change_object.children[new_data_index].classList.add(new_active_class[0])
      button_change_object.children[current_data_index].classList.remove(new_active_class[0])


    
      // console.log(button_change_object)
    
      // -- 
      // for image 
    
      image_change_object = document.getElementsByClassName('image_Champ_inner')[0];
    
      image_change_object.children[current_data_index].classList.remove(new_active_class[2])
      image_change_object.children[new_data_index].classList.add(new_active_class[2])


      // for char_under_image 
    
      image_info_change_object = document.getElementsByClassName('char_info')[0];
    
      image_info_change_object.children[current_data_index].classList.remove(new_active_class[3])
      image_info_change_object.children[new_data_index].classList.add(new_active_class[3])
    
      // for background 
    
      image_info_change_object = document.getElementsByClassName('background_for_containre_inner')[0];
    
      image_info_change_object.children[current_data_index].classList.remove('active_back_cc')
      image_info_change_object.children[new_data_index].classList.add('active_back_cc')

    
    
    
      // ----
      // for vedio
      // Vedio_champinfo_innerr this the main container
      vedio_obj = document.getElementsByClassName('Vedio_champinfo_innerr')[0];

      new_ved = vedio_obj.children[new_data_index];
      prev_ved = vedio_obj.children[current_data_index];

      new_ved.children[0].play();
      prev_ved.children[0].pause();
    
      new_ved.classList.add(new_active_class[1]);
      prev_ved.classList.remove(new_active_class[1]);
    
      // image 
    
    
    
      document.getElementsByClassName('show_champion_info_inner')[0].dataset.currunt_champ_index =new_data_index
    
}   



function slay_with_style_animation(){

    image_1 = document.getElementsByClassName('active_1')[0]
    image_2 = document.getElementsByClassName('active_2')[0]
    image_3 = document.getElementsByClassName('active_3')[0]

    let temp_arr = [image_1,image_2,image_3];
    
    let index_temp = 1
  
    setInterval(function(){

      temp_arr[index_temp].style.animation =  's_w_s_img1 1.5s linear  ';

      index_temp+=1;
      if (index_temp==3){index_temp=0;}
      
      temp_arr[index_temp].style.animation =  's_w_s_img2 1.5s linear ';
      // console.log(index_temp);
    },1500);


    // console.log('done')


}
// call or start the process for channging image






// function parelax efect on  slay with style 
// gsap.registerPlugin(ScrollTrigger,);


// gsap.to(
//   ('.Hading_container_outer1'),{
//     top:'40%',
//     duration:2,
//     background:'red',
//     scrollTrigger:{
//       trigger:'.Hading_container_outer1',
//       encodeURI:'top top',
//       start:'bottom bottom',
//       markers:true
//     }
//   }
// );



let last_top = 0;



window.addEventListener('scroll', () => {
  
  
    let hadinng_container     = document.getElementsByClassName('Hading_container_outer1')[0];
    let backgound_1_inner_tem = document.getElementsByClassName('backgound_1_inner_img')[0];
    let backgound_2_inner_tem = document.getElementsByClassName('backgound_2_inner_img')[0];
    let hadinng_container_left_side = document.getElementsByClassName('side_hadder')[0];
    

   

    const element_text_container = document.getElementsByClassName('champion_skin_container_outter')[0];
    const element_text_container_rect = element_text_container.getBoundingClientRect();
    const element_text_container_height = element_text_container_rect.height;
    const element_text_container_top = element_text_container_rect.top;
    
    // console.log(element_text_container_top)
    
    // for make darker area while scroling through slay with style 

    if(element_text_container_top>-450 && element_text_container_top<-315){

      const temp_distance = (100 -  ((450 + element_text_container_top)/100)*100)/100

      const temp_element = document.getElementsByClassName('style_champion_main_container_outter')[0];
      temp_element.style.setProperty('--bottom_value_for_make_darker', `${parseFloat(temp_element.dataset.after_bottom_value) - 50*temp_distance}px`)
      // console.log( `${parseInt(temp_element.dataset.after_bottom_value) + 30*temp_distance/100} `);
      // console.log(temp_element  )
      // console.log(temp_distance)
    }



    // from here start parelex efect code  
    if ( element_text_container_top>-100  && element_text_container_top < element_text_container_height * 1.8) {
        if (element_text_container_top < last_top) {
            // Scrolling down
            // console.log('s down')
            // console.log(hadinng_container.style.top)
            if(hadinng_container.style.top>'40'){
              const newTop = parseFloat(hadinng_container.style.top ) - 0.2;
              hadinng_container.style.top = `${newTop}%`;
              
              
              const newTop1 = parseFloat(backgound_1_inner_tem.style.top ) + 0.05;
              backgound_1_inner_tem.style.top = `${newTop1}%`;
              
              const newTop2 = parseFloat(backgound_2_inner_tem.style.top ) - 0.02;
              backgound_2_inner_tem.style.top = `${newTop2}%`;

              const newTop3 = parseFloat(hadinng_container_left_side.style.top ) + 0.05;
              hadinng_container_left_side.style.top = `${newTop3}%`;
              
              // console.log(backgound_1_inner_tem.style.top)
            }
            else{
              const newTop = parseFloat(hadinng_container.style.top ) - 0.05;
              hadinng_container.style.top = `${newTop}%`; 
              
              
              const newTop1 = parseFloat(backgound_1_inner_tem.style.top ) + 0.03;
              backgound_1_inner_tem.style.top = `${newTop1}%`;

              const newTop2 = parseFloat(backgound_2_inner_tem.style.top ) - 0.02;
              backgound_2_inner_tem.style.top = `${newTop2}%`;
              
              const newTop3 = parseFloat(hadinng_container_left_side.style.top ) + 0.03;
              hadinng_container_left_side.style.top = `${newTop3}%`;
            }
        } else {
              if( element_text_container_top<-200){
              }
              else{
                // Scrolling up
                // console.log('s up')
                // console.log(hadinng_container.style.top)
                if(hadinng_container.style.top < '45'){
                  const newTop = parseFloat(hadinng_container.style.top ) + 0.2;
                  hadinng_container.style.top = `${newTop}%`;
              
                  const newTop1 = parseFloat(backgound_1_inner_tem.style.top ) - 0.02;
                  backgound_1_inner_tem.style.top = `${newTop1}%`
                  
                  const newTop2 = parseFloat(backgound_2_inner_tem.style.top ) + 0.02;
                  backgound_2_inner_tem.style.top = `${newTop2}%`;
                  
                  const newTop3 = parseFloat(hadinng_container_left_side.style.top ) - 0.03;
                  hadinng_container_left_side.style.top = `${newTop3}%`;
                }
                else{
                  
                  const newTop = parseFloat(hadinng_container.style.top ) + 0.05;
                  hadinng_container.style.top = `${newTop}%`;
                  
                  
                  const newTop1 = parseFloat(backgound_1_inner_tem.style.top ) - 0.02;
                  backgound_1_inner_tem.style.top = `${newTop1}%`;
                  
                  const newTop2 = parseFloat(backgound_2_inner_tem.style.top ) + 0.02;
                  backgound_2_inner_tem.style.top = `${newTop2}%`;
                  
                  const newTop3 = parseFloat(hadinng_container_left_side.style.top ) - 0.03;
                  hadinng_container_left_side.style.top = `${newTop3}%`;
                }
              }
        }
        // console.log(element_text_container.style.top);
        last_top = element_text_container_top;
    }
});






  document.getElementsByClassName('champion_skin_container_outter')[0].addEventListener('mousemove', function(event) {
    
    let hadinng_container     = document.getElementsByClassName('Hading_container_outer1')[0];
    let backgound_1_inner_tem = document.getElementsByClassName('backgound_1_inner_img')[0];
    let svg_backgrouns = document.getElementsByClassName('svg_border_for_sws')[0];
   
    const containerWidth = this.offsetWidth;
      const mouseX = event.clientX - this.offsetLeft;

      // Calculate percentage position of mouse within container
      const percentage = (mouseX / containerWidth) * 100;
      console.log(percentage)
      
      // console.log(hadinng_container.style.left)

      hadinng_container.style.left = `${parseFloat(hadinng_container.dataset.final_left_value)        -  1.5*(percentage)/100}%`
      backgound_1_inner_tem.style.left = `${parseFloat(backgound_1_inner_tem.dataset.final_left_value) - 0.9*(100-percentage)/100}%`
      svg_backgrouns.style.left = `${parseFloat(svg_backgrouns.dataset.final_left_value) - 1.2*(100 - percentage)/100}%`
      // console.log('left' ,(50-percentage)*2)      

      
    });




// js for partical flow on slay with style 

const canvas = document.getElementById('canvas_partical_sws');
const ctx = canvas.getContext('2d');


// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let randomInRange =(min, max)=> {
  return Math.random() * (max - min) + min;
};

class Particle {
  constructor() {
    this.make_partical();
  }

  make_partical() {
    this.x = randomInRange(0, canvas.width);
    this.y = canvas.height;
    this.scale = randomInRange(0.4, 1.3);
    this.speed = randomInRange(1, 4);
    this.color = `rgba(213, 100, 213)`;
    this.leftOffset = randomInRange(-100, 100);
  }

  // Update particle position
  update() {
    this.y -= this.speed;
    this.scale -= 0.002; // Decrease scale gradually
    if( this.y>canvas.height*0.49  &&  this.y<canvas.height*0.50){
        this.leftOffset = this.leftOffset+ randomInRange(-140, 140);
    }

    this.x += this.leftOffset / 200;
    
    // Reset particle direction if it reaches the top or scale becomes too small
    if (this.y < 0 || this.scale <= 0) {
      this.make_partical();
    }
  }

  // Draw particle
  draw() {

    // here save means the current partical propertys are save for that 
    // and this property is not give to next partical therfore 
    // we restore the defualt property and then give the new peropertys to 
    // new partical again store for it and then restore for next one 
    // and like this we contiinues makeloop for each partical and then 
    // if parical scale is 0 or partical reach to top then we reset the partical and give a new values to reanimate and re use for that that's why we 
    // not make new partical again 
    
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.scale;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 20, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// store particles
const particles = [];

// making 40 patical
// this are use again and again 
for (let i = 0; i < 40; i++) {
  particles.push(new Particle());
}
   



// for toggle the mouse effect for only 1 time if mouse stay at that potion 
let switch_to_left_right ;




document.getElementsByClassName('champion_skin_container_outter')[0].addEventListener('mousemove', function(event) {
   
    const containerWidth = this.offsetWidth;
    const mouseX = event.clientX - this.offsetLeft;

      // Calculate percentage position of mouse within container
    const percentage = (mouseX / containerWidth) * 100;
    
    
    // console.log(percentage)
      
      // console.log(hadinng_container.style.left)
    if(switch_to_left_right==undefined){
        if(percentage>5 && percentage<15){
            switch_to_left_right = 'left'
            
            console.log('left')

            let value_to = randomInRange(200,400);
            particles.forEach(particle => {
                particle.leftOffset = value_to;
            });
            
        }
        else if(percentage>86 && percentage<100){
            switch_to_left_right = 'right'
            console.log('right')

            
            let value_to = randomInRange(-400,-200);
            particles.forEach(particle => {
                particle.leftOffset = value_to;
            });
        }
    }
    else{

        if(percentage>5 && percentage<20 &&switch_to_left_right!='left'){
            switch_to_left_right = 'left'
            
            console.log('left')

            let value_to = randomInRange(200,400);
            particles.forEach(particle => {
                particle.leftOffset = value_to;
            });
        }
        else if(percentage>80 && percentage<100 &&  switch_to_left_right!='right'){
            switch_to_left_right = 'right'
            console.log('right')

            let value_to = randomInRange(-400,-200); 
            particles.forEach(particle => {
                particle.leftOffset = value_to;
            });

        }

    }
        
      
      
    });


// Animation loop
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
    }


// here call animate for strat animation on that 40 partical again and agian 


function change_WTP(temp_index){

  if(document.getElementsByClassName('list_container')[0].dataset.current_WTP_index==2-temp_index){
    return
  }
  else{
    document.getElementsByClassName('list_container')[0].dataset.current_WTP_index=2-temp_index;
  }
  

  let tranfer_array = [-260,-130,0,130,260]
  let container_to_translet = document.getElementsByClassName('list_container')[0]
  
  // console.log(container_to_translet[0])
  // console.log(container_to_translet[0])
  // console.log(container_to_translet[0])

  document.getElementsByClassName('active_WPT')[0].classList.remove('active_WPT')
  document.getElementsByClassName('active_text_container')[0].classList.remove('active_text_container')
  document.getElementsByClassName('active_vedio_WTP')[0].classList.remove('active_vedio_WTP')
  document.getElementsByClassName('active_info')[0].classList.remove('active_info')

  container_to_translet.children[2-temp_index].children[0].children[0].classList.add('active_WPT')
  container_to_translet.children[2-temp_index].children[0].children[1].classList.add('active_text_container')
  
  let vedio_container_to_translet = document.getElementsByClassName('vedios_container_outter')[0]
  vedio_container_to_translet.children[2-temp_index].classList.add('active_vedio_WTP')

  let text_info = document.getElementsByClassName('WTP_Game_mode_info_cotnainer_inner')[0]
  text_info.children[2-temp_index].classList.add('active_info')



  for(i=0;i<3;i++){
      container_to_translet.children[i].style.transform = `translateY(${tranfer_array[temp_index+i]}px)`;
  }

}







// ----------------------------------------
// dont remove it
// this for call all functinon for starting 



animate();


slay_with_style_animation()
  