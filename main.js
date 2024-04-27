//  if 1
//sharti
//  if1. Butun son berilgan. Agar, berilgan son musbat bo'lsa, 1 ga oshirilsin, ak
// o'zgartirilmasin. Hosil bo'lgan sonni ekranga chiqaruvchi programma tuzilsin

// let i = +prompt("son kiriting : ")

// if(i>0){
// 	i+=1
// 	console.log(i);
// }
// else{
// 	console.log("i manfiy son");
// }

// if  2

// if2. Butun son berilgan. Agar, berilgan son musbat bo'lsa, 1 ga oshiring, aga
// manfiy bo'lsa 2 ga kamaytiring. Agar 0 ga teng bo'lsa, 10 ni o'zlashtirsin. H
// bo'lgan sonni ekranga chiqaruvchi programma tuzilsin.

// let i = +prompt("son kiriting : ")

// if(i>0){
// 	i+=1
// 	console.log(i);
// }
// else if(i<0){
// 		i-=2
// 	console.log(i);
// }
// else if(i==0){
// 	i=10
// 	console.log(i);
// }

// if3. Uchta musbat son berilgan. Shu sonlar orasidan nechta butun son borligi
// aniqlovchi programma tuzilsin.

// let a = 1.2
// let b = 2
// let c = 3.3
// let butunson = 0

// if (a === Math.floor(a)) butunson++
// if (b === Math.floor(b)) butunson++
// if (c === Math.floor(c)) butunson++

// console.log(butunson) // Natija: 1

// if4. Ikkita butun son berilgan. Shu sonlarning kattasini aniqlovchi programm
// tuzilsin.

// let a = +prompt("a sonini kiriting :")
// let b = +prompt("b sonini kiriting :")

// if (a>b){
// 	alert("a soni  b sonidan kotta ");
// }
// else if(a==b){
// 	alert("a va b soni teng ");
// }
// else{
// 	alert("b soni  a sonidan kotta ");
// }

// if5. Ikkita butun son berilgan. Shu sonlarning kichigini tartib raqamini aniql
// programma tuzilsin.

// let a = +prompt('a sonini kiriting :')
// let b = +prompt('b sonini kiriting :')

// if (a > b) {
// 	alert('2- kiritilgan son kichik ')
// } else if (a == b) {
// 	alert('1 va 2 soni teng ')
// } else {
// 	alert('1 - kiritilgan son kichik')
// }

// if6. Ikkita butun son berilgan. Shu sonlarning avval kattasini keyin kichigini
// ekranga chiqaruvchi programma tuzilsin

// let a = +prompt("a sonini kiriting :")
// let b = +prompt("b sonini kiriting :")

// if (a>b){
// 	alert( a , " " , b);
// }
// else if(a=b){
// 	console.log("teng kirigazib quydingiz   har hil kiriting ");
// }
// else{
// 	alert( b ," " , a);
// }

/*if7. A va B haqiqiy sonlari beringan. Shu sonlarni shunday o'zgartirish kerak
A son kichik B son katta bo'lsin. A va B ning qiymati ekranga chiqarilsin.*/

// let a = +prompt("a sonini kiriting :")
// let b = +prompt("b sonini kiriting :")
// let d;
// if (a>b){

// 	d=a;
// 	a=b;
// 	b=d;
// 	alert("a=" + a +" b=" + b);
// }

// if 8

// let a = +prompt("a sonini kiriting :")
// let b = +prompt("b sonini kiriting :")

// if (a!=b){
// 	a=a+b
// 	b=a
// 	console.log( a + " = a   va b = "  +  b ) ;
// }

// else{
// 	a=0
// 	b=0

// 	console.log( a + " = a   va b = "  +  b ) ;
// }

// if 9

// let a = +prompt('a sonini kiriting :')
// let b = +prompt('b sonini kiriting :')

// if (a != b) {
// 	if (a > b) b = a
// 	else a = b
// 	console.log(a + ' = a   va b = ' + b)
// } else {
// 	a = 0
// 	b = 0

// 	console.log(a + ' = a   va b = ' + b)
// }

// switch 1
// Case1. K butun soni berilgan. Baho natijalarini chiqaruvchi programma
// tuzing.(1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yahshi, 5-a'lo). Agar k soni 1-5
// gacha oraliqqa tegishli bo'lmasa "xato" deb chiqarilsin.  java scriptda qilinsin


//  let k=+prompt("bahoyingizni kiriting : ")
// switch(k) {
// 	case 1:
// 			alert ("yomon");
// 			break
// 	case 2:
// 			alert ("qoniqarsiz");
// 			break
// 	case 3:
// 			alert ("qoniqarli");
// 			break
// 	case 4:
// 			alert ("yahshi");
// 			break
// 	case 5:
// 			alert ("a'lo");
// 			break
// 	default:
// 			alert ("xato");

// }


// case 2
// Case2. Oy raqamini berilgan. Kiritilgan oy qaysi faslga tegishli ekanligini
// chiqaruvchi programma tuzilsin. (Masalan: 2 chi oy, "qish")
// switch dan foydalanib

// let oy = +prompt('oyning  raqami : ')
// switch (oy) {
// 	case 12:
// 	case 1:
// 	case 2:
// 		alert('qish')
// 		break
// 	case 3:
// 	case 4:
// 	case 5:
// 		alert('bahor')
// 		break
// 	case 6:
// 	case 7:
// 	case 8:
// 		alert('yoz')
// 		break
// 	case 9:
// 	case 10:
// 	case 11:
// 		alert('kuz')
// 		break
// 	default:
// 		alert ('xato')
// }

// case 3 


// Case3. Oy raqami berilgan. Shu oyda nechta kun borligini aniqlovchi programma
// tuzilsin.
// let oy = +prompt('oyning  raqami : ')

// switch(oy) {
// 	case 1:
// 	case 3:
// 	case 5:
// 	case 7:
// 	case 8:
// 	case 10:
// 	case 12:
// 			alert("31 kun");
// 			break;
// 	case 4:
// 	case 6:
// 	case 9:
// 	case 11:
// 			alert("30 kun");
// 			break;
// 	case 2:
// 			alert("28 yoki 29 kun (kabisa yilida)");
// 			break;
// 	default:
// 			alert("xato");
// }

//  case 4

// Case4. Uzinlik birliklari quyidagi tartibda berilgan. 1-desimetr, 2-kilometr, 3-metr,
// 4-millimeter, 5- santimetr. Uzunlik birligini bildiruvchi son berilgan (1 - 5
// oraliqda) va shu birlikdagi kesma uzunligi berilgan (haqiqiy son). Kesmaning
// uzunligini metrlarda ifodalofchi programma tuzilsin.
// alert orqali chiqazilsin

// let birlik = +prompt("uzunlik birliklarini  kiriting : ")
// let kesma = +prompt("kesmani kiriting :")
// let metr;
// switch(birlik) {
// 		case 1:
// 				metr = kesma / 10; // desimetrni metrga o'tkazish
// 				break;
// 		case 2:
// 				metr = kesma * 1000; // kilometrni metrga o'tkazish
// 				break;
// 		case 3:
// 				metr = kesma; // metr
// 				break;
// 		case 4:
// 				metr = kesma / 1000; // millimeterni metrga o'tkazish
// 				break;
// 		case 5:
// 				metr = kesma / 100; // santimeterni metrga o'tkazish
// 				break;
// 		default:
// 				alert("xato");
// 				break
// }
// alert(metr + " metr");


//Case 5 


// Case5. Og'irlik birliklari quyidagi tartibda berilgan. 1-kilogramm, 2-milligramm,
// 3-gramm, 4-tonna, 5- sentner. Og'irlik birligini bildiruvchi soni berilgan va shu
// birlikdagi og'irlik qiymati berilgan. Og'irlikni kilogramda ifodalofchi programma
// tuzilsin.

// let birlik = +prompt("og'irlik  birliklarini  kiriting : ")
// let qiymat = +prompt("qiymatini  kiriting :")

// let kilogramm;
//     switch(birlik) {
//         case 1:
//             kilogramm = qiymat; // kilogramm
//             break;
//         case 2:
//             kilogramm = qiymat / 1e6; // milligrammni kilogrammga o'tkazish
//             break;
//         case 3:
//             kilogramm = qiymat / 1000; // grammni kilogrammga o'tkazish
//             break;
//         case 4:
//             kilogramm = qiymat * 1000; // tonnani kilogrammga o'tkazish
//             break;
//         case 5:
//             kilogramm = qiymat * 50; // sentnerni kilogrammga o'tkazish
//             break;
//         default:
//             alert("xato");
            
//     }
//     alert(kilogramm + " kilogramm");


//Case 6 
// Case6. Sanani bildiruvchi ikkita butun son berilgan D (kun) va M (oy). (Kabisa
// bo'lmagan yil sanasi kiritiladi). Berilgan sanani ifodalovchi programma tuzilsin.
// Kabisa yilida 366 kun, kabisa bo'lmagan yilda 365 kun bor bo'ladi.
  

// let D = +prompt("kuni sanasini  kiriting : ")
// let M = +prompt("oy raqamini kiriting kiriting :")

// let oy = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"];
//     let kun, oyIndex;
//     switch(M) {
//         case 1:
//             kun = D % 31;
//             oyIndex = Math.floor(D / 31);
//             break;
//         case 2:
//             kun = (D - 31) % 28;
//             oyIndex = 1 + Math.floor((D - 31) / 28);
//             break;
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//         case 7:
//         case 8:
//         case 9:
//         case 10:
//         case 11:
//         case 12:
//             kun = (D - 59 - ((M - 3) * 31) - Math.floor((M - 3) / 2)) % 31;
//             oyIndex = M - 1 + Math.floor((D - 59 - ((M - 3) * 31) - Math.floor((M - 3) / 2)) / 31);
//             break;
//         default:
//             alert("xato");
            
//     }
//     if (oyIndex >= 12) {
//         oyIndex = oyIndex % 12;
//     }
//     alert(kun + " " + oy[oyIndex]);
