
import { Task, PerformsTasks, Enter, Wait, Duration, Click } from 'serenity-js/protractor';
import { HomePage } from '../components/Home_Page'
export class Login implements Task {


    private datos;
    constructor(datos) {
        this.datos = datos;
    }

    Credenciales = function (usuario, clave) {
        this.usuario = usuario;
        this.clave = clave;
        
    }
    performAs(actor: PerformsTasks): PromiseLike<void> {
        var rows = this.datos.hashes();
        //  var user;
        // var pass;
        //rows.forEach(function(row) {
        //  user=row['user'];
        //pass=row['password'];           
        //});
        var credenciales = new Array(Object.keys(rows).length);
        var cont=0;
        rows.forEach(function (row) {
            credenciales[cont] = new Credenciales(row['user'],row['password']);
            cont++;
        });

        return actor.attemptsTo(
            Enter.theValue(credenciales[0].usuario).into(HomePage.Input_User),
            Enter.theValue(credenciales[0].clave).into(HomePage.Input_Pass),
            Click.on(HomePage.Button_Login)

        )

    }

    static withCredentials(datos) {
        return new Login(datos);
    }
}

function Credenciales  (usuario, clave) {
    this.usuario = usuario;
    this.clave = clave;
    
}