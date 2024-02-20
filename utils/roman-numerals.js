export default function indexToRoman(index) {
    const romanNumerals = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x'];

    if (index >= 0 && index < romanNumerals.length) {
        return romanNumerals[index];
    } else {
        console.error('Index out of range')
        return "";
    }
}