const HIGHLIGHT_DICT = {
    '.phonology-trigger': ['.phonology'], 
    '.manner-of-articulation-trigger': ['.manner-of-articulation'], 
    '.unaspirated-plosive-trigger': ['.unaspirated-plosive'], 
    '.aspirated-plosive-fricative-trigger': ['.aspirated-plosive-fricative'], 
    '.nasal-trigger': ['.nasal'],
    '.articulator-trigger': ['.articulator'], 
    '.velar-trigger': ['.velar'], 
    '.palatal-trigger': ['.palatal'], 
    '.alveolar-trigger': ['.alveolar'], 
    '.labial-trigger': ['.labial'],

    '.column-trigger': ['.column'], 
    '.first-column-trigger': ['.first-column'], 
    '.second-column-trigger': ['.second-column'], 
    '.third-column-trigger': ['.third-column'], 
    '.forth-column-trigger': ['.forth-column'], 
    '.fifth-column-trigger': ['.fifth-column'],

    '.row-trigger': ['.row'], 
    '.ka-row-trigger': ['.ka-row'], 
    '.ca-row-trigger': ['.ca-row'], 
    '.big-ta-row-trigger': ['.big-ta-row'], 
    '.small-ta-row-trigger': ['.small-ta-row'], 
    '.pa-row-trigger': ['.pa-row'],
    
    '.consonant-class-trigger': ['.consonant-class'], 
    '.mid-consonant-trigger': ['.mid-consonant'], 
    '.high-consonant-trigger': ['.high-consonant'], 
    '.low-consonant-trigger': ['.low-consonant'], 
    '.paired-low-consonant-trigger': ['.paired-low-consonant'], 
    '.unpaired-low-consonant-trigger': ['.unpaired-low-consonant'],

    '.trill-approximant-trigger': ['.trill-approximant'], 
    '.fricative-trigger': ['.fricative'], 
    '.alveolar-lateral-approximant-trigger': ['.alveolar-lateral-approximant'], 
    '.glottal-stop-trigger': ['.glottal-stop'],  
    '.glottal-fricative-trigger': ['.glottal-fricative'],

    '.extra-row-trigger': ['.extra-row'],

    '.ko-kai': ['.k', '.mid-consonant-trigger', '.unaspirated-plosive-trigger', '.velar-trigger', '.first-column-trigger', '.ka-row-trigger'],
    '.kho-khai': ['.kh', '.high-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.velar-trigger', '.second-column-trigger', '.ka-row-trigger'],
    '.kho-khuat': ['.kh', '.high-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.velar-trigger', '.second-column-trigger', '.ka-row-trigger'],
    '.kho-khway': ['.kh', '.low-consonant-trigger', '.paired-low-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.velar-trigger', '.third-column-trigger', '.ka-row-trigger'],
    '.kho-khohn': ['.kh', '.low-consonant-trigger', '.paired-low-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.velar-trigger', '.third-column-trigger', '.ka-row-trigger'],
    '.kho-rakhang': ['.kh', '.low-consonant-trigger', '.paired-low-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.velar-trigger', '.forth-column-trigger', '.ka-row-trigger'],
    '.ngo-ngu': ['.ng', '.low-consonant-trigger', '.unpaired-low-consonant-trigger', '.nasal-trigger', '.velar-trigger', '.fifth-column-trigger', '.ka-row-trigger'],

    '.co-can': ['.c', '.mid-consonant-trigger', '.unaspirated-plosive-trigger', '.fricative-trigger', '.palatal-trigger', '.first-column-trigger', '.ca-row-trigger'],
    '.cho-ching': ['.ch', '.high-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.fricative-trigger', '.palatal-trigger', '.second-column-trigger', '.ca-row-trigger'],
    '.cho-chang': ['.ch', '.low-consonant-trigger', '.paired-low-consonant-trigger', '.fricative-trigger', '.aspirated-plosive-fricative-trigger', '.palatal-trigger', '.third-column-trigger', '.ca-row-trigger'],
    '.so-soh': ['.s', '.low-consonant-trigger', '.paired-low-consonant-trigger', '.fricative-trigger', '.aspirated-plosive-fricative-trigger', '.palatal-trigger', '.third-column-trigger', '.ca-row-trigger'],
    '.cho-choe': ['.ch', '.low-consonant-trigger', '.paired-low-consonant-trigger', '.fricative-trigger', '.aspirated-plosive-fricative-trigger', '.palatal-trigger', '.forth-column-trigger', '.ca-row-trigger'],
    '.yo-ying': ['.y', '.low-consonant-trigger', '.unpaired-low-consonant-trigger', '.nasal-trigger', '.palatal-trigger', '.fifth-column-trigger', '.ca-row-trigger'],

    '.do-chada': ['.d', '.mid-consonant-trigger', '.unaspirated-plosive-trigger', '.alveolar-trigger', '.first-column-trigger', '.big-ta-row-trigger'],
    '.to-patak': ['.t', '.mid-consonant-trigger', '.unaspirated-plosive-trigger', '.alveolar-trigger', '.first-column-trigger', '.big-ta-row-trigger'],
    '.tho-than': ['.th', '.high-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.alveolar-trigger', '.second-column-trigger', '.big-ta-row-trigger'],
    '.tho-mohnthoh': ['.th', '.d', '.low-consonant-trigger', '.paired-low-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.alveolar-trigger', '.third-column-trigger', '.big-ta-row-trigger'],
    '.tho-phuthao': ['.th', '.low-consonant-trigger', '.paired-low-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.alveolar-trigger', '.forth-column-trigger', '.big-ta-row-trigger'],
    '.no-nen': ['.n', '.low-consonant-trigger', '.unpaired-low-consonant-trigger', '.nasal-trigger', '.alveolar-trigger', '.fifth-column-trigger', '.big-ta-row-trigger'],

    '.do-dek': ['.d', '.mid-consonant-trigger', '.unaspirated-plosive-trigger', '.alveolar-trigger', '.first-column-trigger', '.small-ta-row-trigger'],
    '.to-tao': ['.t', '.mid-consonant-trigger', '.unaspirated-plosive-trigger', '.alveolar-trigger', '.first-column-trigger', '.small-ta-row-trigger'],
    '.tho-thung': ['.th', '.high-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.alveolar-trigger', '.second-column-trigger', '.small-ta-row-trigger'],
    '.tho-thahan': ['.th', '.low-consonant-trigger', '.paired-low-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.alveolar-trigger', '.third-column-trigger', '.small-ta-row-trigger'],
    '.tho-thohng': ['.th', '.low-consonant-trigger', '.paired-low-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.alveolar-trigger', '.forth-column-trigger', '.small-ta-row-trigger'],
    '.no-nu': ['.n', '.low-consonant-trigger', '.unpaired-low-consonant-trigger', '.nasal-trigger', '.alveolar-trigger', '.fifth-column-trigger', '.small-ta-row-trigger'],

    '.bo-baimai': ['.b', '.mid-consonant-trigger', '.unaspirated-plosive-trigger', '.labial-trigger', '.first-column-trigger', '.pa-row-trigger'],
    '.po-pla': ['.b', '.mid-consonant-trigger', '.unaspirated-plosive-trigger', '.labial-trigger', '.first-column-trigger', '.pa-row-trigger'],
    '.pho-phueng': ['.ph', '.high-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.labial-trigger', '.second-column-trigger', '.pa-row-trigger'],
    '.fo-fa': ['.f', '.high-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.labial-trigger', '.second-column-trigger', '.pa-row-trigger'],
    '.pho-phan': ['.ph', '.low-consonant-trigger', '.paired-low-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.labial-trigger', '.third-column-trigger', '.pa-row-trigger'],
    '.fo-fan': ['.f', '.low-consonant-trigger', '.paired-low-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.labial-trigger', '.third-column-trigger', '.pa-row-trigger'],
    '.pho-samphao': ['.ph', '.low-consonant-trigger', '.paired-low-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.labial-trigger', '.forth-column-trigger', '.pa-row-trigger'],
    '.mo-ma': ['.m', '.low-consonant-trigger', '.unpaired-low-consonant-trigger', '.nasal-trigger', '.labial-trigger', '.fifth-column-trigger', '.pa-row-trigger'],

    '.yo-yak': ['.y', '.low-consonant-trigger', '.unpaired-low-consonant-trigger', '.trill-approximant-trigger', '.palatal-trigger', '.extra-row-trigger'],
    '.ro-ruea': ['.r', '.low-consonant-trigger', '.unpaired-low-consonant-trigger', '.trill-approximant-trigger', '.alveolar-trigger', '.extra-row-trigger'],
    '.lo-ling': ['.l', '.low-consonant-trigger', '.unpaired-low-consonant-trigger', '.trill-approximant-trigger', '.alveolar-lateral-approximant-trigger', '.alveolar-trigger', '.extra-row-trigger'],
    '.wo-waen': ['.w', '.low-consonant-trigger', '.unpaired-low-consonant-trigger', '.trill-approximant-trigger', '.labial-trigger', '.extra-row-trigger'],
    '.so-sala': ['.s', '.high-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.fricative-trigger', '.alveolar-trigger', '.extra-row-trigger'],
    '.so-ruesi': ['.s', '.high-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.fricative-trigger', '.alveolar-trigger', '.extra-row-trigger'],
    '.so-suea': ['.s', '.high-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.fricative-trigger', '.alveolar-trigger', '.extra-row-trigger'],
    '.ho-hip': ['.h', '.high-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.fricative-trigger', '.glottal-fricative-trigger', '.extra-row-trigger'],
    '.lo-cula': ['.l', '.low-consonant-trigger', '.unpaired-low-consonant-trigger', '.trill-approximant-trigger', '.alveolar-lateral-approximant-trigger', '.alveolar-trigger', '.extra-row-trigger'],
    '.o-ang': ['.o', '.mid-consonant-trigger', '.fricative-trigger', '.glottal-stop-trigger', '.extra-row-trigger'],
    '.ho-nohkhuk': ['.h', '.low-consonant-trigger', '.aspirated-plosive-fricative-trigger', '.unpaired-low-consonant-trigger', '.fricative-trigger', '.glottal-fricative-trigger', '.extra-row-trigger'],
};

const CONSONANT_SOUNDS_LIST = ['k','kh','ng','c','ch','y','d','t','th','n','b','p','ph','f','m','r','l','w','s','h','o']

const CONSONANTS = document.querySelectorAll('.consonant')

function haveCommonElements(arr1, arr2){
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] == arr2[j]){
                return true;
            }
        }
    }
    return false;
}

const toggleHighlight = (triggeredElement, key) => {
    console.log(key)
    console.log(HIGHLIGHT_DICT[key])
    let allKeyElements = document.querySelectorAll(key);
    let valueElements = document.querySelectorAll(HIGHLIGHT_DICT[key]);

    let unhighlightedElements = document.querySelectorAll('.unhighlight')
    let highlightedElements = document.querySelectorAll('.group-highlight')
    let highlightedTriggerElements = document.querySelectorAll('.group-trigger-highlight')

    if (key == HIGHLIGHT_DICT[key]) {
        allKeyElements = [triggeredElement]
    }

    if ((highlightedElements.length + unhighlightedElements.length) > 0) {
        console.log('huh')
        CONSONANTS.forEach((element) => {
            element.classList.remove('unhighlight')
        })
        highlightedElements.forEach((element) => {
            element.classList.remove('group-highlight')
        })
        highlightedTriggerElements.forEach((element) => {
            element.classList.remove('group-trigger-highlight')
        })
    }

    if (allKeyElements[0] !== highlightedTriggerElements[0]) {
        consonantKeyHighlight = haveCommonElements(allKeyElements, CONSONANTS)
        consonantValueHighlight = haveCommonElements(valueElements, CONSONANTS)
        if (consonantKeyHighlight || consonantValueHighlight) {
            console.log('how')
            CONSONANTS.forEach((element) => {
                element.classList.add('unhighlight')
            })
        }
        allKeyElements.forEach((element) => {
            element.classList.remove('unhighlight')
            element.classList.add('group-trigger-highlight')
        });
        valueElements.forEach((element) => {
            element.classList.remove('unhighlight')
            if (!element.classList.contains('consonant')) {
                element.classList.add('group-highlight')
            }
        });
    }
}

Object.keys(HIGHLIGHT_DICT).forEach((key) => {
    let elements = document.querySelectorAll(key);
    elements.forEach((element) => {
        element.addEventListener('click', () => {
            toggleHighlight(element, key)
        })
    })
});