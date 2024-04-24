class Multimedia {
    #url;
    constructor(url) {
        this.#url = url;
    }

    get url() {
        return this.#url;
    }
set url(newUrl){
    this.#url = newUrl;
}

    setInicio() {
        alert("Este método es para realziar un cambio en la URL del video");
    }

}

class Reproductor extends Multimedia{
    #id ;
    constructor (url,id){
        super(url);
        this.#id = id;
    }

get id(){
    return this.#id;

}
playMultimedia(){
    cargarVideo.mostrarVideo(this.url,this.#id)


}
setInicio(tiempo){
    let url = this.url
    if (url.includes("?")) {
        url += `&start=${tiempo}`
    } else {
        url += `?start=${tiempo}`
    }
    this.url = url
}

}

//Codigo IIFE    (function () { statements; })(); // funciones que se ejecutan tan pronto como se definen.

let cargarVideo = (() => {
    let insertarVideo = (url,id) => {
        id.setAttribute("src",url);
    }
    return { 
        mostrarVideo:(url,id) => insertarVideo (url,id)
    }
})();

// instanciar
let iframeMusica = document.getElementById("musica")
let musica = new Reproductor ("https://www.youtube.com/embed/T-q9Ww3-F9U",iframeMusica);
musica.setInicio(20);
musica.playMultimedia();

let iframePelicula = document.getElementById("peliculas")
let pelicula = new Reproductor ("https://www.youtube.com/embed/JpUd4BS7yI0",iframePelicula);
pelicula.playMultimedia();

let iframeSerie = document.getElementById("series")
let serie = new Reproductor ("https://www.youtube.com/embed/mXd1zTwcQ18?si=aqlT6mseq08JpX8s",iframeSerie);
serie.playMultimedia();




// url serie : "https://www.youtube.com/embed/mXd1zTwcQ18?si=aqlT6mseq08JpX8s"
// url musica : "https://www.youtube.com/embed/T-q9Ww3-F9U"
// url pelicula :"https://www.youtube.com/embed/JpUd4BS7yI0"





// ERROR
// let cargarVideo = (() => {
//     let insertarVideo = (url,id)=> {
//         id.setAttribute("src",url);
//     }
// return {
//     mostrarVideo:(url.id) => insertarVideo(url,id)
// }

// })();