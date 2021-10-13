import { buscarHeroeAsync, buscarHeroe } from './promesas';

const heroesIds      = [ "capi", "iron", "spider" ];
const heroesPromesas = heroesIds.map ( buscarHeroe );
// const heroesPromesas = heroesIds.map ( id => buscarHeroe( id ) );

export const obtenerHeroesArr = async () => {

    // const herroesArr = [];
 
    // for (const id of heroesIds) {
     
    //    herroesArr.push( buscarHeroe( id ) );

    // }
 
    // return await Promise.all( herroesArr );

    return await Promise.all( heroesIds.map ( buscarHeroe ) );
};



export const obtenerHeroesAwait = async ( id ) => {

    try {
        const heroe = await buscarHeroeAsync( id );
        return heroe;

    } catch (err) {
        console.log('CATCH!!!');
        // throw err;
        return{
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };
    }

}

export const heroesCiclo = async () =>{

    console.time( 'HeroesCiclo' );

    // const heroes = await Promise.all( heroesPromesas );
    // heroes.forEach( console.log );

    for await ( const heroe of heroesPromesas ){
        console.log(heroe);
    }

    console.timeEnd( 'HeroesCiclo' );
}

export const heroeIfAwait = async( id ) =>{

    if ( (await buscarHeroeAsync(id)).nombre  === 'Ironman') {
        console.log('Es el mejor de todos');
    }else{
        console.log('Naaa');
    }
}