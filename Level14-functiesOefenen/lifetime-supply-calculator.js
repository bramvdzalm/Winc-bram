function calculate(leeftijd, perDag) {
    let aantal = perDag * 365;
    let totaal = aantal * leeftijd
    console.log(' jij hebt als je ' + leeftijd + ' jaar bent en ' + perDag + ' snacks per dag eet, ' + totaal + ' snacks totaal in je leven gegeten')
}
calculate(4, 12)
calculate(50, 3)
calculate(35, 0.5)
