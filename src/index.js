import './styles.css';
// import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas';
// import { buscarHeroe, buscarHeroeAsync } from './js/promesas';
import { obtenerHeroesArr, obtenerHeroesAwait, heroesCiclo, heroeIfAwait } from './js/await';


// promesaLenta.then( console.log );
// promesaMedia.then( mensaje => console.log( mensaje ) );
// promesaRapida.then( console.log );

// Promise.race( [ promesaLenta, promesaMedia, promesaRapida ])
//     .then( console.log )
//     .catch( console.warn );


// buscarHeroe( 'capi1' )
//     .then( heroe => console.log( heroe ) )
//     .catch( console.warn );


// buscarHeroeAsync( 'iron2' )
//     .then( console.log )
//     .catch( console.warn ); 

// console.time('await');
// obtenerHeroesArr().then( heroes => {
//     console.table( heroes);
//     
//     console.timeEnd('await');
// });

// console.time('obtenerHeroeAwait');
// obtenerHeroesAwait( 'capi2' )
// .then( heroe => {
//     console.log( heroe);
//     
//     console.timeEnd('obtenerHeroeAwait');
// }).catch( console.warn );

heroesCiclo();

heroeIfAwait('iron');
