namespace SpriteKind {
    export const picture = SpriteKind.create()
    export const Map = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let Mario = sprites.create(img`
. . . . . 2 2 2 2 2 . . . . . . 
. . . . 2 2 2 2 2 2 2 2 2 . . . 
. . . . e e e 4 4 f 4 . . . . . 
. . . e 4 e 4 4 4 f 4 4 . . . . 
. . . e 4 e e 4 4 4 e 4 4 4 . . 
. . . e e 4 4 4 4 e e e e . . . 
. . . . . 4 4 4 4 4 4 4 . . . . 
. . . . 2 2 8 2 2 2 . . . . . . 
. . . 2 2 2 8 2 2 8 2 2 2 . . . 
. . 2 2 2 2 8 8 8 8 2 2 2 2 . . 
. . 4 4 2 8 5 8 8 5 8 2 4 4 . . 
. . 4 4 4 8 8 8 8 8 8 4 4 4 . . 
. . 4 4 8 8 8 8 8 8 8 8 4 4 . . 
. . . . 8 8 8 . . 8 8 8 . . . . 
. . . e e e . . . . e e e . . . 
. . e e e e . . . . e e e e . . 
`, SpriteKind.Player)
let Peach = sprites.create(img`
. . . . . 4 . 4 4 . 4 . . . . . . . . . . . . . . 
. . . . . 4 4 4 4 4 4 . . . . . . . . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . 
. . . . 5 5 5 d d d 5 5 5 5 . . . . . . . . . . . 
. . . . . 5 d d f d d 5 d 5 . . . . . . . . . . . 
. . . . d d d d d d d d d 5 5 . . . . . . . . . . 
. . . . . d d d d d d d d 5 5 . . . . . . . . . . 
. . . . . d 2 2 d d d 5 5 5 5 5 . . . . . . . . . 
. . . . . . d d d d d 5 3 5 5 5 . . . . . . . . . 
. . . . . . 5 5 3 d 3 3 3 3 5 5 5 . . . . . . . . 
. . . . . . 5 3 d d 3 d d 3 5 5 5 . . . . . . . . 
. . . . . . d 3 3 3 3 d d 5 5 5 . . . . . . . . . 
. . . . d d d d d d d d 3 5 5 . . . . . . . . . . 
. . . . . d d d d d d d 3 5 5 . . . . . . . . . . 
. . . . . . . 5 5 3 3 3 3 3 3 3 . . . . . . . . . 
. . . . . . 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . 
. . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . 
. . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . 
. . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . 
`, SpriteKind.picture)
Peach.setPosition(999, 999)
let World_list = [sprites.create(img`
4 d d d d d d d d f 4 d d d d 4 
d 4 4 4 4 4 4 4 4 f d 4 4 4 4 f 
d 4 4 4 4 4 4 4 4 f d 4 4 4 4 f 
d 4 4 4 4 4 4 4 4 f d 4 4 4 4 f 
d 4 4 4 4 4 4 4 4 f d f 4 4 4 f 
d 4 4 4 4 4 4 4 4 f 4 f f f f 4 
d 4 4 4 4 4 4 4 4 f d d d d d f 
d 4 4 4 4 4 4 4 4 f d 4 4 4 4 f 
d 4 4 4 4 4 4 4 4 f d 4 4 4 4 f 
d 4 4 4 4 4 4 4 4 f d 4 4 4 4 f 
d f 4 4 4 4 4 4 f d 4 4 4 4 4 f 
d d f f 4 4 4 4 f d 4 4 4 4 4 f 
d 4 d d f f f f d 4 4 4 4 4 4 f 
d 4 4 4 d d d f d 4 4 4 4 4 4 f 
d 4 4 4 4 4 4 f d 4 4 4 4 4 f f 
4 f f f f f f 4 d f f f f f f 4 
`, SpriteKind.Map), 2, 0, 0]
forever(function () {
	
})
