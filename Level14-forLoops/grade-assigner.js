function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}
for (i = 60; i <=100; i++) {
    if (i <=64) {
        console.log( 'Voor ' + i + ' punten krijg je een F')
    }
    else if (i <=69) {
        console.log( 'Voor ' + i + ' punten krijg je een D')
    }
    else if (i <=79) {
        console.log( 'Voor ' + i + ' punten krijg je een C')
    }
    else if (i <=89) {
        console.log( 'Voor ' + i + ' punten krijg je een B')
    }
    else if (i <=100) {
        console.log( 'Voor ' + i + ' punten krijg je een A')
    }
}