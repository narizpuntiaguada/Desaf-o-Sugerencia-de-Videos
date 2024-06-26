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
let musica = new Reproductor ("https://www.youtube.com/embed/s_O7q9RIep4?si=zN6Y1brAJEFzILdS",iframeMusica);
musica.setInicio(7);
musica.playMultimedia();

let iframePelicula = document.getElementById("peliculas")
let pelicula = new Reproductor ("https://www.youtube.com/embed/xiC2iXTXHxw?si=yxFE12ZvBMJAZ34u",iframePelicula);
pelicula.setInicio(30);
pelicula.playMultimedia();

let iframeSerie = document.getElementById("series")
let serie = new Reproductor ("https://www.youtube.com/embed/rCj-Fb1OmXg?si=1A22Yvk_ihxYgjNq",iframeSerie);
serie.setInicio(10);
serie.playMultimedia();




