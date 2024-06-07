function ninteynineBottles() {
    const lyricsPrint = document.getElementById('lyrics');
    let lyrics = '';

    for (let bottleCount = 99; bottleCount >= 1; bottleCount--) {
        if (bottleCount === 1) {
            lyrics += `${bottleCount} bottle of beer on the wall, ${bottleCount} bottle of beer.\n`;
            lyrics += `Take one down and pass it around, no more bottles of beer on the wall.\n\n`;
            console.log("Last bootle of beer on the wall is taken down!");
        } else {
            lyrics += `${bottleCount} bottles of beer on the wall, ${bottleCount} bottles of beer.\n`;
            lyrics += `Take one down and pass it around, ${bottleCount - 1} ${bottleCount - 1 === 1 ? 'bottle' : 'bottles'} of beer on the wall.\n\n`;
            console.log(`1 beer is passed around! Current bottles of beer on the wall: ${bottleCount}`)
        }
    }

    lyrics += "No more bottles of beer on the wall, no more bottles of beer.\n";
    lyrics += "Go to the store and buy some more, 99 bottles of beer on the wall.";

    console.log("No more bottles of beer on the wall, no more bottles of beer.\n");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");

    lyricsPrint.innerText = lyrics;
}