import {Target,Text} from 'serenity-js/protractor'
import {by} from 'protractor'
export class MakeAppointment{
static Title_Make_Appointment=Text.of(Target.the('Title Make Appointment').located(by.xpath('//h2')));
}