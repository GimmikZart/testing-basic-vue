// creazione blocco vue basico
var app = new Vue({
    el: "#app", //pprende l'elemento nel dom
    data: {
        titolo: "Hello World!" //compila il placeholder
    }
});

// creazione blocco vue con template
var button = new Vue({
    el: "#button", //prende l'elemento nel dom
        data: {
        bottone: "Bottone" //compila il placeholder
    },
     template: "<button> {{bottone}} </bottone> " //sostituisce l'elemento preso con questo template
});


// creazone componente 

//creo il componente a se 
var macchina = Vue.component('macchina', {  // il nome fra virgolette sarà il nome dell'estensione dei tag html da usare 
    template: `<p> {{testo}} </p>
                <h1>ciaoooo</h1>
                <h2>Va beneeeee</h2>
            `, //template html che prenderà il posto del tag 
    data() {
        return {testo: "La macchina va forte."} //sostituzione del pezzo fra graffe
    }
});

//rendo il tag con id "macchina", un elemento riconosciuto da vue
new Vue ({
    el: "#macchina",
});


// creo componente vue che contiene informazioni stile oggetto

var Persona = Vue.component("Persona", {
    template: `
        <div class="persona">
                <h1> {{titolo}} </h1>
                <h1 v-bind:style="colorRed"> {{ user.nome }} </h1>
                <h2> {{ user.cognome }} </h2>
                <h3 v-bind:style="colorGreen"> {{ user.anni }} </h3>
                <h4> {{ user.sesso }} </h4>
                <h1> Si chiama {{ user.tuttoIlNome() }} </h1>
        </div>    `,
    data() {
        return {
            titolo: "Questa è una persona",
            colorRed: "color: red",
            colorGreen: "color: green", 
            user: {
                nome: "Marco",
                cognome:"Rossi",
                anni: "15",
                sesso: "maschio",
                tuttoIlNome: function(){
                    return this.nome + " " + this.cognome
                }
            }
        }
    }
});

new Vue ({
    el: "#persona",
});
