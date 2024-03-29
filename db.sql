-- Active: 1658703841388@@localhost@3306@emporium_db
DROP DATABASE IF EXISTS emporium_db;
CREATE DATABASE emporium_db;
USE emporium_db;
CREATE TABLE cars (
    id INT PRIMARY KEY AUTO_INCREMENT,
    car_date INT NOT NULL,
    car_name VARCHAR (255) NOT NULL,
    car_price VARCHAR (255) NOT NULL,
    car_description VARCHAR (999) NOT NULL,
    car_image VARCHAR (255)
);
INSERT INTO cars (car_name, car_date, car_price, car_description, car_image)
VALUES (
        '2021 Aston Martin DBS Superleggera Volante', 2021,
        '$369,999',
        "Aston Martin and the James Bond franchise is one relationship that has been fruitful over the years. It's not odd to see MI6 top spy James Bond driving an Aston Martin while saving the world. With Aston Martin being masters in crafting some of the most beautiful grand tourers, you can't go wrong buying one. You get years of history, a secret agent like status and performance to whack a smile on your face. Take, for instance, this lovely 2021 Aston Martin DBS Superleggera Volante we have today. With just 2,598 miles on the clock, all that's left for you to be James Bond is to drive off into the sunset in true grand tourer royalty. Included in the sale is some desirable branded merchandise too, in the form of an Aston Martin umbrella",
        '../assests/images/626b6a19a571503c003954a0_2021-Aston-Martin-DBS-Superleggera-Volante-White-Stone-SCFRMHCV8MGT02491_100-p-800(1).jpeg'
    ),
    (
        '2021 Lamborghini Aventador SVJ Roadster-Grigio', 2021,
        '$1,019,999',
        "Growing up in the Eighties meant you had to have a Lamborghini poster on your bedroom wall; they are the ultimate bedroom poster car, thanks to their unique designs. Turn back the clock today, and even though the brand has seen tougher competition, it's not rare to see a Lamborghini as desktop wallpapers. Their design was not the only factor that made their cars stand out; it's the car's names as well. Keeping in traditions, each car is named after a Spanish fighting bull. With two-door supercars being their expertise since the early Seventies, owning one meant you get a lot of looks as you drive by and experience true Italian performance in all its glory, much like this 2021 Lamborghini SVJ roadster we have today. With just 115 miles reported on the clock, true driving nirvana is just a matter of finding an open road and hearing that V12 roar into action.",
        '../assests/images/6260db845d43271b506d7ca2_2021-Lamborghini-Aventador-SVJ-Roadster-Grigio-Liqueo-ZHWUN6ZDXMLA10769_076-p-800.jpeg'
    ),
    (
        '2022 Bentley Continental GT Speed Convertible Onyx', 2022,
        '$374,999',
        "The British have contributed massively to the world of automobiles, and none more than in the luxury segment. Their much-lauded luxury vehicle manufacturer brand Bentley has been in the business for well over 100 years since 1919. While owned by the Volkswagen Group since 1998, the Bentley brand is still wholeheartedly British. In a bid to increase its presence in the global luxury vehicle market, Bentley introduced the Bentley Continental GT, a grand tourer. It holds the honor as the first Bentley vehicle to step away from hand-build manufacturing to mass production techniques. The Continental GT is currently in its third generation. One of these magnificent 2022 Bentley Continental GT Speed Convertibles is up for sale with just 2,500 miles on the clock.",
        '../assests/images/6262410fc0a683cf69438b11_2022-Bentley-Continental-GT-Speed-Convertible-Onyx-SCBDT4ZGXNC092551_056-p-800.jpeg'
    ),
    (
        '2021 Porsche Taycan Turbo S-White', 2021,
        '$199,999',
        "Upon reading the title, there is a bit of confusion as to why a 'Turbo' badge is stuck on to an EV, but truth be told, 'turbo' is nothing more than an understatement to the Taycan, because along with doing your part for environment, owning this car means that you have one of the quickest Porsches ever, and quite possibly the most brilliant electric vehicle in existence. This brilliant example has over $26,000 in options and is currently up for sale. With under 3,000 miles, it’s practically brand new.",
        '../assests/images/6228256c1417b108be000126_2021-Porsche-Taycan-Turbo-S-White-WP0AC2Y13MSA62297_051-p-800.jpeg'
    ),
    (
        '2022 Porsche 718 Cayman GT4 Coupe Chalk', 2022,
        '$179,999',
        "Since 2005, the Cayman nameplate has appeared on the fixed-head variant of Porsche’s popular entry-level sports car, the Boxster. Porsche wanted a model to slot in below their iconic 911, and the Boxster was born in 1996 to fulfil that need. It’s been one of their best-selling models since then. The fourth generation, or Type 982 would see the naming convention slightly changed to incorporate the 718 name, which is from Porsche’s historical annals, as their racing car which won the Targa Florio in 1959 and 1960. What’s on sale here is a 2022 Porsche 718 Cayman GT4 Coupe in pristine order, with just 1,200 miles on the clock. It’s pretty much a brand-new car that you can buy right now, no waiting lists or supply chain delays to contend with.",
        '../assests/images/2022-Porsche-718-Cayman-GT4-Coupe-Chalk-WP0AC2A89NS275194_081-p-800.jpeg'
    ),
    (
        '2021 Ferrari F8 Tributo Rosso Corsa', 2021,
        '$459,999',
        "The latest addition to Ferrari's range of mid-engined sports cars is the Ferrari F8 Tributo, whose feel, and performance shocks the masses and raises the eyebrow of even the pickiest automotive journalist. Present here, rich in history and all its sports car pedigree, is this 2021 Ferrari F8 Tributo. With 6847 miles on the clock, this is undoubtedly one of Maranello's finest and yours for the taking. What's better? This car has a reported $47,837 ticked off in options.",
        '../assests/images/2021-Ferrari-F8-Tributo-Rosso-Corsa-ZFF92LLA4M0264336_052-p-800.jpeg'
    ),
    (
        '2021 Batmobile Tumbler Black', 2021,
        '$399,999',
        "The Team at Emporium is honored to be selling something like Batman’s Tumbler! Just kidding, it’s not the actual movie car, but a replica that’s currently in Kazakhstan! This custom-built 2021 Batmobile Tumbler is currently not street legal as it’s wider than most street-legal vehicles, but don’t let that stop you if you’re a Batman fan and looking for something wild and weird. The seller reports that he did most of the work himself, and the pictures show that he’s done a great job in creating this the unconventional thing that’s reportedly the only one of its kind in the world!",
        '../assests/images/2021-Batmobile-Tumbler-Black-10101010101010_064-p-800.jpeg'
    ),
(
        '2015 Mclaren 650S Spider Volcano', 2015,
        '$169,999',
        "The McLaren brand boasts a history in racing and performance-oriented machines. Driving an McLaren is an experience in itself, with British engineering at its finest. With the product lineup revived after a long break, the automotive world was treated to a host of performance machines that set the tone for the McLaren brand for the years to come. One particular car is the McLaren 650 S, an improved and refined MP4-12C and one that can whack a smile on any McLaren enthusiast's face. Providing smiles per gallon today is this 2015 McLaren 650S Spider. With just 17,000 miles on the clock, this car comes with a reported $55,000 in options spanning from the car's exterior to its performance bits.",
        '../assests/images/2015-Mclaren-650S-Spider-Volcano-Yellow-SBM11FAA2FW003829_055-p-800.jpeg'
    ),
    (
        '2010 Audi R8 4.2 QUATTRO Heffner Twin Turbo Black', 2010,
        '$98,999',
        "In 2006, Audi debuted a stunning sports car in the shape of the mid-engined R8. Sporting Audi’s signature 4.2L V8 and later 5.2L V10 engines, the R8 is in fact based on the Lamborghini Gallardo. This beautiful car could be had as a coupe or convertible and went on to pick up many accolades, including ‘Best Handling And Fastest Car In The World of 2007’ by UK-based Autocar magazine, as well as ‘Car Of The Year’ by Playboy Magazine in 2008, among a list of such plaudits. Has an R8 been on your lust list? If so, this 2010 Audi R8 4.2 Quattro Heffner Twin Turbo is a very attractive candidate. Coming from Michigan, it’s done just 33,000 miles so far.",
        '../assests/images/2010-Audi-R8-4.2-QUATTRO-Heffner-Twin-Turbo-Black-WUAAUAFG7AN000930_079-p-800.jpeg'
    ),
(
        '1939 Buick Sport Coupe Green', 1939,
        '$25,999',
        "The three-shield logo which is the instantly recognizable Buick emblem has been used for well over a century. Buick has been in the automobile industry since 1899 when it was founded as the Buick Auto-Vim and Power Company. Buick was the company that established General Motors and had then become the luxury option of GM. In 1936 Buick introduced the Buick Special, a full-size car. The Buc Special continued intermittently until 1996 in various forms. Up for grabs is a truly classic car, a 1939 Buick Special Series 40 Sport Coupe model with an elegant restomod and just 37,000 miles on the clock.",
        '../assests/images/1939-Buick-Sport-Coupe-Green-33443952_083.jpg'
    ),
(
        '2020 Ferrari 488 Pista Coupe Alluminio Opaco', 2020,
        '$469,999',
        "Driving a Ferrari is a special occasion regardless of how long you have owned one. The history and art behind each car are what sparks interest, and many turned necks as you drive along. With the performance wars in full swing, this 2020 Ferrari 488 Pista Coupe that we have on sale with 12,200 miles on the clock can be your way of dwelling in history and having the performance to make you smile broadly each time you tap the throttle.",
        '../assests/images/2020-Ferrari-488-Pista-Coupe-Alluminio-Opaco-ZFF90HLA5L0249135_093-p-800.jpeg'
    ),
(
        'Lamborghini Huracan Coupe Grigio Lynx', 2017,
        '$259,999',
        "When you’ve released a hit that’s become a cult favorite and one of your best-selling cars of all time, a follow-up is a Herculean task. This was exactly what Lamborghini faced when the time came to replace the Gallardo, which ran for ten years and still remains Lamborghini’s all-time sales leader. What the Sant’Agata squad came up with was the Huracan, which means Hurricane, and is also named after a fighting bull. Still in production, the Huracan is a force to be reckoned with (pun intended). This 2018 Lamborghini Huracan Coupe is one way to enter Lamborghini ownership, and a fine example with just 11,000 miles on it since it charged through the factory gates four years ago.",
        '../assests/images/2018-Lamborghini-Huracan-Coupe-Grigio-Lynx-ZHWUC2ZF7JLA10515_070-p-800.jpeg'
    );
SELECT *
FROM emporium_db.cars;