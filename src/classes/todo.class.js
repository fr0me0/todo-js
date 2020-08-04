export class Todo {

    static fromJson( { id, tarea, completado, creado } ){

        const tempTodo = new Todo( tarea );
        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;

    }

    constructor( tarea ){
//      1- Se recibirá el parámetro
        this.tarea = tarea;
//      2- Luego de recibir el parámetro se creara:
        this.id         = new Date().getTime();
        this.completado = false;
        this.creado     = new Date();

    }

    imprimirClase(){

        console.log(`${ this.tarea } - ${ this.id }`);

    }

}

