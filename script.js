const RESPONSIVE_BREAKPOINT = 900;
const MIN_RADIAL_DISTANCE = 300;
const MAX_RADIAL_DISTANCE = 550;

let sectionData = []
let tables = [];
let titleLetters = [];
let projectListItems = [];


let shapes = [];
function unHoverListItems(){
  projectListItems.forEach(d=>{d.classList.remove("hovered")})
}
function showDescription(text){
  document.getElementById("project-description-text").style.display = "block";
  document.getElementById("project-description-text").innerText = text;

}
function hideDescription(){
  // document.getElementById("project-description-text").style.display = "none";
  // document.getElementById("project-description-text").innerText = "";
}

function preload() {
  tables.push(loadTable('SubmissionFormResponses.csv', 'csv', 'header'));
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("canvasContainer");
  // console.log(tables)
  sectionData = tables[0].rows.map(d=>d.obj).filter(d=>d["Your CCLab Section"]==instructor);
  document.getElementById("instructor-name").innerText = instructor;
  buildHeadlineElements();
  
  // console.log(sectionData);
  for(project of sectionData){
    console.log(project)
    let li = document.createElement("li");
    let p = document.createElement("p");
    li.appendChild(p);
    let studentElm = document.createElement("span");
    studentElm.className = "student-name";
    let name = project["Your Name (as you want it displayed on the website)"];
    studentElm.innerText = name;
    p.appendChild(studentElm);
    
    let projectElm = document.createElement("span");
    projectElm.className = "project-name";
    projectElm.innerText = project["Your Project Name (for our IMA Show display)"]
    // projectElm.innerText = "☞ click to open this project in a new tab"
    p.appendChild(projectElm);

    let projectText = project["Short Description (1-2 sentences, not more!)"];
    let projectLink = project["A working LINK (to a version that's LIVE on GitHub)"]
    li.addEventListener("mouseover", function(){
      unHoverListItems();
      li.classList.add("hovered");
      showDescription(projectText);
    })
    li.addEventListener("mouseout", function(){
      unHoverListItems();
      hideDescription();
    })
    li.addEventListener("click", function(){
      window.open(projectLink, '_blank').focus();
    })
    projectListItems.push(li);
    document.getElementById("projects").appendChild(li);

  }
  
}



function buildHeadlineElements(){
  let title = document.getElementById("title");
  let words = title.innerText.split(" ")
  console.log(words)
  title.innerHTML = "";

  for(word of words){
    console.log(word);
    let s1 = document.createElement("span");
    s1.className = "title-word "+word;
    let letters = word.split("");
    console.log(letters);
    for(letter of letters){
      let s2 = document.createElement("span");
      s2.className = "title-letter";
      s2.innerText = letter;
      let rot = random(-18, 18)
      s2.style.transform = "rotate(" + rot + "deg)"
      s2.style.top = random(-6, 6)+"px";
      s2.style.left = random(-3, 3)+"px";
      titleLetters.push({elm: s2, rot: rot});
      s1.appendChild(s2)
    }
    console.log(title)
    title.appendChild(s1)
    
  } 
}
function animateTitle(){
  for(letter of titleLetters){
    if(random()<0.0006){
      console.log(titleLetters[0]);
      letter.rot += 360;
      if(random()<0.5){
        letter.elm.style.transform = "rotate(" + letter.rot + "deg)"
      }else{
        letter.elm.style.top = random(-8, 8)+"px";
      }
    }
  }
}


function draw() {
  if(random()<0.0005){
    addShape();
  }
  // noLoop();
  background(255)
  // fill(120, 200, 10);
  // fill(0)
  // rect(300, 0, width, height);
  // console.log(shapes)
  for(shape of shapes){
    shape.update();
    shape.display();
  }

  for(let i = shapes.length-1; i >=0; i--){
    if(shapes[i].byebye == true){
      shapes.splice(i, 1)
    }
  }
  console.log(shapes.length)
  
  animateTitle();
}

function addShape(){
  shapes.push( new BigShape())
}
// function mousePressed(){
//   addShape();
// }
class BigShape{
  constructor(){
    this.size = random(width/4, 5*width);
    this.dir = random([-1, 1]);
    
    this.x = -this.size/2;
    if(this.dir < 0){
      this.x = width + this.size/2
    }
    this.y = height/2;
    // this.shape = shape;
    this.speedX = random(0.1, 0.5)*this.dir;
    // this.size = size;
    this.hue = random(360);
    if(random()<0.03){
      this.white = true;
    }else{
      this.white = false;
    }
    rectMode(CENTER);
    colorMode(HSB);
    this.byebye = false;
  }
  update(){
    this.x+=this.speedX
    if(this.x > width+this.size/2){
      this.byebye = true;
    }
  }
  display(){
    push();
    translate(this.x, this.y);
    noStroke();

    fill(this.hue, 90, 205, 0.8);
    if(this.white){
      fill(255);
    }
    rect(0, 0, this.size, height);


    pop();
  }
}
