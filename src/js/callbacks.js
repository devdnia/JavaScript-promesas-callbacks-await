

const heroes ={
    capi: {
        nombre: 'Capitán América',
        poder : 'Aguantar inyecciones sin morir', 
    },
    iron: {
        nombre: 'Ironman',
        poder : 'Absurda cantidad de dinero', 
    },
    spider: { 
        nombre: 'Spiderman',
        poder : 'La mejor reacción alérgica a las picaduras de araña', 
    }
}



export const buscarHeroe = ( id, callback ) =>{

    const heroe = heroes[ id ];

    ( heroe ) 
        ? callback( null, heroe)
        : callback( `No existe un héroe con el id ${ id }` );
    

}