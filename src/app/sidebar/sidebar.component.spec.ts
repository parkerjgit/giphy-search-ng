import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
} from '@angular/material';

// Components
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      imports: [

        // Material
        BrowserAnimationsModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,

      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
