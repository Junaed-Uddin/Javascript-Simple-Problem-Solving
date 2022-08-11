/* Suppose you want to build an n-th floor building and each floor requires 1000 bricks, but each floor has a different height ratio.
Height of first 1 -10 floors = 15 feet
Height of 11-20 floors = 12 feet
And height of remaining floor = 10 feet
Now calculate how many bricks are needed to complete the buildings.*/

function brickCalculator(floors) {
    const perFloorBricks = 1000;
    const first10FloorsHeight = 15;
    const sec10FloorsHeight = 12;
    const remainingFloorsHeight = 10;

    if (floors <= 0) {
        return 'Floor Number should be greater than 0';
    }
    else if (typeof floors != 'number') {
        return 'Please Input the number';
    }
    else {
        if (floors <= 10) {
            let amountBricks = first10FloorsHeight * floors * perFloorBricks;
            return amountBricks;
        }
        else if (floors <= 20) {
            let first10FloorBricks = first10FloorsHeight * 10 * perFloorBricks;
            let remainingFloorBricks = sec10FloorsHeight * (floors - 10) * perFloorBricks;
            let totalBricks = first10FloorBricks + remainingFloorBricks;
            return totalBricks;
        }
        else {
            let first10FloorBricks = first10FloorsHeight * 10 * perFloorBricks;
            let sec10FloorBricks = sec10FloorsHeight * 10 * perFloorBricks;
            let remainingFloorBricks = remainingFloorsHeight * (floors - 20) * perFloorBricks;
            let totalBricks = first10FloorBricks + sec10FloorBricks + remainingFloorBricks;
            return totalBricks;
        }
    }
}

let bricksAmount = brickCalculator('-50');
console.log(bricksAmount);
