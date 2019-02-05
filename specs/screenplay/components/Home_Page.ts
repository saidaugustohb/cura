import { by } from 'protractor';
import { Target, Text } from 'serenity-js/protractor';

export class HomePage {
    static Button_Make_Appointment=Target.the('button make appointment').located(by.id('btn-make-appointment'));
    static Input_User=Target.the('input user').located(by.id('txt-username'));
    static Input_Pass=Target.the('input password').located(by.id('txt-password'));
    static Button_Login=Target.the('button login').located(by.id('btn-login'));
}