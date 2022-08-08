export default function formatLinkDestinationName(name) {
    const nameWords = name.split('-');
    
    for (let index = 0; index < nameWords.length; index++) {
        nameWords[index] = toUpperFirstLetter(nameWords[index]);
    }

    const formattedName = nameWords.join(' ');

    return formattedName;
}

const toUpperFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);