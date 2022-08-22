import { NgModule } from '@angular/core';
import { AppBannerComponent } from './components/AppBanner/appbanner.components';
import { AppFooterComponent } from './components/AppFooter/appfooter.components';
import { BmiCalcComponent } from './components/BMICalc/bmi.component';

@NgModule({
    declarations: [AppBannerComponent, AppFooterComponent, BmiCalcComponent],
    exports: [AppBannerComponent, AppFooterComponent, BmiCalcComponent]
})
export class WidgetsModule {

}