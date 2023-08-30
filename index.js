function checkAge() {
    const ageField = document.getElementById('inputField')
    const ageFieldText = ageField.value
    const errorID = document.getElementById('error')
    try {
        // console.log(bbaria);
        const parseText = parseInt(ageFieldText)
        if (isNaN(parseText)) {
            throw "Please enter Number"
        } else if(parseText < 18) {
            throw "Only For 18 Up"
        }else if(parseText > 30){
            throw "Don't allow Old man";
        }
        errorID.innerHTML = "";
        
    } catch (err) {
        console.log("Erro:", err);
        errorID.innerHTML = ("Error: " + err)
    } finally {
        console.log("All Done inside catch");
        // throw errorID.innerHTML = ageFieldText
    }
    // console.log(1111);
}