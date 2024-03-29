const HIGHLIGHT_DICT = {
    '.phonology-trigger': '.phonology', '.manner-of-articulation-trigger': '.manner-of-articulation', '.unaspirated-plosive-trigger': '.unaspirated-plosive', '.aspirated-plosive-fricative-trigger': '.aspirated-plosive-fricative', '.nasal-trigger': '.nasal',
    '.articulator-trigger': '.articulator', '.velar-trigger': '.velar', '.palatal-trigger': '.palatal', '.alveolar-trigger': '.alveolar', '.labial-trigger': '.labial',
    '.column-trigger': '.column', '.first-column-trigger': '.first-column', '.second-column-trigger': '.second-column', '.third-column-trigger': '.third-column', '.forth-column-trigger': '.forth-column', '.fifth-column-trigger': '.fifth-column',
    '.row-trigger': '.row', '.ka-row-trigger': '.ka-row', '.ca-row-trigger': '.ca-row', '.ta1-row-trigger': '.ta1-row', '.ta2-row-trigger': '.ta2-row', '.pa-row-trigger': '.pa-row',
    '.consonant-class-trigger': '.consonant-class', '.mid-consonant-trigger': '.mid-consonant', '.high-consonant-trigger': '.high-consonant', '.low-consonant-trigger': '.low-consonant', '.paired-low-consonant-trigger': '.paired-low-consonant', '.unpaired-low-consonant-trigger': '.unpaired-low-consonant',
    '.trill-approximant-trigger': '.trill-approximant', '.fricative-trigger': '.fricative', '.alveolar-lateral-approximant-trigger': '.alveolar-lateral-approximant', '.glottal-stop-trigger': '.glottal-stop',  '.glottal-fricative-trigger': '.glottal-fricative',
    '.extra-row-trigger': '.extra-row',
    '.k':'.k','.kh':'.kh','.ng':'.ng','.c':'.c','.ch':'.ch','.y':'.y','.d':'.d','.t':'.t','.th':'.th','.n':'.n','.b':'.b','.p':'.p','.ph':'.ph','.f':'.f','.m':'.m','.r':'.r','.l':'.l','.w':'.w','.s':'.s','.h':'.h','.o':'.o'
}

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