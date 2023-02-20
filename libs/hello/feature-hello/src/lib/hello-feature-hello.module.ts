import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloDomainModule } from '@test/hello/domain';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [CommonModule, HelloDomainModule],
  declarations: [HelloComponent],
  exports: [HelloComponent],
})
export class HelloFeatureHelloModule {}
