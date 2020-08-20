import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from './info-card/info-card.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { GridModule } from "carbon-components-angular";


import { PersonFavoriteModule,GlobeModule,ApplicationModule } from '@carbon/icons-angular';
import { UserAvatarModule } from '@carbon/icons-angular';
import { AppSwitcherModule } from '@carbon/icons-angular';

@NgModule({
	declarations: [InfoCardComponent, InfoSectionComponent],
	imports: [
		CommonModule,
		GridModule,
		PersonFavoriteModule,
		GlobeModule,
		ApplicationModule
	],
	exports:  [InfoCardComponent, InfoSectionComponent]
})

export class InfoModule {}
