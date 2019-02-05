import {Task,PerformsTasks} from 'serenity-js/protractor';
import { Open, Click, Wait, Duration } from 'serenity-js/protractor';
import {HomePage} from '../components/Home_Page';
import {browser} from 'protractor'
export class Start implements Task{

    static browser(){
        return new Start();
    }
    performAs(actor: PerformsTasks): PromiseLike<void>{
        browser.waitForAngularEnabled(false);
        
        return actor.attemptsTo(
            Open.browserOn(''),
            Wait.for(Duration.ofMillis(1000)),
            Click.on(HomePage.Button_Make_Appointment)
        );
    }

    

}