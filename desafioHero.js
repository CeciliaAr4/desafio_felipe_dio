
nome = input("Digite o nome do herói: ")
xpHero = int(input("Digite seu nivel de Xp"))

if (xpHero >= 1000){
    xpHero = "Ferro";
} else if (xpHero >= 1001 && xpHero <=2000){
    nivel = "Bronze";
} else if (xpHero >= 2001 && xpHero <=5000){
    nivel = "Prata";
} else if (xpHero >= 5001 && xpHero <=7000){
    nivel = "Ouro";
} else if (xpHero >= 7001 && xpHero <=8000){
    nivel = "Platina";
} else if (xpHero >= 8001 && xpHero <=9000){
    nivel = "Ascendente";
} else if (xpHero >= 9001 && xpHero <=10000){
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}


alert('O Herói de nome ${ nome } está no nível de ${ nivel }'); 