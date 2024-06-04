let characters = [];

function GeneratePW() {
    if (parseInt(document.getElementById("pwlen").value) > 0 && characters.length != 0) {
        const shuffled = characters.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, parseInt(document.getElementById("pwlen").value));

        document.getElementById("password").value = selected.join("");
    } else {
        alert("Nem lehet hossz vagy megadott karakterek nélkül jelszót generálni!");
    }
}

function CharTypes(elem) {
    if (elem.id == "pwupper") {
        if (elem.checked == true) {
            let temp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (let i = 0; i < temp.length; i++) {
                characters.push(temp[i])
            }
        }
        else {
            let temp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (let i = 0; i < temp.length; i++) {
                const index = characters.indexOf(temp[i]);
                characters.splice(index, 1);
            }
        }
    }

    if (elem.id == "pwlower") {
        if (elem.checked == true) {
            let temp = "abcdefghijklmnopqrstuvwxyz";
            for (let i = 0; i < temp.length; i++) {
                characters.push(temp[i])
            }
        } else {
            let temp = "abcdefghijklmnopqrstuvwxyz";
            for (let i = 0; i < temp.length; i++) {
                const index = characters.indexOf(temp[i]);
                characters.splice(index, 1);
            }
        }
        
    }

    if (elem.id == "pwnumbers") {
        if (elem.checked == true) {
            let temp = "0123456789";
            for (let i = 0; i < temp.length; i++) {
                characters.push(temp[i])
            }
        } else {
            let temp = "0123456789";
            for (let i = 0; i < temp.length; i++) {
                const index = characters.indexOf(temp[i]);
                characters.splice(index, 1);
            }
        }
        
    }

    if (elem.id == "pwsymbols") {
        if (elem.checked == true) {
            let temp = "+!%/=()[]<>#&@{}?-*";
            for (let i = 0; i < temp.length; i++) {
                characters.push(temp[i])
            }
        } else {
            let temp = "+!%/=()[]<>#&@{}?-*";
            for (let i = 0; i < temp.length; i++) {
                const index = characters.indexOf(temp[i]);
                characters.splice(index, 1);
            }
        }
        
    }
}

function PWLen() {
    let val = document.getElementById("pwlen").value;

    document.getElementById("pwlennum").innerHTML = val;

    if (val == 0) {
        document.getElementById("tick1").classList.remove("tickfull");
    }

    if (val >= 1 && val <= 5) {
        document.getElementById("tick1").classList.add("tickfull");
    }
    else {
        document.getElementById("tick1").classList.remove("tickfull");
    }

    if (val >= 6 && val <= 10) {
        document.getElementById("tick1").classList.add("tickfull");
        document.getElementById("tick2").classList.add("tickfull");
    }
    else {
        document.getElementById("tick2").classList.remove("tickfull");
    }

    if (val >= 11 && val <= 15) {
        document.getElementById("tick1").classList.add("tickfull");
        document.getElementById("tick2").classList.add("tickfull");
        document.getElementById("tick3").classList.add("tickfull");
    }
    else {
        document.getElementById("tick3").classList.remove("tickfull");
    }

    if (val >= 16 && val <= 20) {
        document.getElementById("tick1").classList.add("tickfull");
        document.getElementById("tick2").classList.add("tickfull");
        document.getElementById("tick3").classList.add("tickfull");
        document.getElementById("tick4").classList.add("tickfull");
    }
    else {
        document.getElementById("tick4").classList.remove("tickfull");
    }
}

function CopyPW() {
    navigator.clipboard.writeText(document.getElementById("password").value);
}