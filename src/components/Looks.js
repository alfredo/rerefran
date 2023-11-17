export const lookList = [
    ["D988B9", "FFE4D6"],
    ["9EB384", "FAF1E4"],
    ["FF52A2", "FFECAF"],
    ["7C73C0", "ACFADF"],
    ["FAAB78", "E8F3D6"],
    ["D61C4E", "FFF80A"],
    ["AC8DAF", "F1D4D4"],
    ["9F609C", "F8F1E5"],
    ["EA2BA2", "F6CA97"],
    ["616EEF", "D0F1CF"],
];
// ["", ""],
export const getLook = (element) => {
    let look = lookList[Math.floor(Math.random() * lookList.length)];
    console.log(look)
    return {
        backgroundImage: "linear-gradient(180deg, #" + look[0] + ", #" + look[1] + ")"
    }
};
