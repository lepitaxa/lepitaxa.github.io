////// LEPITEST DATA INTEGRITY CHECK
var data = $$('p')

////1 Start data check results log
console.log('→ Run lepitest data integrity check ...'); var log = ''; var i = 0;

// Add some padding to avoid loops slamming into NULL values when hitting the end of a div
$$('div').forEach(f=>{var nuller = document.createElement("p"); f.appendChild(nuller)});
$$('div').forEach(f=>{var nuller = document.createElement("p"); f.appendChild(nuller)});

// Trim v datapoints back to only show one species name
$$('.v').forEach(f=>{f.innerHTML = f.innerHTML.replace(/ ×.+/,'')});

// Remove ID links
$$('.link').forEach(f=>{f.remove()});



////2 Simple conditional batch checks
data.forEach(f=>{
var d = f.innerHTML;
var sd = ' detected at positition "' + convert(f.classList) + ' ' + d + '". ';
var s1 = ']  Invalid name' + sd;
var s2 = ']  Stray taxon' + sd;
var s3 = ']  Invalid data type' + sd;
var s4 = ']  Invalid data order' + sd;
var sf = 'The suffix of this taxon type must be "'


// Special characters and capitalization
if (!f.matches('.xp') && /( |\t)$/.test(d) || /(  |\.\.|--| † †| agg. agg.)/g.test(d) || f.matches('.bs,p:not(.b,.l,.xp)') && /"/g.test(d) || f.matches('.n,.r2,.p2') && / ,/g.test(d)) {i++; log += '[#' + i + s1 + 'Check for excess spaces, tabs, special characters or suffixes.\n'};
if (f.matches('[class^="x"]:not(.xp),.f,.y,.t,.j,.h,.g,.i,.bs,.sh') && /[^A-z]/g.test(d)) {i++; log += '[#' + i + s1 + 'Allowed characters are A-Z and a-z only. Check for invalid spaces, tabs, line-breaks and special characters.\n'};
if (f.matches('.o,.a,.ae,.c,.k,.u,.ue,.w,.v,.v2,.s,.s2,.s3,.s4') && /[^A-z-.†× ]/g.test(d)) {i++; log += '[#' + i + s1 + 'Allowed characters are A-Z, a-z and single spaces or hyphens only. Check for invalid tabs, line-breaks and special characters.\n'};
if (f.matches('.bs,p:not(.b,.n,.l,.p,.xp)') && /[^A-ZÄČÖÕÜ]/.test(d.substring(0,1)) || f.matches('.xp') && /[^A-Z]/.test(d.substring(1,2)) || f.matches('.bs,p:not(.xp,.b,.n,.r,.r2,.l,.p,.p2,.e,.e2,.d,.d2)') && /[^a-z -.†×;]/.test(d.substring(1,d.length)) || f.matches('.xp') && /[^a-z]/.test(d.substring(2,d.length-2))) {i++; log += '[#' + i + s1 + 'Check for correct placement of uppercase and lowercase letters.\n'};
if (f.matches('.d,.d2,.e,.e2') && (/ [a-z]/g.test(d) && !(/(and|of|du|und|von)/.test(d)) || /( And | Of | Du | Und | Von )/.test(d))) {i++; log += '[#' + i + s1 + 'Check for correct placement of uppercase and lowercase letters.\n'};

// Common typos, spelling and grammar mistakes
if (f.matches('.e,.e2') && /Acrea/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Acraea" for typos.\n'};
if (f.matches('.e,.e2') && /Butterfy/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Butterfly" for typos.\n'};
if (f.matches('.e,.e2') && /Emporor/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Emperor" for typos.\n'};
if (f.matches('.d,.d2') && /(A|a)craea/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Acräa" for typos.\n'};
if (f.matches('.d,.d2') && /Chineische/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Chinesische" for typos.\n'};
if (f.matches('.d,.d2') && /(Dickopf|kopfalter)/g.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Dickkopffalter" for typos.\n'};
if (f.matches('.d,.d2') && /fügel/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Flügel" for typos.\n'};
if (f.matches('.d,.d2') && /(fügler|flüger)/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "flügler" for typos.\n'};
if (f.matches('.d,.d2') && /Gelbich/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "gelblich" for typos.\n'};
if (f.matches('.d,.d2') && /(G|g)elbing/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Gelbling" for typos.\n'};
if (f.matches('.d,.d2') && /Gemeine/.test(d)) {i++; log += '[#' + i + s1 + '"Gemein" is an obsolescent german term for "Gewöhnlich". Use the latter term instead.\n'};
if (f.matches('.d,.d2') && /Gewönliche/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Gewöhnlich" for typos.\n'};
if (f.matches('.d,.d2') && /Gross/.test(d)) {i++; log += '[#' + i + s1 + '"Gross" is an outdated spelling of "Groß".\n'};
if (f.matches('.d,.d2') && /(ikansche|ikanisce|ikanishe)/.test(d)) {i++; log += '[#' + i + s1 + 'Check the terms "Amerikanische/Afrikanische" for typos.\n'};
if (f.matches('.d,.d2') && /(P|p)auenauge/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Pfauenauge" for typos.\n'};
if (f.matches('.d,.d2') && /(Scwalben|Shwalben)/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Schwalben" for typos.\n'};
if (f.matches('.d,.d2') && /(scwanz|shwanz)/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "schwanz" for typos.\n'};
if (f.matches('.d,.d2') && /(W|w)eiss/.test(d)) {i++; log += '[#' + i + s1 + '"Weiss" is an outdated spelling of "Weiß".\n'};
if (f.matches('.e,.e2,.d,.d2') && /(’|´)/.test(d)) {i++; log += '[#' + i + s1 + 'For an apostrophe, please use the simple U+0027 "typewriter apostrophe" character found on every keyboard.\n'};
if (f.matches('.e,.e2,.d,.d2') && /(Phillipin|Phillippin)/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Philippin" for typos.\n'};
if (f.matches('.e,.e2,.d,.d2') && /Saimes/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Siamese" for typos.\n'};
if (f.matches('p:not(.r,.r2,.l,.p,.p2,.xp)') && /(P|p)aplio/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Papilio" for typos.\n'};
if (f.matches('.a,.ae,.c,.k,.u,.ue,.e,.e2,.d,.d2') && /( -|- )/g.test(d)) {i++; log += '[#' + i + s1 + 'Check for excess spaces before/after the hyphen.\n'};

// Taxon suffixes
if (f.matches('.sh') && !(/(a|e|i)$/.test(d))) {i++; log += '[#' + i + s1 + 'The suffix of this synonym must match a valid higher level taxon.\n'};
if (f.matches('[class^="x"]:not(.x,.xs,.xp)') && !(/a$/.test(d)) || f.matches('.xp') && !(/a"$/.test(d))) {i++; log += '[#' + i + s1 + sf + 'a".\n'};
if (f.matches('.x') && !(/oidea$/.test(d))) {i++; log += '[#' + i + s1 + sf + 'oidea".\n'};
if (f.matches('.xs') && !(/iformes$/.test(d))) {i++; log += '[#' + i + s1 + sf + 'iformes".\n'};
if (f.matches('.f') && !(/idae$/.test(d))) {i++; log += '[#' + i + s1 + sf + 'idae".\n'};
if (f.matches('.y') && !(/inae$/.test(d))) {i++; log += '[#' + i + s1 + sf + 'inae".\n'};
if (f.matches('.t') && !(/ini$/.test(d))) {i++; log += '[#' + i + s1 + sf + 'ini".\n'};
if (f.matches('.j') && !(/ina$/.test(d))) {i++; log += '[#' + i + s1 + sf + 'ina".\n'};
if (f.matches('.h') && !(/iti$/.test(d))) {i++; log += '[#' + i + s1 + sf + 'iti".\n'};
if (f.matches('p:not(.c)') && (/ agg\.$/.test(d))) {i++; log += '[#' + i + s1 + 'Use the AGG datatype to add the "agg." suffix to a species complex.\n'};

// BAS and REF errors
if (f.matches('.n') && (!(/^\D+, \d{4}$/.test(d)) || d.substring(d.length-4,d.length) < 1758)) {i++; log += '[#' + i + s1 + "Make sure the AUT ends with a valid date in YYYY format, starting at 1758.\n"};
if (f.matches('.r,.r2') && (!(/^\D+, \d{4}$/.test(d)) || d.substring(d.length-4,d.length) < 1998)) {i++; log += '[#' + i + s1 + "Make sure the REF ends with a valid date in YYYY format, starting at 1998.\n"};
if (f.matches('.n,.r,.r2') && d.substring(d.length-4,d.length) > date.substring(0,4)) {i++; log += '[#' + i + s1 + "You cannot use a future date for anything already published.\n"};
if (f.matches('.r') && (/&/.test(d) || (d.match(/,/g) || []).length > 1 || (d.match(/et al/g) || []).length > 1)) {i++; log += '[#' + i + s1 + 'Only list the first author when using the r data type. The "et al." prefix is added automatically for this data type and therefore should not be present in the raw data.\n'};
if (f.matches('.r2') && (/&/.test(d) && (d.match(/ /g) || []).length < 3 || (d.match(/&/g) || []).length > 1 || (d.match(/,/g) || []).length > 1)) {i++; log += '[#' + i + s1 + 'Do not list more than 2 authors when using the r2 data type. If there are 2 authors listed, make sure they are properly separated by a space-separated "&" character.\n'};
if (f.matches('.p') && !(/^doi:10./.test(d))) {i++; log += '[#' + i + s1 + 'Make sure this REF_ID is a proper DOI, without any additional "doi:" or URL suffix.\n'};
if (f.matches('.p2') && !(/^ISSN-L \d{4}-\d{3}(\d|X), \d/.test(d))) {i++; log += '[#' + i + s1 + "Make sure this REF_ID is a proper ISSN + Volume designation.\n"};

// Data order
if (f.matches('.x9') && !(f.matches('p:first-of-type'))) {i += 1; log += '[#' + i + s2 + 'There must be a single one located at the top of taxa section.\n'};
if (f.matches('.f,.i,.o,.a,.ae,.c,.k,.u,.ue,.w,.v,.v2') && f.matches('p:first-of-type') || f.matches('.k,.u,.ue') && f.matches('p:nth-of-type(2)')) {i++; log += '[#' + i + s2 + 'Must be located within a valid parent taxon.\n'};
if (f.matches('.e2,.d2') && f.matches('p.g~p')) {i++; log += '[#' + i + s4 + 'This type 2 common name must be located below a SUPERFAM, FAM, SUBFAM, TRI, SUBTRI or INFRATRI taxon.\n'};
if (f.matches('.sh') && f.matches('p.g~p')) {i++; log += '[#' + i + s4 + 'This synonym must be located below a ORD, PARAPHYLUM, SUPERFAM, FAM, SUBFAM, TRI, SUBTRI or INFRATRI taxon.\n'};
if (f.matches('.e,.d,.s,.b,.n,.s2,.s3,.s4') && !(f.matches(':is(p.a,p.ae,p.c,.w)~p'))) {i++; log += '[#' + i + s4 + 'Type 1 common names, BAS and SYN must be located below a SP/AGG/HYBR taxon.\n'};
if (f.matches('.e') && f.matches('p.d+p') || f.matches('.e2') && f.matches('p.d2+p')) {i++; log += '[#' + i + s4 + 'German common names should be placed after english common names.\n'};
if (f.matches('.e,.d') && f.matches('p:is(.b,.n,.s,.s2,.s3,.s4,.u,.ue,.k,.v,.v2)+p') || f.matches('.e2,.d2') && f.matches('p.sh+p')) {i++; log += '[#' + i + s4 + 'BAS, AUT, SYN, SYN_H, SSP, SEG and PARENT should be placed after common names.\n'};
if (f.matches('.b,.n') && f.matches('p:is(.s,.s2,.s3,.s4)+p')) {i++; log += '[#' + i + s4 + 'Synonyms should be placed after basionyms.\n'};
if (f.matches('.s,.s2,.s3,.s4') && f.matches('p:is(.u,.ue,.k,.v,.v2)+p')) {i++; log += '[#' + i + s4 + 'SSP, SEG and PARENT should be placed after synonyms.\n'};
if (f.matches('p:is(.p,.p2)+p:is(.e,.e2,.d,.d2,.b,.n,[class^="s"],.u,.ue,.k,.v,.v2)')) {i++; log += '[#' + i + s4 + 'REF, REF_TITLE and REF_ID should be placed after common names, basionyms, synonyms, SSP, SEG and PARENT.\n'};
if (f.matches('.v,.v2') && !(f.matches(':is(.w)~p'))) {i++; log += '[#' + i + s4 + 'PARENT taxons must be located below a HYBR taxon.\n'};
if (f.matches('.n') && !(f.matches(':is(.b)+p')) || f.matches('.b') && !(/, \d\d\d\d<\/span>/.test(d))) {i++; log += '[#' + i + s4 + 'Every BAS name must be directly followed by a proper AUT.\n'};
if (f.matches('.v2') && !(f.matches('p:is(.v)+p'))) {i++; log += '[#' + i + s4 + 'A hybrid PARENT taxon must be directly followed by the second PARENT.\n'};
if (f.matches('.l') && !(f.matches('p:is(.r,.r2)+p')) || f.matches('.p,.p2') && !(f.matches('p.l+p'))) {i++; log += '[#' + i + s4 + 'Every REF must be followed by a proper REF_TITLE and REF_ID.\n'};

// Data types
if (f.matches('p:not(.x9,.x8,.x7,.x6,.x5,.x4,.x3,.x2,.x,.xs,.xp,.f,.y,.t,.j,.h,.g,.i,.o,.a,.ae,.c,.b,.n,.k,.u,.ue,.w,.v,.v2,.e,.e2,.d,.d2,.s,.s2,.s3,.s4,.sh,.r,.r2,.l,.p,.p2)')) {i++; log += '[#' + i + s3 + 'Use a valid data type.\n'};
});


////3 Check for correct alphabetical order
var s5 = ']  Subdata duplicate detected at positition "';
var s6 = ']  Wrong subdata sorting detected at positition "';

// Order of SEG within AGG
$$('.c').forEach(f=>{
var sib = f.nextElementSibling;
while (sib) {
	if (sib.matches('.k') && sib.nextElementSibling.matches('.k') && sib.innerHTML.localeCompare(sib.nextElementSibling.innerHTML, 'en') == 0) {i++; log += '[#' + i + s5 + 'AGG ' + f.innerHTML + '". "SEG ' + sib.innerHTML + '" is listed twice within this AGG.\n'};
	if (sib.matches('.k') && sib.nextElementSibling.matches('.k') && sib.innerHTML.localeCompare(sib.nextElementSibling.innerHTML, 'en') == 1) {i++; log += '[#' + i + s6 + 'AGG ' + f.innerHTML + '". Place "SEG ' + sib.innerHTML + '" in its correct alphabetical order within this AGG.\n'};
	if (sib.nextElementSibling.matches('p:not(.e,.d,.b,.n,.s,.s2,.s3,.s4,.k)')) break
	sib = sib.nextElementSibling}});

// Order of SYN within SP/AGG/HYBR
$$('.a,.ae,.c,.w').forEach(f=>{
var sib = f.nextElementSibling;
while (sib) {
	if (sib.matches('.s,.s2,.s3,.s4') && sib.nextElementSibling.matches('.s,.s2,.s3,.s4') && sib.innerHTML.localeCompare(sib.nextElementSibling.innerHTML, 'en') == 0) {i++; log += '[#' + i + s5 + convert(f.classList) + ' ' + f.innerHTML + '". "SYN ' + sib.innerHTML + '" is listed twice within this ' + convert(f.classList) + '.\n'};
	if (sib.matches('.s,.s2,.s3,.s4') && sib.nextElementSibling.matches('.s,.s2,.s3,.s4') && sib.innerHTML.localeCompare(sib.nextElementSibling.innerHTML, 'en') == 1) {i++; log += '[#' + i + s6 + convert(f.classList) + ' ' + f.innerHTML + '". Place "SYN ' + sib.innerHTML + '" in its correct alphabetical order within this ' + convert(f.classList) + '.\n'};
	if (sib.nextElementSibling.matches('p:not(.e,.d,.b,.n,.s,.s2,.s3,.s4)')) break
	sib = sib.nextElementSibling}});

// Order of SYN_H within higher taxons
$$('.x9,.x,.xp,.f,.y,.t,.j,.h').forEach(f=>{
var sib = f.nextElementSibling.firstElementChild;
while (sib) {
	if (sib.matches('.sh') && sib.nextElementSibling.matches('.sh') && sib.innerHTML.localeCompare(sib.nextElementSibling.innerHTML, 'en') == 0) {i++; log += '[#' + i + s5 + convert(f.classList) + ' ' + f.innerHTML + '". "SYN_H ' + sib.innerHTML + '" is listed twice within this ' + convert(f.classList) + '.\n'};
	if (sib.matches('.sh') && sib.nextElementSibling.matches('.sh') && sib.innerHTML.localeCompare(sib.nextElementSibling.innerHTML, 'en') == 1) {i++; log += '[#' + i + s6 + convert(f.classList) + ' ' + f.innerHTML + '". Place "SYN_H ' + sib.innerHTML + '" in its correct alphabetical order within this ' + convert(f.classList) + '.\n'};
	if (sib.nextElementSibling.matches('p:not(.e2,.d2,.sh)')) break
	sib = sib.nextElementSibling}});

// Order of SSP within SP
$$('.a,.ae').forEach(f=>{
var sib = f.nextElementSibling;
while (sib) {
	if (sib.matches('.u,.ue') && sib.nextElementSibling.matches('.u,.ue') && sib.innerHTML.localeCompare(sib.nextElementSibling.innerHTML, 'en') == 0) {i++; log += '[#' + i + s5 + convert(f.classList) + ' ' + f.innerHTML + '". "'+ convert(sib.classList) + ' ' + sib.innerHTML + '" is listed twice within this ' + convert(f.classList) + '.\n'};
	if (sib.matches('.u,.ue') && sib.nextElementSibling.matches('.u,.ue') && sib.innerHTML.localeCompare(sib.nextElementSibling.innerHTML, 'en') == 1) {i++; log += '[#' + i + s6 + convert(f.classList) + ' ' + f.innerHTML + '". Place "'+ convert(sib.classList) + ' ' + sib.innerHTML + '" in its correct alphabetical order within this ' + convert(f.classList) + '.\n'};
	if (sib.nextElementSibling.matches('p:not(.e,.d,.b,.n,.s,.s2,.s3,.s4,.u,.ue)')) break
	sib = sib.nextElementSibling}});
	
// Order of PARENT within HYBR
$$('.w').forEach(f=>{
var sib = f.nextElementSibling;
while (sib) {
	if (sib.matches('.v') && sib.nextElementSibling.matches('.v2') && sib.innerHTML.localeCompare(sib.nextElementSibling.innerHTML, 'en') == 0) {i++; log += '[#' + i + s5 + convert(f.classList) + ' ' + f.innerHTML + '". "'+ convert(sib.classList) + ' ' + sib.innerHTML + '" is listed twice within this ' + convert(f.classList) + '.\n'};
	if (sib.matches('.v') && sib.nextElementSibling.matches('.v2') && sib.innerHTML.localeCompare(sib.nextElementSibling.innerHTML, 'en') == 1) {i++; log += '[#' + i + s6 + convert(f.classList) + ' ' + f.innerHTML + '". Place "'+ convert(sib.classList) + ' ' + sib.innerHTML + '" in its correct alphabetical order within this ' + convert(f.classList) + '.\n'};
	if (sib.nextElementSibling.matches('p:not(.e,.d,.b,.n,.s,.s2,.s3,.s4,.v,.v2)')) break
	sib = sib.nextElementSibling}});

// Order of SP/AGG/HYBR within GEN/SUBGEN/SPGR
$$('.g,.i,.o').forEach(f=>{
var sib = f.nextElementSibling; var testArray = [];
while (sib) {
	if (sib.matches('.a,.ae,.c')) testArray.push(sib.innerHTML);
	if (sib.matches('.w')) testArray.push(sib.innerHTML.replace(' ×',''));
	if (sib.matches('p:not(.r,.r2,.l,.p,.p2,.e,.d,.b,.n,.a,.ae,.c,.w,.s,.s2,.s3,.s4,.u,.ue,.k,.v,.v2)')) break
	sib = sib.nextElementSibling};
for (let t = 0; t < testArray.length - 1; t++) {
	if (testArray[t].localeCompare(testArray[t+1], 'en') == 0) {i++; log += '[#' + i + s5 + convert(f.classList) + ' ' + f.innerHTML + '". The species "' + testArray[t] + '" is listed twice within this this ' + convert(f.classList) + '.\n'};
	if (testArray[t].localeCompare(testArray[t+1], 'en') == 1) {i++; log += '[#' + i + s6 + convert(f.classList) + ' ' + f.innerHTML + '". Place the species "' + testArray[t] + '" in its correct alphabetical order within this ' + convert(f.classList) + '.\n'};
}});

// Order of SPGR within SUBGEN
$$('.i').forEach(f=>{
var sib = f.nextElementSibling; var testArray = [];
while (sib) {
	if (sib.matches('.o')) testArray.push(sib.innerHTML);
	if (sib.matches('p:not(.r,.r2,.l,.p,.p2,.e,.d,.b,.n,.o,.a,.ae,.c,.w,.s,.s2,.s3,.s4,.u,.ue,.k,.v,.v2)')) break
	sib = sib.nextElementSibling};
for (let t = 0; t < testArray.length - 1; t++) {
	if (testArray[t].localeCompare(testArray[t+1], 'en') == 0) {i++; log += '[#' + i + s5 + 'SUBGEN ' + f.innerHTML + '". "SPGR ' + testArray[t] + '" is listed twice within this this SUBGEN.\n'};
	if (testArray[t].localeCompare(testArray[t+1], 'en') == 1) {i++; log += '[#' + i + s6 + 'SBUGEN ' + f.innerHTML + '". Place "SPGR ' + testArray[t] + '" in its correct alphabetical order within this this SUBGEN.\n'};
}});

// Order of GEN within FAM/SUBFAM/TRI/SUBTRI/INFRATRI
$$('.f,.y,.t,.j,.h').forEach(f=>{
var sib = f.nextElementSibling.firstElementChild; var testArray = [];
while (sib) {
	if (sib.matches('.g')) testArray.push(sib.innerHTML);
	if (sib.matches('p:not(.r,.r2,.l,.p,.p2,.e,.e2,.d,.d2,.b,.n,.g,.i,.o,.a,.ae,.c,.w,.s,.s2,.s3,.s4,.u,.ue,.k,.v,.v2)')) break
	sib = sib.nextElementSibling};
for (let t = 0; t < testArray.length - 1; t++) {
	if (testArray[t].localeCompare(testArray[t+1], 'en') == 0) {i++; log += '[#' + i + s5 + convert(f.classList) + ' ' + f.innerHTML + '". "GEN ' + testArray[t] + '" is listed twice within this ' + convert(f.classList) + '.\n'};
	if (testArray[t].localeCompare(testArray[t+1], 'en') == 1) {i++; log += '[#' + i + s6 + convert(f.classList) + ' ' + f.innerHTML + '". Place "GEN ' + testArray[t] + '" in its correct alphabetical order within this ' + convert(f.classList) + '.\n'};
}});


////4 Check for correct hierarchical order
var s7 = ']  Wrong subdata hierarchy detected at positition "';

// SSP within AGG/HYBR
$$('.c,.w').forEach(f=>{
var sib = f.nextElementSibling;
while (sib) {
	if (sib.matches('.u,.ue')) {i++; log += '[#' + i + s7 + 'AGG ' + f.innerHTML + '". AGG/HYBR can' + "'t contain SSP, only SEG/PARENT.\n"};
	if (sib.matches('p:not(.e,.d,.s,.s2,.s3,.s4,.u,.ue,.k,.v,.v2,.r,.r2,.l,.p,.p2)')) break
	sib = sib.nextElementSibling}});

// SEG within SP/HYBR
$$('.a,.ae,.w').forEach(f=>{
var sib = f.nextElementSibling;
while (sib) {
	if (sib.matches('.k')) {i++; log += '[#' + i + s7 + convert(f.classList) + ' ' + f.innerHTML + '". Species and their hybrids can' + "'t contain SEG, only SSP/PARENT.\n"};
	if (sib.matches('p:not(.e,.d,.s,.s2,.s3,.s4,.u,.ue,.k,.v,.v2,.r,.r2,.l,.p,.p2)')) break
	sib = sib.nextElementSibling}});

// PARENT within SP/AGG
$$('.a,.ae,.c').forEach(f=>{
var sib = f.nextElementSibling;
while (sib) {
	if (sib.matches('.v,.v2')) {i++; log += '[#' + i + s7 + convert(f.classList) + ' ' + f.innerHTML + '". Species can' + "'t contain species hybrid PARENT datapoints, these belong to HYBR taxons.\n"};
	if (sib.matches('p:not(.e,.d,.s,.s2,.s3,.s4,.u,.ue,.k,.v,.v2,.r,.r2,.l,.p,.p2)')) break
	sib = sib.nextElementSibling}});

// SPGR before SUBGEN within GEN
$$('.g').forEach(f=>{
var sib = f.nextElementSibling; var testArray = [];
while (sib) {
	if (sib.matches('.i,.o')) testArray.push(convert(sib.classList));
	if (sib.matches('p:not(.r,.r2,.l,.p,.p2,.i,.o)')) break
	sib = sib.nextElementSibling};
if (testArray[0] == 'SPGR') {i++; log += '[#' + i + s7 + 'GEN ' + f.innerHTML + '". Any SPGR must be located within a SUBGEN. The correct hierarchy therefore is: GEN > SUBGEN > SPGR.\n'};
});


////5 Check for duplicate common names and taxa
var s8 = ']  Duplicate name detected for ';
var s9 = ']  Duplicate basionym/synonym detected for ';
var s10 = ']  Duplicate synonymic (sub)species detected for ';

// Create test arrays
var testArrayE = [];
var testArrayE2 = [];
var testArrayD = [];
var testArrayD2 = [];
var testArrayTX = [];
var testArrayBS = [];
var testArraySY = [];

// Collect all names
$$('p[id]:not(.o),.e,.e2,.d,.d2').forEach(f=>{

if (f.matches('.e')) testArrayE.push(f.innerHTML);
if (f.matches('.e2')) testArrayE2.push(f.innerHTML);
if (f.matches('.d')) testArrayD.push(f.innerHTML);
if (f.matches('.d2')) testArrayD2.push(f.innerHTML);
if (f.matches('p[id]')) testArrayTX.push(f.id.replace(/_/g,' '));
if (f.matches('.b,.s,.s2,.s3,.s4')) testArrayBS.push(f.id.replace(/_/g,' ').replace(/.+\$/,''));
if (f.matches('.a,.u,.k,.s,.s2,.s3,.s4')) testArraySY.push(f.id.replace(/_/g,' ').replace(/.+\$/,''))});

// Sort the names
testArrayE.sort();
testArrayE2.sort();
testArrayD.sort();
testArrayD2.sort();
testArrayTX.sort();
testArrayBS.sort();
testArraySY.sort();

// Check the arrays for duplicates
for (let t = 0; t < testArrayE.length - 1; t++) {
	if (testArrayE[t].localeCompare(testArrayE[t+1], 'en') == 0) {i++; log += '[#' + i + s8 + '"NAME_EN (type 1) ' + testArrayE[t] + '". One of them should be considered invalid.\n'};
};
for (let t = 0; t < testArrayE2.length - 1; t++) {
	if (testArrayE2[t].localeCompare(testArrayE2[t+1], 'en') == 0) {i++; log += '[#' + i + s8 + '"NAME_EN (type 2) ' + testArrayE2[t] + '". One of them should be considered invalid.\n'};
};
for (let t = 0; t < testArrayD.length - 1; t++) {
	if (testArrayD[t].localeCompare(testArrayD[t+1], 'de') == 0) {i++; log += '[#' + i + s8 + '"NAME_DE (type 1) ' + testArrayD[t] + '". One of them should be considered invalid.\n'};
};
for (let t = 0; t < testArrayD2.length - 1; t++) {
	if (testArrayD2[t].localeCompare(testArrayD2[t+1], 'de') == 0) {i++; log += '[#' + i + s8 + '"NAME_DE (type 2) ' + testArrayD2[t] + '". One of them should be considered invalid.\n'};
};
for (let t = 0; t < testArrayTX.length - 1; t++) {
	if (testArrayTX[t].localeCompare(testArrayTX[t+1], 'en') == 0) {
		testArrayTX[t] = testArrayTX[t].replace(/.+\$/,''); testArrayTX[t] = testArrayTX[t].charAt(0).toUpperCase() + testArrayTX[t].slice(1);
		i++; log += '[#' + i + s8 + 'taxon "' + testArrayTX[t] + '". One of them must be considered invalid.\n'};
};
for (let t = 0; t < testArrayBS.length - 1; t++) {
	if (testArrayBS[t].localeCompare(testArrayBS[t+1], 'en') == 0) {
		testArrayBS[t] = testArrayBS[t].charAt(0).toUpperCase() + testArrayBS[t].slice(1);
		i++; log += '[#' + i + s9 + 'taxon "' + testArrayBS[t] + '". One of them should be deleted.\n'};
};
for (let t = 0; t < testArraySY.length - 1; t++) {
	if (testArraySY[t].localeCompare(testArraySY[t+1], 'en') == 0) {
		testArraySY[t] = testArraySY[t].charAt(0).toUpperCase() + testArraySY[t].slice(1);
		i++; log += '[#' + i + s10 + 'taxon "' + testArraySY[t] + '". Either the taxon or the synonym must be considered invalid.\n'};
};


////6 Check for loose characters not being part of any data
$$('div[id]').forEach(f=>{if (/\/div\>(?!\n?\<)/g.test(f.innerHTML) || /\/p\>(?!\n?\<)/g.test(f.outerHTML)) {i++; log += '[#' + i + ']  Loose characters detected within group ' + f.firstElementChild.innerHTML + '. These characters should either have a proper data type assigned to them or be deleted!\n'}});


////7 Remove padding, calculate download size, finish log, show infos and results
$$('p:not([class])').forEach(f=>{f.remove()});

var size = count * 0.0000235
var info2; var empty = raw.innerHTML.match(/(\n)/g).length - 11;

var info1 = 'CHECK AND EXPORT DATASET\n⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n- Export format: TSV\n- Estimated download size: ' + size.toFixed(1) + ' MB\n\n';

if (i > 0) info2 = "WARNING: Data integrity issues found! Keep this in mind when using the data!\n- If you're a contributor, please fix the issues before opening a pull request.\n- If you're a visitor, please report this problem at https://github.com/lepitaxa/lepitaxa.github.io/issues.\n\n";
else info2 = "No data integrity issues found!\n\n";

var results = '⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\nLepitest Log:\n⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n[#0]  Data points checked: ' + data.length + '. Issues found: ' + i + '. Empty lines skipped: ' + empty + '.\n' + log;
console.log(results); alert(info1 + info2 + results);


////8 Run tsv converter, rebuild the ID links afterwards
console.log('⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n→ Converting data to TSV format ...');

// TSV converter
var file_cont = 'META_DATASET\tLepitaxa-' + version + '\nMETA_ORIGIN\thttps://lepitaxa.github.io';
$$('p:not(.b,.l),.bs,.ls').forEach(f=>{file_cont += '\n' + convert(f.classList) + '\t' + f.innerHTML});

// Generate, click and remove download link, rebuld IDs
var file_link = document.createElement('a');
file_link.setAttribute('download','Lepitaxa-' + version + '.tsv');
file_link.setAttribute('href','data:text/tsv;charset=utf-8,' + encodeURIComponent(file_cont));
file_link.click(); console.log('→ Download ready!'); file_link.remove();


$$('.a,.ae,.c,.w,.g').forEach(f=>{var id_lnk = document.createElement('a'); id_lnk.href = 'https://lepitaxa.github.io#' + f.id; id_lnk.title= '→ Lepitaxa-Link'; id_lnk.classList.add('link'); f.prepend(id_lnk)});




////// AUX FUNCTION - Class list data type extractor
function convert(dt) {
dt = dt.toString();
dt = dt.replace(/(en|de|hide|open)/g,'');
dt = dt.replace(/ /g,'').replace('x9','ORD').replace('x8','SUBORD').replace('x7','INFRAORD').replace('x6','PARVORD').replace('x5','MICROORD').replace('x4','SECT').replace('x3','SUBSECT').replace('x2','INFRASECT').replace('xs','SERIES').replace('xp','PARAPHYLUM').replace('ae','SP_EXT').replace('ue','SSP_EXT').replace('bs','BAS').replace('ls','REF_TITLE').replace('sh','SYN_H').replace('w','HYBR');
dt = dt.replace(/\d/g,'').replace('x','SUPERFAM').replace('f','FAM').replace('y','SUBFAM').replace('t','TRI').replace('j','SUBTRI').replace('h','INFRATRI').replace('g','GEN').replace('i','SUBGEN').replace('o','SPGR').replace('a','SP').replace('c','AGG').replace('k','SEG').replace('u','SSP').replace('v','PARENT').replace('n','AUT').replace('r','REF').replace('l','REF_TITLE').replace('p','REF_ID').replace('e','NAME_EN').replace('d','NAME_DE').replace('s','SYN');
return dt};