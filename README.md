# Carosello immagini

#### MILESTONE 1

Creo un array che contenga i nomi delle foto da andare ad aggiungere successivamente ad un elemento html `img`.

Creo una variabile contatore che parta da zero, per la successiva assegnazione della classe `active`, e una che contenga l'elemento html `items`. 

Tramite un ciclo che scorre tutti gli elementi dell'array eseguo le seguenti operazioni:

- Crea un elemento `div.item`.
- Crea un elemento `img`.
- Assegna all'immagine la source corrispondente all'elemento in posizione *i* dell'array.
- appende il div creato al div `items`.
- appende l'immagine al div `item`.

Con un if, verificando che *i* sia uguale al contatore, assegno la classe active.

#### MILESTONE 2

Creo due variabili che contengano gli elementi `prev` e `next` per il successivo evento al click.

Creo un altra variabile che con il selettore `queerySelectorAll` prenda tutti i div item.

Faccio un evento al click di prev che, tramite un if, se il contatore è maggiore di zero esegua:

- rimuove all'elemento div in posizione contatore la classe active
- decrementa il contatore
- aggiunge active all'elemento corrente

Ne faccio un altro per next, che faccia l'inverso ovvero:

- se il contatore è minore della lunghezza variabile con i div all'interno - 1:
    -  rimuove all'elemento div in posizione contatore la classe active
    - aumenta il contatore
    - aggiunge active all'elemento corrente
