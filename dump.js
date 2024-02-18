const consonantTable = document.querySelectorAll('.consonant-table')
const tds = consonantTable[0].querySelectorAll('td');

const HIGHLIGHTDICT = {
    '.phonology-trigger': '.phonology', '.manner-of-articulation-trigger': '.manner-of-articulation', '.unaspirated-plosive-trigger': '.unaspirated-plosive', '.aspirated-plosive-fricative-trigger': '.aspirated-plosive-fricative', '.nasal-trigger': '.nasal',
    '.articulator-trigger': '.articulator', '.velar-trigger': '.velar', '.palatal-trigger': '.palatal', '.alveolar-trigger': '.alveolar', '.labial-trigger': '.labial',
    '.column-trigger': '.column', '.first-column-trigger': '.first-column', '.second-column-trigger': '.second-column', '.third-column-trigger': '.third-column', '.forth-column-trigger': '.forth-column', '.fifth-column-trigger': '.fifth-column',
    '.row-trigger': '.row', '.ka-row-trigger': '.ka-row', '.ca-row-trigger': '.ca-row', '.ta1-row-trigger': '.ta1-row', '.ta2-row-trigger': '.ta2-row', '.pa-row-trigger': '.pa-row',
    '.consonant-class-trigger': '.consonant-class', '.mid-consonant-trigger': '.mid-consonant', '.high-consonant-trigger': '.high-consonant', '.low-consonant-trigger': '.low-consonant', '.paired-low-consonant-trigger': '.paired-low-consonant', '.unpaired-low-consonant-trigger': '.unpaired-low-consonant',
    '.trill-approximant-trigger': '.trill-approximant', '.fricative-trigger': '.fricative', '.alveolar-lateral-approximant-trigger': '.alveolar-lateral-approximant', '.glottal-stop-trigger': '.glottal-stop',  '.glottal-fricative-trigger': '.glottal-fricative',
    '.extra-row-trigger': '.extra-row',
}

function rgbToHsl(rgbString) {
    var match = rgbString.match(/\d+/g);
    var r = parseInt(match[0]);
    var g = parseInt(match[1]);
    var b = parseInt(match[2]);
    
    console.log(r, g, b)

    r /= 255, g /= 255, b /= 255;

    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    h = h * 360
    s = s * 100
    l = l * 100
    
    return [ h, s, l ];
}

const toggleHighlight = (key) => {
    console.log(key)
    console.log(HIGHLIGHTDICT[key])
    let selfElements = document.querySelectorAll(key);
    selfElements.forEach((element) => {
        element.classList.toggle('topic-highlight')
    });
    let affectedElements = document.querySelectorAll(HIGHLIGHTDICT[key]);
    affectedElements.forEach((element) => {
        element.classList.toggle('highlight')
    });

    tds.forEach((element) => {
        let computatedStyle = window.getComputedStyle(element);
        let rgb = computatedStyle.backgroundColor
        let hsl = rgbToHsl(rgb)
        element.style.backgroundColor = 'hsl(' + hsl[0] + ', ' + (hsl[1]-70) + '%, ' + hsl[2] + '%)';
    })
}

Object.keys(HIGHLIGHTDICT).forEach((key) => {
    console.log(key)
    let elements = document.querySelectorAll(key);
    elements.forEach((element) => {
        element.addEventListener('click', () => {
            toggleHighlight(key)
        })
    })
});