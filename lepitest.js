////// LEPITEST DATA INTEGRITY CHECK
var data = $$('p')

////1 Start data check results log
console.log('Run lepitest data integrity check ...'); var log = ''; var i = 0;

// Add some padding to avoid loops slamming into NULL values when hitting the end of a div
$$('div').forEach(f=>{var nuller = document.createElement("p"); f.appendChild(nuller)});
$$('div').forEach(f=>{var nuller = document.createElement("p"); f.appendChild(nuller)}); 


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
if (!f.matches('.xp') && /( |\t)$/.test(d) || /(  |\.\.|--| † †| agg. agg.)/g.test(d) || f.matches('p:not(.l,.xp)') && /"/g.test(d)) {i++; log += '[#' + i + s1 + 'Check for excess spaces, tabs, special characters or suffixes.\n'};
if (f.matches('[class^="x"]:not(.xp),.f,.y,.t,.j,.h,.g,.i,.o') && /[^A-z]/g.test(d)) {i++; log += '[#' + i + s1 + 'Allowed characters are A-Z and a-z only. Check for invalid spaces, tabs, line-breaks and special characters.\n'};
if (f.matches('.a,.ae,.c,.m,.u,.ue,.s,.s2,.s3,.s4') && /[^A-z -.†]/g.test(d)) {i++; log += '[#' + i + s1 + 'Allowed characters are A-Z, a-z and single spaces or hyphens only. Check for invalid tabs, line-breaks and special characters.\n'};
if (f.matches('p:not(.l,.p,.xp)') && /[^A-ZÄÖÕÜ]/.test(d.substring(0,1)) || f.matches('.xp') && /[^A-Z]/.test(d.substring(1,2)) || f.matches('p:not(.xp,.r,.r2,.l,.p,.p2,.e,.e2,.d,.d2)') && /[^a-z -.†;]/.test(d.substring(1,d.length)) || f.matches('.xp') && /[^a-z]/.test(d.substring(2,d.length-2))) {i++; log += '[#' + i + s1 + 'Check for correct placement of uppercase and lowercase letters.\n'};
if (f.matches('.d,.d2,.e,.e2') && (/ [a-z]/g.test(d) && !(/(and|of|du|und|von)/.test(d)) || /( And | Of | Du | Und | Von )/.test(d))) {i++; log += '[#' + i + s1 + 'Check for correct placement of uppercase and lowercase letters.\n'};

// Common typos, spelling and grammar mistakes
if (f.matches('.e,.e2') && /Acrea/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Acraea" for typos.\n'};
if (f.matches('.e,.e2') && /Butterfy/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Butterfly" for typos.\n'};
if (f.matches('.e,.e2') && /Emporor/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Emperor" for typos.\n'};
if (f.matches('.d,.d2') && /Acraea/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Acräa" for typos.\n'};
if (f.matches('.d,.d2') && /Chineische/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Chinesische" for typos.\n'};
if (f.matches('.d,.d2') && /(Dickopf|kopfalter)/g.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Dickkopffalter" for typos.\n'};
if (f.matches('.d,.d2') && /Fügel/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Flügel" for typos.\n'};
if (f.matches('.d,.d2') && /(fügler|flüger)/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "flügler" for typos.\n'};
if (f.matches('.d,.d2') && /Gelbich/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "gelblich" for typos.\n'};
if (f.matches('.d,.d2') && /Gelbing/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Gelbling" for typos.\n'};
if (f.matches('.d,.d2') && /Gemeine/.test(d)) {i++; log += '[#' + i + s1 + '"Gemein" is an obsolescent german term for "Gewöhnlich". Use the latter term instead.\n'};
if (f.matches('.d,.d2') && /Gewönliche/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Gewöhnlich" for typos.\n'};
if (f.matches('.d,.d2') && /Gross/.test(d)) {i++; log += '[#' + i + s1 + '"Gross" is an outdated spelling of "Groß".\n'};
if (f.matches('.d,.d2') && /(ikansche|ikanisce|ikanishe)/.test(d)) {i++; log += '[#' + i + s1 + 'Check the terms "Amerikanische/Afrikanische" for typos.\n'};
if (f.matches('.d,.d2') && /(P|p)auenauge/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Pfauenauge" for typos.\n'};
if (f.matches('.d,.d2') && /(Scwalben|Shwalben)/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Schwalben" for typos.\n'};
if (f.matches('.d,.d2') && /(scwanz|shwanz)/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "schwanz" for typos.\n'};
if (f.matches('.d,.d2') && /(weiss|Weiss)/.test(d)) {i++; log += '[#' + i + s1 + '"Weiss" is an outdated spelling of "Weiß".\n'};
if (f.matches('.e,.e2,.d,.d2') && /(Phillipin|Phillippin)/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Philippin" for typos.\n'};
if (f.matches('.e,.e2,.d,.d2') && /Saimes/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Siamese" for typos.\n'};
if (f.matches('p:not(.r,.r2,.l,.p,.p2,.xp)') && /(P|p)aplio/.test(d)) {i++; log += '[#' + i + s1 + 'Check the term "Papilio" for typos.\n'};
if (f.matches('.a,.ae,.c,.m,.u,.ue,.e,.e2,.d,.d2') && /( -|- )/g.test(d)) {i++; log += '[#' + i + s1 + 'Check for excess spaces before/after the hyphen.\n'};

// Taxon suffixes
if (f.matches('[class^="x"]:not(.x,.xs,.xp)') && d.substring(d.length-1,d.length) != 'a' || f.matches('.xp') && d.substring(d.length-3,d.length-2) != 'a') {i++; log += '[#' + i + s1 + sf + 'a".\n'};
if (f.matches('.x') && d.substring(d.length-5,d.length) != 'oidea') {i++; log += '[#' + i + s1 + sf + 'oidea".\n'};
if (f.matches('.xs') && d.substring(d.length-7,d.length) != 'iformes') {i++; log += '[#' + i + s1 + sf + 'iformes".\n'};
if (f.matches('.f') && d.substring(d.length-4,d.length) != 'idae') {i++; log += '[#' + i + s1 + sf + 'idae".\n'};
if (f.matches('.y') && d.substring(d.length-4,d.length) != 'inae') {i++; log += '[#' + i + s1 + sf + 'inae".\n'};
if (f.matches('.t') && d.substring(d.length-3,d.length) != 'ini') {i++; log += '[#' + i + s1 + sf + 'ini".\n'};
if (f.matches('.j') && d.substring(d.length-3,d.length) != 'ina') {i++; log += '[#' + i + s1 + sf + 'ina".\n'};
if (f.matches('.h') && d.substring(d.length-3,d.length) != 'iti') {i++; log += '[#' + i + s1 + sf + 'iti".\n'};
if (f.matches('p:not(.c)') && d.substring(d.length-5,d.length) == ' agg.') {i++; log += '[#' + i + s1 + 'Use the AGG datatype to add the "agg." suffix to a species complex.\n'};

// REF errors
if (f.matches('.r,.r2') && !(/, 20\d\d$/.test(d))) {i++; log += '[#' + i + s1 + "Make sure the REF ends with a valid date in 'YY format.\n"};
if (f.matches('.r') && (d.match(/,/g) || []).length > 1) {i++; log += '[#' + i + s1 + "Only list the first author when using the r data type.\n"};
if (f.matches('.r2') && (d.match(/,/g) || []).length > 2) {i++; log += '[#' + i + s1 + "Don't list more than 2 authors when using the r2 data type.\n"};
if (f.matches('.p') && !(/^doi:10./.test(d))) {i++; log += '[#' + i + s1 + 'Make sure this REF_ID is a proper DOI, without any additional "doi:" or URL suffix.\n'};
if (f.matches('.p2') && !(/^ISSN-L \d{4}-\d{3}(\d|X), \d/.test(d))) {i++; log += '[#' + i + s1 + "Make sure this REF_ID is a proper ISSN + Volume designation.\n"};

// Data order
if (f.matches('.x9') && !(f.matches('p:first-of-type'))) {i += 1; log += '[#' + i + s2 + 'There must be a single one located at the top of taxa section.\n'};
if (f.matches('.f,.i,.o,.a,.ae,.c,.m,.u,.ue') && f.matches('p:first-of-type') || f.matches('.m,.u,.ue') && f.matches('p:nth-of-type(2)')) {i++; log += '[#' + i + s2 + 'Must be located within a valid parent taxon.\n'};
if (f.matches('.e2,.d2') && f.matches('p.g~p')) {i++; log += '[#' + i + s4 + 'This type 2 common name must be located below a SUPERFAM, FAM, SUBFAM, TRI, SUBTRI or INFRATRI taxon.\n'};
if (f.matches('.e,.d,.s,.s2,.s3,.s4') && !(f.matches(':is(p.a,p.ae,p.c)~p'))) {i++; log += '[#' + i + s4 + 'Type 1 common names and SYN must be located below a SP/AGG taxon.\n'};
if (f.matches('.e') && f.matches('p.d+p') || f.matches('.e2') && f.matches('p.d2+p')) {i++; log += '[#' + i + s4 + 'German common names should be placed after english common names.\n'};
if (f.matches('.e,.d') && f.matches('p:is(.s,.s2,.s3,.s4,.u,.ue,.m)+p')) {i++; log += '[#' + i + s4 + 'SYN, SSP and SEG should be placed after common names.\n'};
if (f.matches('.s,.s2,.s3,.s4') && f.matches('p:is(.u,.ue,.m)+p')) {i++; log += '[#' + i + s4 + 'SSP and SEG should be placed after synonyms.\n'};
if (f.matches('.r,.r2,.l,.p,.p2') && f.matches('p:is(.e,.e2,.d,.d2,.s,.s2,.s3,.s4,.u,.ue,.m)+p')) {i++; log += '[#' + i + s4 + 'REF, REF_TITLE and REF_ID should be placed before common names, synonyms, SSP and SEG.\n'};
if (f.matches('.l') && !(f.matches('p:is(.r,.r2)+p')) || f.matches('.p,.p2') && !(f.matches('p.l+p'))) {i++; log += '[#' + i + s4 + 'Every REF must be followed by a proper REF_TITLE and REF_ID.\n'};

// Data types
if (f.matches('p:not(.x9,.x8,.x7,.x6,.x5,.x4,.x3,.x2,.x,.xs,.xp,.f,.y,.t,.j,.h,.g,.i,.o,.a,.ae,.c,.m,.u,.ue,.e,.e2,.d,.d2,.s,.s2,.s3,.s4,.r,.r2,.l,.p,.p2)')) {i++; log += '[#' + i + s3 + 'Use a valid data type.\n'};
});


////3 Check for correct alphabetical order
var s5 = ']  Subdata duplicate detected at positition "';
var s6 = ']  Wrong subdata sorting detected at positition "';

// Order of SEG within AGG
$$('.c').forEach(f=>{
var sib = f.nextElementSibling;
while (sib) {
	if (sib.matches('.m') && sib.nextElementSibling.matches('.m') && sib.innerHTML.localeCompare(sib.nextElementSibling.innerHTML, 'en') == 0) {i++; log += '[#' + i + s5 + 'AGG ' + f.innerHTML + '". "SEG ' + sib.innerHTML + '" is listed twice within this AGG.\n'};
	if (sib.matches('.m') && sib.nextElementSibling.matches('.m') && sib.innerHTML.localeCompare(sib.nextElementSibling.innerHTML, 'en') == 1) {i++; log += '[#' + i + s6 + 'AGG ' + f.innerHTML + '". Place "SEG ' + sib.innerHTML + '" in its correct alphabetical order within this AGG.\n'};
	if (sib.nextElementSibling.matches('p:not(.r,.r2,.l,.p,.p2,.e,.d,.s,.s2,.s3,.s4,.m)')) break
	sib = sib.nextElementSibling}});

// Order of SYN within SP/AGG
$$('.a,.ae,.c').forEach(f=>{
var sib = f.nextElementSibling;
while (sib) {
	if (sib.matches('.s,.s2,.s3,.s4') && sib.nextElementSibling.matches('.s,.s2,.s3,.s4') && sib.innerHTML.localeCompare(sib.nextElementSibling.innerHTML, 'en') == 0) {i++; log += '[#' + i + s5 + convert(f.classList) + ' ' + f.innerHTML + '". "SYN ' + sib.innerHTML + '" is listed twice within this ' + convert(f.classList) + '.\n'};
	if (sib.matches('.s,.s2,.s3,.s4') && sib.nextElementSibling.matches('.s,.s2,.s3,.s4') && sib.innerHTML.localeCompare(sib.nextElementSibling.innerHTML, 'en') == 1) {i++; log += '[#' + i + s6 + convert(f.classList) + ' ' + f.innerHTML + '". Place "SYN ' + sib.innerHTML + '" in its correct alphabetical order within this ' + convert(f.classList) + '.\n'};
	if (sib.nextElementSibling.matches('p:not(.r,.r2,.l,.p,.p2,.e,.d,.s,.s2,.s3,.s4)')) break
	sib = sib.nextElementSibling}});

// Order of SSP within SP
$$('.a,.ae').forEach(f=>{
var sib = f.nextElementSibling;
while (sib) {
	if (sib.matches('.u,.ue') && sib.nextElementSibling.matches('.u,.ue') && sib.innerHTML.localeCompare(sib.nextElementSibling.innerHTML, 'en') == 0) {i++; log += '[#' + i + s5 + convert(f.classList) + ' ' + f.innerHTML + '". "'+ convert(sib.classList) + ' ' + sib.innerHTML + '" is listed twice within this ' + convert(f.classList) + '.\n'};
	if (sib.matches('.u,.ue') && sib.nextElementSibling.matches('.u,.ue') && sib.innerHTML.localeCompare(sib.nextElementSibling.innerHTML, 'en') == 1) {i++; log += '[#' + i + s6 + convert(f.classList) + ' ' + f.innerHTML + '". Place "'+ convert(sib.classList) + ' ' + sib.innerHTML + '" in its correct alphabetical order within this ' + convert(f.classList) + '.\n'};
	if (sib.nextElementSibling.matches('p:not(.r,.r2,.l,.p,.p2,.e,.d,.s,.s2,.s3,.s4,.u,.ue)')) break
	sib = sib.nextElementSibling}});

// Order of SP/AGG within GEN/SUBGEN/SPGR
$$('.g,.i,.o').forEach(f=>{
var sib = f.nextElementSibling; var testArray = [];
while (sib) {
	if (sib.matches('.a,.ae,.c')) testArray.push(sib.innerHTML);
	if (sib.matches('p:not(.r,.r2,.l,.p,.p2,.e,.d,.a,.ae,.c,.s,.s2,.s3,.s4,.u,.ue,.m)')) break
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
	if (sib.matches('p:not(.r,.r2,.l,.p,.p2,.e,.d,.o,.a,.ae,.c,.s,.s2,.s3,.s4,.u,.ue,.m)')) break
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
	if (sib.matches('p:not(.r,.r2,.l,.p,.p2,.e,.e2,.d,.d2,.g,.i,.o,.a,.ae,.c,.s,.s2,.s3,.s4,.u,.ue,.m)')) break
	sib = sib.nextElementSibling};
for (let t = 0; t < testArray.length - 1; t++) {
	if (testArray[t].localeCompare(testArray[t+1], 'en') == 0) {i++; log += '[#' + i + s5 + convert(f.classList) + ' ' + f.innerHTML + '". "GEN ' + testArray[t] + '" is listed twice within this ' + convert(f.classList) + '.\n'};
	if (testArray[t].localeCompare(testArray[t+1], 'en') == 1) {i++; log += '[#' + i + s6 + convert(f.classList) + ' ' + f.innerHTML + '". Place "GEN ' + testArray[t] + '" in its correct alphabetical order within this ' + convert(f.classList) + '.\n'};
}});


////4 Check for correct hierarchical order
var s7 = ']  Wrong subdata hierarchy detected at positition "';

// SSP within AGG
$$('.c').forEach(f=>{
var sib = f.nextElementSibling; var testArray = [];
while (sib) {
	if (sib.matches('.u,.ue')) testArray.push(convert(sib.classList));
	if (sib.matches('p:not(.r,.r2,.l,.p,.p2,.e,.d,.s,.s2,.s3,.s4,.u,.ue,.m)')) break
	sib = sib.nextElementSibling};
if (testArray.includes('SSP') || testArray.includes('SSP_EXT')) {i++; log += '[#' + i + s7 + 'AGG ' + f.innerHTML + '". AGG can' + "'t contain SSP, only SEG.\n"};
});

// SEG within SP
$$('.a,.ae').forEach(f=>{
var sib = f.nextElementSibling; var testArray = [];
while (sib) {
	if (sib.matches('.m')) testArray.push(convert(sib.classList));
	if (sib.matches('p:not(.r,.r2,.l,.p,.p2,.e,.d,.s,.s2,.s3,.s4,.u,.ue,.m)')) break
	sib = sib.nextElementSibling};
if (testArray.includes('SEG')) {i++; log += '[#' + i + s7 + convert(f.classList) + ' ' + f.innerHTML + '". Species can' + "'t contain SEG, only SSP.\n"};
});

// SPGR before SUBGEN within GEN
$$('.g').forEach(f=>{
var sib = f.nextElementSibling; var testArray = [];
while (sib) {
	if (sib.matches('.i,.o')) testArray.push(convert(sib.classList));
	if (sib.matches('p:not(.r,.r2,.l,.p,.p2,.i,.o)')) break
	sib = sib.nextElementSibling};
if (testArray[0] == 'SPGR') {i++; log += '[#' + i + s7 + 'GEN ' + f.innerHTML + '". Any SPGR must be located within a SUBGEN. The correct hierarchy therefore is: GEN > SUBGEN > SPGR.\n'};
});


////5 Check for duplicate common names
var s8 = ']  Duplicate name detected for "';

// Create test arrays
var testArrayE = [];
var testArrayE2 = [];
var testArrayD = [];
var testArrayD2 = [];

// Collect all names
$$('.e,.e2,.d,.d2').forEach(f=>{

if (f.matches('.e')) testArrayE.push(f.innerHTML);
if (f.matches('.e2')) testArrayE2.push(f.innerHTML);
if (f.matches('.d')) testArrayD.push(f.innerHTML);
if (f.matches('.d2')) testArrayD2.push(f.innerHTML);
});

// Sort the names
testArrayE.sort();
testArrayE2.sort();
testArrayD.sort();
testArrayD2.sort();

// Check the arrays for duplicates
for (let t = 0; t < testArrayE.length - 1; t++) {
	if (testArrayE[t].localeCompare(testArrayE[t+1], 'en') == 0) {i++; log += '[#' + i + s8 + 'NAME_EN (type 1) ' + testArrayE[t] + '". One of them should be considered invalid.\n'};
};
for (let t = 0; t < testArrayE2.length - 1; t++) {
	if (testArrayE2[t].localeCompare(testArrayE2[t+1], 'en') == 0) {i++; log += '[#' + i + s8 + 'NAME_EN (type 2) ' + testArrayE2[t] + '". One of them should be considered invalid.\n'};
};
for (let t = 0; t < testArrayD.length - 1; t++) {
	if (testArrayD[t].localeCompare(testArrayD[t+1], 'de') == 0) {i++; log += '[#' + i + s8 + 'NAME_DE (type 1) ' + testArrayD[t] + '". One of them should be considered invalid.\n'};
};
for (let t = 0; t < testArrayD2.length - 1; t++) {
	if (testArrayD2[t].localeCompare(testArrayD2[t+1], 'de') == 0) {i++; log += '[#' + i + s8 + 'NAME_DE (type 2) ' + testArrayD2[t] + '". One of them should be considered invalid.\n'};
};


////6 Remove padding, finish log, show results if issues found
$$('p:not([class])').forEach(f=>{f.remove()});
if (i > 0) {
var results = 'Lepitest Log:\n------------------------\n[#0]  Data points checked: ' + data.length + '. Issues found: ' + i + '. Empty lines skipped: ' + empty + '.\n' + log;
console.log(results); alert(results)};


////7 Call the correct converter for the selected export format
if (format == 'xml') xml(); else dsv();




////// RAW DATA EXPORT
//// DSV converter
function dsv() {
var del = ''; var q = '';
if (format == 'txt') {var del = ";"}
if (format == 'csv') {var del = ","; var q = '"'}
if (format == 'tsv') {var del = "\t"}; // Delimiter assignment

	//Build dsv content
	var file_cont = 'META_DATASET' + del + q + version + q + "\n" + 'META_ORIGIN' + del + q + url + q;
	$$('p:not(.l),.ls').forEach(f=>{file_cont += '\n' + convert(f.classList) + del + q + f.innerHTML + q});

var file_link = document.createElement('a'); // Generate, click and remove download link
file_link.setAttribute('download',version + '.' + format);
file_link.setAttribute('href','data:text/' + format + ';charset=utf-8,' + encodeURIComponent(file_cont));
file_link.click(); file_link.remove()};

//// XML converter
function xml() {
	//1 xml start, add meta
	var file_cont = '<lepitaxa>\n<meta dataset="' + version + '" origin="' + url + '" />\n\n<taxa>\n';

	//2 xml main, add taxalist
	$$('p:not(.e,.e2,.d,.d2,.s,.s2,.s3,.s4,.r,.r2,.l,.p,.p2)').forEach(f=>{
		var sib = (f.matches('.h,.j,.t,.y,.f,.x,.x9')) ? f.nextElementSibling.firstElementChild : f.nextElementSibling;
		var REF = ''; var RTI = ''; var RID = ''; var nEN = ''; var nDE = ''; var SYN = ''; // Start element lists
		while (sib) { // Loop for each taxon
		if (sib.matches('.r,.r2')) REF += '\t\t<ref>' + sib.innerHTML + '</ref>\n'; // If sib matches selector, add to REF list
		else if (sib.matches('.l')) RTI += '\t\t<ref_title>' + sib.firstElementChild.innerHTML + '</ref_title>\n'; // If sib matches selector, add innerHTML of first child to RTI list
		else if (sib.matches('.p,.p2')) RID += '\t\t<ref_id>' + sib.innerHTML + '</ref_id>\n'; // If sib matches selector, add to RID list
		else if (sib.matches('.e,.e2')) nEN += '\t\t<com_name lang="en">' + sib.innerHTML + '</com_name>\n'; // If sib matches selector, add to nEN list
		else if (sib.matches('.d,.d2')) nDE += '\t\t<com_name lang="de">' + sib.innerHTML + '</com_name>\n'; // If sib matches selector, add to nDE list
		else if (sib.matches('.s,.s2,.s3,.s4')) SYN += '\t\t<syn>' + sib.innerHTML + '</syn>\n'; // If sib matches selector, add to SYN list
		else break
		sib = sib.nextElementSibling};

		file_cont += '\t<taxon type="' + convert(f.classList) + '">\n\t\t<name>' + f.innerHTML + '</name>\n' + REF + RTI + RID + nEN + nDE + SYN + '\t</taxon>\n'});

	//3 xml end
	file_cont += '</taxa>\n</lepitaxa>';

var file_link = document.createElement('a'); // Generate, click and remove download link
file_link.setAttribute('download',version + '.xml');
file_link.setAttribute('href','data:application/xml;charset=utf-8,' + encodeURIComponent(file_cont));
file_link.click(); file_link.remove()};




////// AUX FUNCTION - Class list data type extractor
function convert(dt) {
dt = dt.toString();
dt = dt.replace(/(en|de|hide|open)/g,'');
dt = dt.replace(/ /g,'').replace('x9','ORD').replace('x8','SUBORD').replace('x7','INFRAORD').replace('x6','PARVORD').replace('x5','MICROORD').replace('x4','SECT').replace('x3','SUBSECT').replace('x2','INFRASECT').replace('xs','SERIES').replace('xp','PARAPHYLUM').replace('ae','SP_EXT').replace('ue','SSP_EXT').replace('ls','REF_TITLE');
dt = dt.replace(/\d/g,'').replace('x','SUPERFAM').replace('f','FAM').replace('y','SUBFAM').replace('t','TRI').replace('j','SUBTRI').replace('h','INFRATRI').replace('g','GEN').replace('i','SUBGEN').replace('o','SPGR').replace('a','SP').replace('c','AGG').replace('m','SEG').replace('u','SSP').replace('r','REF').replace('l','REF_TITLE').replace('p','REF_ID').replace('e','NAME_EN').replace('d','NAME_DE').replace('s','SYN');
return dt};