const SUPPORTED_LANGUAGES = ['it', 'en'];
const selectedLanguage = process.argv[2];

if(!SUPPORTED_LANGUAGES.includes(selectedLanguage)){
    console.log('The specified language is not supported');
    process.exit();
}

const translationModule = `./string-${selectedLanguage}.js`;
import(translationModule).then((res) => {
    console.log(res.HELLO);
}).catch(error => {
    console.log(error);
})