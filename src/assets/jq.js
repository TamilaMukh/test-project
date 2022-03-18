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
});