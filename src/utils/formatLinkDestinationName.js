import toUpperFirstLetter from "./toUpperFirstLetter";

export default function formatLinkDestinationName(name) {
    const nameWords = name.split('-');
    
    for (let index = 0; index < nameWords.length; index++) {
        nameWords[index] = toUpperFirstLetter(nameWords[index]);
    }

    const formattedName = nameWords.join(' ');

    return formattedName;
}
