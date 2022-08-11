
let canvas = document.querySelector("canvas");

canvas.width = innerWidth - 100 ;
canvas.height = innerHeight - 100;

let c = canvas.getContext("2d");

// make a class for elman 
class Ball {
    constructor(){
        this.baseR= 20;
        this.r = this.baseR;
        this.x = this.x || randin(0+this.r,innerWidth-this.r);
        this.y = this.y || randin(0+this.r,innerHeight-this.r);
        this.vx = 1;
        this.vy = 1;
        this.vvv =20; 

    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.r,0,Math.PI*2)
        c.fillStyle = "blue"
        c.fill();
    }
    update(){
        if (this.x+this.r+2 >window.innerWidth || this.x-this.r<0) {
            this.vx = -this.vx;
        }
        if(this.y+this.r+2>window.innerHeight || this.y-this.r<0){
            this.vy = -this.vy;
        }
        this.x +=this.vx;
        this.y += this.vy; 
        this.draw();
    }
}
// let create more than one ball
  

    
        let vball = 100;
        let balls = [];
        for(let i = 0; i<vball;i++ ){
          balls.push(new Ball());
        }
       
        //add a Ball with click user 
      
        window.addEventListener("click",function (e) {
          balls.push(new Ball(e.clientX,e.clientY))
        })
      
        document.getElementById("plus").addEventListener("click",function () {
          balls.push(new Ball())
        })
      
        document.getElementById("delet").addEventListener("click",function () {
          balls.pop()
        })
        document.getElementById("size").addEventListener("click",function () {
          balls.r +=1;
        })
      
        // big base r
      
        window.addEventListener("mousemove",function (e) {
          balls.forEach(balls =>{
              let distance = Math.sqrt(Math.pow(e.clientX-ball.x,2) + Math.pow(e.clientY-ball.y,2));
              if (distance <100 && ball.r < ball.baseR*4) {
                  ball.r += 10;    
              }else if (ball.r > ball.baseR) {
                  ball.r -= 10;
              }
          })
          
        })
      
      
      
        //make a infinite loop with requestAnimationFrame  
      function anime() {
              c.clearRect(0,0,innerWidth,innerHeight); 
              balls.forEach(ball => {
                  ball.update();
              });
              requestAnimationFrame(anime)
          }
          
          anime();
          
      



    

















//make a random in min to max 
function randin(min,max) {
    return Math.floor(Math.random()*(max - min + 1 ) + min );
}