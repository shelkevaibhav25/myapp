import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { VariableComponent } from './components/variable/variable.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HideShowNgIfComponent } from './components/hide-show-ng-if/hide-show-ng-if.component';
import { CategoryComponent } from './components/category/category.component';
import { ReactiveFormAdvComponent } from './components/reactive-form-adv/reactive-form-adv.component';
import { FormArray } from '@angular/forms';
import { FormArrayComponent } from './form-array/form-array.component';
import { NgTemplateContainerComponent } from './components/ng-template-container/ng-template-container.component';
import { RxJsComponent } from './components/rx-js/rx-js.component';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';
import { SubBehComponent } from './components/sub-beh/sub-beh.component';
import { CounterComponent } from './components/counter/counter.component';
import { SingalComponent } from './components/singal/singal.component';
import { SignalAdvComponent } from './components/signal-adv/signal-adv.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'data-binding',
        pathMatch: 'full'

    },
    {
        path:'adminpage',
        component: AdminComponent

    },
    {
        path:'data-binding',
        component: DataBindingComponent
    },
    {
        path:'dataTypes',
        component: VariableComponent
    },
    {
        path:'hideShow',
        component: HideShowNgIfComponent
    },
    {
        path:'category',
        component: CategoryComponent
    },
    {
        path:'reactive-adv',
        component: ReactiveFormAdvComponent
    },
    {
        path:'formArray',
        component: FormArrayComponent
    },
    {
        path:'ngTemplateCotainer',
        component: NgTemplateContainerComponent
    },
    {
        path:'RxJs',
        component: RxJsComponent
    },
    {
        path:'RxJs-operator',
        component: RxjsOperatorsComponent
    },
    {
        path:'SubBeh',
        component: SubBehComponent
    },
    {
        path:'counter',
        component: CounterComponent
    },
    {
        path:'singnal',
        component: SingalComponent
    },
    {
        path:'singnalAdv',
        component: SignalAdvComponent
    },
    {
        path: "**",
        component:NotFoundComponent
    }

];

//object of component link
