const NUMERAL_DICT = {
    '0': '๐',
    '1': '๑',
    '2': '๒',
    '3': '๓',
    '4': '๔',
    '5': '๕',
    '6': '๖',
    '7': '๗',
    '8': '๘',
    '9': '๙',
}
const INFORMATION_DICT = {
    '.ko-kai': {
        'name': 'กอ ไก่',
        'consonant-order': '๑',
        'consonant-class': 'กลาง',
        'protocol': 'แม่ กก',

        'ipa': 'k',
        'phonology': 'กักเพดานอ่อนอโฆษะสิถิล',

        'extra-info': 'กอ ไก่ เป็นอักษรตัวแรกของภาษาไทย เมื่อเติมไม้ไต่คู้ (◌็) โดยไม่มีสระแล้ว จะได้คำว่า "ก็" ซึ่งไม่ได้สะกดตามอักขรวิธี',
        'identical': [],
        'identical-initial-sound': [],
        'identical-protocol': ['ก', 'ข', 'ค', 'ฆ'],
        'identical-class': ['ก', 'จ', 'ฎ', 'ฏ', 'ด', 'ต', 'บ', 'ป', 'อ'],
    },
}

const convertNumeral = (arabicNumbers) => {
    let thaiNumbers = ''
    if (arabicNumbers.length == 1) {
        return NUMERAL_DICT[arabicNumbers]
    }
    arabicNumbers.forEach((arabicNumber) => {
        thaiNumbers += NUMERAL_DICT[arabicNumber]
    })
    return thaiNumbers
}

const toggleBlocks = document.querySelectorAll('.toggle-block');

const toggleInformation = (element, character) => {
    let information = INFORMATION_DICT[character]
    console.log(information)

    Object.keys(information).forEach((key) => {
        let element = document.querySelector('.info-' + key);
        let toBeInserted = information[key]
        if (Array.isArray(toBeInserted)) {
            toBeInserted = '(' + convertNumeral(toBeInserted.length.toString()) + ') ' + toBeInserted.join(' ')
        }
        element.innerHTML = toBeInserted
    })
}

Object.keys(INFORMATION_DICT).forEach((key) => {
    let elements = document.querySelectorAll(key);
    elements.forEach((element) => {
        element.addEventListener('click', () => {
            toggleInformation(element, key)
        })
    })
});

toggleBlocks.forEach(section => {
    const toggleTrigger = section.querySelector('.toggle-trigger');
    const toggleAffected = section.querySelector('.toggle-affected');
    
    toggleTrigger.addEventListener('click', () => {
        toggleAffected.classList.toggle('show');
    });
});