import { APP_BASE_HREF } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AgGridModule } from "ag-grid-angular";
import { AgGridService } from "./ag-grid.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GridComponent } from "./grid/grid.component";
import { SearchComponent } from './search/search.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EditComponent } from './edit/edit.component';
import { RemoveComponent } from './remove/remove.component';
import { UploadComponent } from './upload/upload.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { FormsModule } from "@angular/forms";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ErrorModalComponent } from './error-modal/error-modal.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    NgbModule,
    DropDownsModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([GridComponent])
  ],
  declarations: [
    AppComponent,
    GridComponent,
    SearchComponent,
    ToolbarComponent,
    EditComponent,
    RemoveComponent,
    UploadComponent,
    ErrorModalComponent
  ],
  entryComponents: [
    EditComponent,
    UploadComponent,
    RemoveComponent,
    ErrorModalComponent,
  ],  
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AgGridService,{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
