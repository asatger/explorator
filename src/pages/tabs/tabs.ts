import { Component } from '@angular/core';

import { CockpitPage } from '../cockpit/cockpit';
import { ChecklistPage } from "../checklist/checklist";
import { AssistancePage } from '../assistance/assistance';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ChecklistPage;
  tab2Root = CockpitPage;
  tab3Root = AssistancePage;

  constructor() {

  }
}
