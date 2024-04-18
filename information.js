const INFORMATION_DICT = {
    '.ko-kai': {
        'name': 'กอ ไก่',
        'consonant-order': '๑',
        'consonant-class': 'กลาง',
        'protocol': 'แม่ กก',
        'row': 'กะ',
        'column': '๑',

        'initial-ipa': 'k',
        'initial-phonology': 'กัก เพดานอ่อน อโฆษะ',
        'final-ipa': 'k̚',
        'final-phonology': 'กัก เพดานอ่อน อโฆษะ ปล่อยโดยไร้เสียง',

        'extra-info': 'กอ ไก่ เป็นอักษรตัวแรกของภาษาไทย เมื่อเติมไม้ไต่คู้ (◌็) โดยไม่มีสระแล้ว จะได้คำว่า "ก็" ซึ่งไม่ได้สะกดตามอักขรวิธี',
        'exactly-identical': [],
        'same-cell': [],
        'identical-initial-sound': [],
        'same-protocol': ['ข', 'ค', 'ฆ'],
        'same-class': ['ก', 'จ', 'ฎ', 'ฏ', 'ด', 'ต', 'บ', 'ป', 'อ'],
    },
    '.kho-khai': {
        'name': 'ขอ ไข่',
        'consonant-order': '๒',
        'consonant-class': 'สูง',
        'protocol': 'แม่ กก',
        'row': 'กะ',
        'column': '๒',

        'initial-ipa': 'kʰ',
        'initial-phonology': 'กัก เพดานอ่อน อโฆษะ ธนิต',
        'final-ipa': 'k̚',
        'final-phonology': 'กัก เพดานอ่อน อโฆษะ ปล่อยโดยไร้เสียง',

        'extra-info': '',
        'exactly-identical': ['ฃ'],
        'same-cell': ['ฃ'],
        'identical-initial-sound': ['ฃ', 'ค', 'ฅ', 'ฆ'],
        'same-protocol': ['ก', 'ค', 'ฆ'],
        'same-class': ['ข', 'ฃ', 'ฉ', 'ถ', 'ผ', 'ฝ', 'ศ', 'ษ', 'ส', 'ห'],
    },
    '.kho-khuat': {
        'name': 'ฃอ ขวด',
        'consonant-order': '๓',
        'consonant-class': 'สูง',
        'protocol': '(ไม่ใช้เป็นตัวสะกด)',
        'row': 'กะ',
        'column': '๒',

        'initial-ipa': 'kʰ',
        'initial-phonology': 'กัก เพดานอ่อน อโฆษะ ธนิต',
        'final-ipa': '(ไม่ใช้เป็นตัวสะกด)',
        'final-phonology': '(ไม่ใช้เป็นตัวสะกด)',

        'extra-info': '',
        'exactly-identical': ['ข'],
        'same-cell': ['ข'],
        'identical-initial-sound': ['ข', 'ค', 'ฅ', 'ฆ'],
        'same-protocol': [],
        'same-class': ['ข', 'ฃ', 'ฉ', 'ถ', 'ผ', 'ฝ', 'ศ', 'ษ', 'ส', 'ห'],
    },
    '.kho-khway': {
        'name': 'คอ ควาย',
        'consonant-order': '๔',
        'consonant-class': 'ต่ำ',
        'protocol': 'แม่ กก',
        'row': 'กะ',
        'column': '๓',

        'initial-ipa': 'kʰ',
        'initial-phonology': 'กัก เพดานอ่อน อโฆษะ ธนิต',
        'final-ipa': 'k̚',
        'final-phonology': 'กัก เพดานอ่อน อโฆษะ ปล่อยโดยไร้เสียง',

        'extra-info': '',
        'exactly-identical': ['ฅ', 'ฆ'],
        'same-cell': ['ฅ'],
        'identical-initial-sound': ['ข', 'ฃ', 'ฅ', 'ฆ'],
        'same-protocol': ['ก', 'ข', 'ฆ'],
        'same-class': ['ค', 'ฅ', 'ฆ', 'ง', 'ช', 'ซ', 'ฌ', 'ญ', 'ฑ', 'ฒ', 'ณ', 'ท', 'ธ', 'น', 'พ', 'ฟ', 'ภ', 'ม', 'ย', 'ร', 'ล', 'ว', 'ฬ', 'ฮ'],
    },
    '.kho-khohn': {
        'name': 'ฅอ คน',
        'consonant-order': '๕',
        'consonant-class': 'ต่ำ',
        'protocol': '(ไม่ใช้เป็นตัวสะกด)',
        'row': 'กะ',
        'column': '๓',

        'initial-ipa': 'kʰ',
        'initial-phonology': 'กัก เพดานอ่อน อโฆษะ ธนิต',
        'final-ipa': '(ไม่ใช้เป็นตัวสะกด)',
        'final-phonology': '(ไม่ใช้เป็นตัวสะกด)',

        'extra-info': '',
        'exactly-identical': ['ค', 'ฆ'],
        'same-cell': ['ค'],
        'identical-initial-sound': ['ข', 'ฃ', 'ค', 'ฆ'],
        'same-protocol': [],
        'same-class': ['ค', 'ฅ', 'ฆ', 'ง', 'ช', 'ซ', 'ฌ', 'ญ', 'ฑ', 'ฒ', 'ณ', 'ท', 'ธ', 'น', 'พ', 'ฟ', 'ภ', 'ม', 'ย', 'ร', 'ล', 'ว', 'ฬ', 'ฮ'],
    },
    '.kho-rakhang': {
        'name': 'ฆอ ระฆัง',
        'consonant-order': '๖',
        'consonant-class': 'ต่ำ',
        'protocol': 'แม่ กก',
        'row': 'กะ',
        'column': '๔',

        'initial-ipa': 'kʰ',
        'initial-phonology': 'กัก เพดานอ่อน อโฆษะ ธนิต',
        'final-ipa': 'k̚',
        'final-phonology': 'กัก เพดานอ่อน อโฆษะ ปล่อยโดยไร้เสียง',

        'extra-info': '',
        'exactly-identical': ['ฅ', 'ฆ'],
        'same-cell': ['ฅ'],
        'identical-initial-sound': ['ข', 'ฃ', 'ค', 'ฅ'],
        'same-protocol': ['ก', 'ข', 'ค'],
        'same-class': ['ค', 'ฅ', 'ฆ', 'ง', 'ช', 'ซ', 'ฌ', 'ญ', 'ฑ', 'ฒ', 'ณ', 'ท', 'ธ', 'น', 'พ', 'ฟ', 'ภ', 'ม', 'ย', 'ร', 'ล', 'ว', 'ฬ', 'ฮ'],
    },
    '.ngo-ngu': {
        'name': 'งอ งู',
        'consonant-order': '๗',
        'consonant-class': 'ต่ำ',
        'protocol': 'แม่ กง',
        'row': 'กะ',
        'column': '๕',

        'initial-ipa': 'ŋ',
        'initial-phonology': 'นาสิก เพดานอ่อน โฆษะ',
        'final-ipa': 'ŋ',
        'final-phonology': 'นาสิก เพดานอ่อน โฆษะ',

        'extra-info': '',
        'exactly-identical': [],
        'same-cell': [],
        'identical-initial-sound': [],
        'same-protocol': [],
        'same-class': ['ค', 'ฅ', 'ฆ', 'ง', 'ช', 'ซ', 'ฌ', 'ญ', 'ฑ', 'ฒ', 'ณ', 'ท', 'ธ', 'น', 'พ', 'ฟ', 'ภ', 'ม', 'ย', 'ร', 'ล', 'ว', 'ฬ', 'ฮ'],
    },

    '.co-can': {
        'name': 'จอ จาน',
        'consonant-order': '๘',
        'consonant-class': 'กลาง',
        'protocol': 'แม่ กด',
        'row': 'จะ',
        'column': '๑',

        'initial-ipa': 'tɕ',
        'initial-phonology': 'กักเสียดแทรก เพดานแข็ง อโฆษะ',
        'final-ipa': 't̚',
        'final-phonology': 'กัก เพดานแข็ง อโฆษะ ปล่อยโดยไร้เสียง',

        'extra-info': '',
        'exactly-identical': [],
        'same-cell': [],
        'identical-initial-sound': [],
        'same-protocol': ['จ', 'ช', 'ซ', 'ฎ', 'ฏ', 'ฐ', 'ฑ', 'ฒ', 'ด', 'ต', 'ถ', 'ท', 'ธ', 'ศ', 'ษ', 'ส'],
        'same-class': ['ก', 'จ', 'ฎ', 'ฏ', 'ด', 'ต', 'บ', 'ป', 'อ'],
    }
}

const convertNumeral = (number) => {
    const thaiNumerals = ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'];
    const arabicNumerals = number.toString().split('').map(Number);
    let thaiNumeral = '';

    arabicNumerals.forEach(digit => {
        if (digit >= 0 && digit <= 9) {
            thaiNumeral += thaiNumerals[digit];
        } else {
            thaiNumeral += digit;
        }
    });

    return thaiNumeral;
}

const toggleBlocks = document.querySelectorAll('.toggle-block');

const changeInformation = (character) => {
    let information = INFORMATION_DICT[character]
    console.log(information)

    Object.keys(information).forEach((key) => {
        let element = document.querySelector('.info-' + key);
        let toBeInserted = information[key]
        if (Array.isArray(toBeInserted)) {
            toBeInserted = '(' + convertNumeral(toBeInserted.length) + ') ' + toBeInserted.join(', ')
        }
        element.innerHTML = toBeInserted
    })
}

Object.keys(INFORMATION_DICT).forEach((key) => {
    let elements = document.querySelectorAll(key);
    elements.forEach((element) => {
        element.addEventListener('click', () => {
            changeInformation(key)
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