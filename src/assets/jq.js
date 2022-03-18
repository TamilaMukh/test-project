import $ from 'jquery'

$(document).ready(function() {
    var value = [];
    console.log(value.length)
    var value2 = [];
    var butVal = null;
    var b = null;
    var oper = false;
    var c = null;
    var operation = null;
    var canCount = true;
    console.log(operation);
    if (canCount) {
        $('.num-set').on('click', function() {
            if ( oper === false) {
                butVal = $(this).val();
                value.push(butVal);
                b = parseInt(value.join(''));
                $('.out').val(b);
                console.log(b);  
                console.log("Massiv 1"); 
            } else {
                butVal = $(this).val();
                value2.push(butVal);
                c = parseInt(value2.join(''));
                $('.out').val(c);
                console.log(c); 
                console.log("Massiv 2");   
            }     
        });
    }
    if (canCount) {
        $('.oper-set').on('click', function() {
            if ($(this).hasClass("plus")) {
                console.log('Summa');
                operation = "b + c";
            } else if ($(this).hasClass("minus")) {
                console.log('Vyichitanie');
                operation = "b - c";
            } else if ($(this).hasClass("times")) {
                console.log('Umnozhenie');
                operation = "b * c";
            } else  {
                console.log('Delenie');
                operation = "b / c";
            }
            oper = true;
            $('.out').val('');         
        });
    }
    $('.sqrt').on('click', function() {
        if (oper && value.length > 0) {
            console.log('no');
        } else {
            butVal = Math.sqrt(b);
            $('.out').val(Math.sqrt(b));    
            b = Math.sqrt(b);  
            value = [];
            value2 = [];          
            c = 0;
            canCount = true;
            oper = false;       
            canCount = false;           
        }
    });
    $('.equal').on('click', function() {
        $('.out').val(eval(operation));    
        butVal = eval(operation);
        b = eval(operation);  
        value = [];
        value2 = [];          
        c = 0;
        canCount = true;
        oper = false;       
        canCount = false;        
    });
    $('.del').on('click', function() {
        $('.out').val('');
        if (oper === false) {
            value = [];
        } else {
            value2 = [];
        }
    });
    $('.reset').on('click', function() {
        $('.out').val(0); 
        value = [];
        value2 = [];    
        butVal = 0;
        b = 0;
        c = 0;
        canCount = true;
        oper = false;
    });

    var massiv = [
        {
            "id": 1,
            "title":  "Citizen Kane",
            "date": "September 4, 1941 | Approved",
            "desc": "Following the death of a publishing tycoon, news reporters scramble to discover the meaning of his final utterance.",
            "user_s": 8.4,
            "meta_s": 100,
            "img": "https://static.metacritic.com/images/products/movies/5/1c4da52a6f2335836a21271ec4a6f6b3-98.jpg"
        },
        {
            "id": 2,
            "title":  "The Godfather",
            "date": "March 11, 1972 | R",
            "desc": "Francis Ford Coppola's epic features Marlon Brando in his Oscar-winning role as the patriarch of the Corleone family. Director Coppola paints a chilling portrait of the Sicilian clan's rise and near fall from power in America, masterfully balancing the story between the Corleone's family life and the ugly crime business in which they are engaged. Based on Mario Puzo's best-selling novel and featuring career-making performances by Al Pacino, James Caan and Robert Duvall, this searing and brilliant film garnered ten Academy Award nominations, and won three including Best Picture of 1972. [Paramount Pictures]",
            "user_s": 9.2,
            "meta_s": 100,
            "img": "https://static.metacritic.com/images/products/movies/3/47c2b1f35087fc23c5ce261bbc3ad9e0-98.jpg"
        },
        {
            "id": 3,
            "title":  "Rear Window",
            "date": "September 1, 1954 | TV-G",
            "desc": "A wheelchair-bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder.",
            "user_s": 8.8,
            "meta_s": 100,
            "img": "https://static.metacritic.com/images/products/movies/9/0d63e9ade174d351943b09982a5022fe-98.jpg"
        }, 
        {
            "id": 4,
            "title":  "Casablanca",
            "date": "January 23, 1943 | TV-PG",
            "desc": "A Casablanca, Morocco casino owner in 1941 shelters his former lover and her husband, a Czechoslovakian freedom fighter, from the Nazis.",
            "user_s": 8.8,
            "meta_s": 100,
            "img": "https://static.metacritic.com/images/products/movies/3/2e9475e10998b61bf8a18fd38436a30e-98.jpg"
        }                             
    ];

    $.each(massiv, function (index, value) {
        $('.addBlock').append("<div class='single singleBlock-" + index + "'>" + "<img>" + "<div class='info'>" + "<h1></h1>" + "<small></small>" + "<p class='desc'></p>" + "<div class='scores'>" + "<p class='meta'></p>" + "<p class='user'></p>" + "</div>" + "</div>" + "</div>");
        $('.addBlock .singleBlock-' + index + ' h1').append(value.id + ". " + value.title);
        $('.addBlock .singleBlock-' + index + ' img').attr('src', value.img);
        $('.addBlock .singleBlock-' + index + ' .desc').append(value.desc);
        $('.addBlock .singleBlock-' + index + ' small').append(value.date);
        $('.addBlock .singleBlock-' + index + ' .meta').append("<div>" + "<p>Meta Score:</p>" + "<span>" + value.meta_s + "</span>" + "</div>");
        $('.addBlock .singleBlock-' + index + ' .user').append("<div>" + "<p>User Score:</p>" + "<span>" + value.user_s + "</span>" + "</div>");
    });  
    
    var skillbox = [
        {
            "image": "https://248006.selcdn.ru/main/iblock/97a/97a7a22f93c5595fdbf58673b51e7db4/a1a6b1645ba28478f78e7cd00023c58b.png",
            "tag": "БИЗНЕС",
            "rubric": "#ИНТЕРВЬЮ",
            "day": "18 мар 2022",
            "heading": "Инженер с птицефабрики создал робота с голосом мёртвого деда. Мы узнали у него, как и зачем",
            "description": "«Терминатор» из России не планирует захватывать мир. Вместо этого он рассуждает о жизни и смерти."
        },
        {
            "image": "https://248006.selcdn.ru/main/iblock/260/2608818df7cab151c94ae075fb4273e0/ccbd890af3b83134dec320241fdcc8a5.png",
            "tag": "ДИЗАЙН",
            "rubric": "#РУКОВОДСТВА",
            "day": "18 мар 2022",
            "heading": "Figma Mirror: что это и зачем нужно",
            "description": "Рассказываем, как самостоятельно проверить макет прямо в телефоне, не привлекая к этому программистов."
        },
        {
            "image": "https://248006.selcdn.ru/main/iblock/309/309568175b6ddc788c264b7807f081c2/50a9550a07390af3f3643e95144d360d.jpg",
            "tag": "УПРАВЛЕНИЕ",
            "rubric": "#СТАТЬИ",
            "day": "18 мар 2022",
            "heading": "60% новаций в компаниях проваливаются. Что такое управление изменениями и как оно поможет",
            "description": "Подробный гайд для менеджеров. Кто должен внедрять изменения в компании, как уже на старте оценить шансы на успех и какие методики использовать."
        },
        {
            "image": "https://248006.selcdn.ru/main/iblock/2e2/2e253970fc8d3cdac343319a3cd04b86/bf735c37e122d6c7eb95effb333b9966.png",
            "tag": "КОД",
            "rubric": "#СТАТЬИ",
            "day": "18 мар 2022",
            "heading": "Как уехать за границу в 2022 году: подробный гайд по релокейту для айтишников",
            "description": "Поговорили с создателем чата «Релокейти» о том, какие страны открыты для россиян, как организовать переезд и есть ли шанс найти работу за границей."
        },
        {
            "image": "https://248006.selcdn.ru/main/iblock/ba6/ba6c83d37fb0d2f9a2f042163bfe954d/77b7fe0cd527f87193512f276b888a49.png",
            "tag": "ДИЗАЙН",
            "rubric": "#СТАТЬИ",
            "day": "18 мар 2022",
            "heading": "Фирменный стиль: зачем он нужен и что в него входит",
            "description": "Рассказываем, как набор элементов дизайна формирует идентичность бренда."
        },
        {
            "image": "https://248006.selcdn.ru/main/iblock/f19/f19863cfcff827b1d53d335660ed47a5/9b588223dd2319d5eb28dd13590d23d4.jpg",
            "tag": "МАРКЕТИНГ",
            "rubric": "#ИСТОРИИ",
            "day": "18 мар 2022",
            "heading": "«Чувство ответственности я приобрёл, работая в больнице. Но оно помогает мне в маркетинге»",
            "description": "Андрей работал медбратом, спасал жизни во время эпидемии коронавируса. Захотев спокойствия, он вернулся к тому, что влекло его с детства, — к рекламе."
        }
    ];
    $.each(skillbox, function (index, value) {
        $('.skillbox').append("<div class='twain twainBox-" + index + "'>" + 
        "<img>" + "<p class='tag tagdva'></p>" +
        "<div class='info'>" + "<div class='melkiytext-one'>" + "<a href='#' class='rubrica'></a>" + "</div>" + 
        "<div class='melkiytext-two'>" + "<small></small>" + "</div>" + "</div>" + 
        "<p class='heading'></p>" + "<p class='description'></p>" +
         "</div>");
        $('.skillbox .twainBox-' + index + ' img').attr('src', value.image);
        $('.skillbox .twainBox-' + index + ' .tag').append(value.tag);
        $('.skillbox .twainBox-' + index + ' .rubrica').append(value.rubric);
        $('.skillbox .twainBox-' + index + ' small').append(value.day);
        $('.skillbox .twainBox-' + index + ' .heading').append(value.heading);
        $('.skillbox .twainBox-' + index + ' .description').append(value.description);
    }); 
});