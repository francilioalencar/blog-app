import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoAppComponent } from './topo-app.component';

describe('TopoAppComponent', () => {
  let component: TopoAppComponent;
  let fixture: ComponentFixture<TopoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopoAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
