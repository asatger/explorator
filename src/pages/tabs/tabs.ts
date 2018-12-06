import { Component } from '@angular/core';

import { CockpitPage } from '../cockpit/cockpit';
import { ChecklistPage } from "../checklist/checklist";
import { EnvironmentPage } from "../environment/environment";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ChecklistPage;
  tab2Root = CockpitPage;
  //tab3Root = ContactPage;

  constructor() {

  }
}
