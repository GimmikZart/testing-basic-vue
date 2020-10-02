// CREAZIONE BLOCCO VUE BASICO-----------------------------
var app = new Vue({
    el: "#app", //pprende l'elemento nel dom
    data: {
        titolo: "Hello World!" //compila il placeholder
    }
});

// CREAZIONE BLOCCO VUE CON TEMPLATE--------------------------------
var button = new Vue({
    el: "#button", //prende l'elemento nel dom
        data: {
        bottone: "Bottone" //compila il placeholder
    },
     template: "<button> {{bottone}} </bottone> " //sostituisce l'elemento preso con questo template
});


// CREAZONE COMPONENTE-----------------------------------------

//creo il componente a se 
var macchina = Vue.component('macchina', {  // il nome fra virgolette sarà il nome dell'estensione dei tag html da usare 
    template: `
            <p> {{testo}} </p>
                
            `, //template html che prenderà il posto del tag 
    data() {
        return {testo: "La macchina va forte."} //sostituzione del pezzo fra graffe
    }
});

//rendo il tag con id "macchina", un elemento riconosciuto da vue
new Vue ({
    el: "#macchina",
});


// CREO COMPONENTE VUE CHE CONTIENE INFORMAZIONI E MODIFICA STILE HTML--------------------------------

var Persona = Vue.component("Persona", {
    template: `
        <div class="persona">
                <h1> {{titolo}} </h1>
                <h1 v-bind:style="colorBlue"> nome: {{ user.nome }} </h1> <!-- v-bind: permette di manipolare lo stile in html -->
                <h2> cognome: {{ user.cognome }} </h2>
                <h3 v-bind:style="{color: thatColor}">anni: {{ user.anni }} </h3> <!-- una sola parentesi graffa in style permette di sostituire solo il colore invece -->
                <h4>sesso: {{ user.sesso }} </h4>
                <h1> Si chiama {{ user.tuttoIlNome() }} </h1>
        </div>    `,
    data() {
        return {
            titolo: "Questa è una persona",
            colorBlue: "color: blue", /* questo va ad agire sullo style in html */
            thatColor: "red", /* questo va ad agire sullo style in html */
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


/* CREO CONDIZIONI IF ELSE BOOLEANO--------------------------------------------------*/

var Condizionale = Vue.component("Condizionale",{
    template: `
    <p> {{testo}} </p>
        
    `, //template html che prenderà il posto del tag 
    data() {
        return {testo: "La macchina va forte."} //sostituzione del pezzo fra graffe
    }
});

new Vue({
    el: "#ipotesi",
})

/* CREO CONDIZIONI IF ELSE DI TIPO STRINGA--------------------------------------- */

var Stringaif = Vue.component("Stringaif",{
    template: `
        <div>
            <div v-if="type === 'SI'"> <!-- il v-if permette di creare la condizione (in questo caso) di paragone -->
                <h1>Questo è un SI</h1>
            </div>
            <div v-else-if="type === 'NO'"> <!-- il v-else-if permette di creare la condizione ulteriore -->
                <h1>Questo è un NO</h1>
            </div>
            <div v-else-if="type === 'FORSE'"> <!-- il v-else-if permette di creare la condizione ulteriore -->
                <h1>Questo è un FORSE</h1>
            </div>
            <div v-else> <!-- il v-else permette di creare la condizione esclusa  -->
                <h1>Questo NON SI SA</h1>
            </div>
        </div>
    `,
    data() {
        return{
            type: "SI", /* cambiando il valore stringa del parametro, cambierà la reazione nel template */
        }
    }

});

new Vue({
    el: "#StringaIf",
})

/* CREO UN FORM DINAMICO SOSTITUENDO I CONTENUTI, TRAMITE PRESSIONE DI BOTTONI ------------------------*/

var Dinamico = Vue.component('Dinamico', {
    template: `
        <div class="container">
            <form>
                <div>
                    <div v-if="Type === 'username'"> <!-- pongo la condizione che type deve essere uguale a username per mostrare questo tipo di form -->
                        <label> Username </label>
                        <input type="text" placeholder="Enter your username">
                    </div>

                    <div v-else> <!-- pongo in ogni altra condizione, quest'altro tipo di form -->
                        <label> Email </label>
                        <input type="text" placeholder="Enter your email">
                    </div>
                </div>
            </form>
            <button v-on:click="byUsername()"> Username </button> <!-- il comando v-on:click permette di registrare un azione di click sul bottone, in questo caso attiva una funzione -->
            <button v-on:click="byEmail()"> Email </button> <!-- il comando v-on:click permette di registrare un azione di click sul bottone, in questo caso attiva una funzione  -->

        </div>
    
    `,
    data() {
        return {
            Type: "username", /* qua si registra il tipo di dato che servirà alla condizione sopra */
            byUsername() {
                this.Type = "username"; /* questa funzione trasforma il dato "Type" di questa (this) data(), in username */
            },
            byEmail() {
                this.Type = "email"; /* questa funzione trasforma il dato "Type" di questa (this) data(), in email */
            }
        }
    }

})

//rendo il tag con id "dinamico", un elemento riconosciuto da vue
new Vue ({
    el: "#dinamico",
});

