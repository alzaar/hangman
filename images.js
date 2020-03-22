class Image {
    constructor() {}
    viewStartImage() {
        console.log(`

            __/===|===\__
                  |
                  |
             !! START !!
        `)
    }

    viewFirstMistake() {
        console.log(`
            SORRY TRY AGAIN
            __/===|===\__
                  |
                  |
                  O
        `)
    }

    viewSecondMistake() {
        console.log(`
            SORRY TRY AGAIN!! 
            __/===|===\__
                  |
                  |
                  O
                  |
        `)
    }

    viewThirdMistake() {
        console.log(`
            SORRY TRY AGAIN!!
            __/===|===\__
                  |
                  |
                  O
                  |\
        `)
    }

    viewForthMistake() {
        console.log(`
            SORRY TRY AGAIN!!
            __/===|===\__
                  |
                  |
                  O
                 /|\
        `)
    }

    viewFifthMistake() {
        console.log(`
           SORRY TRY AGAIN!!
            __/===|===\__
                  |
                  |
                  O
                 /|\
                 /
        `)
    }

    viewSixthMistake() {
        console.log(`
    SORRY YOU ARE OUT OF CHANCES!!
            __/===|===\__
                  |
                  |
                  O
                 /|\
                 / \
        `)
    }
}

module.exports = Image