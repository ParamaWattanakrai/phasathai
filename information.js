console.log('nice')
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

const toggleBlocks = document.querySelectorAll('.toggle-block');

const toggleInformation = (element, character) => {
    let information = INFORMATION_DICT[character]
    console.log(information)

    Object.keys(information).forEach((key) => {
        let element = document.querySelector('.info-' + key);
        let toBeInserted = information[key]
        if (Array.isArray(toBeInserted)) {
            toBeInserted = '(' + toBeInserted.length + ') ' + toBeInserted.join(' ')
            console.log(toBeInserted)
        }
        element.innerHTML = toBeInserted
    })
}

Object.keys(INFORMATION_DICT).forEach((key) => {
    let elements = document.querySelectorAll(key);
    console.log(elements)
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