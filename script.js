
const prices = {
    standard:20,
    vip:50,
    backstage:100
};

const count = document.getElementById("count");
const type = document.getElementById("type");
const student = document.getElementById("student");
const result = document.getElementById("result");
const btn = document.getElementById("buyBtn");

btn.addEventListener("click", calculate);

function calculate(){
    const c = parseInt(count.value);

    if(!c || c<=0){
        result.textContent="Ievadiet daudzumu";
        result.style.color="#ff6b6b";
        return;
    }

    let total = c * prices[type.value];
    if(student.checked) total *= 0.8;

    total = total.toFixed(2);

    result.textContent = `💶 ${total} €`;
    result.style.color = "#00ffcc";
}

const card = document.getElementById("card");

card.addEventListener("mousemove", e=>{
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height/2)/15;
    const rotateY = (x - rect.width/2)/15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener("mouseleave", ()=>{
    card.style.transform = "rotateX(0) rotateY(0)";
});

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

for(let i=0;i<70;i++){
    particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        dx:(Math.random()-0.5)*0.5,
        dy:(Math.random()-0.5)*0.5
    });
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{
        p.x+=p.dx;
        p.y+=p.dy;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle="#7f5cff";
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();


