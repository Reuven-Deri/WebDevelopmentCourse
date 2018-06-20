function ArrowDownMenu(event) {
    /*
    event.target.querySelector(".arrow-left").classList.add("arrow-down");
    event.target.querySelector(".arrow-left").classList.remove("arrow-left");
    */
}

function ArrowLeftMenu(event) {
    /*
    event.target.querySelector(".arrow-down").classList.add("arrow-left");
    event.target.querySelector(".arrow-down").classList.remove("arrow-down");
    */
}


function ChangeColor(event) {
    var color1 = "black";
    var color2 = "white";
    var link = document.querySelectorAll("a");
    for (var i = 0; i < link.length; i++) {
        link[i].style.color = color1;

        if (link[i].id == "logoIndex" || link[i].id == "logoPic" )
        {
        }
        else {
            link[i].style.backgroundColor = color2;

        }
    }
}

var dontHavIt_Array = new Array("יש לך את היכולת! עכשיו נותר רק להשתמש בה", "כוח רצון זה המפתח!", "דרישה זו רלוונטית לכל משרה, אז יאללה לעבודה!", "אף פעם לא מאוחר להתחיל", "שמענו שזה עוזר לקרוא ספר...", "חשוב לזכור שהמטרה של כל חברי הצוות היא משותפת: הצלחת המשימה", "תכונה זו נדרשת לתפקיד ובכלל לחיים", "זכור, הכל בסוף מתבסס על תקשורת טובה", "ללא האחריות לא תבוא ההצלחה", "איש אינו מת מעודף סבלנות" );
var havIt_Array = new Array("לפעמים לוקח זמן עד שלומדים לעשות דברים לבד- יפה שאתה מסוגל לזה!", "נראה שמצאת את השיטה - תדבק בה", "מצוין! ידע זה חשוב כמעט לכל תפקיד", " טוב היות האדם טכנולוגי", "מעולה, אנחנו בדיוק מחפשים כתבים לאתר!", "דע לך שעבודת צוות מחלקת את המאמץ ומכפילה את ההצלחה", "הידד! כל האופציות פתוחות בפנייך ", "נפלא! הרעיון הבסיסי הוא לדעת להקשיב ולהביע את עצמך", "יפה מאוד! האחריות היא הסוד להצלחה", "יפה! בימינו תכונה זו היא יתרון עצום");
var counterHaveIt = 0;
var counterDontHaveIt = 0;

function DontHaveIt(event) {
    var array = document.querySelectorAll(".card");
    var eventID = event.target.id;
    var index = parseInt(eventID, 10);
    array[index].querySelector("button").classList.add("collapsed");
    array[index].querySelector(".collapse").classList.remove("show");
    if (array[index].querySelector("i").classList.contains("fa-check"))
        {
        array[index].querySelector("i").classList.remove("fa-check");
    }
    array[index].querySelector("i").classList.add("fa-times");
    array[index].querySelector("i").setAttribute("aria-label", "איקס- עדיין אין לי את זה");

    array[index].querySelector(".response_sentence").innerHTML = dontHavIt_Array[index];
    array[index].querySelector(".response_sentence").style.color = "red";
    array[index].querySelector("button").setAttribute("aria-expanded", "false"); 

}


function HaveIt(event) {
    var array = document.querySelectorAll(".card");
    var eventID = event.target.id;
    var index = parseInt(eventID, 10);
    array[index].querySelector("button").classList.add("collapsed");
    array[index].querySelector(".collapse").classList.remove("show");
    if (array[index].querySelector("i").classList.contains("fa-times")) {
        array[index].querySelector("i").classList.remove("fa-times");
    }
    array[index].querySelector("i").classList.add("fa-check");
    array[index].querySelector("i").setAttribute("aria-label", "וי- יש לי את זה");

    array[index].querySelector(".response_sentence").innerHTML = havIt_Array[index];
    array[index].querySelector(".response_sentence").style.color = "#4198df";
    array[index].querySelector("button").setAttribute("aria-expanded", "false"); 
}

function FqaBtn(event) {
    var array = document.querySelectorAll(".collapse");
    var arrayBtn = document.querySelectorAll("#accordion button");

    var eventID = event.target.id;
    var index = parseInt(eventID, 10);
    for (var i = 0; i < array.length; i++) {

        if (array[i].classList.contains("show") == false && i == index) {
            arrayBtn[i].classList.add("minus");
            arrayBtn[i].classList.remove("plus");
            arrayBtn[i].innerHTML = "-";
        }
        else {
            arrayBtn[i].classList.remove("minus");
            arrayBtn[i].classList.add("plus");
            arrayBtn[i].innerHTML = "+";

        }
    }
}

function printPDF() {
    window.print();

}

function ChangeBoard(event) {
    var active = document.querySelector(".activePov");
    var no_active = document.querySelector(".no-activePov");
    active.classList.remove("activePov");
    active.classList.add("no-activePov");

    no_active.classList.add("activePov");
    no_active.classList.remove("no-activePov");
}

var boolean = false;
var FqaClicked = false;
function OpenAll(event) {
    var array = document.querySelectorAll(".collapse");
    var arrayBtn = document.querySelectorAll("#accordion button");

    for (var i = 0; i < array.length; i++) {

        if (boolean == false) {
            arrayBtn[i].classList.add("minus");
            array[i].classList.add("show");
            arrayBtn[i].classList.remove("plus");
            arrayBtn[i].innerHTML = "-";
            arrayBtn[i].setAttribute("aria-expanded", "true"); 
            if (i === (array.length-1))
            {
                boolean = true;
                event.target.innerHTML = "▲ סגור הכל";
                event.target.classList.remove("plus");
                event.target.classList.add("minus");
            }
        }
        else {
            array[i].classList.remove("show");
            arrayBtn[i].classList.remove("minus");
            arrayBtn[i].classList.add("plus");
            arrayBtn[i].innerHTML = "+";
            arrayBtn[i].setAttribute("aria-expanded", "false"); 
            if (i === (array.length - 1)) {
                boolean = false;
                event.target.innerHTML = " ▼ פתח הכל";
                event.target.classList.remove("minus");
                event.target.classList.add("plus");
            }
        }
    }
}

function ShowFolder(event) {
    var folder_array = document.querySelectorAll(".folder_hover");

    var index = parseInt(event.target.id, 10);
    var folder = folder_array[index];
        folder.classList.remove("no-activePov");
        folder.classList.add("activePov");

        var folderBG = document.querySelector("#folderDesign");
        folderBG.classList.toggle("folder_close2");

        var folder_context = document.querySelector("#FolderOpen");
        folder_context.classList.add("no-activePov");
}

function DontShowFolder(event) {
    var folder_array = document.querySelectorAll(".folder_hover");

    var index = parseInt(event.target.id, 10);
    var folder = folder_array[index];
        folder.classList.remove("activePov");
        folder.classList.add("no-activePov");
    var folderBG = document.querySelector("#folderDesign");
    folderBG.classList.toggle("folder_close2");
    var folder_context = document.querySelector("#FolderOpen");
    if (document.querySelector("#employe_job_now").textContent != "") {
        folder_context.classList.remove("no-activePov");
    }
}
var click = false;

function PickFolder(event) {
    var folderBG = document.querySelector("#folderDesign");
    folderBG.classList.add("folder_open");

    var info_header = document.querySelector("#info_header");
    var info_content = document.querySelector("#info_content");

    var folder_context = document.querySelector("#FolderOpen");
    var name = document.querySelector("#employe_name");
    var pic = document.querySelector("#employe_pic");
    var p = document.querySelector("#employe_job_now");
    var newId = parseInt(event.target.id, 10);
    document.querySelector(".padding_right_suscces").id = newId;
    var folder_array = document.querySelectorAll(".folder_hover");
    var index = parseInt(event.target.id, 10);
    var folder_tab_active = document.querySelectorAll("#folder_tabs>li");

    name.innerHTML = folder_array[index].querySelector("h2").textContent;
    pic.src = folder_array[index].querySelector("img").src;
    p.innerHTML = folder_array[index].querySelector("p.p_Job_title_now").textContent;

    folder_context.classList.remove("no-activePov");
    folder_context.classList.add("activePov");
    for (var i = 0; i < folder_tab_active.length; i++) {
        if (index == i) {
            folder_tab_active[index].classList.add("hoverTab");
        }
        else {
            folder_tab_active[i].classList.remove("hoverTab");
        }
    }

    var folder_array_btn = document.querySelectorAll(".button_succes >button ");
    var indexOfClicked;
    for (var i = 0; i < folder_array_btn.length; i++) {
        if (folder_array_btn[i].classList.contains("buttonClicked")) {
            folder_array_btn[i].classList.remove("buttonClicked");
            info_content.innerHTML = " ";
            info_header.innerHTML = "";
            click = false;
        }
    }
}


var info_content_array0 = new Array("12 שנות לימוד", "פרויקט שובל חברת NESS", "התחלתי כמטמיע ולאחר חודש קודמתי לתפקיד המדריך. לאחר כחצי שנה, התקדמתי לתפקיד של ראש צוות הדרכה. לאחר כשנה וחצי קיבלתי לנהל צוות הדרכה נוסף ומוקד תמיכה.", "להיות מטמיע זה להבין שאתה נמצא בתפקיד שלך, כי לבני אדם קיימת תכונה טבעית של קושי וחשש משינויים. עליך להציג את היתרונות במערכת החדשה שאותה אתה מטמיע, ולשווק אותם- גם כאשר למוטמע קיים קושי עם השינוי.", "יתרון: היכרות עם עולם טכנולוגי ועם מבנים ארגוניים. חיסרון: זמניות התפקיד (ככל שמילאת את תפקיד בצורה טובה יותר, כך הוא הסתיים מהר יותר)", "צריך לעבוד מהבטן, עם תשוקה למקום העבודה. אני מאמין שאם אתה לא קם בחיוך לעבודה, כנראה שאתה צריך לחפש מקום עבודה אחר. ");
var info_content_array1 = new Array("12 שנות לימוד", "בנק לאומי דרך חברת NESS", "התחלתי בתור מטמיע בבנק לאומי, הייתי מטמיע SAP בפרויקט מאור של חברת החשמל. לאחר מכן הייתי במודול PS ועברתי לPM שם הייתי גם מדריך וגם מטמיע. אחרי זה קודמתי לתפקידי כיום- PMO. ", "הדבר הכי חשוב- להשרות ביטחון לאדם שאתה מסביר לו, לקחת לימונים ולעשות מהם לימונדה.", "יתרון: במהלך התפקיד יוצא לך לפגוש מגוון של אנשים ובנוסף, העבודה מגוונת. חיסרון: חוסר מעש לפעמים", "צריך להתחבר עם האנשים הנכונים- ליצור קשרים וגם להראות להם במה אתה טוב. לייחצן את עצמך.");
var info_content_array2 = new Array("תואר ראשון בכלכלה ולוגיסטיקה באוניברסיטת בר אילן", "מטמיע SAP בפרויקט שובל של חברת החשמל", "התחלתי כמטמיע בפרויקט שובל באפריל 2016, לאחר מכן התקדמתי לתפקיד של בדיקות QA בינואר 2017. עברתי לתפקיד הנוכחי בתור מיישם במרץ 2018.", "לתת שירות למשתמש על כל גווניו, גם אם הוא נתקע בכל נושא אחר, המטמיע צריך להיות הגורם המקשר לכל המידע שהוא צריך לקבל. לשאוף שהמידע יהיה מסודר ונגיש, לא לפקפק בידע שלך.", "יתרון: ללמוד בכל יום משהו חדש. חיסרון: התמודדות יום יומית עם בעיות לא צפויות", "אני חושב שבשביל להצליח צריך לצאת ממסגרת התפקיד, לא לעשות את התפקיד רק בתחום הגזרה שאתה אחראי עליה אלא תמיד להגדיל ראש ולעשות מעבר ליכולת שלך. לחשוב מחוץ לקופסה.");
var info_content_array3 = new Array("מנהל עסקים", "פרוייקט נוגה- בנק לאומי. פרויקט של קופת גמל וקרנות השתלמות", "יום לפני שהסתיים הפרויקט בבנק אמרו לי שיש פרויקט בבנק לאומי, אבל רק באוטובוס בדרך לראיון עבודה אמרו לי כי התפנתה משרה בעריית ירושלים שם נכנסתי למשך שנה וחצי- התפקיד היה כעיקרון ניהול פרויקט. בהמשך לאחר שחזרתי מחופשת לידה הגעתי למטה שם ניתנה לי האופציה להיות מקודמת לראש צוות מוביל במכון ויצמן עד התפקיד הנוכחי.", "מטמיע צריך להיות בעל יחסי אנוש מעולים ובעל אוריינטציה מחשובית. תכונות אלו יעזרו לו ליצור סגירת מעגל טיפול.", "יתרון: להכיר הרבה תחומי עניין ומערכות מידע שונות. חיסרון: הרבה פעמים מגיעים לפרויקט ללא ידע כי זמן ההכשרה מאוד קצר, חסר ידע על הארגון והמערכת.", "צריך להיות מוביל בכל מה שאתה עושה, צריך לשמוע ולהרגיש אותך. צריך לרצות לקחת חלק בדברים שהם מעבר לתפקיד שלך ובנוסף, מנהל טוב שיזהה את הפוטנציאל.");
var info_content_array4 = new Array("הנדסה תעשייה וניהול במכללת רופין", "עבדתי בפרויקט כימיקלים בישראל במשך 3 חודשים כמטמיע מטעם חברת ג'ון ברייס", "הייתי מטמיע בפרויקט כימיקלים בישראל במשך 3 חודשים, לאחר מכן עברתי לפרויקט של חברת חשמל (דרך נס) כמטמיע במשך 9 חודשים, לאחר מכן קודמתי לתפקיד המדריך. כמדריך עבדתי במשך שנה. כיום אני עובד בחברת הפניקס כמדריך בכיר ועוסק גם בפיתוח הדרכה.", "האני מאמין שלי זה שמטמיע צריך להיות בן אדם שירותי, סבלני, אחד שיודע להכיל נפשית ובעל רמה מקצועית טובה.", "יתרון: עבודה עם אנשים רוב הזמן בניגוד לעבודות שאתה מול מחשב ולבד. חיסרון: עבודה בדרך כלל מונוטונית- כל הזמן עושה את אותו הדבר.", "אני חושב שבשביל להתקדם אתה צריך לעשות משהו שאתה אוהב ולא בשביל לסמן עליו וי. אני מאוד אוהב את התחום, את ההדרכה והשירותיות. בנוסף, צריך התמדה והשקעה.");


function ButtonInfo(event) {
    var info_header = document.querySelector("#info_header");
    var info_content = document.querySelector("#info_content");
    var person = document.querySelector(".padding_right_suscces").id;
    var index = parseInt(event.target.id, 10);

    if (person ==0) {
        info_content.innerHTML = info_content_array0[index];
    }
    if (person == 1) {
        info_content.innerHTML = info_content_array1[index];
    }
    if (person == 2) {
        info_content.innerHTML = info_content_array2[index];
    }
    if (person == 3) {
        info_content.innerHTML = info_content_array3[index];
    }
    if (person == 4) {
        info_content.innerHTML = info_content_array4[index];
    }

    info_header.innerHTML = event.target.textContent;
}

function ClickOrNot(event) {
        click = true;
    var folder_array_btn = document.querySelectorAll(".button_succes >button ");
    var index = parseInt(event.target.id, 10);
    for (var i = 0; i < folder_array_btn.length; i++)
    {
       
        if (i == index) {
            event.target.classList.add("buttonClicked");

        }
        else {
            if (folder_array_btn[i].classList.contains("buttonClicked")) {
                folder_array_btn[i].classList.remove("buttonClicked");
            }
        }
    }

}

function ButtonInfoOut(event) {
    var info_header = document.querySelector("#info_header");
    var info_content = document.querySelector("#info_content");
    var person = document.querySelector(".padding_right_suscces").id;
    var folder_array_btn = document.querySelectorAll(".button_succes >button ");
    var indexOfClicked;
    var textContent;
    for (var i = 0; i < folder_array_btn.length; i++) {
        if (folder_array_btn[i].classList.contains("buttonClicked")) {
            indexOfClicked = parseInt(document.querySelector(".buttonClicked").id, 10);
            textContent = document.querySelector(".buttonClicked").textContent;
        }
    }
    if (click == true) {
        if (person == 0) {
            info_content.innerHTML = info_content_array0[indexOfClicked];
        }
        if (person == 1) {
            info_content.innerHTML = info_content_array1[indexOfClicked];
        }
        if (person == 2) {
            info_content.innerHTML = info_content_array2[indexOfClicked];
        }
        if (person == 3) {
            info_content.innerHTML = info_content_array3[indexOfClicked];
        }
        if (person == 4) {
            info_content.innerHTML = info_content_array4[indexOfClicked];
        }
        info_header.innerHTML = textContent;

    }
    else {
            info_content.innerHTML = " ";
            info_header.innerHTML = "";
    }
}


function ExitFolder(event) {
    var folderBG = document.querySelector("#folderDesign");
    folderBG.classList.add("folder_close");
    folderBG.classList.remove("folder_open");
    var folder_context = document.querySelector("#FolderOpen");
    document.querySelector("#employe_job_now").textContent= "";

    folder_context.classList.add("no-activePov");
    folder_context.classList.remove("activePov");
}

function fqaQ() {
    var id = location.hash.substring(1)
    var index = parseInt(id, 10);
    if (index >= 0) {
        var array = document.querySelectorAll(".collapse");
        var arrayBtn = document.querySelectorAll("#accordion button");
        for (var i = 0; i < array.length; i++) {

            if (array[i].classList.contains("show") == false && i == index) {
                arrayBtn[i].classList.add("minus");
                arrayBtn[i].classList.remove("plus");
                arrayBtn[i].innerHTML = "-";
                array[i].classList.add("show");
            }
            else {
                arrayBtn[i].classList.remove("minus");
                arrayBtn[i].classList.add("plus");
                arrayBtn[i].innerHTML = "+";

            }
        }
    }

}

function susccesPage() {
    var id = location.hash.substring(1)
    var index = parseInt(id, 10);
    if (index >= 0) {
    var folderBG = document.querySelector("#folderDesign");
    folderBG.classList.add("folder_open");

    var info_header = document.querySelector("#info_header");
    var info_content = document.querySelector("#info_content");

    var folder_context = document.querySelector("#FolderOpen");
    var name = document.querySelector("#employe_name");
    var pic = document.querySelector("#employe_pic");
    var p = document.querySelector("#employe_job_now");
    document.querySelector(".padding_right_suscces").id = index;
    var folder_array = document.querySelectorAll(".folder_hover");
    var folder_tab_active = document.querySelectorAll("#folder_tabs>li");

    name.innerHTML = folder_array[index].querySelector("h2").textContent;
    pic.src = folder_array[index].querySelector("img").src;
    p.innerHTML = folder_array[index].querySelector("p.p_Job_title_now").textContent;

    folder_context.classList.remove("no-activePov");
    folder_context.classList.add("activePov");
    for (var i = 0; i < folder_tab_active.length; i++) {
        if (index == i) {
            folder_tab_active[index].classList.add("hoverTab");
        }
        else {
            folder_tab_active[i].classList.remove("hoverTab");
        }
    }

    var folder_array_btn = document.querySelectorAll(".button_succes >button ");
    var indexOfClicked;
    for (var i = 0; i < folder_array_btn.length; i++) {
        if (folder_array_btn[i].classList.contains("buttonClicked")) {
            folder_array_btn[i].classList.remove("buttonClicked");
            info_content.innerHTML = " ";
            info_header.innerHTML = "";
            click = false;
        }
    }
    }
}
