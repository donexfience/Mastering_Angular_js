import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatereferencevariableComponent } from './templatereferencevariable.component';

describe('TemplatereferencevariableComponent', () => {
  let component: TemplatereferencevariableComponent;
  let fixture: ComponentFixture<TemplatereferencevariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatereferencevariableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplatereferencevariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
