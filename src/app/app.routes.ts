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
        path: "**",
        component:NotFoundComponent
    }

];

//object of component link
