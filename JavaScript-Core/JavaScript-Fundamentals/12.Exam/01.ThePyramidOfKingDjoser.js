function thePyramidofKingDjoser(base, increment) {

  let stone = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let finalPyramidHeight = 1;

  while (base > 2) {
    let bulk = (base - 2) ** 2;
    let decoration = (base * 4) - 4;
    stone += bulk * increment;
    if (finalPyramidHeight % 5 === 0) {
        lapisLazuli += decoration * increment;
    } else {
        marble += decoration * increment;
    }
    finalPyramidHeight++;
    base -= 2;
  }
  gold = (base ** 2) * increment;


  console.log(`Stone required: ${Math.ceil(stone)}`)
  console.log(`Marble required: ${Math.ceil(marble)}`)
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`)
  console.log(`Gold required: ${Math.ceil(gold)}`)
  console.log(`Final pyramid height: ${Math.floor((finalPyramidHeight)  * increment)}`)
}

thePyramidofKingDjoser(11, 1)
thePyramidofKingDjoser(11, 0.75)
thePyramidofKingDjoser(12, 1)
thePyramidofKingDjoser(23, 0.5)