import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HipsterWebRegionModule } from './region/region.module';
import { HipsterWebCountryModule } from './country/country.module';
import { HipsterWebLocationModule } from './location/location.module';
import { HipsterWebDepartmentModule } from './department/department.module';
import { HipsterWebTaskModule } from './task/task.module';
import { HipsterWebEmployeeModule } from './employee/employee.module';
import { HipsterWebJobModule } from './job/job.module';
import { HipsterWebJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        HipsterWebRegionModule,
        HipsterWebCountryModule,
        HipsterWebLocationModule,
        HipsterWebDepartmentModule,
        HipsterWebTaskModule,
        HipsterWebEmployeeModule,
        HipsterWebJobModule,
        HipsterWebJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HipsterWebEntityModule {}
