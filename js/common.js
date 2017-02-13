






// 
//var  lang, langTLC, outFromLoop;
//lang = prompt("Введите изучаемый язык", 'QBasic');
//outFromLoop = 0;


 //-=(1)=- C ИСПОЛЬЗОВАНИЕМ КОНСТРУКЦИИ if ... else:


//if (!lang) {
//    alert( 'Вы не хотите отвечать на вопрос' );
//} else {
//    langTLC = lang.toLowerCase();
//    if (langTLC  == 'english' || langTLC == 'deutsch' || langTLC == 'английский' || langTLC == 'немецкий') {
//        alert( 'Введите язык програмирования!' );
//    } else if (langTLC == "js" || langTLC == "javascript" || langTLC == "java script" ) {
//        alert("Верно! Вы изучаете JavaScript!");
//    } else if (langTLC == "phyton" || langTLC == "c++" || langTLC == "c#"|| langTLC == "php" || langTLC == "java" || langTLC == "basic" || langTLC == "qbasic") {
//        alert("Нет, Вы изучаете другой язык програмирования!");
//    } else {
//        alert("В базе программы нет такогоязыка програмирования!");
//    }
//}


// -=(2)=- C ИСПОЛЬЗОВАНИЕМ КОНСТРУКЦИИ if ... else + "?":


//if (!lang) {
//    alert( 'Вы не хотите отвечать на вопрос.' );
//} else {
//    langTLC = lang.toLowerCase();
//    (langTLC  == 'english' || langTLC == 'deutsch' || langTLC == 'английский' || langTLC == 'немецкий') ? 
//        alert( 'Введите язык програмирования!' ): 
//    (langTLC == "js" || langTLC == "javascript" || langTLC == "java script" ) ? 
//        alert("Верно! Вы изучаете JavaScript!"): 
//    (langTLC == "phyton" || langTLC == "c++" || langTLC == "c#"|| langTLC == "php" || langTLC == "java" || langTLC == "basic" || langTLC == "qbasic") ? 
//        alert("Нет, Вы изучаете другой язык програмирования!"): 
//        alert("В базе программы нет такогоязыка програмирования!");
//}

// -=(3)=- КАК ПОМЕСТИТЬ УСЛОВИЕ В УСЛОВИЕ В ОПЕРАТОРЕ "?" ?

//(!lang) ? alert( 'Вы не хотите отвечать на вопрос' ) :  langTLC = lang.toLowerCase(), (langTLC  == 'english' || langTLC == 'deutsch' || langTLC == 'английский' || langTLC == 'немецкий') ? 
//    alert( 'Введите язык програмирования!' ): 
//(langTLC == "js" || langTLC == "javascript" || langTLC == "java script" ) ? 
//    alert("Верно! Вы изучаете JavaScript!"): 
//(langTLC == "phyton" || langTLC == "c++" || langTLC == "c#"|| langTLC == "php" || langTLC == "java" || langTLC == "basic" || langTLC == "qbasic") ? 
//    alert("Нет, Вы изучаете другой язык програмирования!"): 
//alert("В базе программы нет такогоязыка програмирования!");


// -=(4)=- C ИСПОЛЬЗОВАНИЕМ КОНСТРУКЦИИ switch ... case ?
 

//if (lang != null) {
//    langTLC = lang.toLowerCase();
//}
//switch(lang) {
//    case null: // выводим алерт по отмене.
//        alert( 'Вы не хотите отвечать на вопрос.');
//        break;
//    case "":   // тут исключаем пустую строку, а как исключить строку состоящую только из пробелов?
//        alert( 'Вы ничего не ввели.');
//        break;
//    default:
//        switch(langTLC) {
//            case 'english':
//            case 'deutsch':
//            case 'английский':
//            case 'немецкий':
//                alert( 'Введите язык програмирования!');
//                break;
//            case 'js':
//            case 'javascript':
//            case 'java script':
//                alert("Верно! Вы изучаете JavaScript!");
//                break;
//            case 'phyton':
//            case 'c++':
//            case 'c#':
//            case 'php':
//            case 'java':
//            case 'basic':
//            case 'qbasic':
//                alert("Нет, Вы изучаете другой язык програмирования!");
//                break;
//            default:
//                alert("В базе программы нет такогоязыка програмирования!"); 
//        }
//}

//function ifNull() {
//    if (lang != null) {
//        langTLC = lang.toLowerCase();
//    }
//}
//ifNull();
//
//function repeatEnter() {
//    lang = prompt("Повторите...", 'QBasic');
//    ifNull()
//}
//outer:
//while (outFromLoop !=1) {
//    switch(lang) {
//        case null: // выводим алерт по отмене.
//            alert( 'Вы не хотите отвечать на вопрос.');
//            break outer;
//        default: 
//            switch(langTLC) {
//                case "":   // тут исключаем пустую строку, а как исключить строку состоящую только из пробелов?
//                    alert( 'Вы ничего не ввели.');
//                    repeatEnter();
//                    break;
//                case 'english':
//                case 'deutsch':
//                case 'английский':
//                case 'немецкий':
//                    alert( 'Введите язык програмирования!');
//                    repeatEnter();
//                    break;
//                case 'js':
//                case 'javascript':
//                case 'java script':
//                    alert("Верно! Вы изучаете JavaScript!");
//                    outFromLoop = 1;
//                    break;
//                case 'phyton':
//                case 'c++':
//                case 'c#':
//                case 'php':
//                case 'java':
//                case 'basic':
//                case 'qbasic':
//                case 'fortran':
//                    alert("Нет, Вы изучаете другой язык програмирования!");
//                    repeatEnter();
//                    break;
//                default:
//                    alert("В базе программы нет такого языка програмирования!"); 
//                    repeatEnter();
//            } 
//        }
//}