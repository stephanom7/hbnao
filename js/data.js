const timelineData = [
  {
    images: [2],
    date: "12 de diciembre, 2024",
    caption: "Este dia nos conocimos en un lugar un poco raro, pero aun asi tengo una foto para que te acuerdes de lo que pasooo jeje", 
    size: "sm"
  },
  {
    images: [3, 4],
    date: "28 de enero, 2025",
    caption: "HOY SALIMOS JUNTOS DEL CEN POR PRIMERA VEEZ y comence a trabajar, todo lo bueno para tii", 
    size: "close"
  },
  {
    images: [5],
    date: "3 de febrero, 2025",
    caption: "Nuestros primeros mensajes por WhatsApp 💬",
    size: "sm"
  },
  {
    images: [6],
    date: "Febrero, 2025",
    caption: "Tuvimos un problema en San Valentín... pero unos días después traté de arreglarlo.",
    size: "sm"
  },
  {
    images: [7],
    date: "18 de febrero, 2025",
    caption: "Con nuestra bebé, revisando que las flores que te di estuvieran bien 🌸",
    size: "sm"
  },
  {
    images: [8],
    date: "26 de febrero, 2025",
    caption: "Molestándonos afuera del CEN... te robaste mi foto jeje",
    size: "sm"
  },
  {
    images: [9],
    date: "7 de marzo, 2025",
    caption: "Nuestra primera salida oficial: fuimos al Condado y jugamos bolos. Un día increíble 🎳",
    size: "sm",
    framed: true
  },
  {
    images: [10],
    date: "22 de marzo, 2025",
    caption: "Nuestra segunda salida, a una discoteca. No tenemos fotos porque nos peleamos jeje.",
    size: "sm"
  },
  {
    images: [11, 12],
    date: "10 de mayo, 2025",
    caption: "Sin planearlo, viniste por primera vez a mi casa. Te presenté a mis hermanas, mis papás... y al más importante: Tobi.",
    size: "sm"
  },
  {
    images: [13],
    date: "28 de mayo, 2025",
    caption: "Me fuiste a ver al trabajo, regresamos juntos, almorzamos y fuimos al inglés. Nos dimos un besito y me fui a mi partido de liga (ganamos por eso 😏).",
    size: "sm"
  },
  {
    images: [14],
    date: "8 de junio, 2025",
    caption: "Te fui a dejar a tu casa y nos paramos cerca del portal para tomarnos fotitos. (no tengo las originales porque no me pasaste pero tengo estaa jeje)",
    size: "sm"
  },
  {
    images: [15],
    date: "19 de junio, 2025",
    caption: "Te fui a dejar de nuevo y nos tomamos fotos para presumir el anillo en tu manita.",
    size: "sm"
  },
  {
    images: [16],
    date: "20 de junio, 2025",
    caption: "Estudiando para el examen del CEN... y nos tomamos esta foto increíble.",
    size: "sm"
  },
  {
    images: [17],
    date: "29 de junio, 2025",
    caption: "El día que compré a nuestro bebé pingüino 🐧",
    size: "sm"
  },
  {
    images: [18],
    date: "5 de julio, 2025",
    caption: "Nos vimos en el Condado para arreglarnos, llevé al Mati. Ese día manejamos tu carrooo y me sorprendi porque tenias full de gasolina JAJAJJA.",
    size: "sm"
  },
  {
    images: [19],
    date: "9 de julio, 2025",
    caption: "Quisimos comprar la camiseta del Rayo, pero solo había de talla mujer jaja.",
    size: "sm"
  },
  {
    images: [20],
    date: "13 de julio, 2025",
    caption: "Te fui a ver donde tus abuelitos y de ahí fuimos a comer sushi con nuestro bebé.",
    size: "sm"
  },
  {
    images: [21],
    date: "16 de julio, 2025",
    caption: "Viniste de nuevo a mi casa y te tomé esta foto increíble, con la gorra con la que nos conocimoos.",
    size: "sm"
  },
  {
    images: [22],
    date: "18 de agosto, 2025",
    caption: "Regresé de la playa, arreglamos nuestras cosas en el CCI y te tomé una foto mientras te hacías una recarga jeje.",
    size: "sm"
  },
  {
    images: [23],
    date: "19 de agosto, 2025",
    caption: "Me arreglaste el desastre en el cabello. Un día increíble aunque sin fotos, así que va esta.",
    size: "sm"
  },
  {
    images: [24, 25],
    date: "22 de agosto, 2025",
    caption: "Tu cumpleaños. Pasaste el día en mi casa y fue lo más increíble del mundo.",
    size: "sm"
  },
  {
    images: [26],
    date: "23 de agosto, 2025",
    caption: "Te quedaste todo el día en mi casa, hicimos todo juntos y en la noche fuimos a celebrarlo.",
    size: "sm"
  },
  {
    images: [27],
    date: "2 de septiembre, 2025",
    caption: "Viniste a mi casa a seguir estudiando para tu examen y me ayudaste a poner mi tele jeje.",
    size: "sm"
  },
  {
    images: [28],
    date: "5 de septiembre, 2025",
    caption: "Estaba jugando fútbol y cuando terminé vi tu foto. Me quedé sonriendo varios minutos viéndola. Me encantó.",
    size: "sm"
  },
  {
    images: [29, 30, 31],
    date: "7 de septiembre, 2025",
    caption: "Te acompañé a hacer cosas de mujer. La primera vez que te vi con uñas postizas — me encantaron demasiado, te lo prometo. Y nos tomamos la mejor foto que tenemos juntos.",
    size: "sm"
  },
  {
    images: [32, 33],
    date: "8 de septiembre, 2025",
    caption: "Fuimos al portal a ver una película y tenías al Rayo hermoso en tus manos.",
    size: "sm"
  },
  {
    images: [34, 35, 36, 37, 38, 39, 40, 41],
    date: "13 y 14 de septiembre, 2025",
    caption: "Mención mega especial: el día que imaginamos vivir juntos, aunque fuera solo por un día.",
    size: "sm",
    special: true
  },
  {
    images: [42, 43, 44],
    date: "22, 24 y 26 de septiembre, 2025",
    caption: "Cuando ya estábamos yendo juntos al gimnasio 💪",
    size: "sm"
  },
  {
    images: [45],
    date: "28 de septiembre, 2025",
    caption: "Nos vimos en el CCI y me acompañaste a comprar una gorra... y te la pusiste jeje.",
    size: "sm"
  },
  {
    images: [46],
    date: "10 de octubre, 2025",
    caption: "Fuimos a una mega exposición de no sé qué cosas jaja, regresamos full tarde y nos tomamos esta foto hermosa.",
    size: "sm"
  },
  {
    images: [47],
    date: "3 de noviembre, 2025",
    caption: "Pasaron cositas jeje, pero después conocí a tu familia y estábamos bien nerviosos.",
    size: "sm"
  },
  {
    images: [48],
    date: "24 de noviembre, 2025",
    caption: "Íbamos a entrenar 'de mentira' y terminamos haciendo de todo menos entrenar. Te fui a dejar y me llevé a nuestro bebé a mi casa.",
    size: "sm"
  },
  {
    images: [49],
    date: "27 de noviembre, 2025",
    caption: "Nos vimos en el CCI y comimos. Tomaste captura de la foto que te mandé para decirme qué querías almorzar jeje.",
    size: "sm"
  },
  {
    images: [50],
    date: "6 de diciembre, 2025",
    caption: "Fuimos juntos a las Fiestas de Quito.",
    size: "sm"
  },
  {
    images: [51],
    date: "25 de diciembre, 2025",
    caption: "Esta foto ni siquiera es nuestra jaja, la saqué de Google, porque dijimos que estábamos en un lugar y terminamos en uno muy distinto.",
    size: "sm"
  },
  {
    images: [52],
    date: "11 de enero, 2026",
    caption: "Fui a tu casa y pasamos casi toda la mañana juntos.",
    size: "sm"
  },
  {
    images: [53],
    date: "29 de enero, 2026",
    caption: "Nos vimos para irnos a un lugar súper chévere y me dejaste un regalito jeje.",
    size: "sm"
  },
  {
    images: [54],
    date: "6 de febrero, 2026",
    caption: "Pasaste el semestre y recibiste un regalo que te gustó mucho jiji.",
    size: "sm"
  },
  {
    images: [55],
    date: "13 de abril, 2026",
    caption: "Estaba armando una computadora y, aunque no sabías nada del tema, me acompañaste a todo lado.",
    size: "sm"
  },
  {
    images: [56, 57],
    date: "19 de abril, 2026",
    caption: "Viniste a verme jugar fútbol y pudimos estar juntitos todo el día, comimos sushi también.",
    size: "sm"
  },
  {
    images: [58, 59],
    date: "26 de abril, 2026",
    caption: "Fuimos por primera vez a un museo y encima a uno de carros. Increíble.",
    size: "sm"
  },
  {
    images: [60],
    date: "28 de abril, 2026",
    caption: "Fui a tu casa y jugaba liga jeje, fue de lo mejor del mundo ese día.",
    size: "sm"
  },
  {
    images: [61],
    date: "3 de mayo, 2026",
    caption: "Hiciste rollitos de canela y fueron lo más rico del mundo.",
    size: "sm"
  },
  {
    images: [62, 63],
    date: "4 de mayo, 2026",
    caption: "Volví de la playa y compramos el álbum del Mundial. Te amo.",
    size: "sm"
  },
  {
    images: [64],
    date: "29 de mayo, 2026",
    caption: "Fuimos juntos al dentista y pegamos los cromos en el álbum de Soy Luna.",
    size: "sm"
  },
  {
    images: [65],
    date: "31 de mayo, 2026",
    caption: "Te vi en la iglesia sin saber nada de nada jaja. Te amo.",
    size: "sm"
  },
  {
    images: [66],
    date: "7 de junio, 2026",
    caption: "Te mentí: ya me habían quitado los brackets y no te dije nada. Llegué con una hamburguesa porque tenías hambre y me viste... dos minutitos.",
    size: "sm"
  },
  {
    images: [67],
    date: "9 de junio, 2026",
    caption: "Fuimos a tu casa y grabamos muchos TikToks.",
    size: "sm"
  },
  {
    images: [68],
    date: "12 de junio, 2026",
    caption: "Me fui a trabajar a Cuenca y vi un vestido que era literalmente tú.",
    size: "sm"
  },
  {
    images: [69],
    date: "29 de junio, 2026",
    caption: "Te pusiste los lentes y te viste mil de millones.",
    size: "sm"
  },
  {
    images: [70, 71, 72, 73, 74],
    date: "26 de julio, 2026",
    caption: "Fuimos a una discoteca antes de mi operación y te veías guapísima.",
    size: "sm"
  },
  {
    images: [75],
    date: "28 de julio, 2026",
    caption: "Probablemente la fecha más importante de mi vida: mi primera cirugía. Verte ahí fue lo más alentador.",
    size: "sm"
  },
  {
    images: [76],
    date: "10 de agosto, 2026",
    caption: "Verte en mi casa después de mi operación, estudiando para tus exámenes, fue muy bonito porque seguías a mi lado.",
    size: "sm"
  },
  {
    images: [77, 78, 79],
    date: "Sin fecha exacta",
    caption: "Fotitos que no tienen mucha fecha, pero son especiales porque son de las primeras.",
    size: "sm"
  }
];

const coverData = {
  image: 1,
  title: "Feliz cumpleañitos mi amor 🎀",
  subtitle: "Eres lo mejor y te mereces lo mejor, si estas con alguien que sabe programar no esperes menos :) Gracias por permitirme estar otro dia en tu vida y un año más celebrando a la mujer mas importante en mi vida. Te amoooo" 
};