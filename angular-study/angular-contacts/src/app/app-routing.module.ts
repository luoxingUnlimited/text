import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { GlobalInterceptor } from './global.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LayoutComponent } from './layout/layout.component';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

import { TagEditComponent } from './tag-edit/tag-edit.component'
import { TagListComponent } from './tag-list/tag-list.component'
import { TagNewComponent } from './tag-new/tag-new.component'

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/contacts',
  pathMatch: 'full'
},{
  // 当访问contacts的时候，会先把LayoutComponent组件渲染出来，
  // 然后把组件中的children中的path为空的路由组件渲染到LayoutComponent组件中的路由出口<router-outlet></router-outlet>处
  path: 'contacts',
  component: LayoutComponent,
  canActivate: [AuthGuard], // 在导航 contacts 之前会先进入路由守卫
  children: [{
    path: '',
    component: ContactListComponent
  },{
    path: 'new',// 此处路由为'/contacts/new'
    component: ContactNewComponent
  },{
    path: 'edit',
    component: ContactEditComponent
  }]
},{
  path: 'tags',
  component: LayoutComponent,
  canActivate: [AuthGuard],
  children: [{
    path: '',
    component: TagListComponent
  },{
    path: 'new',
    component: TagNewComponent
  },{
    path: 'edit/:id',// 动态路径
    component: TagEditComponent
  }]
},{
  path: 'signin',
  component: SigninComponent
},{
  path: 'signup',
  component: SignupComponent
}]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalInterceptor,
      multi: true
    }]
})
export class AppRoutingModule { }
