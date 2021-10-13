import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';


import './styles.css';

const hereoId1 = 'capi1'
const hereoId2 = 'spider'

// buscarHeroe( hereoId1, ( err, heroe1 ) => {    
//     // ( err )
//     //  ? console.error( err )
//     //  : console.info( heroe );
//     if ( err ) { return console.error( err )};

//     buscarHeroe( hereoId2, ( err, heroe2 ) => {
 
//         if ( err ) { return console.error( err ) };
 
//         console.log( `Enviado a ${ heroe1.nombre } y ${ heroe2.nombre } a la misión` );
 
//     });
 
// } );

// buscarHeroe( hereoId1 ).then( heroe1 => {
    // console.log( `Enviado a ${ heroe.nombre } a la misión` );
//    buscarHeroe( hereoId2).then( heroe2 =>{
//        console.log( `Enviado a ${ heroe1.nombre } y ${ heroe2.nombre } a la misión` );
//    });
// });

Promise.all( [ buscarHeroe( hereoId1), buscarHeroe( hereoId2) ])
    .then( ([ heroe1, heroe2 ]) => {

    console.log( `Enviado a ${ heroe1.nombre } y ${ heroe2.nombre } a la misión` );

}).catch( err =>{
    alert( err );
}).finally( () =>{
    console.info( 'Se terminó las promesas' );
})

console.log( 'Fin del programa' );