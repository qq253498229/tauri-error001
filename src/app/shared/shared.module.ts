import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';


const THIRD_MODULES: any[] = [
  FormsModule,
  ReactiveFormsModule,
  NzLayoutModule,
  NzTableModule,
  NzGridModule,
  NzDividerModule,
  NzButtonModule,
  NzIconModule,
  NzInputModule,
];
const COMPONENTS: any[] = [];
const DIRECTIVES: any[] = [];
const PIPES: any[] = [];

@NgModule({
  declarations: [
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  imports: [
    CommonModule,
    ...THIRD_MODULES,
  ],
  exports: [
    ...THIRD_MODULES,
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class SharedModule {
}
