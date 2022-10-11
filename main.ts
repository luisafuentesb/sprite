input.onButtonPressed(Button.A, function () {
    paco.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    paco.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    paco.change(LedSpriteProperty.X, 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    paco.change(LedSpriteProperty.Y, -1)
})
let paco: game.LedSprite = null
paco = game.createSprite(0, 2)
let villano = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        paco.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.A)) {
        paco.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.B)) {
        paco.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    while (input.logoIsPressed()) {
        paco.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    while (paco.isTouching(villano)) {
        basic.showIcon(IconNames.Yes)
        game.gameOver()
        music.playMelody("- - - - - - - - ", 120)
    }
})
