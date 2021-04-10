var w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16, w17, w18, w19, w20, w21, w22, w23, w24, w25, w26, w27;
var thief, cop1, cop2
var d1, d2, d3, d4, d5, d6, d7, d8, d9, d10;

var score = 0;

function preload(){

    thiefImage=loadImage("thief.png")
    copImage = loadImage("cop.png")
    j1 = loadImage("diamond.png")
    j2 = loadImage("amethyst.png")
    j3 = loadImage("apatite.png")
    j4 = loadImage("emerald.png")
    j5 = loadImage("gold.png")
    j6 = loadImage("moonstone.png")
    j7 = loadImage("pearl.png")
    j8 = loadImage("ruby.png")
    j9 = loadImage("saphire.png")
    j10 = loadImage("silver.png")

}

function setup(){
    createCanvas(600,600)


    w1 = createSprite(300, 2, 300, 5)
    w2 = createSprite(50, 2, 100, 5)
    w3 = createSprite(550, 2, 100, 5)
    w4 = createSprite(300, 598, 600, 5)
    w5 = createSprite(2, 300, 5, 600)
    w6 = createSprite(598, 200, 5, 400)
    w7 = createSprite(598, 550, 5, 100)
    w8 = createSprite(190, 60, 200, 5)
    w9 = createSprite(152, 232, 5, 350)
    w10 = createSprite(115, 240, 70, 5)
    w11= createSprite(458, 175, 150, 5)
    w12 = createSprite(535, 225, 5, 105)
    w13 = createSprite(397, 235, 280, 5)
    w14 = createSprite(259.5, 265, 5, 60)
    w15 = createSprite(545, 350, 110, 5)
    w16 = createSprite(488, 375, 5, 100)
    w17 = createSprite(440, 333, 5, 60)
    w18 = createSprite(378, 300, 130, 5)
    w19 = createSprite(330, 365, 226, 5)
    w20 = createSprite(410,425, 250, 5)
    w21 = createSprite(352, 117, 250, 5)
    w22 = createSprite(480, 90, 5, 60)
    w23 = createSprite(40, 150, 80, 5)
    w24 = createSprite(77, 250, 5, 200)
    w25 = createSprite(75, 475, 180, 5)
    w26 = createSprite(105, 410, 100, 5)
    w27 = createSprite(80, 565, 5, 60)
    w28 = createSprite(302, 535, 450, 5)
    w29 = createSprite(525, 508, 5, 60)
    w30 = createSprite(230, 145, 5, 60)
    w31 = createSprite(288, 455, 5, 60)
    w32 = createSprite(218, 390, 5, 56)
    w33 = createSprite(452, 480, 150, 5)

    thief = createSprite(124, 35, 12, 12)
    thief.addImage(thiefImage)
    thief.scale = 0.065
    cop1 = createSprite(370, 330, 12, 12)
    cop1.addImage(copImage)
    cop1.scale = 0.12
    cop2 = createSprite(110, 300, 12, 12)
    cop2.addImage(copImage)
    cop2.scale = 0.12

    d1 = createSprite(570, 30, 10, 10)
    d2 = createSprite(40, 170, 10, 10)
    d3 = createSprite(110, 570, 10, 10)
    d4 = createSprite(530, 380, 10, 10)
    d5 = createSprite(480, 200, 10, 10)
    d6 = createSprite(490, 510, 10, 10)
    d7 = createSprite(113, 205, 10, 10)
    d8 = createSprite(40, 570, 10, 10)
    d9 = createSprite(370, 270, 10, 10)
    d10 = createSprite(260, 140, 10, 10)

    d1.addImage(j1)
    d2.addImage(j2)
    d3.addImage(j3)
    d4.addImage(j4)
    d5.addImage(j5)
    d6.addImage(j6)
    d7.addImage(j7)
    d8.addImage(j8)
    d9.addImage(j9)
    d10.addImage(j10)

    d1.scale = 0.1
    d2.scale = 0.07
    d3.scale = 0.05
    d4.scale = 0.06
    d5.scale = 0.1
    d6.scale = 0.1
    d7.scale = 0.06
    d8.scale = 0.01
    d9.scale = 0.07
    d10.scale = 0.07

}

function draw(){
    background("red")

    text("Score :"+ score, 280,30)

    if (keyDown(UP_ARROW)){
        thief.y -= 2;
    }
    if (keyDown(DOWN_ARROW)){
        thief.y += 2;
    }
    if (keyDown(RIGHT_ARROW)){
        thief.x += 5;
    }
    if (keyDown(LEFT_ARROW)){
        thief.x -= 5;
    }

    if(score >= 5){
        releaseCop1()
    }

    if(score >= 10){
        releaseCop2()
    }

    thief.bounceOff(w1)
    thief.bounceOff(w2)
    thief.bounceOff(w3)
    thief.bounceOff(w4)
    thief.bounceOff(w5)
    thief.bounceOff(w6)
    thief.bounceOff(w7)
    thief.bounceOff(w8)
    thief.bounceOff(w9)
    thief.bounceOff(w10)
    thief.bounceOff(w11)
    thief.bounceOff(w12)
    thief.bounceOff(w13)
    thief.bounceOff(w14)
    thief.bounceOff(w15)
    thief.bounceOff(w16)
    thief.bounceOff(w17)
    thief.bounceOff(w18)
    thief.bounceOff(w19)
    thief.bounceOff(w20)
    thief.bounceOff(w21)
    thief.bounceOff(w22)
    thief.bounceOff(w23)
    thief.bounceOff(w24)
    thief.bounceOff(w25)
    thief.bounceOff(w26)
    thief.bounceOff(w27)
    thief.bounceOff(w28)
    thief.bounceOff(w29)
    thief.bounceOff(w30)
    thief.bounceOff(w31)
    thief.bounceOff(w32)
    thief.bounceOff(w33)

    cop1.bounceOff(w1)
    cop1.bounceOff(w2)
    cop1.bounceOff(w3)
    cop1.bounceOff(w4)
    cop1.bounceOff(w5)
    cop1.bounceOff(w6)
    cop1.bounceOff(w7)
    cop1.bounceOff(w8)
    cop1.bounceOff(w9)
    cop1.bounceOff(w10)
    cop1.bounceOff(w11)
    cop1.bounceOff(w12)
    cop1.bounceOff(w13)
    cop1.bounceOff(w14)
    cop1.bounceOff(w15)
    cop1.bounceOff(w16)
    cop1.bounceOff(w17)
    cop1.bounceOff(w18)
    cop1.bounceOff(w19)
    cop1.bounceOff(w20)
    cop1.bounceOff(w21)
    cop1.bounceOff(w22)
    cop1.bounceOff(w23)
    cop1.bounceOff(w24)
    cop1.bounceOff(w25)
    cop1.bounceOff(w26)
    cop1.bounceOff(w27)
    cop1.bounceOff(w28)
    cop1.bounceOff(w29)
    cop1.bounceOff(w30)
    cop1.bounceOff(w31)
    cop1.bounceOff(w32)
    cop1.bounceOff(w33)

    cop2.bounceOff(w1)
    cop2.bounceOff(w2)
    cop2.bounceOff(w3)
    cop2.bounceOff(w4)
    cop2.bounceOff(w5)
    cop2.bounceOff(w6)
    cop2.bounceOff(w7)
    cop2.bounceOff(w8)
    cop2.bounceOff(w9)
    cop2.bounceOff(w10)
    cop2.bounceOff(w11)
    cop2.bounceOff(w12)
    cop2.bounceOff(w13)
    cop2.bounceOff(w14)
    cop2.bounceOff(w15)
    cop2.bounceOff(w16)
    cop2.bounceOff(w17)
    cop2.bounceOff(w18)
    cop2.bounceOff(w19)
    cop2.bounceOff(w20)
    cop2.bounceOff(w21)
    cop2.bounceOff(w22)
    cop2.bounceOff(w23)
    cop2.bounceOff(w24)
    cop2.bounceOff(w25)
    cop2.bounceOff(w26)
    cop2.bounceOff(w27)
    cop2.bounceOff(w28)
    cop2.bounceOff(w29)
    cop2.bounceOff(w30)
    cop2.bounceOff(w31)
    cop2.bounceOff(w32)
    cop2.bounceOff(w33)

    if (thief.isTouching(d1)){
        d1.destroy();
        score += 2;
    }
    if (thief.isTouching(d2)){
        d2.destroy();
        score += 2;
    }
    if (thief.isTouching(d3)){
        d3.destroy();
        score += 2;
    }
    if (thief.isTouching(d4)){
        d4.destroy();
        score += 2;
    }
    if (thief.isTouching(d5)){
        d5.destroy();
        score += 2;
    }
    if (thief.isTouching(d6)){
        d6.destroy();
        score += 2;
    }
    if (thief.isTouching(d7)){
        d7.destroy();
        score += 2;
    }
    if (thief.isTouching(d8)){
        d8.destroy();
        score += 2;
    }
    if (thief.isTouching(d9)){
        d9.destroy();
        score += 2;
    }
    if (thief.isTouching(d10)){
        d10.destroy();
        score += 2;
    }

    drawSprites()
    // releaseCop1()
    // releaseCop2()
}

function releaseCop1(){
    if (keyDown(UP_ARROW)){
        cop1.y += 2;
    }
    if (keyDown(DOWN_ARROW)){
        cop1.y -= 2;
    }
    if (keyDown(RIGHT_ARROW)){
        cop1.x -= 5;
    }
    if (keyDown(LEFT_ARROW)){
        cop1.x += 5;
    }
}

function releaseCop2(){
    if (keyDown(UP_ARROW)){
        cop2.y += 2;
    }
    if (keyDown(DOWN_ARROW)){
        cop2.y -= 2;
    }
    if (keyDown(RIGHT_ARROW)){
        cop2.x -= 5;
    }
    if (keyDown(LEFT_ARROW)){
        cop2.x += 5;
    }
}
