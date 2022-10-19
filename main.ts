input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let azul = game.createSprite(0, 2)
let villano1 = game.createSprite(randint(1, 4), randint(0, 4))
let villano2 = game.createSprite(randint(1, 4), randint(0, 4))
let Villano3 = game.createSprite(randint(1, 4), randint(0, 4))
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        azul.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    while (input.logoIsPressed()) {
        azul.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.A)) {
        azul.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.B)) {
        azul.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    if (azul.isTouching(villano1)) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.OnceInBackground)
        villano1.delete()
        game.addScore(1)
    } else if (azul.isTouching(villano2)) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.OnceInBackground)
        villano2.delete()
        game.addScore(1)
    } else if (azul.isTouching(Villano3)) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.OnceInBackground)
        Villano3.delete()
        game.addScore(1)
    }
    if (game.score() == 3) {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
        }
        game.gameOver()
    }
})
loops.everyInterval(3000, function () {
    villano1.change(LedSpriteProperty.X, randint(1, 4))
    villano1.change(LedSpriteProperty.Y, randint(0, 4))
    villano2.change(LedSpriteProperty.X, randint(1, 4))
    villano2.change(LedSpriteProperty.Y, randint(0, 4))
    Villano3.change(LedSpriteProperty.X, randint(1, 4))
    Villano3.change(LedSpriteProperty.Y, randint(0, 4))
})
