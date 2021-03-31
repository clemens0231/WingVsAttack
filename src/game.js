const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 640,
    scale: {
        mode: Phaser.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene:{
        preload,
        create,
        update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false
        }
    }

}
const game = new Phaser.Game(config);
let ball;
let player1;
let player2;
let multiplayer;
let singleplayer;
let multiplayer2;
let singleplayer2;
let logo;
let isGameStarted = true;
let cursors;
let paddleSpeed = 350;
let keys = {};
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let gamers;
var isClicking = false;
var swipeDirection;
let score11;
let score12;
let score13;
let score14;
let score15;
let score10;
let score20;
let score21;
let score22;
let score23;
let score24;
let score25;
let easy;
let medium;
let hard;
let restart;
var difficulty;
let initalVelocityX;
let initalVelocityY;
let player1wins;
let player2wins;
let restart2;
let tabtostart;

function preload(){
    this.load.image('ball', './assets/images/ball.png');
    this.load.image('paddle', './assets/images/paddle.png');
    this.load.image('paddle2', './assets/images/paddle2.png');
    this.load.image('logo', './assets/images/wingvsattack.png');
    this.load.image('singleplayer', './assets/images/singleplayer.png');
    this.load.image('multiplayer', './assets/images/multiplayer.png');
    this.load.image('singleplayer2', './assets/images/singleplayer2.png');
    this.load.image('multiplayer2', './assets/images/multiplayer2.png');
    this.load.image('1', './assets/images/1.png');
    this.load.image('2', './assets/images/2.png');
    this.load.image('3', './assets/images/3.png');
    this.load.image('4', './assets/images/4.png');
    this.load.image('5', './assets/images/5.png');
    this.load.image('0', './assets/images/0.png');
    this.load.image('medium', './assets/images/medium.png' );
    this.load.image('hard', './assets/images/hard.png' );
    this.load.image('easy', './assets/images/easy.png' );
    this.load.image('restart', './assets/images/restart.png' );
    this.load.image('player1wins', './assets/images/player1wins.png' );
    this.load.image('player2wins', './assets/images/player2wins.png' );
    this.load.image('restart2', './assets/images/restart2.png' );
    this.load.image('tabtostart', './assets/images/tabtostart.png' );



}
function create(){



    ball = this.physics.add.sprite(
        this.physics.world.bounds.width / 2,
        this.physics.world.bounds.height / 2,
        'ball'
    );
    ball.setVisible(false);

    ball.setCollideWorldBounds(true);
    ball.setBounce(1,1);

    player1 = this.physics.add.sprite(
        this.physics.world.bounds.width - (ball.body.width / 2 + 1),
        this.physics.world.bounds.height / 2,
        'paddle2'
    );
    player1.setImmovable(true);
    player1.setCollideWorldBounds(true);
    player1.setVisible(false);

    player2 = this.physics.add.sprite(
        ball.body.width / 2 + 1,
        this.physics.world.bounds.height / 2,
        'paddle'
    );
    player2.setImmovable(true);
    player2.setCollideWorldBounds(true);
    player2.setVisible(false);



    logo = this.add.image(this.physics.world.bounds.width / 2, this.physics.world.bounds.height / 4, 'logo');
    singleplayer = this.add.image(this.physics.world.bounds.width / 2, 320, 'singleplayer');
    multiplayer = this.add.image(this.physics.world.bounds.width / 2, 400, 'multiplayer');
    singleplayer2 = this.add.image(this.physics.world.bounds.width / 2, 320, 'singleplayer2');
    multiplayer2 = this.add.image(this.physics.world.bounds.width / 2, 400, 'multiplayer2');

    easy = this.add.image(this.physics.world.bounds.width / 2, 250, 'easy');
    medium = this.add.image(this.physics.world.bounds.width / 2, 325, 'medium');
    hard = this.add.image(this.physics.world.bounds.width / 2, 400, 'hard');
    restart = this.add.image(this.physics.world.bounds.width / 2, 420, 'restart');
    restart2 = this.add.image(this.physics.world.bounds.width / 2, 420, 'restart2');
    easy.setVisible(false);
    medium.setVisible(false);
    hard.setVisible(false);
    restart.setVisible(false);
    restart2.setVisible(false);

    player1wins = this.add.image(this.physics.world.bounds.width / 2, 320, 'player1wins');
    player2wins = this.add.image(this.physics.world.bounds.width / 2, 320, 'player2wins');
    player2wins.setVisible(false);
    player1wins.setVisible(false);


    score10 = this.add.image(600,
        this.physics.world.bounds.height / 4,
        '0');
    score20 = this.add.image(200,
        this.physics.world.bounds.height / 4,
        '0')
    score11 = this.add.image(600,
        this.physics.world.bounds.height / 4,
        '1');
    score21 = this.add.image(200,
        this.physics.world.bounds.height / 4,
        '1');
    score12 = this.add.image(600,
        this.physics.world.bounds.height / 4,
        '2');
    score22 = this.add.image(200,
        this.physics.world.bounds.height / 4,
        '2');
    score13 = this.add.image(600,
        this.physics.world.bounds.height / 4,
        '3');
    score23 = this.add.image(200,
        this.physics.world.bounds.height / 4,
        '3');
    score14 = this.add.image(600,
        this.physics.world.bounds.height / 4,
        '4');
    score24 = this.add.image(200,
        this.physics.world.bounds.height / 4,
        '4');
    score15 = this.add.image(600,
        this.physics.world.bounds.height / 4,
        '5');
    score25 = this.add.image(200,
        this.physics.world.bounds.height / 4,
        '5');
    score11.setVisible(false);
    score12.setVisible(false);
    score13.setVisible(false);
    score14.setVisible(false);
    score15.setVisible(false);

    score21.setVisible(false);
    score22.setVisible(false);
    score23.setVisible(false);
    score24.setVisible(false);
    score25.setVisible(false);
    var style = { font: "bold 16px Arial", fill: "#ef13ce", boundsAlignH: "center", boundsAlignV: "middle" };

    tabtostart = this.add.image(this.physics.world.bounds.width / 2, 450, 'tabtostart');
    tabtostart.setVisible(false);

    score10.setVisible(false);
    score20.setVisible(false);


    singleplayer2.setVisible(false);
    multiplayer2.setVisible(false);

    multiplayer.setInteractive();
    multiplayer.on('pointerover', ()=>{
        multiplayer2.setVisible(true);
    })
    multiplayer.setInteractive();
    multiplayer.on('pointerout', ()=>{
        multiplayer2.setVisible(false);
    })
    multiplayer.setInteractive();
    multiplayer.on('pointerup', ()=>{
        multiplayer2.setVisible(false);
        multiplayer.setVisible(false);
        singleplayer.setVisible(false);
        logo.setVisible(false);
        gamers = false;
        medium.setVisible(true);
        easy.setVisible(true);
        hard.setVisible(true);

    })
    singleplayer.setInteractive();
    singleplayer.on('pointerover', ()=>{
        singleplayer2.setVisible(true);
    })
    singleplayer.setInteractive();
    singleplayer.on('pointerout', ()=>{
        singleplayer2.setVisible(false);
    })
    singleplayer.setInteractive();
    singleplayer.on('pointerup', ()=>{
        singleplayer2.setVisible(false);
        multiplayer.setVisible(false);
        singleplayer.setVisible(false);
        logo.setVisible(false);
        gamers = true;
        medium.setVisible(true);
        easy.setVisible(true);
        hard.setVisible(true);

    })
    ball.setInteractive();
    easy.setInteractive();
    medium.setInteractive();
    hard.setInteractive();
    restart.setInteractive();

    restart.on('pointerover', ()=>{
        restart2.setVisible(true);
    })
    restart.setInteractive();
    restart.on('pointerout', ()=>{
        restart2.setVisible(false);
    })
    restart.on('pointerup', ()=>{
        player2wins.setVisible(false);
        player1wins.setVisible(false);
        restart.setVisible(false);
        ball.setVisible(true);
        scorePlayer1 = 0;
        scorePlayer2 = 0;
        score20.setVisible(true);
        score21.setVisible(false);
        score22.setVisible(false);
        score23.setVisible(false);
        score24.setVisible(false);
        score25.setVisible(false);

        score10.setVisible(true);
        score11.setVisible(false);
        score12.setVisible(false);
        score13.setVisible(false);
        score14.setVisible(false);
        score15.setVisible(false);


    })


    easy.on('pointerup', ()=>{
        difficulty = 1;
        player1.setVisible(true);
        player2.setVisible(true);

        ball.setVisible(true);
        tabtostart.setVisible(true);
        score10.setVisible(true);
        score20.setVisible(true);
        medium.setVisible(false);
        hard.setVisible(false);
        easy.setVisible(false);

    });
    medium.on('pointerup', ()=>{
        difficulty = 2;
        player1.setVisible(true);
        player2.setVisible(true);
        ball.setVisible(true);
        tabtostart.setVisible(true);
        score10.setVisible(true);
        score20.setVisible(true);
        medium.setVisible(false);
        hard.setVisible(false);
        easy.setVisible(false);

    });
    hard.on('pointerup', ()=>{
        difficulty = 3;
        player1.setVisible(true);
        player2.setVisible(true);
        ball.setVisible(true);
        tabtostart.setVisible(true);
        score10.setVisible(true);
        score20.setVisible(true);
        medium.setVisible(false);
        hard.setVisible(false);
        easy.setVisible(false);

    });






    cursors = this.input.keyboard.createCursorKeys();
    keys.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    keys.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    keys.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.physics.add.collider(ball, player1);
    this.physics.add.collider(ball, player2);








}

function update(){

    if (difficulty === 1){
        initalVelocityX = ((Math.random() -1) * 50) + 300;
        initalVelocityY = ((Math.random() -1) * 50) + 300;
    }
    if (difficulty === 2){
        initalVelocityX = ((Math.random() -1) * 50) + 400;
        initalVelocityY = ((Math.random() -1) * 50) + 400;
    }
    if (difficulty === 3){
        initalVelocityX = ((Math.random() -1) * 50) + 500;
        initalVelocityY = ((Math.random() -1) * 50) + 500;
    }

    if (keys.space.isDown && scorePlayer1 < 5 && scorePlayer2 < 5){
        isGameStarted = false;
    }
    ball.on('pointerup', ()=>{
        isGameStarted = false;
    })



    if(!isGameStarted){
        if (difficulty === 1){
            initalVelocityX = ((Math.random() -1) * 50) + 300;
            initalVelocityY = ((Math.random() -1) * 50) + 300;
        }
        if (difficulty === 2){
            initalVelocityX = ((Math.random() -1) * 50) + 400;
            initalVelocityY = ((Math.random() -1) * 50) + 400;
        }
        if (difficulty === 3){
            initalVelocityX = ((Math.random() -1) * 50) + 500;
            initalVelocityY = ((Math.random() -1) * 50) + 500;
        }
        ball.setVelocityX(initalVelocityX);
        ball.setVelocityY(initalVelocityY);
        isGameStarted = true;
        tabtostart.setVisible(false);


    }


    if (ball.body.x > player1.body.x){
        ball.setVelocityX(0);
        ball.setVelocityY(0);
        ball.x = 400;
        ball.y = 320;
        isGameStarted = true;
        scorePlayer2 += 1;
        if (scorePlayer2 === 1){
            score20.setVisible(false);
            score21.setVisible(true);
        }
        if (scorePlayer2 === 2){
            score21.setVisible(false);
            score22.setVisible(true);
        }
        if (scorePlayer2 === 3){
            score22.setVisible(false);
            score23.setVisible(true);
        }
        if (scorePlayer2 === 4){
            score23.setVisible(false);
            score24.setVisible(true);
        }
        if (scorePlayer2 === 5){
            score24.setVisible(false);
            score25.setVisible(true);
            player2wins.setVisible(true);
            restart.setVisible(true);
            ball.setVisible(false);
        }



    }
    if (ball.body.x < player2.x){
        ball.setVelocityX(0);
        ball.setVelocityY(0);
        ball.x = 400;
        ball.y = 320;
        isGameStarted = true;
        scorePlayer1 += 1;
        if(scorePlayer1 === 1){
            score10.setVisible(false);
            score11.setVisible(true);
        }
        if (scorePlayer1 === 2){
            score11.setVisible(false);
            score12.setVisible(true);
        }
        if (scorePlayer1 === 3){
            score12.setVisible(false);
            score13.setVisible(true);
        }
        if (scorePlayer1 === 4){
            score13.setVisible(false);
            score14.setVisible(true);
        }
        if (scorePlayer1 === 5){
            score14.setVisible(false);
            score15.setVisible(true);
            player2wins.setVisible(true);
            restart.setVisible(true);
            ball.setVisible(false);
        }



    }


    player1.body.setVelocityY(0);
    player2.body.setVelocityY(0);


    if(!this.input.activePointer.isDown && isClicking === true) {
        player1.setData("positionY", this.input.activePointer.position.y);
        isClicking = false;
    } else if(this.input.activePointer.isDown && isClicking === false) {
        isClicking = true;
    }

    if(Math.abs(player1.y - player1.getData("positionY")) <= 10) {
        player1.y = player1.getData("positionY");
    } else if(player1.y < player1.getData("positionY")) {
        player1.y += 15;
    } else if(player1.y > player1.getData("positionY")) {
        player1.y -= 15;
    }





    /*if (cursors.up.isDown){
        player1.body.setVelocityY(-paddleSpeed);
    }
    if (cursors.down.isDown){
        player1.body.setVelocityY(paddleSpeed);
    }*/



    if (gamers === false){
        if (keys.s.isDown){
            player2.body.setVelocityY(paddleSpeed);
        }
        if (keys.w.isDown){
            player2.body.setVelocityY(-paddleSpeed);
        }
    }
    if (gamers === true){
        if  (ball.y > 480 ){
            player2.body.setVelocityY(paddleSpeed);
        }
        if (ball.y < 480 && ball.y > 320 && player2.y > 480){
            player2.body.setVelocityY(-paddleSpeed -70);
        }
        if (ball.y < 480 && ball.y > 320 && player2.y < 320){
            player2.body.setVelocityY(paddleSpeed + 70);
        }
        if (ball.y < 320 && ball.y > 160 && player2.y > 320){
            player2.body.setVelocityY(-paddleSpeed -70);
        }
        if (ball.y < 320 && ball.y > 160 && player2.y < 160){
            player2.body.setVelocityY(paddleSpeed + 70);
        }
        if (ball.y < 160) {
            player2.body.setVelocityY(-paddleSpeed - 70);
        }

    }


    if (ball.body.velocity.y > paddleSpeed) {
        ball.body.setVelocityY(paddleSpeed);
    }
    if (ball.body.velocity.y < -paddleSpeed) {
        ball.body.setVelocityY(-paddleSpeed);
    }

}