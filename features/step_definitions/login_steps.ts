import {Actor,BrowseTheWeb} from 'serenity-js/protractor';
import {protractor} from 'protractor';
import {Start} from '../../specs/screenplay/tasks/start';
import {Login} from '../../specs/screenplay/tasks/login';
//import { expect } from '../../../protractor/tutorial-from-scripts-to-serenity/spec/expect';
import { MakeAppointment } from '../../specs/screenplay/components/Make_Appointment';

import chai = require('chai');
import chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const expect = chai.expect;

export = function loginSuccessful(){
 

    this.setDefaultTimeout(50 * 1000);
    let actor:Actor;
  
    this.Given(/^that (.*) is on the home page$/, (actorName: string)=> {
      //protractor.browser.close();
     // protractor.browser=protractor.browser.forkNewDriverInstance();
     // protractor.browser.waitForAngularEnabled(false);
     protractor.browser.manage().deleteAllCookies();
       actor=Actor.named(actorName).whoCan(BrowseTheWeb.using(protractor.browser));
       return actor.attemptsTo(
           Start.browser()
           );
      });

      this.When(/^his enter your credentials$/, (table)=> {
        return actor.attemptsTo(
          Login.withCredentials(table)
        )
      });

      this.Then(/^he will see the title of (.*)$/, function (title:string) {
      // return expect(actor.toSee(MakeAppointment.Title_Make_Appointment)).eventually.deep.equal(title);
      
      return expect(actor.toSee(MakeAppointment.Title_Make_Appointment)).eventually.deep.include('Make');
      });

}